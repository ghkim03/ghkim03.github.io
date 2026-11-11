---
layout: default
title: "Questree"
title_ko: "Questree"
permalink: /projects/questree/
description: "Questree, a learning tool that lays out a conversation with an AI model as a tree."
---

<div lang="en" markdown="1" class="split">

<div class="split-aside" markdown="1">

# Questree

A learning tool that lays out a conversation with an AI model as a tree.
{: .lede}

- **Period** 2025
- **Stack** SvelteKit, TypeScript, CSS, Node.js, Express, Google Gemini API
- **Infra** Render (CI/CD), Firebase Hosting
- **Link** [GitHub](https://github.com/wagyu1001/Questree)
{: .facts}

</div>
<div class="split-main" markdown="1">

## Overview

Questree started as a team project in a Technology Entrepreneurship course in the spring semester of my third year. When you study with a generative AI model, follow-up questions keep piling up at the bottom of the chat, and you end up scrolling back and forth to find where a line of thought branched off. Questree puts a horizontal tree map in the top-right corner of the screen so the whole conversation is visible at once.

## Features

- **AI chat.** Natural-language Q&A through the Google Gemini API.
- **Tree view.** The conversation is drawn as a horizontal tree that shows how the questions relate.
- **Ask from a selection.** Select part of an answer, or drag it into the input box, to ask a follow-up about that passage.
- **Tabs.** Each question-and-answer thread lives in its own tab.
- **Responsive layout.** Works on mobile and desktop.

## Implementation

The frontend is SvelteKit with TypeScript and plain CSS. A Node.js and Express server sits between the frontend and the Gemini API. In development mode the server returns sample responses instead of calling the API, which kept API usage down while building. Render deploys both the server and the client automatically.

</div>
</div>

<div lang="ko" markdown="1" class="split">

<div class="split-aside" markdown="1">

# Questree

AI와의 대화 흐름을 트리 구조로 보여 주는 학습 도구
{: .lede}

- **기간** 2025
- **기술** SvelteKit, TypeScript, CSS, Node.js, Express, Google Gemini API
- **인프라** Render (CI/CD), Firebase Hosting
- **링크** [GitHub](https://github.com/wagyu1001/Questree)
{: .facts}

</div>
<div class="split-main" markdown="1">

## 개요

3학년 1학기 기술창업론 수업의 팀 프로젝트에서 출발했습니다. 생성형 AI로 공부하다 보면 꼬리 질문이 대화 아래쪽에 계속 쌓이고 어느 지점에서 생각이 갈라졌는지 확인하려고 화면을 위아래로 오가게 됩니다. Questree는 화면 오른쪽 위에 가로 방향 트리 맵을 두어 대화 전체의 흐름을 한눈에 볼 수 있게 했습니다.

## 주요 기능

- **AI 대화:** Google Gemini API로 자연어 질의응답을 처리합니다.
- **트리 시각화:** 대화를 가로 방향 트리로 그려 질문 간의 관계를 보여 줍니다.
- **선택해서 질문하기:** 답변의 일부를 선택하거나 입력창으로 끌어다 놓으면 그 부분에 대한 후속 질문을 바로 만들 수 있습니다.
- **탭 기반 탐색:** 질문과 답변 흐름을 탭별로 나누어 관리합니다.
- **반응형 화면:** 모바일과 데스크톱을 모두 지원합니다.

## 구현

SvelteKit과 TypeScript로 프론트엔드를 만들고 Node.js와 Express 서버가 프론트엔드와 Gemini API 사이를 중계합니다. 개발 모드에서는 API를 호출하지 않고 샘플 응답을 돌려주도록 해 API 사용량을 아꼈습니다. 서버와 클라이언트는 Render로 자동 배포합니다.

</div>
</div>
