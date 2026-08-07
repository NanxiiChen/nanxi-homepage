---
year: 2026
category: scientific-ml
type: Journal article
title: "Enforcing hidden physics in physics-informed neural networks"
authors: "N. Chen, S. Wang, R. Ma, A. Chen, C. Cui"
venue: "Communications Physics"
citations: 1
paperUrl: "https://arxiv.org/abs/2511.14348"
scholarUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=YGQD_t8AAAAJ&citation_for_view=YGQD_t8AAAAJ:LkGwnXOMwfcC"
codeUrl: "https://github.com/NanxiiChen/irr-pinns"
codeLabel: "IRR-PINNs"
---

> **Abstract.** Physics-informed neural networks (PINNs) represent a new paradigm for solving partial differential equations (PDEs) by integrating physical laws into the learning process of neural networks. However, ensuring that such frameworks fully reflect the physical structure embedded in the governing equations remains an open challenge, particularly for maintaining robustness across diverse scientific problems. In this work, we address this issue by introducing a simple, generalized, yet robust irreversibility-regularized strategy that enforces hidden physical laws as soft constraints during training, thereby recovering the missing physics associated with irreversible processes in the conventional PINN. This approach ensures that the learned solutions consistently respect the intrinsic one-way nature of irreversible physical processes. Across a wide range of benchmarks spanning traveling wave propagation, steady combustion, ice melting, corrosion evolution, and crack growth, we observe substantial performance improvements over the conventional PINN, demonstrating that our regularization scheme reduces predictive errors by more than an order of magnitude, while requiring only minimal modification to existing PINN frameworks.
