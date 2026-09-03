---
layout: default
title: "Questree"
permalink: /projects/questree/
---

# ❔ Questree

[← Back to home](/)

*Tree-structured learning platform built on conversational AI*

- **Frontend:** SvelteKit, TypeScript, CSS
- **Backend:** Node.js, Express, Google Gemini API
- **Infra:** Render (CI/CD), Firebase (hosting)

## Overview

Questree grew out of a team project for a Technology Entrepreneurship course in the first semester of my third year. When you use generative AI to study, follow-up questions pile up at the bottom of the conversation, and you end up scrolling back and forth to keep track of where an idea branched. Questree adds a **horizontal tree map in the top-right corner** so you can see the whole flow of a conversation at a glance.

## Key features

- **AI chat** — natural-language conversation through the Google Gemini API.
- **Tree visualization** — the conversation is drawn as a horizontal tree, making its structure easy to follow.
- **Select-to-ask** — highlight any part of an AI response to instantly spin off a follow-up question.
- **Tab-based navigation** — each question-and-answer thread is managed in its own tab.
- **Responsive design** — works on both mobile and desktop.

## Tech stack

**Frontend** — SvelteKit + TypeScript, with styling in plain CSS.

**Backend** — Node.js + Express as a REST API layer between the frontend and the Gemini API, which handles the core Q&A.

**DevOps / Infra** — Render for CI/CD and automatic deployment of both the server and the client.

## Highlights

- Combined AI chat with a conversational tree UI to make complex exploration paths visible.
- Added select-to-ask follow-ups to support more dynamic, in-depth learning.

## Links

- Website: [questree.onrender.com](https://questree.onrender.com/)
- GitHub: [github.com/wagyu1001/Questree](https://github.com/wagyu1001/Questree)

<!-- TODO: add screenshots — save images into /assets/ and reference them here, e.g. ![Questree](/assets/questree-1.png) -->
