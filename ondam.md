---
layout: default
title: "Ondam"
title_ko: "Ondam"
permalink: /projects/ondam/
description: "Ondam, an AI travel planner for Jeollabuk-do built on public tourism data."
---

<div lang="en" markdown="1" class="split">

<div class="split-aside" markdown="1">

# Ondam

An AI travel planner for Jeollabuk-do built on public tourism data.
{: .lede}

- **Period** Jul 2025
- **Stack** SvelteKit, TypeScript, Vite, Node.js, Express, Google Gemini API, Public Data Portal API
- **Infra** Render (CI/CD), Firebase Hosting
- **Link** [GitHub](https://github.com/wagyu1001/Ondam)
{: .facts}

</div>
<div class="split-main" markdown="1">

## Overview

I built Ondam for the Honam IS Coding Challenge at the Jeonju ICT Innovation Square. A user enters the kind of trip they want, the AI drafts an itinerary for Jeollabuk-do, and the user can then edit it however they like.

## Features

- **Itinerary generation.** The Gemini API writes a plan that fits the user's travel style.
- **Editable plans.** Users can change anything in the AI's draft.
- **Current public data.** Tourism information for the region comes from the Public Data Portal API at request time, so plans reflect up-to-date listings.

## Implementation

Place information in each plan comes from four Public Data Portal APIs for Jeollabuk-do: tourist attractions, tourism information by category, restaurants by area, and restaurants by theme. The backend is Node.js with Express, using Helmet for security headers, Morgan for request logging, CORS for cross-origin requests, and dotenv for configuration.

</div>
</div>

<div lang="ko" markdown="1" class="split">

<div class="split-aside" markdown="1">

# Ondam

전북 관광 공공데이터를 활용한 AI 여행 일정 생성 서비스
{: .lede}

- **기간** 2025.07
- **기술** SvelteKit, TypeScript, Vite, Node.js, Express, Google Gemini API, 공공데이터포털 API
- **인프라** Render (CI/CD), Firebase Hosting
- **링크** [GitHub](https://github.com/wagyu1001/Ondam)
{: .facts}

</div>
<div class="split-main" markdown="1">

## 개요

전주 ICT이노베이션스퀘어의 호남 IS 코딩 챌린지에 참가하며 만든 전북 여행 일정 서비스입니다. 사용자가 원하는 여행 테마를 입력하면 AI가 일정 초안을 만들고 사용자는 이를 자유롭게 고칠 수 있습니다.

## 주요 기능

- **AI 일정 생성:** Gemini API가 사용자의 여행 스타일에 맞춘 일정을 만듭니다.
- **일정 편집:** AI가 만든 초안을 사용자가 원하는 대로 수정할 수 있습니다.
- **실시간 공공데이터:** 공공데이터포털 API로 최신 전북 관광 정보를 받아 일정에 반영합니다.

## 구현

공공데이터포털의 전북 관광지, 분류별 관광 정보, 지역별 음식점, 테마별 음식점 API 네 가지를 묶어 일정에 들어갈 장소 정보를 구성했습니다. 백엔드는 Node.js와 Express로 만들었고 Helmet, Morgan, CORS, dotenv로 보안 헤더, 요청 로그, 교차 출처 요청, 환경 변수를 관리했습니다.

</div>
</div>
