---
title: "1. Complete Laplace Transform Table"
description: ""
---

## Basic Properties and Theorems

### Linearity
$$\mathcal{L}\{af(t) + bg(t)\} = aF(s) + bG(s)$$

### First Shifting Theorem (Frequency Shift)
$$\mathcal{L}\{e^{at}f(t)\} = F(s-a)$$

### Second Shifting Theorem (Time Shift)
$$\mathcal{L}\{f(t-a)u(t-a)\} = e^{-as}F(s), \quad a > 0$$

### Scaling Theorem
$$\mathcal{L}\{f(at)\} = \frac{1}{a}F\left(\frac{s}{a}\right), \quad a > 0$$

### Differentiation (Time Domain)
$$\mathcal{L}\{f'(t)\} = sF(s) - f(0)$$
$$\mathcal{L}\{f''(t)\} = s^2F(s) - sf(0) - f'(0)$$

### Integration (Time Domain)
$$\mathcal{L}\left\{\int_0^t f(\tau)d\tau\right\} = \frac{F(s)}{s}$$

### Differentiation (Frequency Domain)
$$\mathcal{L}\{tf(t)\} = -\frac{dF}{ds}$$
$$\mathcal{L}\{t^nf(t)\} = (-1)^n\frac{d^nF}{ds^n}$$

### Convolution Theorem
$$\mathcal{L}\{f(t) * g(t)\} = F(s)G(s)$$
where $f(t) * g(t) = \int_0^t f(\tau)g(t-\tau)d\tau$

### Initial Value Theorem
$$f(0^+) = \lim_{s \to \infty} sF(s)$$

### Final Value Theorem
$$\lim_{t \to \infty} f(t) = \lim_{s \to 0} sF(s)$$ (if limit exists)

---

## Standard Laplace Transform Pairs

| $f(t)$ | $F(s) = \mathcal{L}\{f(t)\}$ | Conditions |
|--------|-----|-----------|
| $\delta(t)$ (Dirac delta) | $1$ | |
| $u(t)$ (Unit step) | $\frac{1}{s}$ | $s > 0$ |
| $t$ | $\frac{1}{s^2}$ | $s > 0$ |
| $t^n$ | $\frac{n!}{s^{n+1}}$ | $s > 0, n \in \mathbb{Z}^+$ |
| $t^{n-1}e^{-at}$ | $\frac{(n-1)!}{(s+a)^n}$ | $s > -a, n \in \mathbb{Z}^+$ |
| $e^{at}$ | $\frac{1}{s-a}$ | $s > a$ |
| $te^{at}$ | $\frac{1}{(s-a)^2}$ | $s > a$ |
| $t^ne^{at}$ | $\frac{n!}{(s-a)^{n+1}}$ | $s > a$ |
| $\sin(bt)$ | $\frac{b}{s^2+b^2}$ | $s > 0$ |
| $\cos(bt)$ | $\frac{s}{s^2+b^2}$ | $s > 0$ |
| $\sinh(bt)$ | $\frac{b}{s^2-b^2}$ | $s > b$ |
| $\cosh(bt)$ | $\frac{s}{s^2-b^2}$ | $s > b$ |
| $e^{at}\sin(bt)$ | $\frac{b}{(s-a)^2+b^2}$ | $s > a$ |
| $e^{at}\cos(bt)$ | $\frac{s-a}{(s-a)^2+b^2}$ | $s > a$ |
| $t\sin(bt)$ | $\frac{2bs}{(s^2+b^2)^2}$ | $s > 0$ |
| $t\cos(bt)$ | $\frac{s^2-b^2}{(s^2+b^2)^2}$ | $s > 0$ |
| $\sin(bt) - bt\cos(bt)$ | $\frac{2b^3}{(s^2+b^2)^2}$ | $s > 0$ |
| $t\sinh(bt)$ | $\frac{2bs}{(s^2-b^2)^2}$ | $s > b$ |
| $t\cosh(bt)$ | $\frac{s^2+b^2}{(s^2-b^2)^2}$ | $s > b$ |

---

## Additional Common Functions

| $f(t)$ | $F(s)$ |
|--------|--------|
| $u(t-a)$ | $\frac{e^{-as}}{s}$ |
| $(t-a)u(t-a)$ | $\frac{e^{-as}}{s^2}$ |
| $e^{-at}u(t)$ | $\frac{1}{s+a}$ |
| $\sin(bt-c)u(t)$ | $\frac{b\cos(c) + s\sin(c)}{s^2+b^2}$ |
| $\cos(bt-c)u(t)$ | $\frac{s\cos(c) + b\sin(c)}{s^2+b^2}$ |
| $\frac{\sin(bt)}{t}$ | $\arctan\left(\frac{b}{s}\right)$ |
| $u(t) - u(t-a)$ (pulse) | $\frac{1-e^{-as}}{s}$ |
| $e^{at} - e^{bt}$ | $\frac{1}{s-a} - \frac{1}{s-b}$ |

---

## Partial Fraction Decomposition (for Inverse Transforms)

When inverting rational functions, use partial fractions:

### Case 1: Distinct Linear Factors
$$\frac{P(s)}{(s-a)(s-b)} = \frac{A}{s-a} + \frac{B}{s-b}$$

### Case 2: Repeated Linear Factors
$$\frac{P(s)}{(s-a)^n} = \frac{A_1}{s-a} + \frac{A_2}{(s-a)^2} + \cdots + \frac{A_n}{(s-a)^n}$$

### Case 3: Quadratic Factors
$$\frac{P(s)}{(s^2+bs+c)} = \frac{As+B}{s^2+bs+c}$$

Complete the square: $s^2+bs+c = (s+\frac{b}{2})^2 + (c-\frac{b^2}{4})$

---

## Common Inverse Transform Patterns

### Pattern 1: $\frac{1}{s^2+b^2}$
$$\mathcal{L}^{-1}\left\{\frac{1}{s^2+b^2}\right\} = \frac{\sin(bt)}{b}$$

### Pattern 2: $\frac{s}{s^2+b^2}$
$$\mathcal{L}^{-1}\left\{\frac{s}{s^2+b^2}\right\} = \cos(bt)$$

### Pattern 3: $\frac{1}{(s-a)^2+b^2}$
$$\mathcal{L}^{-1}\left\{\frac{1}{(s-a)^2+b^2}\right\} = \frac{e^{at}\sin(bt)}{b}$$

### Pattern 4: $\frac{s-a}{(s-a)^2+b^2}$
$$\mathcal{L}^{-1}\left\{\frac{s-a}{(s-a)^2+b^2}\right\} = e^{at}\cos(bt)$$

### Pattern 5: $\frac{1}{s(s+a)}$
$$\mathcal{L}^{-1}\left\{\frac{1}{s(s+a)}\right\} = \frac{1}{a}(1-e^{-at})$$

### Pattern 6: $\frac{1}{(s-a)(s-b)}, a \neq b$
$$\mathcal{L}^{-1}\left\{\frac{1}{(s-a)(s-b)}\right\} = \frac{e^{at}-e^{bt}}{a-b}$$
