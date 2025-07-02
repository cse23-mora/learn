---
title : 'Master Theorem'
---



### What is the Master Theorem?

The Master Theorem helps you find the time complexity of many recursive algorithms of the form:

$$
T(n) = a \cdot T\left(\frac{n}{b}\right) + f(n)
$$

Where:

* $a \geq 1$ → number of recursive calls
* $b > 1$ → size reduction in each recursive call
* $f(n)$ → cost outside the recursive calls (e.g., sorting, merging)

---

###  Purpose

Use Master Theorem to directly find the Big-O time complexity without full recursion tree expansion.

---

###  Three Cases of Master Theorem

Compare $f(n)$ with $n^{\log_b a}$:

| Case   | Condition                                                                   | Result                                     |
| ------ | --------------------------------------------------------------------------- | ------------------------------------------ |
| Case 1 | $f(n) = O(n^{\log_b a - \varepsilon})$, for some $\varepsilon > 0$          | $T(n) = \Theta(n^{\log_b a})$              |
| Case 2 | $f(n) = \Theta(n^{\log_b a})$                                               | $T(n) = \Theta(n^{\log_b a} \cdot \log n)$ |
| Case 3 | $f(n) = \Omega(n^{\log_b a + \varepsilon})$, and regularity condition holds | $T(n) = \Theta(f(n))$                      |

---

### What is $n^{\log_b a}$?

It’s the cost of the **recursion tree** (total work across all levels).
Compare this with $f(n)$ to decide which case applies.

---

##  Examples

### Example 1

$$
T(n) = 2T\left(\frac{n}{2}\right) + n
$$

* $a = 2$, $b = 2$, $f(n) = n$
* $n^{\log_2 2} = n^1 = n$
* $f(n) = \Theta(n^{\log_b a})$ → **Case 2**

$\boxed{T(n) = \Theta(n \log n)}$

---

### Example 2

$$
T(n) = 3T\left(\frac{n}{2}\right) + n
$$

* $a = 3$, $b = 2$, $f(n) = n$
* $n^{\log_2 3} \approx n^{1.585}$
* $f(n) = O(n^{1.585 - \varepsilon})$ → **Case 1**

$\boxed{T(n) = \Theta(n^{\log_2 3})}$

---

### Example 3

$$
T(n) = 2T\left(\frac{n}{2}\right) + n^2
$$

* $a = 2$, $b = 2$, $f(n) = n^2$
* $n^{\log_2 2} = n$
* $f(n) = \Omega(n^{1 + \varepsilon})$, and satisfies the regularity condition → **Case 3**

$\boxed{T(n) = \Theta(n^2)}$

---



##  Summary 

Compare $f(n)$ with $n^{\log_b a}$:

| Case | If $f(n)$ is...  | Then $T(n) =$                 |
| ---- | ---------------- | ----------------------------- |
| 1    | Smaller          | $\Theta(n^{\log_b a})$        |
| 2    | Equal            | $\Theta(n^{\log_b a} \log n)$ |
| 3    | Larger + regular | $\Theta(f(n))$                |
