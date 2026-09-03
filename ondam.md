---
layout: default
title: "Ondam"
permalink: /projects/ondam/
---

# 🗺️ Ondam

[← Back to home](/)

*AI travel-planning platform for the Jeollabuk-do region*

- **Frontend:** SvelteKit, TypeScript, CSS
- **Backend:** Node.js, Express, Google Gemini API, Public Data Portal API
- **Infra:** Render (CI/CD), Firebase (hosting)

## Overview

Ondam is a Jeollabuk-do travel-planning platform built for the Honam IS Coding Challenge at the Jeonju ICT Innovation Square. A user enters a travel theme, the AI drafts a matching itinerary, and the user can then adjust it freely.

## Key features

- **AI itinerary generation** — the Gemini API turns a user's travel style into a tailored plan.
- **Editable plans** — users can freely reshape the AI's draft to their own taste.
- **Live public data** — the Public Data Portal API pulls in up-to-date Jeonbuk tourism information in real time.

## Tech stack

**Frontend** — SvelteKit, TypeScript, and Vite for fast builds.

**Backend** — Node.js + Express (REST API), the Google Gemini API for AI, and the Public Data Portal API for data, plus Helmet (security), Morgan (request logging), CORS, and dotenv (config).

## Highlights

- Wove together four different Public Data Portal APIs to build Jeonbuk travel plans that stay up to date in real time.

## Links

- GitHub: [github.com/wagyu1001/Ondam](https://github.com/wagyu1001/Ondam)

<!-- TODO: add screenshots — save images into /assets/ and reference them here, e.g. ![Ondam](/assets/ondam-1.png) -->
