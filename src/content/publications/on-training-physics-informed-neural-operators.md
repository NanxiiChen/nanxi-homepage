---
year: 2027
category: scientific-ml
type: Journal article
title: "On the training of physics-informed neural operators for solving parametric partial differential equations"
authors: "N. Chen, C. Cui, A. Chen, S. Wang, R. Ma"
venue: "Computer Methods in Applied Mechanics and Engineering · 464 (Part B) · 119515"
citations: 1
paperUrl: "https://doi.org/10.1016/j.cma.2026.119515"
scholarUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=YGQD_t8AAAAJ&citation_for_view=YGQD_t8AAAAJ:MXK_kJrjxJIC"
codeUrl: "https://github.com/NanxiiChen/PI-CViT"
codeLabel: "PI-CViT"
codeStars: 10
---

> **Abstract.** Physics-informed neural operators (PINOs) aim to learn solution operators for partial differential equations by using the governing physics as supervision, rather than relying solely on paired input-output simulation data. By incorporating physical constraints into the training objective, PINOs combine the cross-instance generalization of neural operators with the data efficiency of physics-informed learning. Despite this promise, how to train PINOs efficiently and robustly remains less well-understood than the training of either data-driven neural operators or physics-informed neural networks (PINNs). To bridge this gap, we examine key components of the PINO training pipeline, including architecture design, optimizer choice, loss balancing, and collocation-point sampling strategy. We study three representative operator backbones, Deep Operator Network (DeepONet), Fourier Neural Operator (FNO), and Continuous Vision Transformer (CViT), across five diverse parametric PDE systems. Our results show that CViT provides consistently strong and stable performance across the considered benchmarks. Beyond architecture, we find that several optimization pathologies previously identified in PINN training naturally arise in PINOs, including gradient conflicts and causal violation. We also find that mitigation algorithms developed for PINNs remain effective in the PINO setting. We further compare physics-informed and data-driven training under different data regimes, revealing that a carefully designed physics-informed training pipeline can match, and in some cases, outperform purely data-driven neural operators. Taken together, these findings provide a systematic empirical understanding of the optimization challenges in PINO training and inform a practical pipeline for efficient and robust physics-informed operator learning. Code and data are available at [this URL](https://github.com/NanxiiChen/PI-CViT).
