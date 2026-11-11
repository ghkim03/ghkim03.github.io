---
layout: default
title: "Traffic Signal Control with MARL"
title_ko: "MARL 기반 교통 신호 최적화"
permalink: /projects/traffic-signal/
description: "Multi-agent reinforcement learning (PPO) for traffic signal control at six intersections in Bucheon, trained on real vehicle data."
---

<div lang="en" markdown="1" class="split">

<div class="split-aside" markdown="1">

# Traffic Signal Control with MARL

Multi-agent reinforcement learning for six intersections in Bucheon, trained on real vehicle trajectory data.
{: .lede}

- **Period** May 2026 (individual)
- **Context** 2026 Gyeonggi Public Data & AI Startup Competition, university idea track
- **Stack** Python, SUMO, PPO, Pandas
- **Data** AI Hub, "Data for AI-based Traffic Signal Optimization"
{: .facts}

</div>
<div class="split-main" markdown="1">

## Overview

Most traffic signals run on fixed cycles and do not adjust when traffic changes over the day. In this project, each of six intersections in Bucheon, including the Songnae-daero intersection, gets its own signal agent. The agents are trained with multi-agent reinforcement learning (MARL) to choose the next signal phase from what they observe locally.

## Data preparation

The raw data is AI Hub's per-vehicle trajectory data for Bucheon.

- Kept only the vehicles that pass through the six-intersection sub-network, then recomputed their routes at the network boundary with SUMO's `cutRoutes.py`. Without this step, routes broke at the edge of the map and the simulation crashed.
- Removed GPS records with implausible speed or acceleration using z-scores, and projected WGS84 coordinates into SUMO's planar coordinate system to within 1 m of the real map.
- Aggregated each vehicle's stop flag (`que_all`, `que_200`) per second into a queue count per lane. These counts are the agents' observations.
- Wrote a converter that extracts each vehicle's route from its origin and destination intersections and produces the SUMO demand file (`demand.rou.xml`).

## Model

- **Observation.** Each agent sees the queue length and occupancy of the lanes connected to its intersection.
- **Action.** The agent picks the next signal phase, with a minimum green time of 10 seconds and a 3-second yellow.
- **Reward.** All agents share one reward: the change in total waiting time across the network since the previous step (diff-waiting-time). A shared reward discourages an agent from clearing its own intersection at its neighbors' expense.
- **Algorithm.** PPO, chosen to limit the instability that comes from many agents updating their policies at once. Training ran for several hundred thousand steps to reach convergence.

## Results

Training used five days of data (September 10, 11, 13, 14, and 15, 2022). Evaluation used two days with very different traffic: September 12, during the Chuseok holiday, and September 16, a weekday. Using only aggregate traffic counts, without origin–destination data, the agents cut the average waiting time per vehicle from 663 s to 411 s (38.0%) and the average travel time from 433 s to 299 s (30.8%) compared with fixed-time signals.

<figure>
  <img src="{{ '/assets/img/marl-performance.png' | relative_url }}" alt="Bar chart of average wait time and travel time in seconds for the fixed-time baseline and the MARL agents" loading="lazy">
  <figcaption>Average wait and travel time per vehicle: fixed-time baseline vs. MARL agents.</figcaption>
</figure>

<figure>
  <img src="{{ '/assets/img/marl-signal-phases.png' | relative_url }}" alt="Signal phase over 500 seconds of simulation for the fixed-time baseline and the MARL agent" loading="lazy">
  <figcaption>Signal phases over 500 seconds of simulation. The fixed-time plan repeats a long cycle; the MARL agent switches phases at much shorter intervals.</figcaption>
</figure>

</div>
</div>

<div lang="ko" markdown="1" class="split">

<div class="split-aside" markdown="1">

# MARL 기반 교통 신호 최적화

부천시 6개 교차로를 대상으로 실측 차량 궤적 데이터로 학습한 다중 에이전트 강화학습 신호 제어
{: .lede}

- **기간** 2026.05 (개인)
- **출품** 2026년 경기도 공공데이터·AI 활용 창업경진대회, 대학생 아이디어 기획 부문
- **기술** Python, SUMO, PPO, Pandas
- **데이터** AI Hub 'AI 기반 신호 최적화를 위한 데이터'
{: .facts}

</div>
<div class="split-main" markdown="1">

## 개요

현재 대부분의 교통 신호는 정해진 주기로 동작해 시간대별 교통량 변화에 대응하지 못합니다. 이 프로젝트는 부천시 송내대로사거리를 포함한 6개 교차로에 신호 에이전트를 하나씩 배치하고 각 에이전트가 주변 상황을 보고 다음 신호를 스스로 결정하도록 다중 에이전트 강화학습(MARL)으로 학습시켰습니다.

## 데이터 전처리

AI Hub의 'AI 기반 신호 최적화를 위한 데이터'(부천시 개별 차량 궤적)를 사용했습니다.

- 부천시 전체 차량 데이터에서 6개 교차로 서브 네트워크를 지나는 차량만 남기고 SUMO의 `cutRoutes.py`로 경계에서 경로를 다시 계산해 경로가 끊겨 시뮬레이션이 중단되는 문제를 막았습니다.
- 속도와 가속도가 정상 범위를 벗어난 GPS 로그는 Z-score 기준으로 제거했습니다. WGS84 좌표는 SUMO의 평면 좌표계로 변환해 실제 지도와의 오차를 1m 이내로 맞췄습니다.
- 차량별 정지 여부(`que_all`, `que_200`)를 1초 단위로 집계해 차선별 대기 차량 수로 바꾸었고 이를 에이전트의 관측값으로 사용했습니다.
- 출발·도착 교차로 정보로 차량 경로를 추출해 SUMO 수요 파일(`demand.rou.xml`)을 만드는 변환 과정을 구현했습니다.

## 모델 설계

- **관측:** 각 에이전트는 연결된 차선의 대기 차량 수와 점유율을 봅니다.
- **행동:** 다음에 켤 신호 현시를 고릅니다. 최소 녹색 시간 10초, 황색 3초 제약을 두었습니다.
- **보상:** 직전 스텝 대비 네트워크 전체 누적 대기 시간의 변화량(diff-waiting-time)을 모든 에이전트가 공유합니다. 개별 교차로만 최적화하는 이기적인 행동을 막고 인접 교차로와 협력하도록 하기 위한 설계입니다.
- **알고리즘:** 여러 에이전트가 동시에 정책을 바꿀 때 생기는 학습 불안정을 줄이기 위해 PPO를 사용했고 학습 스텝을 수십만 단위로 늘려 수렴시켰습니다.

## 결과

2022년 9월 10·11·13·14·15일, 닷새치 데이터로 학습하고 교통량 차이가 큰 9월 12일(추석 연휴)과 9월 16일(평일) 데이터로 평가했습니다. 출발지·목적지(O/D) 데이터 없이 거시 교통량 데이터만으로도 고정 신호 대비 차량당 평균 대기 시간이 663초에서 411초로 38.0%, 평균 이동 시간이 433초에서 299초로 30.8% 줄었습니다.

<figure>
  <img src="{{ '/assets/img/marl-performance.png' | relative_url }}" alt="고정 신호와 MARL 에이전트의 평균 대기 시간 및 이동 시간 비교 막대그래프" loading="lazy">
  <figcaption>차량당 평균 대기·이동 시간 비교 (고정 신호 대비 MARL 에이전트)</figcaption>
</figure>

<figure>
  <img src="{{ '/assets/img/marl-signal-phases.png' | relative_url }}" alt="시뮬레이션 500초 동안 고정 신호와 MARL 에이전트의 신호 현시 변화" loading="lazy">
  <figcaption>시뮬레이션 500초 동안의 신호 현시. 고정 신호는 긴 주기를 반복하고, MARL 에이전트는 훨씬 짧은 간격으로 현시를 전환합니다.</figcaption>
</figure>

</div>
</div>
