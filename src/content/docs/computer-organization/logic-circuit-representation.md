---
title: Logic circuit Representation
---

## Difference

| Combinational                           | Sequential                                   |
| --------------------------------------- | -------------------------------------------- |
| No memory                               | Memory                                       |
| No feedback loops                       | Feedback loops                               |
| Output depend only on the current input | Output depend on the input and current state |
## Representation

**Truth Table :** 
- Unique signature of a boolean function
- Expensive representation
**Boolean Function :**
- Can have many alternative boolean expressions
- Different boolean expressions lead to different gate realizations
**Canonical Form :**
	Provide a unique algebraic signature
1. Sum of miterms
2. Product of maxterms
### Canonical forms
#### Sum of Products (SOP)
- **Minterm :** Product of literals (AND)
- Each row has a minterm
- Each minterm is true for that row and only that row
- Find all input combinations for which the output of the function is **True**

![Minterms](./minterm.png)

We can also write the sum of products as
$$
f(A,B,C) = m3 + m4 + m5 + m6 + m7 
$$
$$
f(A,B,C) = \sum m(3,4,5,6,7)
$$
### Product of Sums (POS)
- **Maxterm :** Sum of literals
- Each row has maxterm
- Each maxterm is false for that row and only that row
- Find all input combinations for which the output of the function is **False**

![Maxterms](./maxterm.png)

We can also write the product of sums as

$$
f(A,B,C) = M0 \cdot M1 \cdot M2
$$
$$
f(A,B,C) = \prod M(0,1,2)
$$

