---
title: Partial Differential Equations
---

## What Are Partial Differential Equations?

A **partial differential equation (PDE)** is simply an equation that involves:
- An unknown function (like $z$)
- The partial derivatives of that function (like $\frac{\partial z}{\partial x}$ or $\frac{\partial z}{\partial y}$)

Think of it this way: if you have a function that depends on multiple variables (like temperature depending on both position and time), a PDE describes how that function changes.

**Simple Examples:**
- $\frac{\partial z}{\partial x} + \frac{\partial z}{\partial y} = z + xy$ (the function plus its derivatives equals something)
- $z \frac{\partial z}{\partial x} + \frac{\partial z}{\partial y} = x$ (the function multiplied by its derivative)

## Key Properties of PDEs

### Order
The **order** is simply the highest derivative in the equation.
- First-order: involves $\frac{\partial z}{\partial x}$, $\frac{\partial z}{\partial y}$
- Second-order: involves $\frac{\partial^2 z}{\partial x^2}$, $\frac{\partial^2 z}{\partial y^2}$, etc.

### Degree
The **degree** is the highest power of the highest-order derivative (after cleaning up fractions and square roots).

### Linear vs Non-linear
**Linear PDE**: The unknown function and its derivatives appear "nicely" - no powers, no products between them.
**Non-linear PDE**: Has powers of derivatives or products between derivatives.

## Helpful Notation (Shorthand)

Instead of writing long partial derivatives, mathematicians use shortcuts:

For a function $z(x,y)$:
- $p = \frac{\partial z}{\partial x}$ (how $z$ changes with $x$)
- $q = \frac{\partial z}{\partial y}$ (how $z$ changes with $y$)

For second derivatives:
- $r = \frac{\partial^2 z}{\partial x^2}$
- $s = \frac{\partial^2 z}{\partial x \partial y}$ (mixed derivative)
- $t = \frac{\partial^2 z}{\partial y^2}$

## Types of First-Order PDEs (From Simple to Complex)

### 1. Linear PDEs
**What they look like**: $P(x,y) \cdot p + Q(x,y) \cdot q = R(x,y) \cdot z + S(x,y)$

**Key feature**: Everything is "straight" - no powers, no products between $z$, $p$, and $q$.

**Examples**:
- $p + q = z + xy$ (very simple!)
- $yx^2 p + xy^2 q = xyz + x^2 y^3$

### 2. Semi-linear PDEs
**What they look like**: $P(x,y) \cdot p + Q(x,y) \cdot q = R(x,y,z)$

**Key feature**: The derivatives $p$ and $q$ are linear, but the right side can involve $z$ in complicated ways.

**Examples**:
- $xy p + x^2 y q = x^2 y^2 z^2$ (notice $z^2$ on the right)
- $y p + x q = x^2 z^2 - y^2$

### 3. Quasi-linear PDEs
**What they look like**: $P(x,y,z) \cdot p + Q(x,y,z) \cdot q = R(x,y,z)$

**Key feature**: The coefficients of $p$ and $q$ can depend on $z$ too, but $p$ and $q$ themselves are still linear.

**Examples**:
- $x^2 z p + y^2 z q = xy$
- $(x^2 - yz)p + (y^2 - zx)q = z^2 - xy$

### 4. Non-linear PDEs
**What they look like**: Anything that doesn't fit the above patterns.

**Key feature**: Has powers of derivatives or products between derivatives.

**Examples**:
- $p^2 + q^2 = 1$ (has $p^2$ and $q^2$)
- $pq = z$ (product of derivatives)
- $x^2 p^2 + y^2 q^2 = z^2$

## Lagrange's Method: Solving Quasi-linear PDEs

### The Problem
We want to solve equations of the form: $Pp + Qq = R$

where $P$, $Q$, and $R$ are functions of $x$, $y$, and $z$.

### The Big Idea
Instead of working directly with the PDE, we convert it to a system of ordinary differential equations (which are easier to solve).

### The Magic Formula
For the PDE $Pp + Qq = R$, we create the **auxiliary equations**:
$$\frac{dx}{P} = \frac{dy}{Q} = \frac{dz}{R}$$

Think of this as three ratios that are all equal.

### Step-by-Step Solution Method

**Step 1**: Put your PDE in the form $Pp + Qq = R$

**Step 2**: Write the auxiliary equations:
$$\frac{dx}{P} = \frac{dy}{Q} = \frac{dz}{R}$$

**Step 3**: Solve these equations to find two independent solutions:
- $u(x,y,z) = c_1$ (first constant)
- $v(x,y,z) = c_2$ (second constant)

**Step 4**: The general solution is any relationship between $u$ and $v$:
$$\phi(u, v) = 0$$
where $\phi$ is any function you choose.

### Important Tips
- You need **two independent solutions** (meaning one isn't just a multiple of the other)
- At least one solution must involve $z$
- The auxiliary equations are often solved by pairing them up (like $\frac{dx}{P} = \frac{dy}{Q}$)

## Why This Works (Intuitive Explanation)

The auxiliary equations $\frac{dx}{P} = \frac{dy}{Q} = \frac{dz}{R}$ represent **characteristic curves** in 3D space. Along these curves, the original PDE becomes much simpler to handle. The solutions $u = c_1$ and $v = c_2$ are like "coordinates" that remain constant along these special curves.

## Practice Problems to Try

Work through these examples to build your understanding:

1. **Easy**: $(y^2 z - x)p + xz q = y^2$
2. **Medium**: $a(p + q) = z$
3. **Simple**: $2p + 3q = 1$
4. **Trigonometric**: $p \tan x + q \tan y = \tan z$
5. **Basic**: $zp = -x$