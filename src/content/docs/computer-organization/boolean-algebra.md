---
title: Boolean Algebra
---

## Basics
- $A+B=B+A$
- $A \cdot B = B \cdot A$
- $A+\bar A = 1$
- $A\cdot \bar A = 0$ 
- $A+0 = A$
- $A \cdot 1 = A$
- $A+1 = 1$
- $A \cdot 0 = 0$
- $A+A = A$
- $A \cdot A = A$
## Important
- $A \cdot (B+C) = (A \cdot B)+(A \cdot C)$
- $A+(B \cdot C) = (A+B) \cdot (A+C)$
- $A + AB = A$
- $A \cdot (A+B) = A$
- $(A+ \bar B) \cdot B = A \cdot B$
- $(A \cdot \bar B)+B = A+B$
- $A + \bar A B = A + B$
- $(A + B) \cdot (A + C) = A + B \cdot C$
- $X \cdot Y + X \cdot \bar Y = X$
- $(X+Y) \cdot (X + \bar Y) = X$
- $(A+B) \cdot (\bar A + C) = A \cdot C + \bar A \cdot B$
- $A \cdot B + \bar A \cdot C = (A + C) \cdot (\bar A + B)$

## de Morgan's
- $\overline{(X+Y+...)} = \bar X \cdot \bar Y \cdot ...$
- $\overline{(X \cdot Y \cdot ...)} = \bar X + \bar Y + ...$
## Two Key components
### **Duality :**
- All boolean expressions have logical duals
- Any theorem that can be proved is also proved for its dual
- Replace 

	$\cdot \rightarrow +$

	$+ \rightarrow \cdot$

	$1 \rightarrow 0$

	$0 \rightarrow 1$

- Leave variables unchanged
### de Morgan's Theorem
- Replace

	$\cdot \rightarrow +$

	$+ \rightarrow \cdot$

	$1 \rightarrow 0$

	$0 \rightarrow 1$

- Replace all variables with their complements 