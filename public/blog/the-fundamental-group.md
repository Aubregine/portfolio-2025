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

**a) Show that $$\R^{n}$$ is path connected**.

> Let $$x, y \in \R^{n}$$.  
> Let $$\gamma : [ 0, 1 ] \to \R^{n}$$ such that $$\forall t \in [ 0, 1 ],\ \gamma (t) = (1 - t) x + t y$$.  
> $$\gamma$$ is continuous, $$\gamma (0) = x$$ and $$\gamma (1) = y$$.  
> $$\gamma$$ is a path between $$x$$ and $$y$$.  
> Therefore, $$\R^{n}$$ is path connected.

**b) For $$n \ge 2$$, show that $$\R^{n} \setminus \{ 0 \} $$ is path connected**.
> Let $$x, y \in \R^{n} \setminus \{0\}$$.  
> Let $$P$$ be a plane containing both $$x$$ and $$y$$. We identify $$\R^{n} \setminus \{0\} = P \times \R^{n-2} \setminus \{0\}$$ with $$\mathbb{C} \times \R^{n-2} \setminus \{0\}$$.   
> Let $$\theta_{x}, \theta_{y} \in [0, 2 \pi[$$ be their argument in $$P$$, and $$r_{x}, r_{y} \in \R_{+}^{\star}$$ their module in $$P$$. Note that both $$r_{x}$$ and $$r_{y}$$ are non zero.  
> Let $$\gamma : [0,1] \to \mathbb{C} \times \R^{n-2}$$ defined as $$\forall t \in [0,1]$$, $$\gamma(t):= \big(((1-t)r_{x} + tr_{y})e^{i ((1-t) \theta_{x} + t \theta_{y})}, 0, \dots, 0\big)$$.  
> Since $$\gamma$$ is continuous (as a composition and product of continuous maps), never zero and $$\gamma(0) = x$$ and $$\gamma(1) = y$$, $$\gamma$$ is a path between $$x$$ and $$y$$.  
> Therefore, $$\R \setminus \{0\}$$ is path connected.

**c) Let $$a_{1}, \ldots, a_{n} \in \R^{n}$$, show
that $$\R^{n} \setminus \{ a_{1}, \ldots, a_{n} \}$$ is path connected**.
> Pareil, géométriquement c'est pas difficile tant que la famille des $$\{a_{1}, \ldots, a_{n}\}$$ est finie 😣

2)

**a) Show that $$\mathbb{S}^1 := \{ (x, y) \in \R^2\ |\ x^{2} + y^{2} = 1 \}$$ is path connected**.
> Let $$a = (x_{1}, y_{1}) \in \mathbb{S}^{1}$$ and $$b = (x_{2}, y_{2}) \in \mathbb{S}^1$$.  
> Let $$\theta_{i} = \begin{cases} \arccos \( x_{i} ) &\quad\text{if } y_{i} \ge 0 \\ - \arccos \( x_{i} ) &\quad\text{if } y_{i} \lt 0 \end{cases}$$  
> Let $$\gamma : [ 0, 1 ] \to \R^2$$ such that $$\forall t \in [ 0, 1 ],\ \gamma (t) = \Big( \cos \big( (1 - t) \theta_{1} + t \theta_{2} \big),\ \sin \big( (1 - t) \theta_{1} + t \theta_{2} \big) \Big)$$  
> Since $$\forall t \in [0,1],\ \cos \big( (1-t) \theta_{1} + t \theta_{2} \big)^{2} + \sin \big( (1-t) \theta_{1} + t \theta_{2} \big)^{2} = 1$$, $$\gamma \( [0,1] ) \subset \mathbb{S}^1$$  
> We now consider $$\gamma' : [ 0, 1 ] \to \mathbb{S}^1$$ the corestriction of $$\gamma$$ to $$\mathbb{S}^1$$.  
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

**b) Show that $$]0,1[$$ is path connected**.
> Let $$x, y \in ]0,1[$$.  
> Let $$\gamma : [0,1] \to ]0,1[$$ such that $$\forall t \in [ 0, 1 ]$$, $$\gamma (t) = (1-t)x + ty$$.  
> $$\gamma$$ is continuous, $$\gamma (0) = x$$ and $$\gamma (1) = y$$.  
> $$\gamma$$ is a path between $$x$$ and $$y$$.  
> Therefore, $$]0,1[$$ is path connected.

**c) Show that $$]0,1[\ \setminus\ \{ \frac{1}{2} \}$$ is not path connected**
> Let $$x = \frac{1}{4}$$ and $$y = \frac{3}{4}$$.  
> Let $$\gamma : [0,1] \to ]0,1[\ \setminus\ \{ \frac{1}{2} \}$$ such that $$\gamma(0) = x$$ and $$\gamma(1) = y$$.  
> Since we have $$x, y \in \gamma([0,1]) \subset\ ]0,1[\ \setminus\ \{ \frac{1}{2} \}$$ and $$\frac{1}{2} \in [x, y]$$, $$\gamma([0,1])$$ can't be a segment, and using the intermediate value theorem contraposition, $$\gamma$$ can't be continuous.  
> Therefore, $$]0,1[\ \setminus\ \{ \frac{1}{2} \}$$ is not path connected.

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
> $$f$$ is continuous because both $$t \mapsto \frac{1}{2 \pi} \arccos(t)$$ and $$t \mapsto 1 - \frac{1}{2 \pi} \arccos(t)$$ are continuous, and $$\frac{1}{2 \pi} \arccos(-1) = \frac{1}{2}$$ and $$1 - \frac{1}{2 \pi} \arccos(1) = \frac{1}{2}$$.    
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
> Let $$y_{1}, y_{2} \in Y$$ be two points of $$Y$$.  
> Since $$Y \cong X$$, there is $$f: Y \to X$$ a homeomorphism between $$Y$$ and $$X$$.  
> Since both $$f(y_{1})$$ and $$f(y_{2})$$ are points of $$X$$ and $$X$$ is connected, there is a path $$\gamma : [0,1] \to X$$ such that $$\gamma(0) = f(y_{1})$$ and $$\gamma(1) = f(y_{2})$$.  
> We define $$\delta : [0,1] \to Y$$ as $$\forall t \in [0, 1],\ \delta(t) := (f^{-1}\circ\gamma)(t)$$.  
> $$\delta$$ is continuous because it is a composition of continuous maps, $$\delta(0) = f^{-1}(\gamma(0)) = f^{-1}(f(y_{1})) = y_{1}$$ and $$\delta(1) = f^{-1}(f(y_{2})) = y_{2}$$.  
> $$\delta$$ is a path from $$y_{1}$$ to $$y_{2}$$.  
> Therefore, $$Y$$ is path connected.  
> Part 2: $$Y$$ is path connected $$\Rightarrow X$$ is path connected:  
> Since $$\cong$$ is symmetrical, we can replace $$X$$ by $$Y$$ and $$Y$$ by $$X$$ and it follows that $$X$$ is path connected.

5) **Show that if $$f : X \to Y$$ is a homeomorphism, then for any $$x \in X$$ it induces an homeomorphism $$X
   \setminus \{x\} \to Y \setminus \{f(x)\}$$**.

> We consider $$f_{|X \setminus \{x\}}$$ the restriction of $$f$$ to $$X \setminus \{x\}$$.  
> Since $$f$$ is injective, $$f^{-1}(\{f(x)\})$$ has at most one element in $$X$$ : $$x$$ and $$f(X \setminus \{x\}) = Y \setminus \{f(x)\}$$.  
> We can corestrict $$f_{|X \setminus \{x\}}$$ to its image $$f_{|X \setminus \{x\}}(X \setminus \{x\}) = Y \setminus \{f(x)\}$$ and we denote the corestriction by $$f_{|X \setminus \{x\}}'$$.  
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

7) **Deduce similarly that $$\mathbb{S}^{1}$$ is not homeomorphic to any $$\R^{n}$$**.

> For $$n \ge 2$$, let $$f : \mathbb{S}^{1} \to \R^{n}$$ be a map and $$x = (1,0), y = (-1,0)$$ two elements of $$\mathbb{S}^{1}$$.  
> We define $$f' : \mathbb{S}^{1} \setminus \{x, y\} \to \R^{n} \setminus \{f(x),f(y)\}$$ the restriction of $$f$$ to $$\mathbb{S}^{1} \setminus \{x,y\}$$.  
> Since $$\mathbb{S}^{1} \setminus \{x,y\}$$ is not connected (from 6) and $$\R^{n} \setminus \{e(x), e(y)\}$$ is (from 1)c)), $$f'$$ cannot be a homeomorphism (from the contraposition of 4)).  
> And finally, from the contraposition of 5, $$f$$ is not a homeomorphism, i.e: $$\mathbb{S}^{1}$$ is not homeomorphic to $$\R^{n}$$.  
> For $$n = 1$$, let $$f : \mathbb{S}^{1} \to \R$$ be an injective map and $$x = (1,0)$$ an element of $$\mathbb{S}^{1}$$. Since $$f$$ is injective, $$f^{-1}(\{f(x)\})$$ has at most one element in $$\mathbb{S}^{1}$$ : $$x$$. We define $$f' : \mathbb{S}^{1} \setminus \{x\} \to \R \setminus \{0\}$$ as $$\forall s \in \mathbb{S}^{1}$$, $$f'(s) := f(s) - f(x)$$.  
> Since $$\mathbb{S}^{1} \setminus \{x\}$$ is path connected (from 6) but $$\R \setminus \{0\}$$ isn't (from 1)b)), $$f'$$ cannot be an homeomorphism (from the contraposition of 4)).  
> And finally, from the contraposition of 5, $$f$$ is not a homeomorphism, i.e: $$\mathbb{S}^{1}$$ is not homeomorphic to $$\R$$.  
> For n = 0, $$\R^{0}$$ has only one element, therefore it cannot be homeomorphic to $$\mathbb{S}^{1}$$ that has at least two.  
> Therefore, $$\mathbb{S}^{1}$$ is not homeomorphic to any $$\R^{n}$$.

These first questions illustrated that the connectedness of a space is an interesting property which is
invariant by homeomorphism. Hence it may help to know whether two spaces are homeomorphic or not.
However, this method will become quickly limited in order to compare more complex spaces such as higher
spheres. We now define the notion of homotopy, which is to paths what paths are to points, that is, paths
between paths.

### **Definition 1.3: Homotopy of paths**

Let $$X$$ be a space and $$\alpha, \beta : [0, 1] \to X$$ be two paths from $$x$$ to $$y$$. A (fixed endpoints) homotopy
between $$\alpha$$ and $$\beta$$ is the data of a continuous map $$H : [0,1]^{2} \to X$$ such that

* $$\forall t, H (0, t) = \alpha (t)$$ and $$H(1, t) = \beta (t)$$
* $$\forall s, H(s, 0) = x$$ and $$H(s, 1) = y$$

We write $$\alpha \sim \beta$$ when they are _homotopic_, that is when there is an homotopy between them.

8) **Let $$X$$ be a space and $$x, y \in X$$, show that $$\sim$$ induces an equivalence relation on paths of $$X$$
   from $$x$$ to $$y$$**.

> We first prove that $$\sim$$ is reflexive.  
> Let $$\alpha$$ be a path from $$x$$ to $$y$$.  
> We define $$H : [0,1]^{2} \to X$$ as $$\forall (t, s) \in [0,1]^{2},\ H(s,t) := \alpha(t)$$.  
> We have then:  
> $$H$$ is continuous,  
> $$\forall t \in [0,1]$$, $$H(0, t) = \alpha(t)$$ and $$H(1,t) = \alpha(t)$$  
> $$\forall s \in [0,1]$$, $$H(s, 0) = \alpha(0) = x$$ and $$H(s,1) = \alpha(1) = y$$  
> $$H$$ is a homotopy between $$\alpha$$ and $$\alpha$$, i.e: $$\alpha \sim \alpha$$.  
> We now prove that $$\sim$$ is symmetric.  
> Let $$\alpha$$ and $$\beta$$ be two paths from $$x$$ to $$y$$.  
> Let $$H$$ be a homotopy between $$\alpha$$ and $$\beta$$.  
> We define $$H': [0,1]^{2} \to X$$ as $$\forall (t,s) \in [0,1]^{2}$$, $$H'(s,t) := H(1-s,t)$$.  
> We have then:  
> $$H'$$ is continuous,  
> $$\forall t \in [0,1]$$, $$H'(0, t) = H(1, t) = \beta(t)$$ and $$H'(1,t) = H(0,t) = \alpha(t)$$  
> $$\forall s \in [0,1]$$, $$H'(s, 0) = H(1-s, 0) = x$$ and $$H'(s,1) = H(1-s,1) = y$$  
> $$H'$$ is an homotopy between $$\beta$$ and $$\alpha$$, i.e: $$\alpha \sim \beta \Rightarrow \beta \sim \alpha$$.  
> We now prove that $$\sim$$ is transitive.  
> Let $$\alpha$$, $$\beta$$ and $$\gamma$$ be three paths from $$x$$ to $$y$$.  
> Let $$H_{1}$$ be a homotopy between $$\alpha$$ and $$\beta$$ and $$H_{2}$$ be a homotopy between $$\beta$$ and $$\gamma$$.  
> We define $$f_{1} : [0, \frac{1}{2}] \times [0, 1] \to X$$ as $$\forall (s,t) \in [0, \frac{1}{2}],\ f_{1}(s,t) := H_{1}(2s,t)$$.  
> We define $$f_{2} : [\frac{1}{2}, 1] \times [0, 1] \to X$$ as $$\forall (s,t) \in [\frac{1}{2}, 1],\ f_{2}(s,t) := H_{2}(2s - 1,t)$$.  
> Since $$[0, \frac{1}{2}] \times [0, 1]$$ and $$[\frac{1}{2}, 1] \times [0, 1]$$ are closed and their union is $$[0,1]^{2}$$, and $$f_{1}$$ and $$f_{2}$$ are continuous, and $$\forall (s,t) \in [0, \frac{1}{2}] \times [0, 1] \cap [\frac{1}{2}, 1] \times [0, 1]$$, $$f_{1}(s, t) = H_{1}(1, t) = \beta(t) = H_{2}(0, t) = f_{2}(s, t)$$, there exist a unique continuous map $$H: [0,1]^{2} \to X$$ such that $$H_{|[0, \frac{1}{2}] \times [0,1]} = f_{1}$$ and $$H_{|\frac{1}{2}, 1] \times [0, 1]} = f_{2}$$.  
> We have then:  
> $$\forall t \in [0,1]$$, $$H(0, t) = \alpha(t)$$ and $$H(1,t) = \gamma(t)$$  
> $$\forall s \in [0,1]$$, $$H(s, 0) = \begin{cases} H_{1}(2s, 0) = x & \text{if } s \le \frac{1}{2} \\ H_{2}(2s - 1,0) = x & \text{if } s \ge \frac{1}{2} \end{cases}$$ and $$H(s, 1) = \begin{cases} H_{1}(2s, 1) = y & \text{if } s \le \frac{1}{2} \\ H_{2}(2s - 1,1) = y & \text{if } s \ge \frac{1}{2} \end{cases}$$  
> $$H$$ is a homotopy between $$\alpha$$ and $$\gamma$$, i.e: $$\alpha \sim \beta \wedge \beta \sim \gamma \Rightarrow \alpha \sim \gamma$$.  
> Therefore, $$\sim$$ is an equivalence relation on paths of $$X$$ from $$x$$ to $$y$$.

### **Definition 1.4: Concatenation of paths**

Let $$X$$ be a space, let $$\alpha : x \to y$$ and $$\beta : y \to z$$ be two paths in $$X$$. Their
concatenation $$\alpha * \beta$$ is the path defined by.
$$ (\alpha * \beta) (s) = \alpha (2s)$$ if $$s \le \frac{1}{2}$$ and $$(\alpha * \beta) (s) = \beta (2s - 1)$$
if $$s \ge \frac{1}{2}$$.

9) **Let $$X$$ be a topological space. For any $$x \in X$$, we denote $$c_{x}$$ the constant path $$x \to x$$**.

**a) Let $$\alpha : x \to y$$ be a path. Show that $$c_{x} * \alpha \sim \alpha$$ and $$\alpha * c_{x} \sim \alpha$$.**

> We first prove that $$c_{x} * \alpha \sim \alpha$$.  
> Let $$\phi : [0, 1]^{2} \to \R$$ be defined as $$\forall (t, s) \in [0,1]^{2}$$, $$\phi (s, t) := (1-s)(2t-1) + st$$.
> $$\phi$$ is continuous on $$[0, 1]^{2}$$ as a polynomial of degree 2, and $$\forall (s, t) \in [0,1]^{2}$$, $$\phi (s, t) \le 1$$.  
> Let $$\phi' : [0,1]^{2} \to [0, 1]$$ be defined as $$\forall (s, t) \in [0,1]^{2}$$, $$\phi'(s,t) := max(0, \phi(s, t))$$. $$\phi'$$ is continuous on $$[0,1]^{2}$$ as a composition of $$\phi$$ and $$t \mapsto \max(0, t)$$, both continuous.  
> Let $$H : [0,1]^{2} \to X$$ be defined as $$\forall (s, t) \in [0,1]^{2}$$, $$H(s, t) := (\alpha \circ \phi')(t) = \alpha(max(0, (1-s)(2t-1) + st))$$.  
> We have then:  
> $$H$$ is continuous, as a composition of two continuous maps, and $$\forall t \in [0,1]$$,  
> $$H(0, t) = \alpha(max(0, 2t - 1)) = \begin{cases} 0 & \text{if } t \le \frac{1}{2} \\ 2t - 1 & \text{if } t \ge \frac{1}{2} \end{cases}$$  
> $$H(0, t) = (c_{x} * \alpha)(t)$$  
> $$H(1, t) = \alpha(max(0, t)) = \alpha(t)$$  
> and $$\forall s \in [0,1]$$,  
> $$H(s, 0) = \alpha(0) = x$$ and $$H(s,1) = \alpha(1) = y$$.  
> $$H$$ is a homotopy between $$c_{x} * \alpha$$ and $$\alpha$$, i.e: $$\alpha \circ c_{x} \sim \alpha$$.  
> We now prove that $$\alpha * c_{y} \sim \alpha$$.  
> Let $$\phi : [0,1]^{2} \to \R$$ be defined as $$\forall (t,s) \in [0,1]^{2}$$, $$\phi (s,t) := (1-s)2t + st$$.  
> $$\phi$$ is continuous on $$[0,1]^{2}$$ as a polynomial of degree 2, and $$\forall (s,t) \in [0,1]^{2}$$, $$\phi (s,t) \ge 0$$.  
> Let $$\phi' : [0,1]^{2} \to [0,1]$$ be defined as $$\forall (s,t) \in [0,1]^{2}$$, $$\phi'(s,t) := min(1,\phi(s,t))$$. $$\phi'$$ is continuous on $$[0,1]^{2}$$ as a composition of $$\phi$$ and $$t \mapsto \min(1, t)$$, both continuous.  
> Let $$H : [0,1]^{2} \to X$$ be defined as $$\forall (s, t) \in [0,1]^{2}$$, $$H := (\alpha \circ \phi')(t) = \alpha(min(1, (1-s)2t + st))$$.    
> We have then:  
> $$H$$ is continuous, as a composition of two continuous maps, and $$\forall t \in [0,1]$$,  
> $$H(0,t) = \alpha(min(1, 2t)) = \begin{cases} \alpha(2t) & \text{if } t \le \frac{1}{2} \\ 1 & \text{if } t \ge \frac{1}{2} \end{cases}$$  
> $$H(0,t) = (c_{y} * \alpha)(t)$$  
> $$H(1,t) = \alpha(min(1, t)) = \alpha(t)$$  
> and $$\forall s \in [0,1]$$,  
> $$H(s,0) = \alpha(min(1, 0)) = \alpha(0) = x$$ and $$H(s,1) = \alpha(min(1, 2 - s)) = \alpha(1) = y$$.  
> $$H$$ is a homotopy between $$\alpha * c_{y}$$ and $$\alpha$$, i.e: $$\alpha * c_{y} \sim \alpha$$.

**b) Let $$\alpha : w \to x$$, $$\beta : x \to y$$, $$\gamma : y \to z$$ three paths in $$X$$. Show
that $$(\alpha * \beta) * \gamma \sim \alpha * (\beta * \gamma)$$.**

> We first compute $$(\alpha * \beta) * \gamma$$ and $$\alpha * (\beta * \gamma)$$.  
> $$\forall t \in [0,1]$$,  
> $$((\alpha * \beta) * \gamma)(t) = \begin{cases} \alpha(4t) &\quad 0 \le t \le \frac{1}{4} \\ \beta(4t - 1) &\quad \frac{1}{4} \le t \le \frac{1}{2} \\ \gamma(2t - 1) &\quad \frac{1}{2} \le t \le 1 \end{cases}$$  
> and  
> $$(\alpha * (\beta * \gamma))(t) = \begin{cases} \alpha(2t) &\quad 0 \le t \le \frac{1}{2} \\ \beta(4t - 2) &\quad \frac{1}{2} \le t \le \frac{3}{4} \\ \gamma(4t - 3) &\quad \frac{3}{4} \le t \le 1 \end{cases}$$  
> Then, we exhibit a family of subsets of $$[0,1]^{2}$$ that form a closed cover of it, and we define a continuous map from each of them to $$[0,1]$$.  
> $$\begin{cases} F_{1} := \{(s,t) \in [0,1]^{2}\ | 0 \le t \le \frac{s+1}{4} \} \\ F_{2} := \{(s,t) \in [0,1]^{2}\ | \frac{s+1}{4} \le t \le \frac{s+2}{4} \} \\ F_{3} := \{(s,t) \in [0,1]^{2}\ | \frac{s+2}{4} \le t \le 1 \} \end{cases}$$  
> and  
> $$\begin{cases} f_{1} : F_{1} \to X,\ \forall (s, t) \in F_{1},\ f_{1}(s,t) := \alpha(min(1, 2t(2-s))) \\ f_{2} : F_{2} \to X,\ \forall (s, t) \in F_{2},\ f_{2}(s,t) := \beta(4t - (1+s)) \\ f_{3} : F_{3} \to X,\ \forall (s, t) \in F_{3},\ f_{3}(s,t) := \gamma(max(0, 2t(1+s)-2s-1)) \end{cases}$$  
> We make sure that the $$f_{i}$$ coincide on the intersections of the $$F_{i}$$:  
> $$F_{1} \cap F_{3} = \emptyset$$,  
> $$\forall (s, t) \in F_{2} \cap F_{3}$$ (i.e.: $$s + 2 = 4t$$), $$f_{3}(s,t) = \gamma(max(0, 8t^{2}-10t+3))$$.  
> Let $$P \in \R[X]$$ be a polynomial defined as $$P := 8X^{2} - 10X + 3$$.  
> It can be factorized as $$P = (2X -1)(4X-3)$$, and $$\forall t \in \R$$, the sign of $$P(t)$$ is the sign of $$-8$$ between its roots, and $$\forall (s, t) \in F_{2} \cap F_{3}$$, $$P(t) \le 0$$ and $$f_{3}(s, t) = \gamma(max(0, P(t))) = \gamma(0) = y$$  
> and $$f_{2}(s,t) = \beta(1) = y$$, they coincide on the intersection of the $$F_{2}$$ and $$F_{3}$$.  
> $$\forall (s, t) \in F_{1} \cap F_{2}$$ (i.e.: $$s + 1 = 4t$$), $$f_{1}(s,t) = min(1, 6t - 8t^{2})$$.  
> Let $$P \in \R[X]$$ be a polynomial defined as $$P := 6X - 8X^{2}$$.  
> $$P - 1$$ can be factorized as $$-(4X+1)(2X+1)$$ and $$\forall t \in \R$$ the sign of $$(P-1)(t)$$ is the sign of $$-8$$ outside of its roots, and $$\forall (s, t) \in F_{1} \cap F_{2}$$, $$P(t) \ge 1$$ and $$f_{1}(s,t) = \alpha(min(1, P(t))) = \alpha(1) = x$$.  
> and $$f_{2}(s,t) = \beta(0) = x$$, they coincide on the intersection of the $$F_{1}$$ and $$F_{2}$$.    
> We then construct the map $$H$$:  
> Since all $$F_{i}$$ are closed (as intersection of closed half-planes), and $$F_{1} \cup F_{2} \cup F_{3} = [0,1]^{2}$$, and the $$f_{i}$$ are continuous and coincide on the intersection of the $$F_{i}$$, there is a unique map $$H : [0,1]^{2} \to X$$ such that:  
> $$\forall i \in [0,1]$$, $$H_{|f_{i}} = f_{i}$$.  
> And finally we check that $$H$$ is a homotopy between $$(\alpha * \beta) * \gamma$$ and $$\alpha * (\beta * \gamma)$$:    
> $$\forall t \in [0,1]$$, $$H(0,t) = \begin{cases} \alpha(4t) &\quad 0 \le t \le \frac{1}{4} \\ \beta(4t - 1) &\quad \frac{1}{4} \le t \le \frac{1}{2} \\ \gamma(2t - 1) &\quad \frac{1}{2} \le t \le 1 \end{cases}$$  
> i.e.: $$H(0, t) = ((\alpha * \beta) * \gamma))(t)$$.  
> $$\forall t \in [0,1]$$, $$H(1, t) = \begin{cases} \alpha(2t) &\quad 0 \le t \le \frac{1}{2} \\ \beta(4t - 2) &\quad \frac{1}{2} \le t \le \frac{3}{4} \\ \gamma(4t - 3) &\quad \frac{3}{4} \le t \le 1 \end{cases}$$  
> i.e.: $$H(1,t) = (\alpha * (\beta * \gamma))(t)$$.  
> $$\forall s \in [0,1]$$, $$\begin{cases} H(s,0) = \alpha(min(1, 0)) = \alpha(0) = w \\ H(s, 1) = \gamma(max(1, 1) = \gamma(1) = z \end{cases}$$  
> $$H$$ is a homotopy between $$\alpha * (\beta * \gamma)$$ and $$(\alpha * \beta) * \gamma$$, i.e.: $$(\alpha * \beta) * \gamma \sim \alpha * (\beta * \gamma)$$.

**c) Let $$\alpha : x \to y$$ be a path, exhibit a path $$\beta : y \to x$$ such that $$\alpha * \beta \sim c_{x}$$
and $$\beta * \alpha \sim c_{y}$$.**

> Let $$\beta : [0, 1] \to X$$ be defined as $$\forall t \in [0,1]$$, $$\beta(t) := \alpha(1-t)$$.  
> $$\beta$$ is a path from $$\alpha(1) = y$$ to $$\alpha(0) = x$$.    
> We first prove that $$\alpha * \beta \sim c_{x}$$.  
> We have: $$\forall t \in [0,1]$$,  
> $$(\alpha * \beta)(t) = \begin{cases} \alpha(2t) &\quad 0 \le t \le \frac{1}{2} \\ \beta(2t-1) = \alpha(2 - 2t) &\quad t \ge \frac{1}{2} \end{cases}$$  
> Let $$H : [0, 1]^{2} \to X$$ be defined as $$\forall (s, t) \in [0,1]^{2}$$,  
> $$H(s, t) := \begin{cases} \alpha((1-s)2t) &\quad t \le \frac{1}{2} \\ \alpha((1-s)(2 - 2t)) &\quad t \ge \frac{1}{2} \end{cases}$$  
> Since both $$\alpha \circ \big((s,t) \mapsto (1-s)2t \big)$$ and $$\alpha \circ \big((s,t) \mapsto (1-s)(2 - 2t) \big)$$ are continuous and coincide on the intersection of $$\{(s,t) \in [0,1] \times [0,\frac{1}{2}] \}$$ and $$\{(s,t) \in [0,1] \times [\frac{1}{2},1] \}$$ (both are equal to $$\alpha(1-s)$$), $$H$$ is continuous.  
> We have then:  
> $$\forall t \in [0,1]$$,  
> $$H(0, t) = \begin{cases} \alpha(2t) &\quad t \le \frac{1}{2} \\ \alpha(2-2t) &\quad t \ge \frac{1}{2} \end{cases}$$  
> $$H(0, t) = (\alpha * \beta)(t)$$  
> $$H(1, t) = \begin{cases} \alpha(0) = x &\quad t \le \frac{1}{2} \\ \alpha(0) = x &\quad t \ge \frac{1}{2} \end{cases}$$  
> $$H(1, t) = c_{x}(t)$$  
> and $$\forall s \in [0,1]$$, $$H(s, 0) = \alpha(0) = x$$ and $$H(s,1) = \alpha(0) = x$$.  
> Thus, $$H$$ is a homotopy between $$\alpha * \beta$$ and $$c_{x}$$.  
> We then prove that $$\beta * \alpha \sim c_{y}$$.  
> We have: $$\forall t \in [0,1]$$,  
> $$(\beta * \alpha)(t) = \begin{cases} \beta(2t) = \alpha(1 - 2t) &\quad t \le \frac{1}{2} \\ \alpha(2t-1) &\quad t \ge \frac{1}{2} \end{cases}$$  
> Let $$H : [0, 1]^{2} \to X$$ be defined as $$\forall (s, t) \in [0,1]^{2}$$,  
> $$H(s,t) := \begin{cases} \alpha((1-s)(1-2t)+s) &\quad t \le \frac{1}{2} \\ \alpha((1-s)(2t-1)+s) &\quad t \ge \frac{1}{2} \end{cases}$$  
> Since both $$\alpha \circ \big((s,t) \mapsto (1-s)(1-2t)+s \big)$$ and $$\alpha \circ \big(t \mapsto (1-s)(2t-1)+s \big)$$ are continuous and coincide on the intersection of $$\{(s,t) \in [0,1] \times [0,\frac{1}{2}] \}$$ and $$\{(s,t) \in [0,1] \times [\frac{1}{2},1] \}$$ (both are equal to $$\alpha(s)$$), $$H$$ is continuous.  
> We have then: $$\forall t \in [0,1]$$,  
> $$H(0,t) = \begin{cases} \alpha(1-2t) &\quad t \le \frac{1}{2} \\ \alpha(2t-1) &\quad t \ge \frac{1}{2} \end{cases}$$  
> $$H(0,t) = (\beta * \alpha)(t)$$  
> $$H(1,t) = \begin{cases} \alpha(1) = y &\quad t \le \frac{1}{2} \\ \alpha(1) = y &\quad t \ge \frac{1}{2} \end{cases}$$  
> $$H(1, t) = c_{y}(t)$$  
> and $$\forall s \in [0,1]$$, $$H(s, 0) = \alpha(1) = y$$ and $$H(s,1) = \alpha(1) = y$$.  
> Thus, $$H$$ is a homotopy between $$\beta * \alpha$$ and $$c_{y}$$, i.e.: $$\beta * \alpha \sim c_{y}$$.

**d) Let $$x \in X$$. Deduce that $$*$$ induces a group structure on homotopy classes of loops $$x \to x$$ in $$X$$,
that is, on $$\{ \gamma : x \to x \}_{/\sim}$$.**

> We first prove that the induced law is an intern composition law  
> Let $$[\alpha], [\beta] \in (\gamma : x \to x)_{/\sim}$$ and $$\alpha_{1}, \alpha{2} \in [\alpha]$$ and $$\beta_{1}, \beta_{2} \in [\beta]$$.  
> Then $$\alpha_{1} * \beta_{1}$$ (respectively $$\alpha_{2} * \beta_{2}$$) is a path from $$x$$ to $$x$$, and the class of $$\alpha_{1} * \beta_{1}$$ (respectively $$\alpha_{2} * \beta_{2}$$) by $$\sim$$ is in $$(\gamma : x \to x)_{/\sim}$$  
> Since $$\alpha_{1} \sim \alpha_{2}$$ and $$\beta_{1} \sim \beta_{2}$$, there exist $$H_{1}$$ and $$H_{2}$$ homotopies between them  
> Let $$H := \begin{cases} H_{1}(s, 2t) &\quad\text{if } t \le \frac{1}{2} \\ H_{2}(s, 2t-1) &\quad\text{if } t \ge \frac{1}{2} \end{cases}$$  
> Since both $$H_{1}$$ and $$H_{2}$$ are continuous and coincide on the the intersection of $$\{(s,t) \in [0,1] \times [0,\frac{1}{2}]\}$$ and $$\{(s,t) \in [0,1] \times [\frac{1}{2},1]\}$$ (both are equal to $$c_{x}$$), $$H$$ is continuous.  
> We also have $$\forall t \in [0,1]$$,  
> $$H(0, t) = \begin{cases} H_{1}(0, 2t) = \alpha_{1}(2t) &\quad\text{if } t \le \frac{1}{2} \\ H_{2}(0, 2t-1) = \beta_{1}(2t-1) &\quad\text{if } t \ge \frac{1}{2} \end{cases}$$  
> $$H(1, t) = \begin{cases} H_{1}(1, 2t) = \alpha_{2}(2t) &\quad\text{if } t \le \frac{1}{2} \\ H_{2}(1, 2t-1) = \beta_{2}(2t-1) &\quad\text{if } t \ge \frac{1}{2} \end{cases}$$  
> $$H(0, t) = (\alpha_{1} * \beta_{1})(t)$$ and $$H(1, t) = (\alpha_{2} * \beta_{2})(t)$$  
> and $$\forall s \in [0,1]$$, $$H(s, 0) = H_{1}(s, 0) = x$$ and $$H(s, 1) = H_{2}(s, 1) = x$$.  
> $$H$$ is a homotopy between $$\alpha_{1} * \beta_{1}$$ and $$\alpha_{2} * \beta_{2}$$, i.e.: $$\alpha_{1} * \beta_{1} \sim \alpha_{2} * \beta_{2}$$, they both are in the same equivalence class.  
> We note $$[\alpha] * [\beta]$$ this class, and we note that we can now use $$\alpha$$ as a represantant for $$[\alpha]$$.    
> Thus the induced law $$*$$ is an intern composition law.  
> We then prove that there is an identity element for the induced law $$*$$  
> Let $$[c_{x}]$$ be the class of $$c_{x}$$, $$[\alpha] \in (\gamma : x \to x)_{/\sim}$$.  
> Then, from 9)a) we have $$[c_{x}] * [\alpha] = [c_{x} * \alpha] = [\alpha]$$ and $$[\alpha] * [c_{x}] = [\alpha * c_{x}] = [\alpha]$$.  
> Thus the class of $$c_{x}$$ is the identity element of $$(\gamma : x \to x)_{/\sim}$$ for the induced law $$*$$.  
> We prove that the induced law $$*$$ is associative.  
> Let $$[\alpha], [\beta], [\gamma] \in (\gamma : x \to x)_{/\sim}$$.  
> Then, using 9)b), we have $$([\alpha] * [\beta]) * [\gamma] = [(\alpha * \beta) * \gamma] = [\alpha * (\beta * \gamma)] = [\alpha] * ([\beta] * [\gamma])$$.  
> Thus the induced law $$*$$ is associative.  
> And finally we prove that every element of $$(\gamma : x \to x)_{/\sim}$$ has an inverse by the induced law $$*$$  
> Let $$[\alpha] \in (\gamma : x \to x)_{/\sim}$$.    
> Let $$\beta$$ a path $$(x \to x)$$ such that $$\alpha * \beta \sim c_{x}$$ and $$\beta * \alpha \sim c_{x}$$ (from 9)c)) and $$[\beta]$$ its class  
> Then $$[\alpha] * [\beta] = [\alpha * \beta] = [c_{x}]$$ and $$[\beta] * [\alpha] = [\beta * \alpha] = [c_{x}]$$.  
> $$[\beta]$$ is the inverse of $$[\alpha]$$ by the induced law, and we note it $$\overline{[\alpha]}$$  
> The induced law $$*$$ is an intern composition law, it has an identity element, it is associative, and all elements of $$(\gamma : x \to x)_{/\sim}$$ are invertible, i.e.: $$*$$ induces a group structure on $$(\gamma : x \to x)_{/\sim}$$

### **Definition 1.5: Fundamental Group**

For $$X$$ a space and $$x$$ a point of $$X$$, we denote $$\pi_{1}(X, x)$$ the group defined in question 9 _d_. We call
it the _fundamental group of $$X$$ at $$x$$_.

10)

**a) Let $$f : X \to Y$$ be a continuous map and $$x \in X$$. Show that the
application $$\gamma \mapsto f \circ \gamma$$ which sens loops at $$x$$ in $$X$$ to loops at $$f(x)$$ in $$Y$$ induces a
group morphism denoted $$\pi_{1}(f, x) : \pi_{1}(X, x) \to \pi_{1}(Y, f(x))$$**.

> We first prove that there is a continuous map $$g : \pi_{1}(X, x) \to \pi_{1}(Y, f(x))$$ that sends classes of homotopic loops at $$x$$ in $$X$$ to classes of homotopic loops at $$f(x)$$ in $$Y$$.  
> Let $$[\alpha] \in \pi_{1}(X,x)$$ and $$\alpha_{1}, \alpha_{1} \in [\alpha]$$, i.e.: $$\alpha_{1} \sim \alpha_{2}$$.  
> Let $$H$$ be an homotopy between $$\alpha_{1}$$ and $$\alpha_{1}$$.  
> Then, $$f \circ H : [0, 1]^{2} \to Y$$ is continuous as a composition of continuous maps,  
> and $$\forall t \in [0,1]$$, $$(f \circ H)(0, t) = (f \circ \alpha_{1})(t)$$,  
> and $$(f \circ H)(1,t) = (f \circ \alpha_{2})(t)$$ and $$\forall s \in [0,1]$$, $$(f \circ H)(s,0) = f(x)$$ and $$(f \circ H)(s,1) = f(x)$$.  
> Thus, $$f \circ H$$ is a homotopy between $$f \circ \alpha_{1}$$ and $$f \circ \alpha_{2}$$, i.e.: $$f \circ \alpha_{1} \sim f \circ \alpha_{2}$$, they both are in the same equivalence class and we note it $$\pi_{1}(f, x)([\alpha])$$.  
> We then prove that $$\forall A, B \in \pi_{1}(X,x)$$, $$\pi_{1}(f, x)(A * B) = \pi_{1}(f,x)(A) * \pi_{1}(f,x)(B)$$.  
> Let $$[\alpha], [\beta] \in \pi_{1}(X,x)$$. We can choose $$\alpha$$ and $$\beta$$ as representatives of $$[\alpha]$$ and $$[\beta]$$ using what we just proved.    
> We have: $$\forall t \in [0,1]$$, $$f \circ (\alpha * \beta)(t) = \begin{cases} f(\alpha(2t)) &\quad t \le \frac{1}{2} \\ f(\beta(2t-1)) &\quad t \ge \frac{1}{2} \end{cases}$$  
> and $$\forall t \in [0,1]$$, $$(f \circ \alpha) * (f \circ \beta)(t) = \begin{cases} (f \circ \alpha)(2t) &\quad t \le \frac{1}{2} \\ (f \circ \beta)(2t-1) &\quad t \ge \frac{1}{2} \end{cases}$$  
> Thus, $$f \circ (\alpha * \beta) = (f \circ \alpha) * (f \circ \beta)$$, they are homotopic, i.e.: $$f \circ (\alpha * \beta) \sim (f \circ \alpha) * (f \circ \beta)$$.  
> Therefore, $$\pi_{1}(f, x)([\alpha] * [\beta]) = \pi_{1}(f,x)([\alpha]) * \pi_{1}(f,x)([\beta])$$, and $$\pi_{1}(f, x)$$ is a group morphism.



**b) Show that for $$x$$ a point of space $$X$$, $$\pi_{1}(id_{X}, x) = id_{\pi_{1}(X, x)}$$**.

> Let $$[\gamma] \in \pi_{1}(X, x)$$, and compute $$\pi_{1}(id_{X}, x)([\gamma])$$.  
> $$\pi_{1}(id_{X}, x)([\gamma]) = [id_{X} \circ \gamma] = [\gamma] = id_{\pi_{1}(X, x)}([\gamma])$$.      
> Since both $$\pi_{1}(id_{X}, x)$$ and $$id_{\pi_{1}(X,x)}$$ coincide on $$\pi_{1}(X, x)$$, they are equal.

**c) Show that for composable continuous maps $$X \overset{f}{\to } Y \overset{g}{\to } Z$$, and $$x \in X$$ we have $$
\pi_{1}(g \circ f, x) = \pi_{1}(g, f(x)) \circ \pi_{1}(f, x)$$**

> Let $$[\gamma] \in \pi_{1}(X, x)$$, and compute $$\pi_{1}(g \circ f, x)([\gamma])$$.  
> $$\pi_{1}(g \circ f, x)([\gamma]) = [(g \circ f) \circ \gamma] = [g \circ (f \circ \gamma)] = \pi_{1}(g, f(x))([f \circ \gamma]) = \pi_{1}(g, f(x))\Big(\pi_{1}(f, x)([\gamma])\Big) = (\pi_{1}(g, f(x)) \circ (\pi_{1}(f, x))([\gamma]))$$.  
> Since both $$\pi_{1}(g \circ f, x)$$ and $$\pi_{1}(g, f(x)) \circ \pi_{1}(f, x)$$ coincide on $$\pi_{1}(X, x)$$, they are equal.

We now turn to the computation of $$\pi_{1}(\mathbb{S}^{1}, (1, 0))$$. In the following we identify $$\mathbb{S}^{1}$$
with the complex unit circle $$\mathbb{U} = \{z \in \mathbb{C} |\ |z| = 1\}$$, and denote $$exp$$ the
map $$ s \mapsto e^{i s} : \R \to \mathbb{S}^{1}$$. We first aim to shew the following lemma:

11) **Let $$f : X \to Y$$ be an homeomorphism. Show that $$\pi_{1}(X, x) \simeq \pi_{1}(Y, f(x))$$ are isomorphic
    as groups.**

> We showed in 10)a) that $$\pi_{1}(f, x) : \pi_{1}(X, x) \to \pi_{1}(Y, f(x))$$ is a group morphism.  
> We prove that $$\pi_{1}(f,x)$$ is invertible.  
> Since $$f$$ is an homeomorphism, $$f^{-1}$$ is continuous, we can construct $$\pi_{1}(f^{-1}, f(x))$$ the group of equivalence classes of loops at $$f(x)$$ in $$Y$$.  
> Using 10)c) then 10)b), we have  
> $$\pi_{1}(f^{-1}, f(x)) \circ \pi_{1}(f, x) = \pi_{1}(f^{-1} \circ f, x) = \pi_{1}(id_{X}, x) = id_{\pi_{1}(X, x)}$$  
> and $$\pi_{1}(f, f^{-1}(f(x))) \circ \pi_{1}(f^{-1}, f(x)) = \pi_{1}(f, x) \circ \pi_{1}(f^{-1}, f(x)) = \pi_{1}(f \circ f^{-1}, f(x)) = \pi_{1}(id_{Y}, f(x)) = id_{\pi_{1}(Y, f(x))}$$  
> $$\pi_{1}(f, x)$$ is invertible and its inverse is $$\pi_{1}(f^{-1}, f(x))$$.  
> Therefore, $$f$$ induces a group isomorphism $$\pi_{1}(X,x) \overset{\pi_{1}(f, x)}{\simeq} \pi_{1}(Y, f(x))$$, i.e.: $$\pi_{1}(X,x)$$ and $$\pi_{1}(Y,f(x))$$ are isomorphic as groups.

### **Lemma 1.6: Lifting theorem**

Let $$a \le b \in \R$$ and $$f : [a, b] \in \mathbb{S}^{1}$$ be a continuous map, there is a continuous
map $$\hat{f} : [a, b] \to \R$$ such that $$exp \circ \hat{f} = f$$.

12)

**a) Let $$a \le b$$ and suppose $$f : [a, b] \to \mathbb{S}^{1}$$ misses a point (say $$1$$). Show using question 3
that $$f$$ admits such a lift $$\hat{f} : [a, b] \to \R$$**.

> Let $$\hat{f} : [a, b] \to \R$$ be defined as $$\hat{f} := e^{-1} \circ f$$.  
> $$\hat{f}$$ is continuous as a composition of continuous maps,  
> and $$\forall x \in [a, b]$$, $$(exp \circ \hat{f})(x) = e^{2\pi i \hat{f(x)}} = \cos(2\pi e^{-1}(f(x)) + i \sin(2\pi e^{-1}(f(x)) = e(e^{-1}(f(x))) = f(x)$$

**b) Let $$a \le b$$ and consider any continuous map $$f : [a, b] \to \mathbb{S}^{1}$$. Show that we may split the
interval $$[a, b]$$ as $$a = a_{0} \le a_{1} \le \dots \le a_{N} = b$$ such that for
each $$i \lt N$$, $$f_{i} := f|_{[a_{i},a{i+1}]} : [a_{i},a_{i+1}] \to \mathbb{S}^{1}$$ avoids one point. By 11 _a_,
each of them admits a lift $$\hat{f_{i}} : [a_{i},a_{i+1}] \to \R$$. Show that we may assure for
each $$i \lt \ N - 1$$, $$\hat{f_{i}}(a_{i+1}) = \hat{f_{i+1}}(a_{i+1})$$. Conclude that $$f$$ admits a lift $$\hat{f}$$
which achieves the proof of Lemma 1.6**

> Let $$a_{0} := a$$   
> Assume we constructed $$(a_{i})_{0 \le i \le n}$$ for some $$n$$, with $$a = a_{0} \le a_{1} \le \dots \le a_{n} \le b$$.  
> Let $$a_{n+1} := \sup \{ x \in [a_{n}, b],\ f([a_{n}, x]) \subset \mathcal{B}(f(a_{n}), 1) \}$$    
> By induction, we get a sequence $$(a_{i})_{i \in \mathbb{N}}$$ that is increasing ($$\forall i \in \mathbb{N}$$, $$
a_{i} \le a_{i+1}$$) and majored ($$a_{i} \le b$$).  
> We prove by an evil contradiction that this sequence is eventually constant, i.e.: $$\exists n_{0} \in \mathbb{N}$$, $$\forall n \ge n_{0}$$, $$a_{n} = b$$.  
> Let suppose the opposite, and let $$n \in \mathbb{N}$$,  
> Since $$a_{n+1}$$ is a $$\sup$$ and $$a_{n+1} \lt b$$, let $$\epsilon_{m} := \frac{1}{1 + m} \gt 0$$ for some $$m \in \mathbb{N}$$ such that $$\epsilon_{m} \lt b-a_{n+1}$$.    
> We have then:    
> $$f([a_{n}, a_{n+1} + \epsilon_{m}]) \nsubseteq \mathcal{B}(f(a_{n}), 1)$$, and since $$f([a_{n}, a_{n+1}]) \subset \mathcal{B}(f(a_{n}), 1)$$, $$\exists x_{m} \in ]a_{n+1}, a_{n+1} + \epsilon_{m}]$$ such that $$f(x_{m}) \notin \mathcal{B}(f(a_{n}),1)$$, i.e.: $$|f(x_{m}) - f(a_{n})| \gt 1$$.  
> When $$m$$ goes to infinity, $$x_{m}$$ goes to $$a_{n+1}$$, and since $$f$$ is continuous, $$f(x_{m})$$ goes to $$f(a_{n+1})$$. We have $$|f(a_{n+1})-f(a_{n})| \ge 1$$.  
> Since $$(a_{n})_{n \in \mathbb{N}}$$ is increasing and majored by $$b$$, it converges to some $$l \le b$$, and since $$f$$ is continuous, $$\lim_{n \to +\infty} f(a_{n+1}) = \lim_{n \to +\infty} f(a_{n}) = l$$, and $$\lim_{n \to +\infty}|f(a_{n+1}) - f(a_{n})| = 0$$, which is a contradiction with $$\forall n \in \mathbb{N}$$, $$|f(a_{n+1}) - f(a_{n})| \ge 1$$.  
> Therefore, $$\exists N \in \mathbb{N}$$, such that $$\forall n \ge N$$, $$a_{n} = b$$.  
> Then, for each interval $$[a_{i}, a_{i+1}]$$, we can construct a map from it to $$\mathbb{S}$$ that misses a point using 11)a).  
> For $$i \lt N - 1$$, we have $$(exp \circ \hat{f}_{i})(a_{i+1}) = (exp \circ \hat{f_{i+1}})(a_{i+1})$$, thus $$\hat{f}_{i}(a_{i+1}) = \hat{f_{i+1}}(a_{i+1}) + k$$ for some $$k \in \mathbb{N}$$. For each $$i \lt N - 1$$, we can set $$\hat{f_{i+1}}(a_{i+1}) = \hat{f_{i}}(a_{i+1})$$ by shifting $$\hat{f_{i+1}}$$ by $$k$$, and we still have $$exp \circ \hat{f_{i+1}} = f_{|[a_{i+1}, a_{i+2}]}$$.  
> Therefore, $$\hat{f}$$ is continuous and $$f$$ admits a lift $$\hat{f}$$.


We then admit the following variant of _Lemma_ 1.6 which may be proven similarly by cutting $$[0,1]^{2}$$ in cute little
squares

### **Lemma 1.7: Lifting theorem 2**

Let $$f : [0, 1]^{2} \to \mathbb{S}^{1}$$ be a continuous map, there is a continuous
map $$\hat{f} : [0,1]^{2} \to \R$$ such that $$exp \circ \hat{f} = f$$

13) **We now compute $$\pi_{1}(\mathbb{S}^{1}, 1)$$**.

**a) Let $$\gamma : 1 \mapsto 1$$ be a loop in $$\mathbb{S}^{1}$$ (seen as $$\mathbb{U} \subseteq \mathbb{C}$$). Using
the lifting lemma, we consider a lift $$\hat{\gamma} : [0,1] \to \R$$ of $$\gamma$$. We then define
the _index_ of $$\gamma$$ to be $$ind(\gamma) := |\hat{\gamma}(1)-\hat{\gamma}(0)|$$. Show that $$ind(\gamma)$$ does
not depend on the choice of the lift $$\hat{\gamma}$$**.

> Let $$\hat{\gamma_{1}}, \hat{\gamma_{2}}$$ be two lifts of $$\gamma$$.  
> We have $$\forall t \in [0,1]$$, $$exp \circ \hat{\gamma_{1}}(t) = exp \circ \hat{\gamma_{2}}(t) = \gamma(t)$$  
> Since $$\gamma$$ is always non-zero, $$exp \Big(\hat{\gamma_{1}}(t)-\hat{\gamma_{2}}(t) \Big)= 1$$. Since this fraction is constant, we get $$\hat{\gamma}(t) - \hat{\delta}(t) \in \mathbb{N}$$. Since $$\hat{\gamma} - \hat{\delta}$$ is continuous, it's constant, and we have $$\forall t \in [0,1]$$, $$\hat{\gamma_{1}}(t) - \hat{\gamma_{2}}(t) = k$$ for some $$k \in \mathbb{N}$$.  
> And $$\hat{\gamma_{1}}(1) - \hat{\gamma_{1}}(0) = \hat{\gamma_{2}}(1) - \hat{\gamma_{2}}(0)$$, the choice of the lift $$\hat{\gamma}$$ does not affect the index of $$\gamma$$.

**b) Show that if $$\gamma \sim \delta$$ are two homotopic loops $$1 \to 1$$ in $$\mathbb{S}^{1}$$,
then $$ind(\gamma) = ind(\delta)$$**.

> Let $$H$$ be a homotopy between $$\gamma$$ and $$\delta$$ and $$\hat{H}$$ its lift using the lifting theorem 2.  
> We have $$\forall s \in [0,1]$$, $$H(s, 0) = exp \circ \hat{H} (s, 0) = 1 = H(s, 1) = exp \circ \hat{H} (s, 1)$$.  
> Thus, $$\forall s \in [0,1]$$, $$\frac{H(s, 0)}{H(s, 1)} = exp \Big(\hat{H}(s, 0)-\hat{H}(s, 1) \Big) = 1$$, $$\hat{H}(s, 0) - \hat{H}(s, 1) = k$$ for some $$k \in \mathbb{Z}$$. (1)   
> We also have $$\forall t \in [0,1]$$, $$\begin{cases} H(0, t) = exp \circ \hat{H} (0, t) = \gamma(t) = exp \circ \hat{\gamma}(t) \\ H(1, t) = exp \circ \hat{H} (1, t)= \delta(t) = exp \circ \hat{\delta}(t) \end{cases}$$  
> $$\forall t \in [0,1]$$, $$\gamma(t)$$ and $$\delta(t)$$ are non-zero, and $$\begin{cases} \frac{H(0, t)}{\gamma(t)} = exp \Big( \hat{H}(0, t) - \hat{\gamma}(t) \Big) = 1 \\ \frac{H(1, t)}{\delta(t)} = exp \Big( \hat{H}(1, t)-\hat{\delta}(t) \Big) = 1 \end{cases}$$  
> We have $$\forall t \in [0,1]$$, $$\hat{H}(0,t) - \hat{\gamma}(t) = k_{1}$$ and $$\hat{H}(1,t) - \hat{\delta}(t) = k_{2}$$ for some $$k_{1}, k_{2} \in \mathbb{Z}$$. (2)    
> Then, using (2) we get $$ind(\gamma) = \hat{\gamma}(1) - \hat{\gamma}(0) = \hat{H}(0, 1)-\hat{H}(0, 0)$$  
> and using (1), we get $$ind(\gamma) = \hat{H}(1, 1)-\hat{H}(1, 0)$$,  
> using (2) again, $$ind(\gamma) = \hat{\delta}(1) - \hat{\delta}(0) = ind(\delta)$$.

**c) Show that $$ind(c_{1}) = 0$$ and $$ind(\gamma * \delta) = ind(\gamma) + ind(\delta)$$**.

> We first prove that $$ind(c_{1}) = 0$$.  
> We have $$\forall t \in [0,1]$$, $$c_{1}(t) = 1 = exp \circ \hat{c_{1}}(t)$$, thus $$\hat{c_{1}}(t) = k$$ for some $$k \in \mathbb{Z}$$.  
> and $$ind(c_{1}) = 0$$.  
> We then prove that $$ind(\gamma * \delta) = ind(\gamma) + ind(\delta)$$.  
> We have $$\forall t \in [0,1]$$,  
> $$(\gamma * \delta)(t) = exp \circ \hat{(\gamma * \delta)} (t) = \begin{cases} \gamma(2t) = exp \circ \hat{\gamma}(2t) &\quad\text{if } t \le \frac{1}{2} \\ \delta(2t-1) = exp \circ \hat{\delta}(2t-1) &\quad\text{if } t \ge \frac{1}{2} \end{cases}$$  
> For $$t \le \frac{1}{2}$$, $$exp \Big( \hat{(\gamma * \delta)} (t) - \hat{\gamma}(2t) \Big) = 1$$, thus $$\hat{(\gamma * \delta)}(t) - \hat{\gamma}(2t) = k_{1}$$ for some $$k_{1} \in \mathbb{Z}$$.  
> For $$t \ge \frac{1}{2}$$, $$exp \Big( \hat{(\gamma * \delta)} (t) = \hat{\delta}(2t-1) \Big) = 1$$, thus $$\hat{(\gamma * \delta)}(t) - \hat{\delta}(2t-1) = k_{2}$$ for some $$k_{2} \in \mathbb{Z}$$.  
> Since $$\hat{(\gamma * \delta)}$$ is continuous, $$k_{1} = k_{2}$$, and we have:  
> $$ind(\gamma * \delta) = \hat{(\gamma * \delta)}(1) - \hat{(\gamma * \delta)}(0) + \hat{(\gamma * \delta)}(\frac{1}{2}) - \hat{(\gamma * \delta)}(\frac{1}{2}) = \hat{\delta}(1) - \hat{\gamma}(0) + \hat{\gamma}(1) - \hat{\delta}(0) = ind(\gamma) + ind(\delta)$$.

**d) Deduce from the previous subquestions that $$ind$$ induces a group morphism still denoted $$ind : \pi_{1}(
\mathbb{S}^{1}, 1) \to \mathbb{Z}$$**.

> Let $$[\gamma], [\delta] \in \pi_{1}(\mathbb{S}^{1}, 1)$$ and $$\gamma_{1}, \gamma_{2} \in [\gamma]$$.  
> Since $$\gamma_{1} \sim \gamma_{2}$$, $$ind(\gamma_{1}) = ind(\gamma_{2})$$ (from 13)b)). We can then define the induced map $$ind : \pi_{1}(\mathbb{S}^{1}, 1) \to \mathbb{Z}$$ and set $$ind([\gamma]) := ind(\gamma)$$.  
> We now prove that $$ind([\gamma] * [\delta]) = ind([\gamma]) + ind([\delta])$$,  
> Using the induced concatenation $$*$$ on loop classes and 13)c), $$ind([\gamma] * [\delta]) = ind([\gamma * \delta]) = ind(\gamma * \delta) = ind(\gamma) + ind(\delta) = ind([\gamma]) + ind([\delta])$$.  
> $$ind$$ induces a group morphism between $$\pi_{1}(\mathbb{S}^{1}, 1)$$ and $$\mathbb{Z}$$.

**e) Show that $$ind$$ is surjective**.

> Let $$q \in \mathbb{Z}$$  
> If $$q = 0$$, then $$q = ind([c_{1}])$$.  
> If not, we define $$[\gamma] \in \pi_{1}(\mathbb{S}^{1}, 1)$$ with $$\gamma : [0, 1] \to \mathbb{S}^{1}$$, $$\forall t \in [0,1]$$, $$\gamma(t) = exp(t)$$, a loop in $$\mathbb{U}$$ at $$1$$, with $$\hat{\gamma}(t) = t$$.  
> We have $$ind([\gamma]) = ind(\gamma) = 1$$.  
> If $$q \ge 1$$, then $$ind([\underbrace{\gamma * \gamma * \dots * \gamma}_{q\ times}]) = q \cdot ind([\gamma]) = q$$.  
> If $$q \le -1$$, then $$ind([\underbrace{\gamma^{-1} * \gamma^{-1} * \dots * \gamma^{-1}}_{-q\ times}]) = -q \cdot ind([\gamma^{-1}]) = q$$.  
> Therefore, $$ind$$ is surjective.

**f) Let $$\gamma, \delta$$ be such that $$ind(\gamma) = ind(\delta)$$. Show that we may choose $$\hat{\gamma},
\hat{\delta}$$ such that $$\hat{\gamma}(0) = \hat{\delta}(0) = 0$$ and $$\hat{\gamma}(1) = \hat{\delta}(
1)$$. Find a homotopy between $$\hat{\gamma}$$ and $$\hat{\delta}$$. Deduce that $$\gamma \sim
\delta$$. Deduce that $$ind : \pi_{1}(\mathbb{S}^{1}, 1) \to \mathbb(Z)$$ is injective**.

> Let $$\hat{\gamma'} := \hat{\gamma}-\hat{\gamma}(0)$$ and $$\hat{\delta'} := \hat{\delta}-\hat{\delta}(0)$$.  
> For $$t = 0$$, $$\hat{\gamma'}(0) = 0$$ and $$\hat{\delta'}(0) = 0$$.  
> We have $$\forall t \in [0,1]$$, using $$exp \circ \hat{\gamma}(0) = \gamma(0) = 1$$, $$exp \circ \hat{\gamma'}(t) = exp \circ (\hat{\gamma}(t) - \hat{\gamma}(0)) = \frac{\gamma(t)}{exp \circ \hat{\gamma}(0)} = \gamma(t)$$.  
> And $$\forall t \in [0,1]$$, using $$exp \circ \hat{\delta}(0) = \delta(0) = 1$$, $$exp \circ \hat{\delta'}(t) = exp \circ (\hat{\delta}(t) - \hat{\delta}(0)) = \frac{\delta(t)}{exp \circ \hat{\delta}(0)} = \delta(t)$$.  
> Since $$ind(\gamma) = ind(\delta)$$, $$\hat{\gamma}(1) - \hat{\gamma}(0) = \hat{\delta}(1) - \hat{\delta}(0) = \hat{\gamma'}(1) = \hat{\delta'}(1)$$.  
> We may then use $$\hat{\gamma'}$$ in place of $$\hat{\gamma}$$ and $$\hat{\delta'}$$ in place of $$\hat{\delta}$$.  
> Let $$\hat{H}: [0, 1]^{2} \to \R$$ defined as $$\forall (s, t) \in [0,1]^{2}$$, $$\hat{H}(t, s) := (1-s)\hat{\gamma}(t) + s\hat{\delta}(t)$$.  
> $$\hat{H}$$ is continuous, as a product and sum of continuous maps, and we have $$\forall t \in [0,1]$$, $$\begin{cases} \hat{H}(0, t) = \hat{\gamma}(t) \\ \hat{H}(1, t) = \hat{\delta}(t) \end{cases}$$  
> and $$\forall s \in [0,1]$$, $$\begin{cases} \hat{H}(s, 0) = (1 - s)\hat{\gamma}(0) + s\hat{\delta}(0) = 0 \\ \hat{H}(s,1) = (1 - s)\hat{\gamma}(1) + s\hat{\delta}(1) = \hat{\gamma}(1) &\text{using } \hat{\gamma}(1) = \hat{\delta}(1) \end{cases}$$  
> $$\hat{H}$$ is a homotopy between $$\hat{\gamma}$$ and $$\hat{\delta}$$.  
> Let $$H: [0, 1]^{2} \to \R$$ defined as $$\forall (s, t) \in [0,1]^{2}$$, $$H(s,t) := exp \circ \hat{H}(s, t)$$.  
> $$H$$ is continuous, as a composition of continuous maps, and we have $$\forall t \in [0,1]$$, $$\begin{cases} H(0, t) = exp \circ \hat{H}(0,t) = exp \circ \hat{\gamma}(t) = \gamma(t) \\ H(1,t) = exp \circ \hat{H}(1,t) = exp \circ \hat{\delta}(t) = \delta(t) \end{cases}$$    
> and $$\forall s \in [0,1]$$, $$\begin{cases} H(s,0) = exp \circ \hat{H}(s,0) = exp (0) = 1 \\ H(s,1) = exp \circ \hat{H}(s,1) = exp (0) = 1 \end{cases}$$  
> $$\hat{H}$$ is a homotopy between $$\gamma$$ and $$\delta$$.  
> Therefore, $$\forall [\gamma], [\delta] \in \pi_{1}(\mathbb{S}^{1},1)$$, $$ind([\gamma]) = ind([\delta]) \Rightarrow ind(\gamma) = ind(\delta) \Rightarrow \gamma \sim \delta \Rightarrow [\gamma] = [\delta]$$.  
> $$ind$$ is injective.


**g) Conclude**

> We proved that $$ind$$ is a group isomorphism between $$\pi_{1}(\mathbb{S}^{1}, 1)$$ and $$\mathbb{Z}$$.

14) Let $$n \in \mathbb{N}$$, compute $$\pi_{1}(\R^{n})$$ and conclude again
    that $$\mathbb{S}^{1} \ncong \R^{n}$$

> Let $$x \in \R^{n}$$. We prove that $$\pi_{1}(\R^{n}, x) = \{[c_{x}]\}$$.  
> Let $$[\gamma] \in \pi_{1}(\R^{n}, x)$$, and $$\gamma$$ its represantant.  
> Let $$H : [0,1]^{2} \to \R$$ defined as $$\forall (s,t) \in [0,1]^{2}$$, $$H(s,t) := (1-s)\gamma(t) + s \cdot x$$.  
> $$H$$ is continuous, as a sum of products of continuous maps, and we have:  
> $$\forall t \in [0,1]$$, $$\begin{cases} H(0,t) = \gamma(t) \\ H(1,t) = x = c_{x}(t) \end{cases}$$  
> and $$\forall s \in [0,1]$$, $$\begin{cases} H(s,0) = (1-s)\gamma(0) + s \cdot x = x \\ H(s,1) = (1-s)\gamma(1) + s \cdot x = x \end{cases}$$  
> $$H$$ is a homotopy between $$\gamma$$ and $$c_{x}$$, thus $$\gamma \sim c_{x}$$ i.e.: $$[\gamma] = [c_{x}]$$.  
> Therefore, $$\pi_{1}(\R^{n}, x) = \{[c_{x}]\}$$.  
> Since $$\pi_{1}(\mathbb{S}^{1}, 1)$$ is isomorphic to $$\mathbb{Z}$$ and $$\mathbb{Z}$$ has at least 2 elements (last time I checked), using the contraposition of 11), $$\R^{n} \ncong \mathbb{S}^{1}$$.

15) Explain why we expect $$\pi_{1}(\mathbb{S}^{2}) = \{ * \}$$ where $$\pi_{1}(\mathbb{S}^{2})$$ is the unit sphere
    in $$\R^{3}$$. Admitting it, deduce that $$\mathbb{S}^{1} \ncong \mathbb{S}^{2}$$

> We expect $$\pi_{1}(\mathbb{S}^{2}) = \{ * \}$$ because loops on the surface of a sphere can be continuously deformed to any point on the surface.  
> Using the contraposition of 11), and since $$\pi_{1}(\mathbb{S}^{1}, 1)$$ is isomorph to $$\mathbb{Z}$$, and $$\mathbb{Z}$$ has at least two elements (999999 and 7 for example, I just doubled check to make sure), $$\mathbb{S}^{2} \ncong \mathbb{S}^{1}$$.

### **Definition 1.8: Homotopy of maps**

Let $$f, g : X \to Y$$ be two continuous maps. A _homotopy_ between $$f$$ and $$g$$ is the data of a continuous map $$
H : [0, 1] \times X \to Y$$ such that for $$x \in X$$, $$H(0, x) = f(x)$$ and $$H(1, x) = g(x)$$. We write $$f \sim g$$
when they are _homotopic_, that is when there is an homotopy between them

### **Definition 1.9: Homotopy equivalence**

Let $$f: X \to Y$$ be a continuous map. It is said to be a _homotopy equivalence_ iif there is a homotopy inverse
map $$g: Y \to X$$ of $$f$$ that is such that $$g \circ f \sim id_{X}$$ and $$f \circ g \sim id_{Y}$$. We
write $$X \simeq Y$$ when they are homotopy equivalence. That is when there is a homotopy equivalence between them

16) We show that some of our constructions are homotopy invariant. In the following, $$X$$ and $$Y$$ are topological
    spaces.

**a) Let $$\gamma : x \to y$$ be a path in $$X$$, and let $$\overline{\gamma}$$ be the inverse of $$\gamma$$ up to
homotopy defined by $$\overline{\gamma} := \gamma(1 - s)$$. Show that the
map $$\alpha \mapsto \overline{\gamma} * \alpha * \gamma$$ induces a group
isomorphism $$u_{\gamma} : \pi_{1}(X, x) \to \pi_{1}(X, y)$$ which only depends on the homotopy class of $$\gamma$$.**

> We first prove that $$u_{\gamma}$$ is well defined  
> Let $$[\alpha] \in \pi(X, x)$$, $$\alpha_{1}, \alpha_{2} \in [\alpha]$$,  
> We have $$\alpha_{1} \sim \alpha_{2}$$  
> Let $$H : [0,1]^{2} \to X$$ be a homotopy between $$\alpha_{1}$$ and $$\alpha_{2}$$.  
> We have, $$\forall t \in [0,1]$$, $$H(0,t) = \alpha_{1}(t)$$ and $$H(0,t) = \alpha_{2}(t)$$,  
> and $$\forall s \in [0, 1]$$, $$H(s, 0) = x$$, $$H(s, 1) = x$$.  
> Let $$H': [0, 1]^{2} \to X$$ defined as $$\forall (s,t) \in [0,1]^{2}$$, $$H'(s,t) := (\overline{\gamma} * H(s, \cdot ) * \gamma)(t)$$ with $$H(s, \cdot) = t \mapsto H(s, t)$$.  
> $$H'$$ is continuous as a concatenation of paths and composition of continuous map, and we have:  
> $$\forall t \in [0,1]$$, $$H'(0, t) = (\overline{\gamma} * \alpha_{1} * \gamma)(t)$$, $$H'(1, t) = (\overline{\gamma} * \alpha_{2} * \gamma)(t)$$,  
> and $$\forall s \in [0,1]$$, $$H'(s, 0) = y$$ and $$H'(s, 1) = y$$.  
> $$H'$$ is a homotopy between $$\overline{\gamma} * \alpha_{1} * \gamma$$ and $$\overline{\gamma} * \alpha_{2} * \gamma$$, $$\overline{\gamma} * \alpha_{1} * \gamma \sim \overline{\gamma} * \alpha_{2} * \gamma$$.  
> Thus, $$u_{\gamma}$$ is well defined and we can write $$u_{\gamma}([\alpha])$$.    
> We now prove that $$u_{\gamma}$$ doesn't depend on the choice of $$\gamma$$, up to homotopy.  
> Let $$\gamma_{1}, \gamma_{2} \in [\gamma]$$, $$\gamma_{1} \sim \gamma_{2}$$, and $$\alpha$$ a loop at $$x$$ in $$X$$.  
> Let $$H: [0, 1] \to X$$ be a homotopy between $$\gamma_{1}$$ and $$\gamma_{2}$$,  
> We have $$\forall t \in [0,1]$$, $$H(0, t) = \gamma_{1}(t)$$, $$H(1, t) = \gamma_{2}(t)$$,  
> and $$\forall s \in [0, 1]$$, $$H(s, 0) = x$$, $$H(s, 1) = y$$.  
> Let $$H'(s, t) : [0,1]^{2} \to X$$ defined as $$\forall (s, t) \in [0,1]^{2}$$, $$H'(s, t) := (H1(s, \cdot) * \alpha * H2(s, \cdot))(t)$$,  
> with $$H1(s, \cdot) := t \mapsto H(s, 1-t)$$ and $$H2(s, \cdot) := t \mapsto H(s, t)$$.  
> $$H'$$ is continuous as a concatenation of paths and composition of continuous map,  
> and we have: $$\forall t \in [0,1]$$, $$H'(0, t) = (\overline{\gamma_{1}} * \alpha * \gamma_{1})(t)$$, $$H'(1, t) = (\overline{\gamma_{2}} * \alpha * \gamma_{2})(t)$$,  
> and $$\forall s \in [0,1]$$, $$H'(s, 0) = y$$ and $$H'(s, 1) = y$$.  
> $$H'$$ is a homotopy between $$\overline{\gamma_{1}} * \alpha * \gamma_{1}$$ and $$\overline{\gamma_{2}} * \alpha * \gamma_{2}$$, $$\overline{\gamma_{1}} * \alpha * \gamma_{1} \sim \overline{\gamma_{2}} * \alpha * \gamma_{2}$$.  
> Thus, $$u_{\gamma_{1}}([\alpha]) = u_{\gamma_{2}}([\alpha])$$ and $$u_{\gamma}$$ doesn't depend on the choice of $$\gamma$$.  
> We prove that $$u_{\gamma}$$ is a group morphism.  
> Let $$[\alpha], [\beta] \in \pi(X, x)$$, two loops at $$x$$ in $$X$$.  
> Using $$[\gamma] * [\overline{\gamma}] = [c_{x}]$$, we have:  
> $$u_{\gamma}([\alpha] * [\beta]) = [\overline{\gamma}] * ([\alpha] * [\beta]) * [\gamma] = [\overline{\gamma}] * [\alpha] * [c_{x}] * [\beta] * [\gamma] = ([\overline{\gamma}] * [\alpha] * [\gamma]) * ([\overline{\gamma}] * [\beta] * [\gamma]) = u_{\gamma}([\alpha]) * u_{\gamma}([\beta])$$.  
> Thus, $$u_{\gamma}$$ is a group morphism.  
> We finally prove that $$u_{\gamma}$$ is bijective.  
> Let $$u_{\overline{\gamma}} : \pi(X, y) \to \pi(X, x)$$ defined the same way as $$u_{\gamma}$$ but with $$\overline{\gamma}$$ instead of $$\gamma$$. Note that $$\overline{\overline{\gamma}} = \gamma$$.  
> Let $$[\beta] \in \pi(X, x)$$, and we have:  
> $$(u_{\overline{\gamma}} \circ u_{\gamma})([\beta]) = u_{\overline{\gamma}}([\overline{\gamma}] * [\beta] * [\gamma]) = [\overline{\gamma}] * [\gamma] * [\beta] * [\gamma] * [\overline{\gamma}] = [c_{x}] * [\beta] * [c_{x}] = [\beta]$$  
> Thus $$u_{\overline{\gamma}} \circ u_{\gamma} = id_{\pi(X,x)}$$.  
> Let $$[\alpha] \in \pi(X, y)$$, and we have:  
> $$(u_{\gamma} \circ u_{\overline{\gamma}})([\alpha]) = u_{\gamma}([\gamma] * [\alpha] * [\overline{\gamma}]) = [\overline{\gamma}] * [\gamma] * [\alpha] * [\overline{\gamma}] * [\gamma] = [c_{y}] * [\alpha] * [c_{y}] = [\alpha]$$  
> Thus $$u_{\gamma} \circ u_{\overline{\gamma}} = id_{\pi(X, y)}$$.  
> Therefore, $$u_{\gamma}$$ is bijective, and since it's a morphism, it's an isomorphism

**b) Let $$f, g:X \to Y$$ be two continuous maps and $$x$$ a point of $$X$$. Suppose that we have an
homotopy $$H: [0,1] \times X \to Y$$ between $$f$$ and $$g$$. Let $$\gamma = t \mapsto H(t, x)$$ the induced
path $$f(x) \to g(x)$$. For $$s \in [0, 1]$$, we write $$h_{s} = z \mapsto H(s, z)$$ (we have $$h_{0} = f$$
and $$h_{1} = g$$), consider $$\gamma_{s} : \gamma(s) \to y$$ the path defined
by $$\gamma_{s}(t) := \gamma(s + (1-s)t)$$ and its homotopy
inverse $$\overline{\gamma_{s}} : t \mapsto \gamma_{s}(1-t)$$.  
Then show that $$(s, t) \mapsto (\overline{\gamma_{s}} * (h_{s} \circ \alpha) * \gamma_{s})(t)$$ yield a (fixed
endpoint) homotopy $$\overline{\gamma} * (f \circ \alpha) * \gamma \sim g \circ \alpha$$. Then deduce that we have the
identity $$u_{\gamma} \circ \pi_{1}(f, x) = \pi_{1}(g, x)$$.**

> Let $$H' : [0,1]^{2} \to Y$$ defined as $$\forall (s,t) \in [0,1]^{2}$$, $$H'(s,t) := (\overline{\gamma_{s}} * (h_{s} \circ \alpha) * \gamma_{s})(t)$$.  
> $$H'$$ is continuous as a concatenation of paths and composition of continuous map, and we have:  
> $$\forall t \in [0,1]$$, $$\gamma_{0}(t) = \gamma(t)$$, $$\gamma_{1}(t) = \gamma(1) = g(x) = c_{g(x)}(t)$$,  
> $$H'(0,t) = (\overline{\gamma_{0}} * (h_{0} \circ \alpha) * \gamma_{0})(t) = (\overline{\gamma} * (f \circ \alpha) * \gamma)(t)$$, $$H'(1,t) = (\overline{\gamma_{1}} * (h_{1} \circ \alpha) * \gamma_{1})(t) = (c_{g(x)} * (g \circ \alpha) * c_{g(x)})(t) = (g \circ \alpha)(t)$$,  
> and $$\forall s \in [0,1]$$, $$H'(s, 0) = (\overline{\gamma_{s}} * (h_{s} \circ \alpha) * \gamma_{s})(0) = \overline{\gamma_{s}}(0) = \gamma(1) = g(x)$$ and $$H'(s, 1) = (\overline{\gamma_{s}} * (h_{s} \circ \alpha) * \gamma_{s})(1) = \gamma(1) = g(x)$$.  
> $$H'$$ is a homotopy between $$\overline{\gamma} * (f \circ \alpha) * \gamma$$ and $$g \circ \alpha$$, $$\overline{\gamma} * (f \circ \alpha) * \gamma \sim g \circ \alpha$$.  
> We then prove that $$u_{\gamma} \circ \pi_{1}(f, x) = \pi_{1}(g, x)$$.  
> Let $$[\alpha] \in \pi_{1}(f,x)$$,  
> $$u_{\gamma} \circ \pi_{1}(f, x)([\alpha]) = [\overline{\gamma}] * [f \circ \alpha] * [\gamma] = [\overline{\gamma} * (f \circ \alpha) * \gamma] = [g \circ \alpha] = \pi_{1}(g, x)([\alpha])$$.  
> If $$f \sim g$$, we can transport loops of $$f(x)$$ to loops of $$g(x)$$ along the induced path $$\gamma$$.

17) Suppose we have a homotopy equivalence $$f : X \to Y$$ with a weak inverse $$g$$. We aim to show that $$\pi_{1}(f,
    x)$$ is a group isomorphism.

**a) Using 16)b), deduce that $$\pi_{1}(g, f(x))$$ both admits a left and a right inverse.**

> Let $$H_{1} : [0,1] \times X \to X$$ be a homotopy between $$g \circ f$$ and $$id_{X}$$, and $$H_{2} : [0,1] \times Y \to Y$$ be a homotopy between $$f \circ g$$ and $$id_{Y}$$.  
> Let $$\gamma := t \mapsto H_{1}(t, x)$$ the induced path $$(g \circ f)(x) \to x$$ and $$\delta := t \mapsto H_{2}(t,f(x))$$ the induced path $$(f \circ g)(f(x)) \to f(x)$$.  
> We then have:  
> $$u_{\delta} \circ \pi_{1}(f, (g \circ f)(x)) \circ \pi_{1}(g, f(x)) = u_{\delta} \circ \pi_{1}(f \circ g, f(x)) = \pi_{1}(id_{Y}, f(x)) = id_{\pi_{1}(Y, f(x))}$$  
> Thus $$u_{\delta} \circ \pi_{1}(f, (g \circ f)(x))$$ is the left inverse of $$\pi_{1}(g, f(x))$$.  
> And $$\pi_{1}(g, f(x)) \circ \pi_{1}(f, x) = \pi_{1}(g \circ f, x)$$  
> If we compose to the left with $$u_{\overline{\gamma}} \circ u_{\gamma} = id_{\pi_{1}(X, (g \circ f)(x))}$$ we get:  
> $$\pi_{1}(g, f(x)) \circ \pi_{1}(f, x) = u_{\overline{\gamma}} \circ u_{\gamma} \circ \pi_{1}(g \circ f, x) = u_{\overline{\gamma}} \circ id_{\pi_{1}(X, x)} = u_{\overline{\gamma}}$$  
> We then compose to the right with $$u_{\gamma}$$ and we get:  
> $$\pi_{1}(g, f(x)) \circ \pi_{1}(f, x) \circ u_{\gamma} = u_{\overline{\gamma}} \circ u_{\gamma} = id_{\pi_{1}(X, (g \circ f)(x))}$$  
> Thus, $$\pi_{1}(f, x) \circ u_{\gamma}$$ is the right inverse of $$\pi_{1}(g, f(x))$$.


**b) Deduce that $$\pi_{1}(g, f(x))$$ is an isomorphism, then deduce that $$\pi_{1}(f , x)$$ is also an isomorphism.**

> Since $$\pi_{1}(g, f(x))$$ is a morphism (from 10)a)) and is invertible (from 17)a)), $$\pi_{1}(g, f(x))$$ is an isomorphism.  
> From 17)a), we also get $$\pi_{1}(g, f(x)) \circ \pi_{1}(f,x) \circ u_{\gamma} = id_{\pi_{1}(X, (g \circ f)(x))}$$.  
> By inverting $$\pi_{1}(g, f(x))$$ to the left using $$u_{\delta} \circ \pi_{1}(f, (g \circ f)(x))$$, the composing to the right with $$u_{\overline{\gamma}}$$, we get:  
> $$\pi_{1}(f, x) = u_{\delta} \circ \pi_{1}(f, (g \circ f)(x)) \circ u_{\overline{\gamma}}$$.  
> We also get its inverse $$u_{\gamma} \circ \pi_{1}(g, f(x))$$  
> We have $$\pi_{1}(f,x) \circ u_{\gamma} \circ \pi_{1}(g, f(x)) = u_{\delta} \circ \pi_{1}(f, (g \circ f)(x)) \circ u_{\overline{\gamma}} \circ u_{\gamma} \circ \pi_{1}(g, f(x)) = u_{\delta} \circ \pi_{1}(f, (g \circ f)(x)) \circ \pi_{1}(g, f(x)) = u_{\delta} \circ \pi_{1}(f \circ g, f(x)) = id_{\pi_{1}(Y, f(x))}$$  
> And $$u_{\gamma} \circ \pi_{1}(g, f(x)) \circ \pi_{1}(f,x) = u_{\gamma} \circ \pi_{1}(g \circ f, x) = id_{\pi_{1}(X, x)}$$  
> Therefore, $$\pi_{1}(f,x)$$ is an isomorphism.

18) **Show that for any $$n \in \mathbb{N}$$, $$\R^{n}$$ is homotopy equivalent to a point and not
    to $$\mathbb{S}^{1}$$. Show also that $$\mathbb{S}^{1}$$ is not homotopy equivalent to $$\mathbb{S}^{2}.$$**

> We first prove that $$\R^{n}$$ is homotopy equivalent to a point.  
> Let $$f: \R^{n} \to \{*\}$$ .. well, the only map that can exist, $$\forall x \in \R^{n}$$, $$f(x) := *$$.  
> Let $$g: \{*\} \to \R^{n}$$ be defined as $$\forall * \in \{*\}$$, $$g(*) := 0$$.  
> And let $$H: [0, 1] \times \R^{n} \to \R^{n}$$ be a homotopy between $$g \circ f$$ and $$id_{\R^{n}}$$, defined as $$\forall (s,x) \in [0,1] \times \R^{n}$$, $$H(s, x) = s \cdot x$$.  
> We have $$f \circ g = id_{\{*\}}$$ and $$g \circ f \overset{H}{\sim} id_{\R^{n}}$$, therefore $$\R^{n} \simeq \{*\}$$, i.e.: $$\R^{n}$$ is homotopy equivalent to a point.  
> We now prove that $$\R^{n}$$ is not homotopy equivalent to $$\mathbb{S}^{1}$$.  
> Using the contraposition of 17), the only map $$f : \pi_{1}(\mathbb{S}^{1},1) \to \pi_{1}(\R^{n}, *)$$ is not injective, thus $$\R^{n}$$ is not homotopy equivalent to $$\mathbb{S}^{1}$$.  
> We now prove that $$\mathbb{S}^{1}$$ is not homotopy equivalent to $$\mathbb{S}^{2}$$.  
> Using the same argument, since $$\pi_{1}(\mathbb{S}^{2}, *)$$ has only one element, any map from $$\pi_{1}(\mathbb{S}^{1},1)$$ to it wouldn't be injective, therefore they are not homotopy equivalent.

## Part 2: Brouwer's Fixed Point Theorem

In this section, we show the following theorem, using the tools defined in Part 1. We denote by $$\mathbb{B}^{n}$$ the
closed unit ball of $$\R^{n}$$, that is $$\mathbb{B}^{n} := \{ (x_{1}, \dots, x_{n}) \in \R^{n}\ |\ x_
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
