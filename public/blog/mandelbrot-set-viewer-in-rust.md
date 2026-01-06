---
title: I built a Mandelbrot Set viewer in Rust
date: 06-01-2026
tags: [ Rust ]
excerpt: Building an efficient Mandelbrot Set viewer in Rust, from naive implementation to low-level optimizations.
---

## I. Introduction

The [Mandelbrot set](https://en.wikipedia.org/wiki/Mandelbrot_set) is one of the many fascinating mathematical objects
that emerge from a simple formula. One that
gives
rise to infinite detail, intricate boundaries, and visuals that reward curiosity and exploration.

![Mandelbrot Set](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mandelbrot_sequence_new.gif/250px-Mandelbrot_sequence_new.gif)

In this post, I walk through the process of building an interactive Mandelbrot set viewer in Rust. Starting from a naive
implementation, each step introduces a new concept, from parallelism and early bailout to boundary tracing and SIMD, all
grounded in real profiling data.

But first, what is the Mandelbrot set?

Put it simply, it is the boundary of the set of complex numbers $c$ such that the sequence $\{z_n = z_{n-1} + c\}$
never diverges.

## II. A first implementation

## III. Colors and smoothing

## IV. Profiling: measure before optimizing

## V. Parallelization with Rayon

## VI. Early Bailout

## VII. Boundary Tracing

## VIII. SIMD magic

## IX. Micro-Optimizations, GPU Computing, and Where to Go Next
