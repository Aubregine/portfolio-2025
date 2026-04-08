---
title: The Fundamental Group
date: 06-04-2026
tags: [ Mathematics ]
excerpt: Fundamental groups and Brouwer’s fixed point theorem
---

## Introduction

This assignment was given to me by a dear friend of mine, I did my best and had a lot of fun, I hope you'll enjoy the
beauty of Mathematics as much as I did :)  
You can find the assignment [here](https://luyise.github.io//teaching/)

## Part 1: The fundamental group of a space

### **Definition 1.1: Path, Loop**

Let $$X$$ be a topological space.
A path in $$X$$ is a continuous map $$[0, 1] \to X$$.
If $$x, y$$ are points of $$X$$, a path from $$x$$ to $$y$$ is a path
$$\gamma : [0, 1] \to X$$ such that $$\gamma (0) = x$$ and $$\gamma (1) = y$$, which we will sometimes
write $$\gamma : x \to y$$.
A loop in $$X$$ based at $$x$$ is a path in $$X$$ from $$x$$ to itself.
The space $$X$$ is said to be path connected if for any two points $$x, y$$ of $$X$$,
there is a path from $$x$$ to $$y$$.

1) **Let $$n \in \mathbb{N}$$**.
   **a) Show that $$\mathbb{R}^{n}$$ is path connected**.

> Let $$x, y \in \mathbb{R}^{n}$$.  
> Let $$\gamma : \left[ 0, 1 \right] \to \mathbb{R}^{n}$$ such that $$\forall t \in \left[ 0, 1 \right],\ \gamma (t) = (1 - t) x + t y$$.  
> $$\gamma$$ is continuous, $$\gamma (0) = x$$ and $$\gamma (1) = y$$.  
> $$\gamma$$ is a path between $$x$$ and $$y$$.  
> Therefore, $$\mathbb{R}^{n}$$ is path connected.

**b) For $$n \ge 2$$, show that $$\mathbb{R}^{n} \setminus \left\{ 0 \right\} $$ is path connected**.
> Let $$x, y$$ be two points of $$\mathbb{R}^{n} \setminus \left\{ 0 \right\}$$.  
> For $$p \in \mathbb{R}^{n}$$, we define $$|| \cdot || : \mathbb{R}^{n} \to \mathbb{R}_{+}$$ as $$||p|| := \sqrt{\sum_{i=1}^{n} p_{i}^{2}}$$. In particular, $$||p|| \gt 0$$ iff at least one of $$p_{i}$$ is not zero.  
> Let $$\theta_{x}, \theta_{y} \in [0, 2 \pi]$$ be the angle between $$x$$ (respectively $$y$$) and $$(1, 0, \dots, 0)$$.  
> Let $$r : [0,1] \to \mathbb{R}$$ defined as $$\forall t \in [0,1]$$, $$r(t):= (1-t) ||x|| + t ||y||$$.  
> Since $$||x|| \gt 0$$, and $$||y|| \gt 0$$, $$r(t) \gt 0$$.  
> Let $$\phi : [0,1] \to \mathbb{R}$$ defined as $$\forall t \in [0,1]$$, $$\phi(t) := (1-t) \theta_{x} + t \theta_{y}$$.  
> For $$i \ge 3$$, let $$\gamma_{i} : [0, 1] \to \mathbb{R}$$ defined as $$\forall t \in [0,1]$$, $$\gamma_{i}(t) := (1-t)x_{i} + t y_{i}$$.  
> Let $$\gamma : [0,1] \to \mathbb{R}^{n}$$ defined as $$\forall t \in [0,1]$$, $$\gamma(t) := \Big(r(t) \cos (\phi (t)),\ r(t) \sin (\phi (t)),\ \gamma_{3}(t),\ \dots ,\ \gamma_{n}(t)\Big)$$.  
> $$||\gamma(t)|| = \sqrt{\sum_{i=1}^{n} \gamma(t)_{i}^{2}}$$  
> $$||\gamma(t)|| = \sqrt{(r(t) \cos (\phi (t)))^{2}+ (r(t) \sin (\phi (t)))^{2}+ f_{3}(t)^{2},\ \dots ,\ f_{n}(t)^{2}}$$  
> $$||\gamma(t)|| = \sqrt{r(t)^{2} + \sum_{i=3}^{n}{f_{i}(t)^{2}}}$$  
> $$||\gamma(t)|| \gt 0$$, i.e: $$\gamma(t)$$ is never zero.  
> Let $$\gamma'$$ be the corestriction of $$\gamma$$ to $$\mathbb{R}^{n}\setminus \{0\}$$.  
> $$\gamma'$$ is continuous, and we have $$\gamma'(0) = x$$ and $$\gamma'(1) = y$$.  
> $$\gamma'$$ is a path between $$x$$ and $$y$$.  
> Therefore, $$\mathbb{R}^{n}\setminus \{0\}$$ is path connected.

**c) Let $$a_{1}, \ldots, a_{n} \in \mathbb{R}^{n}$$, show
that $$\mathbb{R}^{n} \setminus \left\{ a_{1}, \ldots, a_{n} \right\}$$ is path connected**.
> Pareil, géométriquement c'est pas difficile tant que la famille des $$\left\{a_{1}, \ldots, a_{n}\right\}$$ est finie 😣

2)

**a) Show that $$\mathbb{S}^1 := \left\{ (x, y) \in \mathbb{R}^2\ |\ x^{2} + y^{2} = 1 \right\}$$ is path connected**.
> Let $$a = (x_{1}, y_{1}) \in \mathbb{S}^{1}$$ and $$b = (x_{2}, y_{2}) \in \mathbb{S}^1$$.  
> Let $$\theta_{i} = \begin{cases} \arccos \left( x_{i} \right) &\quad\text{if } y_{i} \ge 0 \\ - \arccos \left( x_{i} \right) &\quad\text{if } y_{i} \lt 0 \end{cases}$$  
> Let $$\gamma : \left[ 0, 1 \right] \to \mathbb{R}^2$$ such that $$\forall t \in \left[ 0, 1 \right],\ \gamma (t) = \Big( \cos \big( (1 - t) \theta_{1} + t \theta_{2} \big),\ \sin \big( (1 - t) \theta_{1} + t \theta_{2} \big) \Big)$$  
> Since $$\forall t \in \left[0,1\right],\ \cos \big( (1-t) \theta_{1} + t \theta_{2} \big)^{2} + \sin \big( (1-t) \theta_{1} + t \theta_{2} \big)^{2} = 1$$, $$\gamma \left( \left[0,1\right] \right) \subset \mathbb{S}^1$$  
> We now consider $$\gamma' : \left[ 0, 1 \right] \to \mathbb{S}^1$$ the corestriction of $$\gamma$$ to $$\mathbb{S}^1$$.  
> $$\gamma'$$ is continuous and  
> $$ \gamma' (0) = \begin{cases} \Big( \cos \big( \arccos(x_{1}) \big),\ \sin \Big( \arccos( x_{1} ) \Big) &\quad\text{if } y_{1} \ge 0 \\ \Big( \cos \big( -\arccos(x_{1}) \big),\ \sin \big( -\arccos(x_{1}) \big) \Big) &\quad\text{if } y_{1} \lt 0 \end{cases}$$  
> $$ \gamma' (0) = \begin{cases} ( x_{1} ,\ \sqrt{1-x_{1}^2} ) &\quad\text{if } y_{1} \ge 0 \\ ( x_{1},\ - \sqrt{1 - x_{1}^2} ) &\quad\text{if } y_{1} \lt 0 \end{cases}$$  
> $$ \gamma' (0) = \begin{cases} ( x_{1} ,\ |y_{1}| ) &\quad\text{if } y_{1} \ge 0 \\ ( x_{1},\ -|y_{1}|) &\quad\text{if } y_{1} \lt 0 \end{cases}$$  
> $$ \gamma' (1) = \begin{cases} \Big( \cos \big( \arccos(x_{2}) \big),\ \sin \Big( \arccos( x_{2} ) \Big) &\quad\text{if } y_{2} \ge 0 \\ \Big( \cos \big( -\arccos(x_{2}) \big),\ \sin \big( -\arccos(x_{2}) \big) \Big) &\quad\text{if } y_{2} \lt 0 \end{cases}$$  
> $$ \gamma' (1) = \begin{cases} ( x_{2} ,\ \sqrt{1-x_{2}^2} ) &\quad\text{if } y_{2} \ge 0 \\ ( x_{2},\ - \sqrt{1 - x_{2}^2} ) &\quad\text{if } y_{2} \lt 0 \end{cases}$$  
> $$ \gamma' (1) = \begin{cases} ( x_{2} ,\ |y_{2}| ) &\quad\text{if } y_{2} \ge 0 \\ ( x_{2},\ -|y_{2}|) &\quad\text{if } y_{2} \lt 0 \end{cases}$$  
> $$ \gamma' (0) = a$$, $$ \gamma' (1) = b$$  
> $$\gamma'$$ is a path between $$a$$ and $$b$$  
> Therefore, $$\mathbb{S}^1$$ is path connected.

**b) Show that $$\left] 0, 1 \right[$$ is path connected**.
> Let $$x, y \in \left]0,1\right[$$.  
> Let $$\gamma : \left[ 0, 1 \right] \to \left]0,1\right[$$ such that $$\forall t \in \left[ 0, 1 \right],\ \gamma (t) = (1 - t) x + t y$$.  
> $$\gamma$$ is continuous, $$\gamma (0) = x$$ and $$\gamma (1) = y$$.  
> $$\gamma$$ is a path between $$x$$ and $$y$$.  
> Therefore, $$\left] 0, 1 \right[$$ is path connected.

**c) Show that $$\left] 0, 1 \right[ \setminus \left\{ \frac{1}{2} \right\}$$ is not path connected**
> Let $$x = \frac{1}{4}$$ and $$y = \frac{3}{4}$$.  
> Let $$\gamma : [0,1] \to ]0,1[$$ be a continuous map with $$\gamma (0) = x$$ and $$\gamma (1) = y$$.  
> Since $$\gamma$$ is continuous, $$\gamma(0) = \frac{1}{4}$$ and $$\gamma(1) = \frac{3}{4}$$, we can apply the Intermediate Value Theorem, giving us $$t_{0} \in [0, 1]$$ such that $$\gamma (t_{0}) = \frac{1}{2}$$.  
> $$\gamma$$ is not a map from $$]0,1[\ \setminus \ \{ \frac{1}{2} \}$$. $$\gamma$$ is not a path.  
> There is no path between $$x$$ and $$y$$.  
> Therefore, $$]0,1[\ \setminus \ \{ \frac{1}{2} \}$$ is not path connected.

### **Definition 1.2: Homeomorphism**

Let $$X, Y$$ be two topological spaces. A _homeomorphism_ $$f : X \to Y$$ is an invertible continuous map such that its
inverse $$f^{-1} : Y \to X$$ is also continuous..
We say that $$X$$ and $$Y$$ are _homeomorphic_ whenever there is such homeomorphism $$f : X \to Y$$ and we
write $$X \cong Y$$. Hence $$\cong$$ is an equivalence relation on topological spaces (if not convinced, check it!) (I
did 🫡)

3) **Show that the map $$e :\ ]0,1[\ \to \mathbb{S}^{1} \setminus \{(1,0)\}$$ defined
   by $$e(t):= \big( cost(2 \pi t), sin(2 \pi t)\big)$$ is a homeomorphism**.

> $$e$$ is continuous because both $$t \mapsto \cos(2 \pi t)$$ and $$t \mapsto \sin(2 \pi t)$$ are continuous on $$[0,1]$$.  
> Let $$f : \mathbb{S}^{1} \setminus \{(1,0)\} \to ]0,1[$$ defined as $$f((x, y)) = \begin{cases} \frac{1}{2 \pi} \arccos (x) &\quad\text{if } y \ge 0 \\ 1-\frac{1}{2 \pi} \arccos (x) &\quad\text{if } y \le 0 \end{cases}$$.  
> $$f$$ is well defined because $$\frac{1}{2 \pi} \arccos(-1) = \frac{1}{2}$$ and $$1 - \frac{1}{2 \pi} \arccos(1) = \frac{1}{2}$$.  
> $$f$$ is continuous because both $$t \mapsto \frac{1}{2 \pi} \arccos(t)$$ and $$t \mapsto 1 - \frac{1}{2 \pi} \arccos(t)$$ are continuous.  
> We have $$\forall (x,y) \in \mathbb{S}^{1}$$,  
> $$(e \circ f)((x, y)) = \begin{cases} \Big( \cos \big( 2 \pi \frac{1}{2 \pi } \arccos(x) \big), sin \big( 2 \pi \frac{1}{2 \pi} \arccos (x) \big) \Big) &\quad\text{if } y \ge 0 \\ \Big( \cos \big( -2 \pi \frac{1}{2 \pi } \arccos(x) \big), sin \big( -2 \pi \frac{1}{2 \pi} \arccos (x) \big) \Big) &\quad\text{if } y \le 0\end{cases}$$  
> $$(e \circ f)((x, y)) = \begin{cases} \Big( \cos \big( \arccos(x) \big), sin \big( \arccos (x) \big) \Big) &\quad\text{if } y \ge 0 \\ \Big( \cos \big( \arccos(x) \big), sin \big( \arccos (x) \big) \Big) &\quad\text{if } y \le 0\end{cases}$$  
> $$(e \circ f)((x, y)) = \begin{cases} \Big( x, \sqrt{1 - x^{2}} \Big) &\quad\text{if } y \ge 0 \\ \Big( x , -\sqrt{1-x^{2}} \Big) &\quad\text{if } y \le 0\end{cases}$$  
> $$(e \circ f)((x, y)) = \begin{cases} \Big( x, |y| \Big) &\quad\text{if } y \ge 0 \\ \Big( x , -|y| \Big) &\quad\text{if } y \le 0\end{cases}$$  
> $$(e \circ f)((x,y)) = (x, y)$$, i.e: $$e \circ f = id_{\mathbb{S}^{1}}$$  
> And $$\forall t \in ]0, 1[$$,  
> $$(f \circ e)(t) = \begin{cases} \frac{1}{2 \pi} \arccos \big( cos(2 \pi t) \big) &\quad\text{if } sin(2 \pi t) \ge 0 \\ 1 - \frac{1}{2 \pi} \arccos \big( cos(2 \pi t) \big) &\quad\text{if } sin(2 \pi t) \le 0 \end{cases}$$  
> Using $$\cos(2 \pi t - \pi) = -cos(2 \pi t)$$, we get  
> $$(f \circ e)(t) = \begin{cases} t &\quad\text{if } 2 \pi t \le \pi \\ 1 - \frac{1}{2 \pi} \arccos(-cos(2 \pi t - \pi)) &\quad\text{if } 2 \pi t \ge \pi \end{cases}$$  
> Using $$\arccos(-z) = \pi - \arccos(z)$$, we get  
> $$(f \circ e)(t) = \begin{cases} t &\quad\text{if } 2 \pi t \le \pi \\ 1 - \frac{1}{2 \pi} (\pi - \arccos \big( cos(2 \pi t - \pi)) \big) &\quad\text{if } 2 \pi t \ge \pi \end{cases}$$  
> $$(f \circ e)(t) = \begin{cases} t &\quad\text{if } 2 \pi t \le \pi \\ 1 - \frac{1}{2 \pi} (\pi - (2 \pi t - \pi)) &\quad\text{if } 2 \pi t \ge \pi \end{cases}$$  
> $$(f \circ e)(t) = \begin{cases} t &\quad\text{if } 2 \pi t \le \pi \\ t &\quad\text{if } 2 \pi t \ge \pi \end{cases}$$  
> $$(f \circ e)(t) = t$$, i.e: $$f \circ e = id_{]0,1[}$$.  
> We have thus $$f = e^{-1}$$, $$e$$ is a homeomorphism.

4) **Let $$X \cong Y$$ be two homeomorphic spaces, show that $$X$$ is path connected iif $$Y$$ is**.

> Part 1: $$X$$ is path connected $$\Rightarrow Y$$ is path connected:  
> Let $$y_{1}, y_{2} \in Y$$ be twe points of $$Y$$.  
> Since $$Y \cong X$$, there is $$f: Y \to X$$ an homeomorphism between $$Y$$ and $$X$$.  
> Since both $$f(y_{1})$$ and $$f(y_{2})$$ are points of $$X$$ and $$X$$ is connected, there is a path $$\gamma : [0,1] \to X$$ such that $$\gamma(0) = f(y_{1})$$ and $$\gamma(1) = f(y_{2})$$.  
> We define $$\delta : [0,1] \to Y$$ as $$\forall t \in [0, 1],\ \delta(t) := f^{-1}(\gamma(t))$$.  
> $$\delta$$ is continuous because it is a composition of continuous maps, $$\delta(0) = f^{-1}(\gamma(0)) = f^{-1}(f(y_{1})) = y_{1}$$ and $$\delta(1) = f^{-1}(f(y_{2})) = y_{2}$$.  
> $$\delta$$ is a path from $$y_{1}$$ to $$y_{2}$$.  
> Therefore, $$Y$$ is path connected.  
> Part 2: $$Y$$ is path connected $$\Rightarrow Y$$ is path connected:  
> Since $$\cong$$ is symmetrical, we can replace $$X$$ by $$Y$$ and $$Y$$ by $$X$$ and it follows that $$X$$ is path connected.

5) **Show that if $$f : X \to Y$$ is a homeomorphism, then for any $$x \in X$$ it induces an homeomorphism $$X
   \setminus \{x\} \to Y \setminus \{f(x)\}$$**.

> We consider $$f_{|X \setminus \{x\}}$$ the restriction of $$f$$ to $$X \setminus \{x\}$$.  
> Since $$f$$ is injective, $$f(\{x\})$$ has at most one element in $$Y$$ ($$\{f(x)\}$$) and $$f(X \setminus \{x\}) = Y \setminus \{f(x)\}$$.  
> We can corestrict $$f_{|X \setminus \{x\}}$$ to its image $$f_{X \setminus \{x\}}(X \setminus \{x\}) = Y \setminus \{f(x)\}$$ and we denote the corestriction by $$f_{|X \setminus \{x\}}'$$.  
> We first prove that $$f_{|X \setminus \{x\}}' : X \setminus \{x\} \to Y \setminus \{f(x)\}$$ is injective.  
> Let $$x_{1}, x_{2} \in X \setminus \{x\}$$.  
> If $$f_{|X \setminus \{x\}}'(x_{1}) = f_{|X \setminus \{x\}}'(x_{2})$$, then by definition of $$f_{|X \setminus \{x\}}'$$, $$f(x_{1}) = f(x_{2})$$, and $$x_{1} = x_{2}$$ by injectivity of $$f$$, i.e: $$f_{|X \setminus \{x\}}'$$ is injective.  
> $$f_{|X \setminus \{x\}}'$$ is surjective by definition.  
> $$f_{|X \setminus \{x\}}'$$ is continuous because $$f$$ is.

6) **Deduce from the previous questions that $$\mathbb{S}^{1} \setminus \{(1,0)\}$$ is path connected
   and $$\mathbb{S}^{1} \setminus \{(1, 0), (−1, 0)\}$$ is not**.

> Using 3), we showed that $$]0,1[\ \overset{e}{\cong} \mathbb{S}^{1} \setminus \{(1,0)\}$$.  
> Since $$]0,1[$$ is path connected (from 2)b)), using 4) we have that $$\mathbb{S}^{1} \setminus \{(1,0)\}$$ is path connected.  
> Using 5) with $$x = \frac{1}{2} \in ]0,1[$$ and $$e(\frac{1}{2}) = (-1,0)$$, we get that $$e$$ induces a homeomorphism $$e' : ]0,1[\ \setminus \ \{\frac{1}{2}\} \to \mathbb{S}^{1} \setminus \{(1, 0), (-1,0)\}$$.  
> Since $$]0,1[\ \setminus \ \{\frac{1}{2}\}$$ is not path connected (from 2)c)), using 5) we have that $$\mathbb{S}^{1} \setminus \{(1, 0), (−1, 0)\}$$ is not path connected.

7) **Deduce similarly that $$\mathbb{S}^{1}$$ is not homeomorphic to any $$\mathbb{R}^{n}$$**.

> For $$n \ge 2$$, let $$f : \mathbb{S}^{1} \to \mathbb{R}^{n}$$ be a map and $$x = (1,0), y = (-1,0)$$ two elements of $$\mathbb{S}^{1}$$. We define $$f' : \mathbb{S}^{1} \setminus \{x, y\} \to \mathbb{R}^{n} \setminus \{f(x),f(y)\}$$ the restriction of $$f$$ to $$\mathbb{S}^{1} \setminus \{x,y\}$$.  
> Since $$\mathbb{S}^{1} \setminus \{x,y\}$$ is not connected (from 6) and $$\mathbb{R}^{n} \setminus \{e(x), e(y)\}$$ is (from 1)c)), $$f'$$ cannot be a homeomorphism (from the contraposition of 4)).  
> And finally, from the contraposition of 5, $$f$$ is not a homeomorphism, i.e: $$\mathbb{S}^{1}$$ is not homeomorphic to $$\mathbb{R}^{n}$$.  
> For $$n = 1$$, let $$f : \mathbb{S}^{1} \to \mathbb{R}$$ be a map and $$x = (1,0)$$ an element of $$\mathbb{R}$$. We define $$f' : \mathbb{S}^{1} \setminus \{x\} \to \mathbb{R} \setminus \{0\}$$ defined as $$\forall s \in \mathbb{S}^{1}$$, $$f'(s) = f(s) - f(x)$$ and we have $$f'(x) = 0$$.  
> Since $$\mathbb{S}^{1} \setminus \{x\}$$ is path connected (from 6) but $$\mathbb{R} \setminus \{0\}$$ isn't (from 1)b)), $$f'$$ cannot be an homeomorphism (from the contraposition of 4)).  
> And finally, from the contraposition of 5, $$f$$ is not a homeomorphism, i.e: $$\mathbb{S}^{1}$$ is not homeomorphic to $$\mathbb{R}$$.  
> Therefore, $$\mathbb{S}^{1}$$ is not homeomorphic to any $$\mathbb{R}^{n}$$.

These first questions illustrated that the connectedness of a space is an interesting property which is
invariant by homeomorphism. Hence it may help to know whether two spaces are homeomorphic or not.
However, this method will become quickly limited in order to compare more complex spaces such as higher
spheres. We now define the notion of homotopy, which is to paths what paths are to points, that is, paths
between paths.

### **Definition 1.3: Homotopy of paths**

Let $$X$$ be a space and $$\alpha, \beta : [0, 1] \to X$$ be two paths from $$x$$ to $$y$$. A (fixed endpoints) homotopy
between $$\alpha$$ and $$\beta$$ is the data of a map $$H : [0,1]^{2} \to X$$ such that

* $$\forall t, H (0, t) = \alpha (t)$$ and $$H(1, t) = \beta (t)$$
* $$\forall s, H(s, 0) = x$$ and $$H(s, 1) = y$$

We write $$\alpha \sim \beta$$ when they are _homotopic_, that is when there is an homotopy between them.

8) **Let $$X$$ be a space and $$x, y \in X$$, show that $$\sim$$ induces an equivalence relation on paths of $$X$$
   from $$x$$ to $$y$$**.
   >

### **Definition 1.4: Concatenation of paths**

Let $$X$$ be a space, let $$\alpha : x \to y$$ and $$\beta : y \to z$$ be two paths in $$X$$. Their
concatenation $$\alpha * \beta$$ is the path defined by.
$$ (\alpha * \beta) (s) = \alpha (2s)$$ if $$s \le \frac{1}{2}$$ and $$(\alpha * \beta) (s) = \beta (2s - 1)$$
if $$s \ge \frac{1}{2}$$.

9) **Let $$X$$ be a topological space. For any $$x \in X$$, we denote $$c_{x}$$ the constant path $$x \to x$$**.

**a) Let $$\alpha : x \to y$$ be a path. Show that $$c_{x} * \alpha \sim \alpha$$ and $$\alpha * c_{x} \sim \alpha$$.**

**b) Let $$\alpha : w \to x$$, $$\beta : x \to y$$, $$\gamma : y \to z$$ three paths in $$X$$. Show
that $$(\alpha * \beta) * \gamma \sim \alpha * (\beta * \gamma)$$.**

**c) Let $$\alpha : x \to y$$ be a path, exhibit a path $$\beta : y \to x$$ such that $$\alpha * \beta \sim c_{x}$$
and $$\beta * \alpha \sim c_{y}$$.**

**d) Let $$x \in X$$. Deduce that $$*$$ induces a group structure on homotopy classes of loops $$x \to x$$ in $$X$$,
that is, on $$\{ \gamma : x \to x \}_{/\sim}$$.**

### **Definition 1.5: Fundamental Group**

For $$X$$ a space and $$x$$ a point of $$X$$, we denote $$\pi_{1}(X, x)$$ the group defined in question 9 _d_. We call
it the _fundamental group of $$X$$ at $$x$$_.

10) **Let $$f : X \to Y$$ be an homeomorphism. Show that $$\pi_{1}(X, x) \simeq \pi_{1}(Y, f(x))$$ are isomorphic
    as groups.**

We now turn to the computation of $$\pi_{1}(\mathbb{S}^{1}, (1, 0))$$. In the following we identify $$\mathbb{S}^{1}$$
with the complex unit circle $$\mathbb{U} = \{z \in \mathbb{C} |\ |z| = 1\}$$, and denote $$exp$$ the
map $$ s \mapsto e^{i s} : \mathbb{R} \to \mathbb{S}^{1}$$. We first aim to shew the following lemma:

### **Lemma 1.6: Lifting theorem**

Let $$a \le b \in \mathbb{R}$$ and $$f : [a, b] \in \mathbb{S}^{1}$$ be a continuous map, there is a continuous
map $$\hat{f} : [a, b] \to \mathbb{R}$$ such that $$exp \circ \hat{f} = f$$.

11)

**a) Let $$a \le b$$ and suppose $$f : [a, b] \to \mathbb{S}^{1}$$ misses a point (say $$1$$). Show using question 3
that $$f$$ admits such a lift $$\hat{f} : [a, b] \to \mathbb{R}$$**.

**b) Let $$a \le b$$ and consider any continuous map $$f : [a, b] \to \mathbb{S}^{1}$$. Show that we may split the
interval $$[a, b]$$ as $$a = a_{0} \le a_{1} \le \dots \le a_{N} = b$$ such that for
each $$i \lt N$$, $$f_{i} := f|_{[a_{i},a{i+1}]} : [a_{i},a_{i+1}] \to \mathbb{S}^{1}$$ avoids one point. By 11 _a_,
each of them admits a lift $$\hat{f_{i}} : [a_{i},a_{i+1}] \to \mathbb{R}$$. Show that we may assure for
each $$i \lt \ N - 1$$, $$\hat{f_{i}}(a_{i+1}) = \hat{f_{i+1}}(a_{i+1})$$. Conclude that $$f$$ admits a lift $$\hat{f}$$
which achieves the proof of Lemma 1.6**

We then admit the following variant of _Lemma_ 1.6 which may be proven similarly by cutting $$[0,1]^{2}$$ in cute little
squares

### **Lemma 1.7: Lifting theorem 2**

Let $$f : [0, 1]^{2} \to \mathbb{S}^{1}$$ be a continuous map, there is a continuous
map $$\hat{f} : [0,1]^{2} \to \mathbb{R}$$ such that $$exp \circ \hat{f} = f$$

12) **We now compute $$\pi_{1}(\mathbb{S}^{1}, 1)$$**.

**a) Let $$\gamma : 1 \in 1$$ be a loop in $$\mathbb{S}^{1}$$ (seen as $$\mathbb{U} \subseteq \mathbb{C}$$). Using
the lifting lemma, we consider a lift $$\hat{\gamma} : [0,1] \to \mathbb{R}$$ of $$\gamma$$. We then define
the _index_ of $$\gamma$$ to be $$ind(\gamma) := |\hat{\gamma}(1)-\hat{\gamma}(0)|$$. Show that $$ind(\gamma)$$ does
not depend on the choice of the lift $$\hat{\gamma}$$**.

**b) Show that if $$\gamma \sim \delta$$ are two homotopic loops $$1 \to 1$$ in $$\mathbb{S}^{1}$$,
then $$ind(\gamma) = ind(\delta)$$**.

**c) Show that $$ind(c_{1}) = 0$$ and $$ind(\gamma * \delta) = ind(\gamma) + ind(\delta)$$**.

**d) Deduce from the previous subquestions that $$ind$$ induces a group morphism still denoted $$ind : \pi_{1}(
\mathbb{S}^{1}, 1) \to \mathbb{Z}$$**.

**e) Show that $$ind$$ is surjective**.

**f) Let $$\gamma, \delta$$ be such that $$ind(\gamma) = ind(\delta)$$. Show that we may choose $$\hat{\gamma},
\hat{\delta}$$ such that $$\hat{\gamma}(0) = \hat{\delta}(0) = 0$$ and $$\hat{\gamma}(1) = \hat{\delta}(
1)$$. Find a homotopy betwee $$\hat{\gamma}$$ and $$\hat{\delta}$$. Deduce that $$\gamma \sim
\delta$$. Deduce that $$ind : \pi_{1}(\mathbb{S}^{1}, 1) \to \mathbb(Z)$$ is injective**.

**g) Conclude**

13) Let $$n \in \mathbb{N}$$, compute $$\pi_{1}(\mathbb{R}^{n})$$ and conclude again
    that $$\mathbb{S}^{1} \ncong \mathbb{R}^{n}$$

14) Explain why we expect $$\pi_{1}(\mathbb{S}^{2}) = \{ * \}$$ where $$\pi_{1}(\mathbb{S}^{2})$$ is the unit sphere
    in $$\mathbb{R}^{3}$$. Admitting it, deduce that $$\mathbb{S}^{1} \ncong \mathbb{S}^{2}$$

### **Definition 1.8: Homotopy of maps**

Let $$f, g : X \to Y$$ be two continuous maps. A _homotopy_ between $$f$$ and $$g$$ is the data of a continuous map $$
H : [0, 1] \times X \to Y$$ such that for $$x \in X$$, $$H(0, x) = f(x)$$ and $$H(1, x) = g(x)$$. We write $$f \sim g$$
when they are _homotopic_, that is when there is an homotopy between them

15)

**a) Let $$f : X \to Y$$ be a continuous map and $$x \in X$$. Show that the
application $$\gamma \mapsto f \circ \gamma$$ which sens loops at $$x$$ in $$X$$ to loops at $$f(x)$$ in $$Y$$ induces a
group morphism denoted $$\pi_{1}(id_{x}, x) = id_{\pi_{1}(X, x)}$$**.

**b) Show that for $$x$$ a point of space $$X$$, $$\pi_{1}(id_{x}, x) = id_{pi_{1}(X, x)}$$**.

**c) Show that for composable continuous maps $$X \overset{f}{\to } Y \overset{g}{\to } Z$$, and $$x \in X$$ we have $$
\pi_{1}(g \circ f, x) = \pi_{1}(g, f(x)) \circ \pi_{1}(f, x)$$**

### **Definition 1.9: Homotopy equivalence**

Let $$f: X \to Y$$ be a continuous map. It is said to be a _homotopy equivalence_ iif there is a homotopy inverse
map $$g: Y \to X$$ of $$f$$ that is such that $$g \circ f \sim id_{X}$$ and $$f \circ g \sim id_{Y}$$. We
write $$X \simeq Y$$ when they are homotopy equivalence. That is when there is a homotopy equivalence between them

16) **Deduce from question 15 that if $$f : X \to Y$$ is a homotopy equivalence and $$x \in X$$,
    then $$\pi_{1}(f, x) : \pi_{1}(X, x) \to \pi_{1}(Y, f(x))$$ is a group isomorphism**

18) **Show that for any $$n \in \mathbb{N}$$, $$\mathbb{R}^{n}$$ is homotopy equivalent to a point and not
    to $$\mathbb{S}^{1}$$. Show also that $$\mathbb{S}^{1}$$ is not homotopy equivalent to $$\mathbb{S}^{2}$$**

## Part 2: Brouwer's Fixed Point Theorem

In this section, we show the following theorem, using the tools defined in Part 1. We denote by $$\mathbb{B}^{n}$$ the
closed unit ball of $$\mathbb{R}^{n}$$, that is $$\mathbb{B}^{n} := \{ (x_{1}, \dots, x_{n}) \in \mathbb{R}^{n} | x_
{1}^{2} + \dots + x_{n}^{2} \le 1 \}$$. Then $$\mathbb{S}^{n}$$ is the boundary of $$\mathbb{B}^{n+1}$$

### **Theorem 2.1: Fixed Point (Brouwer)**

Let $$f : {\mathbb{B}^{2}} \to {\mathbb{B}^{2}}$$ be a map from the unit disk to itself, then $$f$$ admits a fixed point

In order to prove the theorem, we will make use of the following lemma

### **Lemma 2.2: Non retraction of the disk on its boundary**

There is no continuous map $$r : \mathbb{B}^{2} \to \mathbb{S}^{1}$$ which restricts to the identity
on $$\mathbb{S}^{1}$$

1) **We prove Lemma 2.2. Consider such a map $$r : \mathbb{B}^{2} \to \mathbb{S}^{1}$$**.

**a) Remark that $$r \circ \iota = id_{\mathbb{S}^{1}}$$, where $$\iota : \mathbb{S}^{1} \to \mathbb{B}^{2}$$ is the
inclusion of the unit circle into the unit disk. Deduce from the first section
that $$\pi_{1}(id_{\mathbb{S}^{1}}, (1, 0)) = \pi_{1}(r, (1, 0)) \circ \pi_{1}(\iota, (1, 0))$$ must be the null
morphism $$\mathbb{Z} \to \mathbb{Z}$$**.

**b) Deduce an absurdity 😣**

We then prove Theorem 2.1 by an _evil_ contradiction 👿 (This requires the excluded middle, which is very bad logical
taste)

2) **Let $$f : \mathbb{B}^{2} \to \mathbb{B}^{2}$$ be a continuous map, and assume by contradiction that it does not
   have any fixed point. Consider the map $$r: \mathbb{B}^{2} \to \mathbb{S}^{1}$$ defined as follows:
   for $$x \in \mathbb{B}^{2}$$, $$r(x)$$ is the unique intersection of the ray (half line) $$]f(x),x)$$ with the unit
   circle $$\mathbb{S}^{1}$$. Formally, $$r(x) = f(x) + \lambda(x)(x-f(x))$$ for the unique $$\lambda(x) \gt 0$$ such
   that $$r(x) \in \mathbb{S}^{1}$$**.

**a) Make a drawing illustrating a point $$x, f(x)$$ and $$r(x)$$ (yes, this is important!)** I did my best 🫡.
**b) Show that $$\lambda$$ is well defined and continuous. Deduce that $$r$$ is continuous**.
**c) Conclude using Lemma 2.2**.
