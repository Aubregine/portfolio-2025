---
title: The Fundamental Group
date: 06-04-2026
tags: [ Mathematics ]
excerpt: Fundamental groups and Brouwer’s fixed point theorem
---

## Introduction

This assignment was given to me by a friend of mine, I did my best and had a lot of fun, I hope you'll enjoy the beauty
of Mathematics as much as I did :)  
You can find the assignment [here](https://luyise.github.io//teaching/2026-04-06-BFP.pdf).

## Part 1: The fundamental group of a space

### **Definition 1.1: Path, Loop**

Let $$X$$ be a topological space.
A path in $$X$$ is a continuous map $$[0, 1] \to X$$.
If $$x, y$$ are points of $$X$$, a path from $$x$$ to $$y$$ is a path
$$\gamma : [0, 1] \to X$$ such that $$\gamma (0) = x$$ and $$\gamma (1) = y$$, which we will sometimes
write $$\gamma : x \to y$$.
A loop in $$X$$ based at $$x$$ is a path in $$X$$ from $$x$$ to itself.
The space $$X$$ is said to be path connected if for any two points $$x, y$$ of $$X$$,
there is a path from $$x$$ to $$y$$

1) **Let $$n \in \mathbb{N}$$**  
   **a) Show that $$\mathbb{R}^{n}$$ is path connected**  
   &nbsp;Let $$x, y \in \mathbb{R}^{n}$$  
   &nbsp;Let $$\gamma : \left[ 0, 1 \right] \to \mathbb{R}^{n}$$ such
   that $$\forall t \in \left[ 0, 1 \right],\ \gamma (t) = (1 - t) x + t y$$  
   &nbsp;$$\gamma$$ is continuous, $$\gamma (0) = x$$ and $$\gamma (1) = y$$  
   &nbsp;$$\gamma$$ is a path between $$x$$ and $$y$$  
   &nbsp;Therefore, $$\mathbb{R}^{n}$$ is path connected  
   **b) For $$n \ge 2$$, show that $$\mathbb{R}^{n} \smallsetminus \left\{ 0 \right\} $$ is path connected**  
   &nbsp;J'ai pas trouvé :( mais géométriquement c'est obviouuuus ouin  
   **c) Let $$a_{1}, \ldots, a_{n} \in \mathbb{R}^{n}$$, show
   that $$\mathbb{R}^{n} \smallsetminus \left\{ a_{1}, \ldots, a_{n} \right\}$$ is path connected**  
   &nbsp;Pareil, géométriquement c'est pas difficile tant que la famille des $$\left\{a_{1}, \ldots, a_{n}\right\}$$ est
   finie :(
2)

**a) Show that $$\mathbb{S}^1 := \left\{ (x, y) \in \mathbb{R}^2\ |\ x^{2} + y^{2} = 1 \right\}$$ is path connected**  
&nbsp;Let $$a = (x_{1}, y_{1}) \in \mathbb{S}^{1}$$ and $$b = (x_{2}, y_{2}) \in \mathbb{S}^1$$  
&nbsp;Let $$\theta_{i} = \begin{cases} \arccos \left( x_{i} \right) &\quad\text{if } y_{i} \ge 0 \\ - \arccos \left( x_{i} \right) &\quad\text{if } y_{i} \lt 0 \end{cases}$$  
&nbsp;Let $$\gamma : \left[ 0, 1 \right] \to \mathbb{R}^2$$ such
that $$\forall t \in \left[ 0, 1 \right],\ \gamma (t) = \Big( \cos \big( (1 - t) \theta_{1} + t \theta_{2} \big),\ \sin \big( (1 - t) \theta_{1} + t \theta_{2} \big) \Big)$$  
&nbsp;Since $$\forall t \in \left[0,1\right],\ \cos \big( (1-t) \theta_{1} + t \theta_{2} \big)^{2} + \sin \big( (1-t) \theta_{1} + t \theta_{2} \big)^{2} = 1$$, $$\gamma \left( \left[0,1\right] \right) \subset \mathbb{S}^1$$  
&nbsp;We now consider $$\gamma' : \left[ 0, 1 \right] \to \mathbb{S}^1$$ the corestriction of $$\gamma$$
to $$\mathbb{S}^1$$  
&nbsp;$$\gamma'$$ is continuous and   
&nbsp;$$ \gamma' (0) = \begin{cases} \Big( \cos \big( \arccos(x_{1}) \big),\ \sin \Big( \arccos( x_{1} ) \Big) &\quad\text{if } y_{1} \ge 0 \\ \Big( \cos \big( -\arccos(x_{1}) \big),\ \sin \big( -\arccos(x_{1}) \big) \Big) &\quad\text{if } y_{1} \lt 0 \end{cases}$$  
&nbsp;$$ \gamma' (0) = \begin{cases} ( x_{1} ,\ \sqrt{1-x_{1}^2} ) &\quad\text{if } y_{1} \ge 0 \\ ( x_{1},\ - \sqrt{1 - x_{1}^2} ) &\quad\text{if } y_{1} \lt 0 \end{cases}$$  
&nbsp;$$ \gamma' (0) = \begin{cases} ( x_{1} ,\ |y_{1}| ) &\quad\text{if } y_{1} \ge 0 \\ ( x_{1},\ -|y_{1}|) &\quad\text{if } y_{1} \lt 0 \end{cases}$$  
&nbsp;$$ \gamma' (1) = \begin{cases} \Big( \cos \big( \arccos(x_{2}) \big),\ \sin \Big( \arccos( x_{2} ) \Big) &\quad\text{if } y_{2} \ge 0 \\ \Big( \cos \big( -\arccos(x_{2}) \big),\ \sin \big( -\arccos(x_{2}) \big) \Big) &\quad\text{if } y_{2} \lt 0 \end{cases}$$  
&nbsp;$$ \gamma' (1) = \begin{cases} ( x_{2} ,\ \sqrt{1-x_{2}^2} ) &\quad\text{if } y_{2} \ge 0 \\ ( x_{2},\ - \sqrt{1 - x_{2}^2} ) &\quad\text{if } y_{2} \lt 0 \end{cases}$$  
&nbsp;$$ \gamma' (1) = \begin{cases} ( x_{2} ,\ |y_{2}| ) &\quad\text{if } y_{2} \ge 0 \\ ( x_{2},\ -|y_{2}|) &\quad\text{if } y_{2} \lt 0 \end{cases}$$  
&nbsp;$$ \gamma' (0) = a$$, $$ \gamma' (1) = b$$  
&nbsp;$$\gamma'$$ is a path between $$a$$ and $$b$$  
&nbsp;Therefore, $$\mathbb{S}^1$$ is path connected  
**b) Show that $$\left] 0, 1 \right[$$ is path connected**  
&nbsp;Let $$x, y \in \left]0,1\right[$$  
&nbsp;Let $$\gamma : \left[ 0, 1 \right] \to \left]0,1\right[$$ such
that $$\forall t \in \left[ 0, 1 \right],\ \gamma (t) = (1 - t) x + t y$$  
&nbsp;$$\gamma$$ is continuous, $$\gamma (0) = x$$ and $$\gamma (1) = y$$  
&nbsp;$$\gamma$$ is a path between $$x$$ and $$y$$  
&nbsp;Therefore, $$\left] 0, 1 \right[$$ is path connected  
**c) Show that $$\left] 0, 1 \right[ \smallsetminus \left\{ \frac{1}{2} \right\}$$ is not path connected**  
&nbsp;Let $$x = \frac{1}{4}$$ and $$y = \frac{3}{4}$$  
&nbsp;Let $$\gamma : [0,1] \to ]0,1[$$ be a continuous map with $$\gamma (0) = x$$ and $$\gamma (1) = y$$  
&nbsp;Since $$\gamma$$ is continuous, $$\gamma(0) = \frac{1}{4}$$ and $$\gamma(1) = \frac{3}{4}$$, we can apply the
Intermediate Value Theorem, giving us $$t_{0} \in [0, 1]$$ such
that $$\gamma (t_{0}) = \frac{1}{2}$$  
&nbsp;$$\gamma$$ is not a map onto $$]0,1[\ \smallsetminus \ \{ \frac{1}{2} \}$$. $$\gamma$$
is not a path  
&nbsp;There are no path between $$x$$ and $$y$$  
&nbsp;Therefore, $$]0,1[\ \smallsetminus \ \{ \frac{1}{2} \}$$ is not path connected

### **Definition 1.2: Homeomorphism**

Let $$X, Y$$ be two topological spaces. A _homeomorphism_ $$f : X \to Y$$ is an invertible continuous map such that its
inverse $$f^{-1} : Y \to X$$ is also continuous.  
We say that $$X$$ and $$Y$$ are _homeomorphic_ whenever there is such homeomorphism $$f : X \to Y$$ and we
write $$X \cong Y$$. Hence $$\cong$$ is an equivalence relation on topological spaces (if not convinced, check it!) (I
did 🫡)

3) **Show that the map $$e :\ ]0,1[\ \to \mathbb{S}^{1} \smallsetminus \{(0,1)\}$$ defined
   by $$e(t):= \big( cost(2 \pi t), sin(2 \pi t)\big)$$ is a homeomorphism**  
   &nbsp;$$e$$ is continuous because both $$t \mapsto \cos(2 \pi t)$$ and $$t \mapsto \sin(2 \pi t)$$ are continuous
   on $$[0,1]$$    
   &nbsp;Let $$f : \mathbb{S}^{1} \smallsetminus \{(0,1)\} \to ]0,1[$$ defined
   as $$f((x, y)) = \begin{cases} \frac{1}{2 \pi} \arccos (x) &\quad\text{if } y \ge 0 \\ 1-\frac{1}{2 \pi} \arccos (x) &\quad\text{if } y \le 0 \end{cases}$$  
   &nbsp;$$f$$ is well defined because $$\frac{1}{2 \pi} \arccos(-1) = \frac{1}{2}$$
   and $$1 - \frac{1}{2 \pi} \arccos(1) = \frac{1}{2}$$  
   &nbsp;$$f$$ is continuous because both $$t \mapsto \frac{1}{2 \pi} \arccos(t)$$
   and $$t \mapsto 1 - \frac{1}{2 \pi} \arccos(t)$$ are continuous  
   &nbsp;We
   have $$\forall (x,y) \in \mathbb{S}^{1},$$  
   &nbsp;$$(e \circ f)((x, y)) = \begin{cases} \Big( \cos \big( 2 \pi \frac{1}{2 \pi } \arccos(x) \big), sin \big( 2 \pi \frac{1}{2 \pi} \arccos (x) \big) \Big) &\quad\text{if } y \ge 0 \\ \Big( \cos \big( -2 \pi \frac{1}{2 \pi } \arccos(x) \big), sin \big( -2 \pi \frac{1}{2 \pi} \arccos (x) \big) \Big) &\quad\text{if } y \le 0\end{cases}$$  
   &nbsp;$$(e \circ f)((x, y)) = \begin{cases} \Big( \cos \big( \arccos(x) \big), sin \big( \arccos (x) \big) \Big) &\quad\text{if } y \ge 0 \\ \Big( \cos \big( \arccos(x) \big), sin \big( \arccos (x) \big) \Big) &\quad\text{if } y \le 0\end{cases}$$  
   &nbsp;$$(e \circ f)((x, y)) = \begin{cases} \Big( x, \sqrt{1 - x^{2}} \Big) &\quad\text{if } y \ge 0 \\ \Big( x , -\sqrt{1-x^{2}} \Big) &\quad\text{if } y \le 0\end{cases}$$  
   &nbsp;$$(e \circ f)((x, y)) = \begin{cases} \Big( x, |y| \Big) &\quad\text{if } y \ge 0 \\ \Big( x , -|y| \Big) &\quad\text{if } y \le 0\end{cases}$$  
   &nbsp;$$(e \circ f)((x,y)) = (x, y)$$, i.e: $$e \circ f = id_{\mathbb{S}^{1}}$$  
   &nbsp;And $$\forall t \in ]0, 1[$$,  
   &nbsp;$$(f \circ e)(t) = \begin{cases} \frac{1}{2 \pi} \arccos \big( cos(2 \pi t) \big) &\quad\text{if } sin(2 \pi t) \ge 0 \\ 1 - \frac{1}{2 \pi} \arccos \big( cos(2 \pi t) \big) &\quad\text{if } sin(2 \pi t) \le 0 \end{cases}$$  
   &nbsp;Using $$\cos(2 \pi t - \pi) = -cos(2 \pi t)$$, we get  
   &nbsp;$$(f \circ e)(t) = \begin{cases} t &\quad\text{if } 2 \pi t \le \pi \\ 1 - \frac{1}{2 \pi} \arccos(-cos(2 \pi t - \pi)) &\quad\text{if } 2 \pi t \ge \pi \end{cases}$$  
   &nbsp;Using $$\arccos(-z) = \pi - \arccos(z)$$, we get  
   &nbsp;$$(f \circ e)(t) = \begin{cases} t &\quad\text{if } 2 \pi t \le \pi \\ 1 - \frac{1}{2 \pi} (\pi - \arccos \big( cos(2 \pi t - \pi)) \big) &\quad\text{if } 2 \pi t \ge \pi \end{cases}$$  
   &nbsp;$$(f \circ e)(t) = \begin{cases} t &\quad\text{if } 2 \pi t \le \pi \\ 1 - \frac{1}{2 \pi} (\pi - (2 \pi t - \pi)) &\quad\text{if } 2 \pi t \ge \pi \end{cases}$$  
   &nbsp;$$(f \circ e)(t) = \begin{cases} t &\quad\text{if } 2 \pi t \le \pi \\ t &\quad\text{if } 2 \pi t \ge \pi \end{cases}$$  
   &nbsp;$$(f \circ e)(t) = t, i.e: f \circ e = id_{]0,1[}$$  
   &nbsp;We have thus $$f = e^{-1}$$, $$e$$ is a homeomorphism
4) **Let $$X \cong Y$$ be two homeomorphic spaces, show that $$X$$ is path connected iif $$Y$$ is**
5) **Show that if $$f : X \to Y$$ is a homeomorphism, then for any $$x \in X$$ it induces an homeomorphism $$X
   \smallsetminus \{x\} \to Y \smallsetminus \{f(x)\}$$**
6) **Deduce from the previous questions that $$\mathbb{S}^{1} \smallsetminus \{(0,1)\}$$ is path connected
   and $$\mathbb{S}^{1} \smallsetminus \{(1, 0), (−1, 0)\}$$ is not**

These firsts questions illustrated that the connectedness of a space is an interesting property which is
invariant by homeomorphism. Hence it may help to know whether two spaces are homeomorphic or not.
Howether this method will become quickly limited in order to compare more complex spaces such as higher
spheres. We now define the notion of homotopy, which is to paths what paths are to points, that is, paths
between paths

### **Definition 1.3: Homotopy of paths**

Let $$X$$ be a space and $$\alpha, \beta : [0, 1] \to X$$ be two paths from $$x$$ to $$y$$. A (fixed endpoints) homotopy
between
$$\alpha$$ and $$\beta$$ is the data of a map $$H : [0,1]^{2} \to X$$ such that

* $$\forall t, H (0, t) = \alpha (t)$$ and $$H(1, t) = \beta (t)$$
* $$\forall s, H(s, 0) = x$$ and $$H(s, 1) = y$$

We write $$\alpha \sim \beta$$ when they are _homotopic_, that is when there is an homotopy between them

8) **Let $$X$$ be a space and $$x, y \in X$$, show that $$\sim$$ induces an equivalence relation on paths of $$X$$
   from $$x$$ to $$y$$**

### **Definition 1.4: Concatenation of paths**

Let $$X$$ be a space, let $$\alpha : x \to y$$ and $$\beta : y \to z$$ be two paths in $$X$$. Their
concatenation $$\alpha * \beta$$ is the path defined by  
$$ (\alpha * \beta) (s) = \alpha (2s)$$ if $$s \le \frac{1}{2}$$ and $$(\alpha * \beta) (s) = \beta (2s - 1)$$
if $$s \ge \frac{1}{2}$$

9) **Let $$X$$ be a topological space. For any $$x \in X$$, we denote $$c_{x}$$ the constant path $$x \to x$$**  
   a) Let $$\alpha : x \to y$$ be a path. Show that $$c_{x} * \alpha \sim \alpha$$ and $$\alpha * c_{x} \sim \alpha$$  
   **b) Let $$\alpha : w \to x$$, $$\beta : x \to y$$, $$\gamma : y \to z$$ three paths in $$X$$. Show
   that $$(\alpha * \beta) * \gamma \sim \alpha * (\beta * \gamma)$$**  
   c) Let $$\alpha : x \to y$$ be a path, exhibit a path $$\beta : y \to x$$ such that $$\alpha * \beta \sim c_{x}$$
   and $$\beta * \alpha \sim c_{y}$$  
   **d) Let $$x \in X$$. Deduce that $$*$$ induces a group structure on homotopy classes of loops $$x \to x$$ in $$X$$,
   that is, on $$\{ \gamma : x \to x \}_{/\sim}$$**

### **Definition 1.5: Fundamental Group**

For $$X$$ a space and $$x$$ a point of $$X$$, we denote $$\pi_{1}(X, x)$$ the group defined in question 9 _d_. We call
it
the _fundamental group of $$X$$ at $$x$$_

10) **Let $$f : X \to Y$$ be an homeomorphism. Show that $$\pi_{1}(X, x) \simeq \pi_{1}(Y, f(x))$$ are isomorphic
    as groups**

We now turn to the computation of $$\pi_{1}(\mathbb{S}^{1}, (1, 0))$$. In the following we identify $$\mathbb{S}^{1}$$
with the complex unit circle $$\mathbb{U} = \{z \in \mathbb{C} |\ |z| = 1\}$$, and denote $$exp$$ the
map $$ s \mapsto e^{i s} : \mathbb{R} \to \mathbb{S}^{1}$$. We first aim to shew the following lemma:

### **Lemma 1.6: Lifting theorem**

Let $$a \le b \in \mathbb{R}$$ and $$f : [a, b] \in \mathbb{S}^{1}$$ be a continuous map, there is a continuous
map $$\hat{f} : [a, b] \to \mathbb{R}$$ such that $$exp \circ \hat{f} = f$$

11)

**a) Let $$a \le b$$ and suppose $$f : [a, b] \to \mathbb{S}^{1}$$ misses a point (say $$1$$). Show using question 3
that $$f$$ admits such a lift $$hat{f} : [a, b] \to \mathbb{R}$$**  
**b) Let $$a \le b$$ and consider any continuous map $$f : [a, b] \to \mathbb{S}^{1}$$. Show that we may split the
interval $$[a, b]$$ as $$a = a_{0} \le a_{1} \le \dots \le a_{N} = b$$ such that for
each $$i \lt N$$, $$f_{i} := f|_{[a_{i},a{i+1}]} : [a_{i},a_{i+1}] \to \mathbb{S}^{1}$$ avoids one point. By 11 _a_,
each of them admits a lift $$\hat{f_{i}} : [a_{i},a_{i+1}] \to \mathbb{R}$$. Show that we may assure for
each $$i \lt \ N - 1$$, $$\hat{f_{i}}(a_{i+1}) = \hat{f_{i+1}}(a_{i+1}). Conclude that $$f$$ admits a lift $$\hat{f}$$
which achieves the proof of Lemma 1.6**

We then admit the following variant of _Lemma_ 1.6 which may be proven similarly by cutting $$[0,1]^{2}$$ in cute little
squares

### **Lemma 1.7: Lifting theorem 2**

Let $$f : [0, 1]^{2} \to \mathbb{S}^{1}$$ be a continuous map, there is a continuous
map $$\hat{f} : [0,1]^{2} \to \mathbb{R}$$ such that $$exp \circ \hat{f} = f$$

12) **We now compute $$\pi_{1}(\mathbb{S}^{1}, 1)$$**  
    **a) Let $$\gamma : 1 \in 1$$ be a loop in $$\mathbb{S}^{1}$$ (seen as $$\mathbb{U} \subseteq \mathbb{C}$$). Using
    the lifting lemma, we consider a lift $$\hat{\gamma} : [0,1] \to \mathbb{R}$$ of $$
    \gamma$$. We then define the _index_ of $$\gamma$$ to be $$ind(\gamma) := |\hat{\gamma}(1)-\hat{\gamma}(
    0)|$$. Show that $$ind(\gamma)$$ does not depend on the choice of the lift $$\hat{\gamma}$$**  
    **b) Show that if $$\gamma \sim \delta$$ are two homotopic loops $$1 \to 1$$ in $$\mathbb{S}^{1}$$, then $$ind(
    \gamma) = ind(\delta)$$**  
    **c) Show that $$ind(c_{1}) = 0$$ and $$ind(\gamma * \delta) = ind(\gamma) + ind(\delta)$$**  
    **d) Deduce from the previous subquestions that $$ind$$ induces a group morphism still denoted $$ind : \pi_{1}(
    \mathbb{S}^{1}, 1) \to \mathbb{Z}$$**  
    **e) Show that $$ind$$ is surjective**  
    **f) Let $$\gamma, \delta$$ be such that $$ind(\gamma) = ind(\delta)$$. Show that we may choose $$\hat{\gamma},
    \hat{\delta}$$ such that $$\hat{\gamma}(0) = \hat{\delta}(0) = 0$$ and $$\hat{\gamma}(1) = \hat{\delta}(
    1)$$. Find a homotopy betwee $$\hat{\gamma}$$ and $$\hat{\delta}$$. Deduce that $$\gamma \sim
    \delta$$. Deduce that $$ind : \pi_{1}(\mathbb{S}^{1}, 1) \to \mathbb(Z)$$ is injective**  
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
group morphism denoted $$\pi_{1}(id_{x}, x) = id_{\pi_{1}(X, x)}$$**  
**b) Show that for $$x$$ a point of space $$X$$, $$\pi_{1}(id_{x}, x) = id_{pi_{1}(X, x)}$$**  
**c) Show that for composable continuous maps $$X \overset{f}{\to } Y \overset{g}{\to } Z$$, and $$x \in X$$ we have $$
\pi_{1}(g \circ f, x) = \pi_{1}(g, f(x)) \circ \pi_{1}(f, x)$$**

### **Definition 1.9: Homotopy equivalence**

Let $$f: X \to Y$$ be a continuous map. It is said to be a _homotopy equivalence_ iif there is a homotopy inverse
map $$g: Y \to X$$ of $$f$$ that is such that $$g \circ f \sim id_{X}$$ and $$f \circ g \sim id_{Y}$$. We
write $$X \simeq Y$$ when they are homotopy equivalence. That is when there is a homotopy equivalence between them

16) **Deduce from question 15 that if $$f : X \to Y$$ is a homotopy equivalence and $$x \in X$$,
    then $$\pi_{1}(f, x) : \pi_{1}(X, x) \to \pi_{1}(Y, f(x))$$ is a group isomorphism**
17) **Show that for any $$n \in \mathbb{N}$$, $$\mathbb{R}^{n}$$ is homotopy equivalent to a point and not
    to $$\mathbb{S}^{1}$$. Show also that $$\mathbb{S}^{1}$$ is not homotopy equivalent to $$\mathbb{S}^{2}$$**

## Part 2: Brouwer's Fixed Point Theorem

In this section, we show the following theorem, using the tools defined in Part 1. We denote by $$\mathbb{B}^{n}$$ the
closed unit ball of $$\mathbb{R}^{n}$$, that is $$\mathbb{B}^{n} := \{ (x_{1}, \dots, x_{n}) \in \mathbb{R}^{n} | x_
{1}^{2} + \dots + x_{n}^{2} = 1 \}$$. Then $$\mathbb{S}^{n}$$ is the boundary of $$\mathbb{B}^{n+1}$$

### **Theorem 2.1: Fixed Point (Brouwer)**

Let $$f : {\mathbb{B}^{2}} \to {\mathbb{B}^{2}}$$ be a map from the unit disk to itself, then $$f$$ admits a fixed point

In order to prove the theorem, we will make use of the following lemma

### **Lemma 2.2: Non retraction of the disk on its boundary**

There is no continuous map $$r : \mathbb{B}^{2} \to \mathbb{S}^{1}$$ which restricts to the identity
on $$\mathbb{S}^{1}$$

1) **We prove Lemma 2.2. Consider such a map $$r : \mathbb{B}^{2} \to \mathbb{S}^{1}$$**  
   **a) Remark that $$r \circ \iota = id_{\mathbb{S}^{1}}$$, where $$\iota : \mathbb{S}^{1} \to \mathbb{B}^{2}$$ is the
   inclusion of the unit circle into the unit disk. Deduce from the first section
   that $$\pi_{1}(id_{\mathbb{S}^{1}}, (1, 0)) = \pi_{1}(r, (1, 0)) \circ \pi_{1}(\iota, (1, 0))$$ must be the null
   morphism $$\mathbb{Z} \to \mathbb{Z}$$**  
   **b) Deduce an absurdity 😣**

We then prove Theorem 2.1 by an _evil_ contradiction 👿 (This requires the excluded middle, which is very bad logical
taste)

2) **Let $$f : \mathbb{B}^{2} \to \mathbb{B}^{2}$$ be a continuous map, and assume by contradiction that it does not
   have any fixed point. Consider the map $$r: \mathbb{B}^{2} \to \mathbb{S}^{1}$$ defined as follows:
   for $$x \in \mathbb{B}^{2}$$, $$r(x)$$ is the unique intersection of the ray (half line) $$]f(x),x)$$ with the unit
   circle $$\mathbb{S}^{1}$$. Formally, $$r(x) = f(x) + \lambda(x)(x-f(x))$$ for the unique $$\lambda(x) \gt 0$$ such
   that $$r(x) \in \mathbb{S}^{1}$$**  
   **a) Make a drawing illustrating a point $$x, f(x)$$ and $$r(x)$$ (yes, this is important!)** I did my best 🫡  
   **b) Show that $$\lambda$$ is well defined and continuous. Deduce that $$r$$ is continuous**  
   **c) Conclude using Lemma 2.2**  
