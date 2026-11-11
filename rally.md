---
layout: default
title: "Rally"
title_ko: "Rally"
permalink: /projects/rally/
description: "Rally, a platform where university students find and subscribe to competitions and contests in their field."
---

<div lang="en" markdown="1">

# Rally

A platform where university students find and subscribe to competitions and contests in their field.
{: .lede}

- **Period** Jul – Aug 2025
- **Frontend** SvelteKit, TypeScript, Tailwind CSS, Sveltestrap
- **Backend** Node.js, Express, Supabase (PostgreSQL), Redis, Resend, Sharp, Firebase Authentication
- **AI** Google Cloud Vision (OCR), Google Gemini API
- **Infra** Render (CI/CD), Firebase Hosting, GitHub Actions
- **GitHub** [frontend](https://github.com/wagyu1001/Rally), [backend](https://github.com/wagyu1001/Servey)
{: .facts}

## Overview

Rally helps university students find competitions and contests that match their major and interests, and keep track of them. I built it because finding relevant competitions for career preparation meant checking many scattered sources by hand. The frontend and backend live in separate repositories, and every push deploys automatically.

## Features

- **Recommendations by major.** Competitions related to the user's major come first, with filters for dates and other criteria.
- **AI-assisted posting.** When an administrator uploads a competition poster, Google Cloud Vision extracts the text and Gemini turns it into structured JSON: link, schedule, organizer, description, and contact.
- **Subscriptions.** When a new competition appears in a category a user follows, Rally sends an email through Resend.

## Backend design

- Data is stored in Supabase (PostgreSQL). Images are compressed with Sharp before upload to Supabase Storage.
- Frequently requested lists are cached in Redis for 60 seconds, and the related cache entries are cleared whenever the data changes.
- A node-cron job runs every day at midnight (Korea time) and removes competitions whose deadlines have passed.
- Helmet sets security headers. Rate limits allow 100 requests per 15 minutes on the general API and 20 per 15 minutes on the AI endpoints.
- Firebase Authentication handles sign-in.

</div>

<div lang="ko" markdown="1">

# Rally

대학생을 위한 공모전·대회 정보 구독 플랫폼
{: .lede}

- **기간** 2025.07 – 2025.08
- **프론트엔드** SvelteKit, TypeScript, Tailwind CSS, Sveltestrap
- **백엔드** Node.js, Express, Supabase (PostgreSQL), Redis, Resend, Sharp, Firebase Authentication
- **AI** Google Cloud Vision (OCR), Google Gemini API
- **인프라** Render (CI/CD), Firebase Hosting, GitHub Actions
- **GitHub** [프론트엔드](https://github.com/wagyu1001/Rally), [백엔드](https://github.com/wagyu1001/Servey)
{: .facts}

## 개요

대학생이 자신의 전공과 관심사에 맞는 공모전과 대회를 찾고 관리할 수 있도록 만든 플랫폼입니다. 진로 준비에 필요한 대회 정보를 일일이 찾아다니는 불편을 줄이려고 시작했습니다. 프론트엔드와 백엔드를 별도 저장소로 나누었고 푸시할 때마다 자동으로 배포되도록 CI/CD를 구성했습니다.

## 주요 기능

- **전공 기반 추천:** 사용자가 고른 전공과 관련된 대회를 우선 보여 주고 기간 등 여러 조건으로 필터링할 수 있습니다.
- **AI 기반 등록:** 관리자가 대회 포스터 이미지를 올리면 Google Cloud Vision OCR로 텍스트를 추출하고 Gemini가 링크, 일정, 주최, 설명, 연락처를 JSON으로 구조화합니다.
- **구독 알림:** 사용자가 구독한 분야에 새 대회가 올라오면 Resend로 이메일을 보냅니다.

## 백엔드 설계

- 데이터는 Supabase(PostgreSQL)에 저장하고 이미지는 Supabase Storage에 올리기 전에 Sharp로 압축합니다.
- 자주 조회되는 목록은 Redis에 60초간 캐시하고 데이터가 바뀌면 관련 캐시를 지웁니다.
- 매일 자정(한국 시간) node-cron 작업이 마감된 대회를 자동으로 정리합니다.
- Helmet으로 보안 헤더를 설정하고 일반 API는 15분당 100회, AI 분석 API는 15분당 20회로 요청 수를 제한했습니다.
- 인증은 Firebase Authentication으로 처리합니다.

</div>
