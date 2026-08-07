---
year: 2026
category: wind
type: Journal article
title: "Reconciling the accuracy-efficiency trade-off in stochastic wind field simulation: A dual-level parallel algorithmic perspective"
authors: "N. Chen, G. Liu, J. Zhang, R. Ma, H. Chang, Y. Zhu, X. Qiu, A. Chen"
venue: "Mechanical Systems and Signal Processing · 258 · 114603"
paperUrl: "https://doi.org/10.1016/j.ymssp.2026.114603"
scholarUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=YGQD_t8AAAAJ&citation_for_view=YGQD_t8AAAAJ:3fE2CSJIrl8C"
codeUrl: "https://github.com/NanxiiChen/wind-simulation-GPU"
codeLabel: "wind-simulation-GPU"
---

> **Abstract.** This study presents a high-performance, fully parallelized computational framework for stationary and non-stationary stochastic wind field simulation that reconciles the conflict between computational efficiency and spectral fidelity. The framework reformulates the classical Shinozuka spectral representation method into a dual-level parallel algorithm that (i) eliminates nested spatial loops for computing pairwise spectral densities with array broadcasting and (ii) parallelizes frequency-wise synthesis via vectorized mapping, transforming the original sequential complexity into fully parallelizable operations. Unlike existing computational acceleration techniques that rely on dimension reduction or frequency interpolation, this reformulation maintains complete spectral fidelity without introducing approximation errors. To bound peak memory use while preserving full spatial coherence, the framework integrates an adaptive frequency batching strategy for large-scale problems. A multi-backend implementation (JAX, PyTorch, NumPy) enables efficient deployment on CPUs and GPUs. Extensive benchmarks show significant performance improvements, achieving speedups of up to several thousand-fold compared with conventional methods and demonstrating superiority over other mainstream algorithms. Practical applications to several engineering case studies, with comparisons to field measurements and theoretical models, validate the accuracy and reliability of the simulated wind fields. This software is released open-source on GitHub to support reproducible research and inspire further innovations in wind engineering.
