---
title: "Short Note"
description: ""
---

### 1. Laplace Transforms

**Definition:**
$$F(s) = \mathcal{L}\{f(t)\} = \int_{0}^{\infty}f(t)e^{-st}dt$$

**Elementary Transforms:**

| Function $f(t)$ | Laplace Transform $F(s)$ | Condition |
| :--- | :--- | :--- |
| $1$ | $\frac{1}{s}$ | $s>0$ |
| $t$ | $\frac{1}{s^{2}}$ | $s>0$ |
| $t^{n}$ | $\frac{n!}{s^{n+1}}$ | $n \in \mathbb{Z}^+, s>0$ |
| $e^{at}$ | $\frac{1}{s-a}$ | [cite_start]$s-a>0$ [cite: 58-60] |
| $\sin(at)$ | $\frac{a}{s^{2} + a^{2}}$ | [cite_start]$s \ne \pm ia$ [cite: 61-63] |
| $\cos(at)$ | $\frac{s}{s^{2} + a^{2}}$ | $s \ne \pm ia$ |
| $\sinh(at)$ | $\frac{a}{s^{2} - a^{2}}$ | $s \ne \pm a$ |
| $\cosh(at)$ | $\frac{s}{s^{2} - a^{2}}$ | $s \ne \pm a$ |
| $\delta(t)$ (Dirac Delta) | $1$ | |
| $\delta(t-a)$ | $e^{-as}$ | |

**Key Properties & Theorems:**

* **Linearity:** $\mathcal{L}\{af(t)+bg(t)\} = a\mathcal{L}\{f(t)\} + b\mathcal{L}\{g(t)\}$
* **First Shifting (Frequency):** $\mathcal{L}\{e^{at}f(t)\} = F(s-a)$
* **Second Shifting (Time):** $\mathcal{L}\{u(t-a)f(t-a)\} = e^{-as}F(s)$
* **Time Scaling:** $\mathcal{L}\{f(\alpha t)\} = \frac{1}{\alpha}F(\frac{s}{\alpha})$
* **Multiplication by $t^n$:** $\mathcal{L}\{t^{n}f(t)\} = (-1)^{n}\frac{d^{n}}{ds^{n}}[F(s)]$
* **Division by $t$:** $\mathcal{L}\{\frac{1}{t}f(t)\} = \int_{s}^{\infty}F(x)dx$
* **Periodic Functions (Period $T$):** $\mathcal{L}\{f(t)\} = \frac{\int_{0}^{T}e^{-st}f(t)dt}{1-e^{-sT}}$

**Derivatives and Integrals:**

* **First Derivative:** $\mathcal{L}\{y^{\prime}(t)\} = s\mathcal{L}\{y(t)\} - y(0)$
* **Second Derivative:** $\mathcal{L}\{y^{\prime\prime}(t)\} = s^{2}\mathcal{L}\{y(t)\} - sy(0) - y^{\prime}(0)$
* **Integral:** $\mathcal{L}\{\int_{0}^{t}f(x)dx\} = \frac{1}{s}F(s)$

**Convolution Theorem:**
$$\mathcal{L}\{(f*g)(t)\} = \mathcal{L}\{f(t)\} \cdot \mathcal{L}\{g(t)\}$$
Where $(f*g)(t) = \int_{0}^{t}f(\tau)g(t-\tau)d\tau$


---

### 2. Fourier Series

**Standard Form (Period $2\pi$, Interval $-\pi \le x \le \pi$):**
$$f(x) = \frac{a_{0}}{2} + \sum_{n=1}^{\infty}(a_{n}\cos(nx) + b_{n}\sin(nx))$$
* $a_{0} = \frac{1}{\pi}\int_{-\pi}^{\pi}f(x)dx$
* $a_{n} = \frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\cos(nx)dx$
* $b_{n} = \frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\sin(nx)dx$

**General Period (Period $2l$, Interval $-l \le x \le l$):**
$$f(x) = \frac{a_{0}}{2} + \sum_{n=1}^{\infty}(a_{n}\cos(\frac{n\pi x}{l}) + b_{n}\sin(\frac{n\pi x}{l}))$$
* $a_{n} = \frac{1}{l}\int_{-l}^{l}f(x)\cos(\frac{n\pi x}{l})dx$
* $b_{n} = \frac{1}{l}\int_{-l}^{l}f(x)\sin(\frac{n\pi x}{l})dx$

**Half-Range Series (Interval $0 < x < \pi$):**
* **Cosine Series (Even Ext.):** $b_n = 0$, $a_0 = \frac{2}{\pi}\int_{0}^{\pi}f(x)dx$, $a_n = \frac{2}{\pi}\int_{0}^{\pi}f(x)\cos(nx)dx$
* **Sine Series (Odd Ext.):** $a_n = 0, a_0 = 0$, $b_n = \frac{2}{\pi}\int_{0}^{\pi}f(x)\sin(nx)dx$

**Parseval's Formula (Period $2c$):**
$$\int_{-c}^{c}[f(x)]^{2}dx = c(\frac{a_{0}^{2}}{2} + \sum_{n=1}^{\infty}(a_{n}^{2} + b_{n}^{2}))$$

**Complex Form (Period $2l$):**
$$f(x) = \sum_{-\infty}^{\infty}c_{n}e^{\frac{in\pi x}{l}}$$
$$c_{n} = \frac{1}{2l}\int_{-l}^{l}f(x)e^{-\frac{in\pi x}{l}}dx$$

---

### 3. Partial Differential Equations (PDEs)

**Classification (Second Order Linear PDE):**
[cite_start]Given $Au_{xx} + Bu_{xy} + Cu_{yy} + \dots = 0$[cite: 580]:
* **Elliptic:** $B^{2} - 4AC < 0$
* **Hyperbolic:** $B^{2} - 4AC > 0$
* **Parabolic:** $B^{2} - 4AC = 0$

**Key Equations:**
* **Laplace Equation (2D):** $\frac{\partial^{2}\theta}{\partial x^{2}} + \frac{\partial^{2}\theta}{\partial y^{2}} = 0$
* **Laplace (Polar):** $r^{2}\frac{\partial^{2}T}{\partial r^{2}} + r\frac{\partial T}{\partial r} + \frac{\partial^{2}T}{\partial\theta^{2}} = 0$
* **Heat Equation (1D):** $\frac{\partial^{2}\theta}{\partial x^{2}} = \frac{1}{k}\frac{\partial\theta}{\partial t}$
* **Wave Equation (1D):** $\frac{\partial^{2}y}{\partial t^{2}} = c^{2}\frac{\partial^{2}y}{\partial x^{2}}$

**Separation of Variables:**
Assume solution form: $u(x,y) = X(x)Y(y)$

---

### 4. Series Solutions & Special Functions

**Ordinary Point Solution:**
$$y = \sum_{n=0}^{\infty}a_{n}x^{n}$$

**Regular Singular Point (Frobenius Method):**
$$y = x^{m}\sum_{n=0}^{\infty}a_{n}x^{n}$$
* [cite_start]Requires solving the **indicial equation** for $m$[cite: 904].

**Bessel's Equation:**
$$x^{2}\frac{d^{2}y}{dx^{2}} + x\frac{dy}{dx} + (x^{2} - n^{2})y = 0$$

---

### 5. Fourier Transform

**Definition:**
$$F(\omega) = \mathcal{F}\{f(t)\} = \int_{-\infty}^{\infty}f(t)e^{-i\omega t}dt$$

**Inverse Transform:**
$$f(t) = \frac{1}{2\pi}\int_{-\infty}^{\infty}F(\omega)e^{i\omega t}d\omega$$

**Key Properties:**
* **Linearity:** $\mathcal{F}\{af + bg\} = a\mathcal{F}\{f\} + b\mathcal{F}\{g\}$
* **Frequency Shifting:** $\mathcal{F}\{e^{iat}f(t)\} = F(\omega - a)$
* **Time Shifting:** $\mathcal{F}\{f(t-t_{0})\} = e^{-i\omega t_{0}}F(\omega)$
* **Differentiation (Time):** $\mathcal{F}\{f^{\prime}(t)\} = i\omega F(\omega)$
* **Differentiation (Frequency):** $\mathcal{F}\{tf(t)\} = i\frac{d}{d\omega}F(\omega)$
* **Convolution:** $\mathcal{F}\{f*g\} = F(\omega)G(\omega)$

**Sine and Cosine Transforms ($t \ge 0$):**
* **Cosine Transform:** $F_{c}(\omega) = \int_{0}^{\infty}f(t)\cos(\omega t)dt$
* **Sine Transform:** $F_{s}(\omega) = \int_{0}^{\infty}f(t)\sin(\omega t)dt$

**Common Transforms:**
* $\mathcal{F}\{e^{-\alpha|t|}\} = \frac{2\alpha}{\alpha^{2} + \omega^{2}}$ ($\alpha > 0$)
* $\mathcal{F}\{\delta(t)\} = 1$
* $\mathcal{F}\{e^{-\alpha t^2}\} = \sqrt{\frac{\pi}{\alpha}}e^{-\omega^2/(4\alpha)}$ ($\alpha > 0$)