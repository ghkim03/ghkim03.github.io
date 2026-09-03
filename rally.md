---
layout: default
title: "Rally"
permalink: /projects/rally/
---

# 🏁 Rally

[← Back to home](/)

*Competition and contest recommendation platform for college students*

- **Frontend:** SvelteKit, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express, Supabase (PostgreSQL), Redis, Resend API, Sharp
- **Infra:** Render (CI/CD), Firebase (hosting)

## Overview

Rally helps college students find and keep track of competitions and contests that match their major and interests. I built it to fix the hassle of hunting down relevant competitions for career development. The frontend and backend live in separate repositories, with a CI/CD pipeline that deploys automatically on every push.

## Key features

**Major-based recommendations**
- Surfaces competitions most relevant to a user's chosen major, with a range of filters.

**Upload and management**
- When an admin uploads competition info, the app runs **OCR → AI analysis → automatic structuring**, parsing links, dates, organizers, descriptions, and contacts into JSON.

**User convenience**
- Personal subscriptions, plus email notifications (via Resend) when a competition is posted in a subscribed category.

**Operational efficiency**
- Data stored in Supabase (PostgreSQL), with Redis caching for fast reads and Sharp for image compression and optimization.

## Tech stack

**Frontend** — SvelteKit, TypeScript, Tailwind CSS, Sveltestrap, and the Gemini API for extracting competition details after OCR.

**Backend** — Node.js + Express (REST API), Supabase (PostgreSQL), Redis (caching), Resend (email), Sharp (image optimization), Multer (uploads).

**DevOps / Infra** — Render (deployment and CI/CD), Firebase Hosting (static assets), GitHub (version control).

## Links

- Website: [rally-qp4w.onrender.com](https://rally-qp4w.onrender.com/)
- GitHub: [Frontend](https://github.com/wagyu1001/Rally) · [Backend](https://github.com/wagyu1001/Servey)

<!-- TODO: add screenshots — save images into /assets/ and reference them here, e.g. ![Rally](/assets/rally-1.png) -->
