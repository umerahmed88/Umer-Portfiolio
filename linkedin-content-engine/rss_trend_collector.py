#!/usr/bin/env python3
"""Collect RSS items for a KSA/GCC LinkedIn content workflow.

This script intentionally uses public RSS/news feeds instead of scraping LinkedIn.
It creates a CSV of content ideas and includes a ready-to-paste ChatGPT prompt
for each item.
"""

from __future__ import annotations

import argparse
import csv
import email.utils
import html
import json
import re
import sys
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Iterable

BASE_DIR = Path(__file__).resolve().parent
DEFAULT_SOURCES = BASE_DIR / "sources.json"
DEFAULT_OUTPUT = BASE_DIR / "generated" / "linkedin_ideas.csv"


@dataclass(frozen=True)
class Feed:
    name: str
    region: str
    topic: str
    url: str


@dataclass(frozen=True)
class Item:
    source: str
    region: str
    topic: str
    title: str
    url: str
    published: str
    summary: str


def strip_html(value: str) -> str:
    text = re.sub(r"<[^>]+>", " ", value or "")
    text = html.unescape(text)
    text = re.sub(r"\s+", " ", text).strip()
    return text


def parse_date(value: str) -> str:
    if not value:
        return ""
    try:
        parsed = email.utils.parsedate_to_datetime(value)
        if parsed.tzinfo is None:
            parsed = parsed.replace(tzinfo=timezone.utc)
        return parsed.astimezone(timezone.utc).isoformat(timespec="seconds")
    except (TypeError, ValueError):
        return strip_html(value)


def load_feeds(path: Path) -> list[Feed]:
    data = json.loads(path.read_text(encoding="utf-8"))
    return [Feed(**feed) for feed in data["feeds"]]


def fetch_url(url: str, timeout: int) -> bytes:
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (compatible; LinkedInContentEngine/1.0; +https://example.com)"
        },
    )
    with urllib.request.urlopen(request, timeout=timeout) as response:
        return response.read()


def text_from_child(node: ET.Element, names: Iterable[str]) -> str:
    for name in names:
        child = node.find(name)
        if child is not None and child.text:
            return child.text
    return ""


def parse_feed(feed: Feed, xml_bytes: bytes, limit: int) -> list[Item]:
    root = ET.fromstring(xml_bytes)
    items: list[Item] = []

    # RSS 2.0
    for node in root.findall(".//channel/item")[:limit]:
        title = strip_html(text_from_child(node, ["title"]))
        url = strip_html(text_from_child(node, ["link", "guid"]))
        published = parse_date(text_from_child(node, ["pubDate", "published", "updated"]))
        summary = strip_html(text_from_child(node, ["description", "summary"]))
        if title and url:
            items.append(Item(feed.name, feed.region, feed.topic, title, url, published, summary))

    if items:
        return items

    # Atom fallback with namespace wildcard.
    for node in root.findall(".//{*}entry")[:limit]:
        title = strip_html(text_from_child(node, ["{*}title", "title"]))
        url = ""
        for link in node.findall("{*}link"):
            href = link.attrib.get("href")
            if href:
                url = href
                break
        published = parse_date(text_from_child(node, ["{*}published", "{*}updated", "published", "updated"]))
        summary = strip_html(text_from_child(node, ["{*}summary", "{*}content", "summary", "content"]))
        if title and url:
            items.append(Item(feed.name, feed.region, feed.topic, title, url, published, summary))

    return items


def make_prompt(item: Item) -> str:
    summary = item.summary[:650]
    return (
        "You are my LinkedIn content strategist for Saudi Arabia, UAE, and the Middle East. "
        "Turn this news item into one useful LinkedIn post for professionals in KSA/GCC. "
        "Return: trend summary, why it matters, 5 hooks, one post under 180 words, "
        "3-5 hashtags, a Canva visual idea, and a final question. Do not invent facts.\n\n"
        f"Source: {item.source}\n"
        f"Region: {item.region}\n"
        f"Topic: {item.topic}\n"
        f"Title: {item.title}\n"
        f"URL: {item.url}\n"
        f"Summary: {summary}"
    )


def collect(feeds: list[Feed], limit: int, timeout: int) -> tuple[list[Item], list[str]]:
    all_items: list[Item] = []
    warnings: list[str] = []

    for feed in feeds:
        try:
            xml_bytes = fetch_url(feed.url, timeout)
            all_items.extend(parse_feed(feed, xml_bytes, limit))
        except (urllib.error.URLError, TimeoutError, ET.ParseError, ValueError) as exc:
            warnings.append(f"Could not read {feed.name} ({feed.url}): {exc}")

    seen: set[str] = set()
    unique_items: list[Item] = []
    for item in all_items:
        key = item.url or item.title
        if key in seen:
            continue
        seen.add(key)
        unique_items.append(item)

    return unique_items, warnings


def write_csv(items: list[Item], output: Path) -> None:
    output.parent.mkdir(parents=True, exist_ok=True)
    with output.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(
            handle,
            fieldnames=[
                "collected_at_utc",
                "source",
                "region",
                "topic",
                "published",
                "title",
                "url",
                "summary",
                "status",
                "chatgpt_prompt",
            ],
        )
        writer.writeheader()
        collected_at = datetime.now(timezone.utc).isoformat(timespec="seconds")
        for item in items:
            writer.writerow(
                {
                    "collected_at_utc": collected_at,
                    "source": item.source,
                    "region": item.region,
                    "topic": item.topic,
                    "published": item.published,
                    "title": item.title,
                    "url": item.url,
                    "summary": item.summary,
                    "status": "Idea",
                    "chatgpt_prompt": make_prompt(item),
                }
            )


def main() -> int:
    parser = argparse.ArgumentParser(description="Collect KSA/GCC RSS items for LinkedIn content ideas.")
    parser.add_argument("--sources", type=Path, default=DEFAULT_SOURCES, help="Path to sources JSON file.")
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT, help="CSV output path.")
    parser.add_argument("--limit", type=int, default=5, help="Maximum items to collect per feed.")
    parser.add_argument("--timeout", type=int, default=15, help="Request timeout in seconds.")
    args = parser.parse_args()

    feeds = load_feeds(args.sources)
    items, warnings = collect(feeds, args.limit, args.timeout)
    write_csv(items, args.output)

    for warning in warnings:
        print(f"WARNING: {warning}", file=sys.stderr)

    print(f"Collected {len(items)} items into {args.output}")
    return 0 if items else 1


if __name__ == "__main__":
    raise SystemExit(main())
