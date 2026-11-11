---
layout: default
title: "CaGam"
title_ko: "CaGam (카감)"
permalink: /projects/cagam/
description: "CaGam, an iOS camera app that suggests composition, zoom, and exposure with on-device machine learning."
---

<div lang="en" markdown="1">

# CaGam

An iOS camera app that guides composition and exposure with on-device machine learning.
{: .lede}

- **Period** 2026 (released April 2026)
- **Platform** iOS (App Store)
- **Stack** Swift, SwiftUI, AVFoundation, Vision, Core ML, PyTorch, Google AdMob
- **Links** [App Store](https://apps.apple.com/kr/app/id6763986554) · [GitHub](https://github.com/wagyu1001/CaGam)
{: .facts}

## Overview

CaGam is for people who find it hard to frame a photo. It reads the camera feed in real time and suggests where the subject should stand, how far to zoom, and how to set exposure. Every model runs on the device, so photos never go to a server and the app works offline. I released it on the App Store in April 2026.

## Features

- **Aesthetics score.** The viewfinder shows a 0–100 score for the current frame, computed with Apple Vision's image aesthetics API. The score is smoothed so it does not jump from frame to frame.
- **Subject placement.** A PyTorch model with a MobileNetV3 backbone, trained by me and converted to Core ML, predicts where the subject should be. After Vision detects the person, a target box shows where to move.
- **Zoom and exposure.** Landscape and portrait modes each have their own Core ML model. The suggested values apply with one tap.
- **Auto capture.** When the option is on, the shutter fires once the score reaches 50, at most once every two seconds.
- **Shooting aids.** A grid overlay and a level indicator driven by CoreMotion.
- **Sandbox gallery.** New photos stay in an in-app gallery first. Only the shots the user picks are saved to the Photos library.
- **Localization.** Full Korean and English support. The app name itself switches between "CaGam" and "카감" with the system language.

## Implementation

- The camera screen and capture pipeline use SwiftUI and AVFoundation.
- Predicted subject positions and bounding boxes pass through an exponential moving average (α = 0.15) so the on-screen guide stays steady.
- Revenue comes from Google AdMob rewarded and native ads.

</div>

<div lang="ko" markdown="1">

# CaGam (카감)

온디바이스 머신러닝으로 구도와 노출을 안내하는 iOS 카메라 앱
{: .lede}

- **기간** 2026 (2026년 4월 출시)
- **플랫폼** iOS (App Store)
- **기술** Swift, SwiftUI, AVFoundation, Vision, Core ML, PyTorch, Google AdMob
- **링크** [App Store](https://apps.apple.com/kr/app/id6763986554) · [GitHub](https://github.com/wagyu1001/CaGam)
{: .facts}

## 개요

CaGam(카감)은 사진 구도를 잡기 어려워하는 사람을 위한 iOS 카메라 앱입니다. 카메라 프레임을 실시간으로 분석해 피사체 위치, 줌 배율, 노출값을 제안합니다. 모든 머신러닝 연산은 기기 안에서 처리되므로 사진이 외부 서버로 전송되지 않고 오프라인에서도 동작합니다. 2026년 4월 App Store에 출시했습니다.

## 주요 기능

- **미적 점수:** Apple Vision의 이미지 미적 평가 API로 현재 화면의 점수(0~100)를 뷰파인더에 표시합니다. 점수가 흔들리지 않도록 지수 평활을 적용했습니다.
- **인물 위치 안내:** MobileNetV3 기반으로 직접 학습한 PyTorch 모델을 Core ML로 변환해 탑재했습니다. Vision으로 인물을 감지한 뒤 피사체가 서야 할 위치를 타겟 박스로 안내합니다.
- **줌·노출 추천:** 풍경 모드와 인물 모드에 각각 별도의 Core ML 모델을 두고 추천값을 한 번의 탭으로 적용할 수 있게 했습니다.
- **자동 촬영:** 설정을 켜면 미적 점수가 50점 이상일 때 셔터가 자동으로 눌립니다. 연속 촬영을 막기 위해 2초 간격을 두었습니다.
- **촬영 보조:** 격자선과 CoreMotion 기반 수평계를 제공합니다.
- **임시 보관함:** 촬영한 사진을 앱 내부 공간에 먼저 보관하고 사용자가 고른 사진만 사진 앱에 저장합니다.
- **다국어 지원:** 한국어와 영어를 모두 지원하며 시스템 언어에 따라 앱 이름도 'CaGam' 또는 '카감'으로 바뀝니다.

## 구현과 운영

- SwiftUI와 AVFoundation으로 카메라 화면과 촬영 파이프라인을 구성했습니다.
- 인물 위치 예측값과 바운딩 박스에 지수 이동 평균(α = 0.15)을 적용해 안내 표시가 떨리지 않도록 했습니다.
- 수익 모델은 Google AdMob 보상형 광고와 네이티브 광고입니다.

</div>
