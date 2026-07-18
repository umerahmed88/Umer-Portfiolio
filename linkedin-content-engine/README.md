# LinkedIn Content Engine for KSA / Middle East

This folder sets up a simple, safe content workflow using:

```text
Google Alerts + Feedly + ChatGPT + Canva + Buffer
```

The goal is to help you stay active on LinkedIn, discover fresh KSA/GCC trends, create useful posts, and schedule them consistently without risky LinkedIn scraping or bot automation.

## What is included

- `google-alerts-keywords.csv` — keywords to create in Google Alerts.
- `sources.json` — RSS/news sources for KSA, GCC, and MENA trend monitoring.
- `rss_trend_collector.py` — a Python script that collects latest RSS items into a CSV idea file.
- `content-tracker-template.csv` — Google Sheets template for your content pipeline.
- `buffer-schedule.csv` — recommended weekly Buffer posting schedule in KSA time.
- `chatgpt-prompts.md` — reusable prompts for post drafting, rewriting, roundups, and comments.
- `canva-briefs.md` — specs for reusable LinkedIn visual templates.

## Daily workflow

1. Check Google Alerts and Feedly for KSA/GCC topics.
2. Run the RSS collector if you want automated topic collection.
3. Paste one topic into ChatGPT using `chatgpt-prompts.md`.
4. Edit the post manually so it sounds like you.
5. Create a simple Canva visual if needed.
6. Schedule in Buffer.
7. Reply to comments and manually engage with relevant people.

## Run the RSS collector

From the repo root:

```bash
python3 linkedin-content-engine/rss_trend_collector.py --limit 5
```

This creates:

```text
linkedin-content-engine/generated/linkedin_ideas.csv
```

Each row includes a ready-to-paste ChatGPT prompt for turning that news item into a LinkedIn post.

## Recommended weekly posting plan

| Day | Time KSA | Content type |
| --- | --- | --- |
| Monday | 08:00 | KSA/GCC market insight |
| Tuesday | 12:00 | AI or tech insight |
| Wednesday | 18:00 | Career advice |
| Thursday | 08:00 | Founder/business lesson |
| Friday | 12:00 | Personal reflection |
| Saturday | 18:00 | Weekly Middle East roundup |
| Sunday | 12:00 | Optional light post |

## Safety rules

Automate research, summarization, drafting, scheduling, and reporting. Do not automate LinkedIn scraping, auto-comments, auto-likes, auto-DMs, cookie-based tools, Selenium bots, or proxy-based scraping.
