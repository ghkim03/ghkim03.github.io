---
layout: default
title: "CaGam"
permalink: /projects/cagam/
---

# 📸 CaGam

[← Back to home](/)

*iOS camera app that gives real-time composition guidance with on-device AI*

## Overview

CaGam uses Vision AI to offer real-time composition guides, helping anyone capture professional-looking photos without fuss. It's aimed at people who struggle with framing and angles, and it makes scene-aware suggestions as you shoot. All AI processing runs **on-device**, so no photo ever leaves the phone.

## Key features

- **AI portrait-pose guidance** — a custom PyTorch model with a MobileNetV3 backbone, converted to CoreML for efficient on-device inference, analyzes the scene in real time to find the best subject placement and guides the user with a moving target box.
- **Smart parameter recommendations** — dedicated CoreML models for landscape and portrait modes continuously evaluate the frame and suggest ideal zoom and exposure, applied with a single tap.
- **Sandbox gallery** — a separate in-app space where users can review and manage shots before deciding which to save to the system photo library.
- **Full localization** — complete English and Korean support, including a dynamic app name ("CaGam" / "카감") based on the system language.

## Results

- **App Store:** scheduled for release in May 2026.
- **Business model:** ad revenue.

CaGam is more than a camera app — it's an exploration of how on-device AI can make an everyday activity like photography tangibly better by giving every user expert-level guidance.

<!-- TODO: add screenshots — save images into /assets/ and reference them here, e.g. ![CaGam](/assets/cagam-1.png) -->
<!-- Note: the Notion page also had two sub-pages — "CaGam 개인정보 처리방침" (privacy policy) and "이메일" (email). Those are App Store legal pages and were left out of the portfolio. Tell me if you want them added as separate pages. -->
