---
title: "Hierarchical ridge regression tutorial"
date: 2023-01-05
authors:
  - Molly Offer‑Westort
featured: false
summary: "Suppose we have a factorial experiment, where we want to account for
two-way and higher-order interactions. We may think that interaction
effects will be small but not exactly equal to zero, and higher-order
interactions will tend to be associated with smaller effects relative to
lower order interactions.

Accounting for all interactions in a standard linear model may be costly
in terms of variance, so we want to use some form of regularization.

*Hierarchical ridge regression* facilitates penalization that is increasing with
degree of complexity of interactions."
type: code
tags: ["tutorials and code"]
links:
  - name: "tutorial"
    url: "https://github.com/mollyow/shrinkage-tutorial/blob/master/tutorial.md"
---
