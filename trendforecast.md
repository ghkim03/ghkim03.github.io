---
layout: default
title: "TrendForecast"
permalink: /projects/trendforecast/
---

# 📈 TrendForecast

[← Back to home](/)

*Early-stage classifier that tells fleeting issues apart from emerging trends*

- **Frontend:** Streamlit
- **Machine learning:** scikit-learn (Logistic Regression, SVM), LightGBM
- **Data / API:** Naver DataLab Search API, Pandas, NumPy

## Overview

TrendForecast was inspired by the "두쫀쿠" moment that went viral in early 2026. The goal was a tool that could read a brand-new keyword early in its life and tell what kind of thing it is — a passing blip, or the start of something big. By analyzing the first 30 days of search-volume data, the engine sorts keywords into distinct categories so you can spot a real trend before it peaks.

## Key features

- **Early trend classification** — sorts a keyword into one of four categories from its 30-day search pattern: Normal, One-time Issue, Periodic Issue, or New Trend.
- **Dual-track detection** — an ensemble of Logistic Regression and LightGBM handles general classification, while a dedicated SVM acts as a "sniper" tuned to catch early signals of a New Trend.
- **Adjustable sensitivity** — users can switch between "maximize recall" (cast a wide net) and "maximize precision" (minimize false alarms) as needed.
- **Automated pipeline** — fetches data from the Naver DataLab API, extracts time-series features (velocity, acceleration, RSI, and so on), and scales them for real-time inference.
- **Interactive interface** — a Streamlit dashboard for entering keywords, setting parameters, and viewing forecasts alongside search-volume charts.

## Tech stack

**ML and data** — scikit-learn and LightGBM for classification and probability estimates; Pandas and NumPy for time-series feature engineering.

**Web and integration** — Streamlit for the UI, and the Naver DataLab API for historical search-volume data.

## Highlights

- Turned raw search-volume data into actionable signals by engineering momentum-based features.
- Built a flexible thresholding mechanism that hands the precision-versus-recall trade-off to the user.

## Links

- Live app: [trendforecast.streamlit.app](https://trendforecast.streamlit.app/)

<!-- TODO: add screenshots — save images into /assets/ and reference them here, e.g. ![TrendForecast](/assets/trendforecast-1.png) -->
