---
title: Interpolation
---

## What is Interpolation?

**Interpolation** is a method of estimating unknown data points that lie between known data points. Think of it as "connecting the dots" with a mathematical function.

**Key Points:**

- Constructs new data points based on a discrete set of known data points
- Creates a function that passes through **ALL** given data points exactly
- Used to estimate values between the given data points

## Important Theorem

**Weierstrass Approximation Theorem:** For any continuous function on a closed interval, there exists a polynomial that can approximate it as closely as desired.

**Key Result:** For $n + 1$ data points, there is **exactly one** polynomial of degree $n$ that passes through all the points.

![A](./interpolation/Pasted%20image%2020250615110826.png)

---

## Newton's Divided-Difference Method

### The Newton Form

For $n+1$ data points, the interpolating polynomial $P_n(x)$ has the form:

$$P_n(x) = a_0 + a_1(x-x_0) + a_2(x-x_0)(x-x_1) + \cdots + a_n(x-x_0)(x-x_1)\cdots(x-x_{n-1})$$

### Finding the Coefficients

**Step 1:** Set $x = x_0$ $$a_0 = P_n(x_0) = f(x_0)$$

**Step 2:** Set $x = x_1$ $$a_1 = \frac{f(x_1) - f(x_0)}{x_1 - x_0}$$

**Step 3:** Set $x = x_2$ $$a_2 = \frac{\frac{f(x_2) - f(x_1)}{x_2 - x_1} - \frac{f(x_1) - f(x_0)}{x_1 - x_0}}{x_2 - x_0}$$

### Divided Difference Notation

**Zeroth divided difference:** $$f[x_i] = f(x_i)$$

**First divided difference:** $$f[x_i, x_{i+1}] = \frac{f[x_{i+1}] - f[x_i]}{x_{i+1} - x_i}$$

**Second divided difference:** $$f[x_i, x_{i+1}, x_{i+2}] = \frac{f[x_{i+1}, x_{i+2}] - f[x_i, x_{i+1}]}{x_{i+2} - x_i}$$

**General $k$-th divided difference:** $$f[x_i, x_{i+1}, \ldots, x_{i+k}] = \frac{f[x_{i+1}, x_{i+2}, \ldots, x_{i+k}] - f[x_i, x_{i+1}, \ldots, x_{i+k-1}]}{x_{i+k} - x_i}$$

![A](./interpolation/Pasted%20image%2020250615110914.png)

### Newton's Divided Difference Formula

The coefficients are: $a_k = f[x_0, x_1, \ldots, x_k]$

**Final Newton Form:** $$P_n(x) = f[x_0] + \sum_{k=1}^{n} fx_0, x_1, \ldots, x_k(x-x_1)\cdots(x-x_{k-1})$$

---

## 4.1.2 Lagrange Interpolating Polynomials

### The Lagrange Form

The same interpolating polynomial can be written as:

$$P_n(x) = \sum_{k=0}^{n} L_{n,k}(x)f(x_k)$$

where the **Lagrange basis polynomials** are:

$$L_{n,k}(x) = \prod_{\substack{i=0 \ i \neq k}}^{n} \frac{x - x_i}{x_k - x_i}$$

### Examples of Lagrange Polynomials

**For $n = 1$ (Linear interpolation):**

- $L_{1,0}(x) = \frac{x - x_1}{x_0 - x_1}$
- $L_{1,1}(x) = \frac{x - x_0}{x_1 - x_0}$

$$P_1(x) = L_{1,0}(x)f(x_0) + L_{1,1}(x)f(x_1)$$

**For $n = 2$ (Quadratic interpolation):** $$P_2(x) = \frac{(x-x_1)(x-x_2)}{(x_0-x_1)(x_0-x_2)}f(x_0) + \frac{(x-x_0)(x-x_2)}{(x_1-x_0)(x_1-x_2)}f(x_1) + \frac{(x-x_0)(x-x_1)}{(x_2-x_0)(x_2-x_1)}f(x_2)$$

### Example: Current in Wire

**Given data:**

|t|0|0.1250|0.2500|0.3750|0.5000|
|---|---|---|---|---|---|
|i|0|6.24|7.75|4.85|0.0000|

**Problem:** Find $i$ at $t = 0.23$

---

## Errors in Interpolating Polynomials

### Error Formula

For a function $f \in C^{n+1}[a,b]$ and distinct points $x_0, x_1, \ldots, x_n$ in $[a,b]$:

$$f(x) = P_n(x) + \frac{f^{(n+1)}(\xi(x))}{(n+1)!}(x-x_0)(x-x_1)\cdots(x-x_n)$$

where $\xi(x)$ is some unknown point in the interval.

### Error Estimation

**Theoretical error:** $$R_n = \frac{f^{(n+1)}(\xi(x))}{(n+1)!}(x-x_0)(x-x_1)\cdots(x-x_n)$$

**Practical error estimation** (using additional data point): $$R_n \approx fx_{n+1}, x_n, x_{n-1}, \ldots, x_0(x-x_1)\cdots(x-x_n)$$

---

## Least Squares Approximation

### When to Use Least Squares

Unlike interpolation (which passes through all points exactly), least squares finds the "best fit" curve that minimizes the overall error when:

- Data contains measurement errors
- We want a simpler model than exact interpolation
- We have more data points than we want polynomial degree

### The Least Squares Principle

**Residual (error):** $e_i = y_{i,measured} - y_{i,model}$

**Objective:** Minimize the sum of squared errors: $$S_r = \sum_{i=1}^{n} e_i^2 = \sum_{i=1}^{n} (y_{i,measured} - y_{i,model})^2$$

![A](./interpolation/Pasted%20image%2020250615111032.png)

<iframe style="aspect-ratio: 4 / 3;" src="https://phet.colorado.edu/sims/html/least-squares-regression/latest/least-squares-regression_en.html"
        width="100%"
        allowfullscreen>
</iframe>
---

## Linear Regression

### The Linear Model

Find the best line: $y = a_1x + a_0$

**Sum of squared errors:** $$S_r = \sum_{i=1}^{n} (y_i - (a_1x_i + a_0))^2$$

### Finding the Coefficients

To minimize $S_r$, we need: $$\frac{\partial S_r}{\partial a_1} = 0 \quad \text{and} \quad \frac{\partial S_r}{\partial a_0} = 0$$

This gives us the **normal equations:** $$a_1\sum_{i=1}^{n}x_i^2 + a_0\sum_{i=1}^{n}x_i = \sum_{i=1}^{n}x_iy_i$$ $$a_1\sum_{i=1}^{n}x_i + a_0 \cdot n = \sum_{i=1}^{n}y_i$$

### Example: River Flow Prediction

**Given data:**

|Precipitation (cm)|88.9|108.5|104.1|139.7|127.0|94.0|116.8|99.1|
|---|---|---|---|---|---|---|---|---|
|Flow (m³/s)|14.6|16.7|15.3|23.2|19.5|16.1|18.1|16.6|

**Problem:** Predict annual water flow for 120 cm precipitation.

---

## Polynomial Regression

### When Linear Isn't Enough

Sometimes data follows a curved pattern that a straight line can't capture well.

![A](./interpolation/Pasted%20image%2020250615111114.png)

### The Polynomial Model

Fit a polynomial of degree $n$: $$P_n(x) = a_nx^n + a_{n-1}x^{n-1} + \cdots + a_1x + a_0 = \sum_{j=0}^{n} a_jx^j$$

### General Method

**Minimize:** $$S_r = \sum_{i=1}^{m} (y_i - P_n(x_i))^2$$

**Normal equations:** For $j = 0, 1, \ldots, n$: $$\sum_{k=0}^{n} a_k \sum_{i=1}^{m} x_i^{j+k} = \sum_{i=1}^{m} y_i x_i^j$$

This creates a system of $(n+1)$ equations in $(n+1)$ unknowns.


<iframe style="aspect-ratio: 4 / 3;" src="https://phet.colorado.edu/sims/html/curve-fitting/latest/curve-fitting_en.html"
        width="100%"
        allowfullscreen>
</iframe>

### Example: Population Growth

**Given data:**

|t (years)|0|5|10|15|20|
|---|---|---|---|---|---|
|p (population)|100|200|450|950|2000|

**Problem:** Use 3rd-order polynomial regression to predict population at $t = 25$ years.

---

## Summary

### Key Differences

|Method|Purpose|Passes Through Points?|Best For|
|---|---|---|---|
|**Interpolation**|Exact fit|Yes, all points|Clean data, need exact values|
|**Least Squares**|Best approximation|No, minimizes error|Noisy data, want simple model|

### When to Use Each Method

**Use Interpolation when:**

- Data is precise and error-free
- You need exact values at given points
- You want to estimate between known points

**Use Least Squares when:**

- Data contains measurement errors
- You want a simpler model than exact interpolation
- You have more data points than desired polynomial degree
- You want to predict trends and patterns