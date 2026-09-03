---
layout: default
title: "ICLab"
permalink: /career/iclab/
---

# 🏛️ ICLab

[← Back to home](/)

- **Period:** January 2, 2026 – Present
- **Role:** Undergraduate research intern

## Overview

The link between living alone and mental-health risk is well documented, but most existing datasets focus on the elderly or on clinical populations. This project aims to fill that gap by releasing a longitudinal dataset collected over five months from 17 young-adult participants (in their 20s and 30s). Using commercial IoT sensors (Aqara, Withings) and smartphone logs, the study looks for behavioral markers of mental wellbeing — measured via PHQ-9 and GAD-7 — through multivariate regression.

## Tech stack

- **Data analysis:** Python, Pandas, NumPy
- **Statistical modeling:** Statsmodels (GLMM)
- **Visualization:** Matplotlib, Seaborn

## Key contributions

**Data processing and pipeline**
- Built a pipeline that merges fragmented raw data into per-UID files organized by date.
- Extracted valid app-usage events from smartphone logs by filtering for `ACTIVITY_RESUMED` and categorizing apps (Communication, Social, and so on).
- Computed movement metrics from location logs using the Haversine formula (circadian movement) and measured the diversity of visited places (normalized entropy) via coordinate binning.

**Feature engineering and selection**
- Applied a 14-day rolling mean to IoT and sleep features to line them up with the bi-weekly PHQ-9 and GAD-7 assessments, capturing longer-term behavioral trends.
- Handled multicollinearity by finding highly correlated feature pairs and keeping only the most statistically significant predictor from each.
- Pre-screened features for extreme skew and sparsity (for example, dating-app counts) to keep the models robust.

**Statistical analysis (GLMM)**
- Tuned models with backward elimination, dropping non-significant features until every remaining predictor reached p < 0.05.
- Ran mixed linear-model regressions for both daily (PHQ-2, GAD-2) and bi-weekly (PHQ-9, GAD-7) mental-health labels.

## Findings

- **Mobility matters:** Normalized entropy (location diversity) is significantly *negatively* correlated with depression and anxiety scores — diverse daily movement is a strong predictor of better mental health.
- **Household activity as a marker:** Frequency of cleaner (appliance) usage was a robust behavioral marker, negatively associated with mental distress.
- **Environmental sensitivity:** Light intensity and temperature were *positive* correlates of short-term depression (PHQ-2), pointing to individual sensitivity to indoor environmental conditions.

## Summary and next steps

The project established a working end-to-end pipeline, from raw IoT data through to statistical modeling, and the results support the idea that smart-home and smartphone data can serve as digital biomarkers for mental health. Next, I plan to refine the predictive models with machine-learning methods and prepare the dataset for open-source release.
