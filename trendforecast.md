---
layout: default
title: "TrendForecast"
title_ko: "TrendForecast"
permalink: /projects/trendforecast/
description: "TrendForecast, an early classifier that separates short-lived spikes from emerging trends using 30 days of search volume."
---

<div lang="en" markdown="1">

# TrendForecast

An early classifier that separates short-lived spikes from emerging trends.
{: .lede}

- **Period** 2026
- **Stack** Python, scikit-learn (Logistic Regression, SVM), LightGBM, Pandas, NumPy, Streamlit
- **Data** Naver DataLab Search API
- **Link** [trendforecast.streamlit.app](https://trendforecast.streamlit.app/)
{: .facts}

## Overview

The idea came from the Dubai chewy cookie ("Dujjonku") craze in Korea in early 2026. When a new keyword appears, can you tell early on whether it will fade within weeks or settle into a lasting trend? TrendForecast tries to answer that from a keyword's first 30 days of search volume, before the keyword peaks.

## Features

- **Early classification.** Sorts a keyword into one of four classes from its 30-day search pattern: normal, one-time issue, periodic issue, or new trend.
- **Two-track detection.** An ensemble of Logistic Regression and LightGBM handles the general classification. A separate SVM, tuned only to catch early signs of a new trend, backs it up.
- **Adjustable sensitivity.** Users choose between favoring recall (miss fewer trends) and favoring precision (raise fewer false alarms).
- **Automated pipeline.** Pulls data from the Naver DataLab API, computes time-series features such as velocity, acceleration, and RSI, scales them, and runs inference.
- **Dashboard.** A Streamlit interface for entering keywords and parameters, with the forecast shown next to a search-volume chart.

## Notes

Most of the work went into feature engineering: turning raw search counts into momentum-based features that a classifier can act on. I also built adjustable thresholds so users can set the precision–recall trade-off themselves.

</div>

<div lang="ko" markdown="1">

# TrendForecast

일시적 이슈와 새로운 트렌드를 초기에 구분하는 분류기
{: .lede}

- **기간** 2026
- **기술** Python, scikit-learn (Logistic Regression, SVM), LightGBM, Pandas, NumPy, Streamlit
- **데이터** 네이버 데이터랩 검색어 트렌드 API
- **링크** [trendforecast.streamlit.app](https://trendforecast.streamlit.app/)
{: .facts}

## 개요

2026년 초 크게 유행한 '두쫀쿠'(두바이 쫀득 쿠키)를 보며 시작한 프로젝트입니다. 새로 등장한 키워드가 잠깐 반짝하고 사라질지, 새로운 트렌드로 자리 잡을지를 초기에 판단하는 것이 목표입니다. 키워드의 첫 30일 검색량을 분석해 정점에 이르기 전에 트렌드 여부를 가려냅니다.

## 주요 기능

- **조기 분류:** 30일 검색 패턴을 보고 키워드를 일반, 일회성 이슈, 주기성 이슈, 신규 트렌드의 네 가지로 분류합니다.
- **이중 탐지 구조:** Logistic Regression과 LightGBM 앙상블이 전체 분류를 맡고 신규 트렌드의 초기 신호만 잡도록 따로 튜닝한 SVM이 이를 보완합니다.
- **민감도 조절:** 재현율을 높일지(놓치지 않기) 정밀도를 높일지(오탐 줄이기) 사용자가 고를 수 있습니다.
- **자동 파이프라인:** 네이버 데이터랩 API에서 데이터를 받아 속도, 가속도, RSI 등 시계열 특징을 만들고 스케일링을 거쳐 바로 추론합니다.
- **대시보드:** Streamlit 화면에서 키워드와 파라미터를 입력하면 예측 결과를 검색량 그래프와 함께 볼 수 있습니다.

## 의의

원시 검색량을 모멘텀 기반 특징으로 바꾸어 판단에 쓸 수 있는 신호로 만들었습니다. 정밀도와 재현율 사이의 균형을 사용자가 직접 정할 수 있도록 임계값 조정 기능을 설계했습니다.

</div>
