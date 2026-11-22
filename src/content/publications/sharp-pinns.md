---
year: 2025
category: scientific-ml
type: Journal article
title: "Sharp-PINNs: Staggered hard-constrained physics-informed neural networks for phase field modelling of corrosion"
authors: "N. Chen, C. Cui, R. Ma, A. Chen, S. Wang"
venue: "Computer Methods in Applied Mechanics and Engineering · 447"
citations: 31
paperUrl: "https://arxiv.org/abs/2502.11942"
scholarUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=YGQD_t8AAAAJ&citation_for_view=YGQD_t8AAAAJ:_FxGoFyzp5QC"
codeUrl: "https://github.com/NanxiiChen/sharp-pinns"
codeLabel: "Sharp-PINNs"
codeStars: 19
---

> **Abstract.** Physics-informed neural networks have shown significant potential in solving partial differential equations (PDEs) across diverse scientific fields. However, their performance often deteriorates when addressing PDEs with intricate and strongly coupled solutions. In this work, we present a novel Sharp-PINN framework to tackle complex phase field corrosion problems. Instead of minimizing all governing PDE residuals simultaneously, the Sharp-PINNs introduce a staggered training scheme that alternately minimizes the residuals of Allen-Cahn and Cahn-Hilliard equations, which govern the corrosion system. To further enhance its efficiency and accuracy, we design an advanced neural network architecture that integrates random Fourier features as coordinate embeddings, employs a modified multi-layer perceptron as the primary backbone, and enforces hard constraints in the output layer. This framework is benchmarked through simulations of corrosion problems with multiple pits, where the staggered training scheme and network architecture significantly improve both the efficiency and accuracy of PINNs. Moreover, in three-dimensional cases, our approach is 5-10 times faster than traditional finite element methods while maintaining competitive accuracy, demonstrating its potential for real-world engineering applications in corrosion prediction.
