---
layout: default
title: "ICLab, KAIST"
title_ko: "ICLab, KAIST"
permalink: /career/iclab/
description: "Undergraduate research at ICLab, KAIST: a smart-home IoT and smartphone dataset for mental-health research in young adults."
---

<div lang="en" markdown="1" class="split">

<div class="split-aside" markdown="1">

# ICLab, KAIST

Smart-home IoT and smartphone data as digital biomarkers for mental health in young adults.
{: .lede}

- **Role** Undergraduate Research Intern
- **Period** Jan 2026 – Jul 2026
- **Stack** Python, Pandas, NumPy, Statsmodels (GLMM), scikit-learn, Matplotlib, Seaborn
{: .facts}

</div>
<div class="split-main" markdown="1">

## Background

Many studies link living alone to higher mental-health risk, but the public datasets on activities of daily living (ADL) mostly cover older adults or clinical groups. This project builds and releases a dataset of people in their 20s and 30s. We followed 17 participants for five months. Commercial IoT sensors from Aqara and Withings recorded daily activity, the indoor environment, and sleep, and we also collected smartphone logs along with daily, bi-weekly, and monthly surveys.

## My work

### Data processing

- Built a pipeline that gathers raw data scattered across many files into per-participant (UID) files in date order.
- Parsed the smartphone logs, keeping the fields needed for analysis (app usage events such as `ACTIVITY_RESUMED`, device events, call logs), and grouped apps into categories such as communication and social.
- Defined a "sleep day" as noon to noon, following prior work, so that a nap and the following night's sleep count toward the same date.
- Computed three mobility features from location logs: location variance, circadian movement (using the Haversine formula), and normalized entropy of visited places. For entropy, I rounded coordinates to three decimal places, which gives grid cells of roughly 100 m.

### Participant screening and features

- Excluded participants whose daily answers barely varied (most frequent answer in 80% or more of responses), iPhone users whose smartphone data could not be collected, and one outlier whose inclusion markedly worsened model fit (AIC). Ten participants remained for analysis. The public release will still include everyone's data.
- Applied 14-day rolling means to sensor and sleep features so they line up with the bi-weekly PHQ-9 and GAD-7 surveys.
- Reduced multicollinearity by dropping, from each feature pair with a correlation of 0.7 or higher, the feature with the larger p-value. Features that one or two participants pushed to extreme skew, such as dating-app counts, were removed beforehand.

### Modeling

- Fit generalized linear mixed models (GLMM) for the daily labels (PHQ-2, GAD-2) and the bi-weekly labels (PHQ-9, GAD-7). The daily models used 651 observations from 10 participants.
- Pruned each model by backward elimination, removing the feature with the highest p-value until every remaining predictor had p < 0.05.
- Compared five machine-learning regressors under leave-one-subject-out cross-validation. Random Forest reached a 12.8% error rate on PHQ scores, and hyperparameter tuning improved overall performance by about 6%. Classification was weaker, peaking at 57% accuracy.

## Findings

- Normalized entropy (how varied a person's visited places are) was negatively associated with depression and anxiety scores in both the daily and bi-weekly analyses. It was also the most important feature in the machine-learning models.
- Vacuum-cleaner use was negatively associated with daily depression and anxiety, which suggests that household physical activity can work as a behavioral marker of wellbeing.
- Brighter and warmer indoor conditions went with higher daily PHQ-2 scores.
- In the bi-weekly analysis, chair-sensor usage was positively associated with PHQ-9 and GAD-7, and entertainment-app use (YouTube, Netflix, TVING) was positively associated with GAD-7.

## Wrap-up

In the last weeks of the internship, I checked these results against the existing literature and organized the documentation and analysis code for the dataset release.

</div>
</div>

<div lang="ko" markdown="1" class="split">

<div class="split-aside" markdown="1">

# ICLab, KAIST

스마트홈 IoT와 스마트폰 데이터를 활용한 청년층 정신건강 디지털 바이오마커 연구
{: .lede}

- **직무** 학부 연구 인턴
- **기간** 2026.01 – 2026.07
- **기술** Python, Pandas, NumPy, Statsmodels (GLMM), scikit-learn, Matplotlib, Seaborn
{: .facts}

</div>
<div class="split-main" markdown="1">

## 연구 배경

1인 가구와 정신건강 위험 사이의 관련성은 여러 연구에서 보고되었지만 공개된 일상생활(ADL) 데이터셋은 대부분 노년층이나 임상 집단을 대상으로 합니다. 이 프로젝트는 20~30대 청년층을 대상으로 한 데이터셋을 구축해 공개하는 것을 목표로 합니다. 참여자 17명의 데이터를 5개월간 수집했으며 Aqara와 Withings의 상용 IoT 센서로 일상 활동, 실내 환경, 수면을 측정하고 스마트폰 로그와 일간·격주·월간 설문을 함께 수집했습니다.

## 담당 업무

### 데이터 처리와 파이프라인

- 여러 파일로 흩어져 있던 원시 데이터를 참여자(UID)별, 날짜순으로 정리하는 파이프라인을 만들었습니다.
- 스마트폰 로그에서 앱 사용 이벤트(`ACTIVITY_RESUMED`), 기기 이벤트, 통화 기록 등 분석에 필요한 필드를 골라 정형화하고 앱을 커뮤니케이션, 소셜 등의 범주로 분류했습니다.
- 낮잠과 밤잠이 같은 날짜로 묶이도록 기존 연구를 참고해 정오부터 다음 날 정오까지를 하루의 수면일로 정의했습니다.
- 위치 로그에서 이동 반경(location variance), Haversine 공식을 이용한 일주기 이동성(circadian movement), 방문 장소의 다양성(normalized entropy)을 계산했습니다. 엔트로피는 위경도를 소수점 셋째 자리에서 반올림해 약 100m 격자로 나누어 구했습니다.

### 분석 대상 선정과 특징 공학

- 일간 설문에서 같은 점수만 반복해 응답한 참여자(최빈 응답 비율 0.8 이상), 스마트폰 데이터가 수집되지 않은 iPhone 사용자, 모델 적합도(AIC)를 크게 떨어뜨린 이상치 1명을 분석에서 제외해 최종 10명을 분석했습니다. 제외한 참여자의 데이터도 공개 데이터셋에는 모두 포함할 예정입니다.
- 격주 설문(PHQ-9, GAD-7)과 시점을 맞추기 위해 센서와 수면 특징에 14일 이동 평균을 적용했습니다.
- 상관계수 0.7 이상인 특징 쌍에서는 p-value가 더 큰 쪽을 제거해 다중공선성을 줄였고 데이팅 앱 사용 횟수처럼 특정 참여자 때문에 분포가 극단적으로 치우친 특징은 미리 제외했습니다.

### 통계 분석과 예측 모델

- 일간(PHQ-2, GAD-2)과 격주(PHQ-9, GAD-7) 정신건강 지표 각각에 대해 일반화 선형 혼합 모형(GLMM)을 적합했습니다. 일간 모델은 10명, 651개 관측치를 사용했습니다.
- p-value가 가장 큰 특징부터 하나씩 제거하는 후진 제거법으로 모든 변수가 p < 0.05가 될 때까지 모델을 정리했습니다.
- 머신러닝 회귀 모델 5종을 Leave-One-Subject-Out 교차검증으로 비교했습니다. Random Forest가 PHQ 점수에서 12.8%의 오차율을 보였고 하이퍼파라미터 튜닝으로 전반적인 성능을 약 6% 개선했습니다. 반면 분류 정확도는 최대 57%에 그쳤습니다.

## 주요 결과

- 방문 장소의 다양성(normalized entropy)은 일간과 격주 분석 모두에서 우울·불안 점수와 유의한 음의 상관을 보였고 머신러닝 모델에서도 가장 중요한 특징이었습니다.
- 청소기 사용 빈도는 일간 우울·불안 점수와 음의 상관을 보여 집안일과 같은 신체 활동이 심리적 안녕의 행동 지표가 될 수 있음을 시사했습니다.
- 실내 조도와 온도가 높을수록 일간 PHQ-2 점수가 높게 나타났습니다.
- 격주 분석에서는 의자 센서 사용량이 PHQ-9, GAD-7과, 엔터테인먼트 앱(YouTube, Netflix, TVING) 사용량이 GAD-7과 양의 상관을 보였습니다.

## 마무리

인턴 기간 후반에는 분석 결과를 기존 문헌과 교차 검증하고 데이터셋 공개를 위한 문서와 분석 코드를 정리했습니다.

</div>
</div>
