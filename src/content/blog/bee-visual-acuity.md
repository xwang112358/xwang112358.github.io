---
title: 'Measuring Visual Acuity in Bees from High-Resolution Images'
description: 'A Caves Lab-sponsored pipeline that uses high-resolution 2D photos from the NSF-funded Big Bee Project to estimate visual acuity across bee species by measuring ommatidia diameter and interommatidial angles. Initial results in the Apidae family show that male bees have larger ommatidia diameters while female bees have better CPD.'
date: 2023-06-14
tags: ['Image Processing', 'Computer Vision', 'Segment Anything']
---

Visual acuity, the ability to perceive detail, is ecologically important, as it dictates what aspects of a visual scene an animal can resolve. The study of visual acuity in bee species helps biologists understand their evolutionary history and gain insight into their foraging strategies and navigation abilities. Sponsored by the Caves Lab, this project aims to design a pipeline that uses high-resolution 2D photos taken by the NSF-funded Big Bee Project to estimate visual acuity across different bee species. In the pipeline, we develop algorithmic approaches to measure the diameter of the ommatidia and estimate the interommatidial angles on the eye's surface. By achieving a significant level of automation and accuracy, our pipeline will facilitate more efficient data collection for biologists. You can access the [code](https://github.com/xwang112358/bee_oda_caves) and [poster](https://docs.google.com/presentation/d/15V4HDwfvZqx741tvFnPYNhgmrWD4XtxI3AFmQ4okLVg/edit?usp=sharing), if you are interested.

## Introduction

Previous studies have relied on painstaking manual counts and estimates to describe compound eye structure. So, we focus on utilizing 2D bee photos to expedite the data collection process. In our pipeline, we want to detect and measure the following key quantities:

- Ommatidia: individual hexagon-like units that make up the compound eyes of insects and its diameter $D$ refers to the width of the hexagon and represents the sensitivity to light
- Interommatidial angle $\boldsymbol{\phi}$: angular separation between adjacent ommatidia in the compound eyes, representing the field of view that each ommatidium covers
- Cycles per Degree (CPD): the number of distinct line pairs, or cycles, that can be perceived within one degree of the visual field. A higher CPD value indicates finer visual acuity and the ability to discern smaller details or patterns.

$$
\boldsymbol{C P D}=1 /(2 * \boldsymbol{\phi} * 180 / \boldsymbol{\pi})
$$

<figure>
  <img src="/images/bee/eye_structure.png" alt="Frontal photo of a bee's head beside a diagram of the compound eye, labeling the field of view (FOV), the ommatidium diameter D, and the interommatidial angle Δφ" style="max-width: 80%;" loading="lazy" />
</figure>

We collected data from the Big Bee Library, an online repository housing bee image, trait, and specimen data. We bulk downloaded Head Frontal and Habitus Lateral images for each bee and organized them into a folder named by the bee's catalog number. Currently, our data focused exclusively on 145 bee specimens collected at UCSB Cheadle Center. Each image was obtained by synthesizing multiple identical 6000\*4000 pixel bee photos with varying focal points, allowing for the creation of high-resolution representations of different sections of the bee. A scale bar for length measurements is available in each image. For the contour analysis, we perform eye segmentation on the head frontal images, extracting both eye bitmaps and converting them into binary images.

<figure>
  <img src="/images/bee/two_sides.png" alt="Lateral and frontal photos of bee specimen UCSB-IZC00003796 (family Apidae, Eucera lunata, female), each above the binary eye segmentation mask extracted from it" style="max-width: 80%;" loading="lazy" />
</figure>

## Method

Our pipeline developed for measuring visual acuity parameters from 2D images of bees involves several steps. Firstly, the ommatidia diameter is measured using a 2D Ommatidia Diameter Algorithm (ODA)[1]. Next, a pre-trained segmentation model segment-anything is deployed to accurately segment the shape of the bee's eye. To approximate the shape of the bee's eye, a continuous curve is fitted to the eye contour. Finally, by simulating discrete points along the fitted curve, with each point representing an ommatidium and utilizing the previously measured ommatidia diameter, the interommatidial angles can be calculated. We then analyze the ommatidia diameter and interommatidial angle among bees in the Apidae family.

<figure>
  <img src="/images/bee/pipeline.png" alt="Flowchart of the visual acuity pipeline: head frontal and habitus lateral images go through scale bar detection and the 2D ODA to get ommatidia diameter, SAM eye segmentation and contour analysis give the interommatidial angle and CPD, and the results are combined with bee metadata to compare CPD by sex and family" style="max-width: 90%;" loading="lazy" />
</figure>

## Results

By examining the initial results in the Apidae family, our pipeline and algorithms can produce consistent results with ecological and biological meanings. Close results are obtained from multiple measurements on the same bee specimen, and measurements on distinct bee specimens with identical biological traits also yield similar outcomes.

<figure>
  <img src="/images/bee/results.png" alt="Scatterplots of ommatidia diameter and CPD for male and female specimens of five Apidae species, with dashed lines marking the male and female means" style="max-width: 90%;" loading="lazy" />
</figure>

The findings from the study reveal that male bees exhibit larger ommatidia diameter $\boldsymbol{D}$, while female bees exhibit superior $\boldsymbol{C P D}$ capabilities for discerning small details. Male bees predominantly remain within the hive and engage in mating activities with the queen. The presence of larger $\boldsymbol{D}$ in male bees enhances their sensitivity to low light conditions, enabling them to effectively function in such environments. Conversely, female bees typically venture outside the hive to gather pollen and nectar. The possession of better $\boldsymbol{C P D}$ in female bees facilitates their navigation through complex environments and enables them to interact adeptly with various objects encountered during foraging activities.

### Reference

[1] Currea, J.P., Sondhi, Y., Kawahara, A.Y., Theobald, J. Measuring compound eye optics with microscope and microCT images. Communications Biology (2023). https://pmc.ncbi.nlm.nih.gov/articles/PMC9992655/
