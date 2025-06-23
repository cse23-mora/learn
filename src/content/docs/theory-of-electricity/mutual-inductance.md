---
title: Mutual Inductance
---

## 1. Introduction to Mutual Inductance

**Mutual coupling** between coils exists when one coil is in the magnetic field created by another coil.

When a varying current $i_1$ flows in the primary winding:

- A varying flux $\phi_1$ is produced in the same coil
- This produces a back EMF in the primary coil
- Part of this flux links with a second coil, inducing an EMF $v_2$

![A](./mutual/Pasted%20image%2020250615190202.png)

---

## 2. Magnetic Field Fundamentals

### 2.1 Magnetic Flux and Flux Density

The magnetic flux passing through a surface area A: $$\phi = \int \vec{B} \cdot d\vec{A}$$

Where:

- $\vec{B}$ = magnetic flux density
- $d\vec{A}$ = differential area element

### 2.2 Magnetic Field Intensity and Ampère's Law

Relationship between magnetic field intensity and flux density: $$\vec{B} = \mu \vec{H}$$

Where:

- $\mu$ = permeability of the medium
- $\vec{H}$ = magnetic field intensity

**Ampère's Law:** $$\oint \vec{H} \cdot d\vec{l} = \sum I_{enc} = \sum I$$

![A](./mutual/Pasted%20image%2020250615190242.png)

### 2.3 Magnetomotive Force and Reluctance

**Magnetomotive Force (MMF)** of an N-turn coil: $$\mathcal{F} = NI$$

**Reluctance** of a magnetic path: $$\mathcal{R} = \frac{l}{\mu A}$$

**Magnetic Circuit Analogy:** $$\mathcal{F} = \mathcal{R}\phi$$

(Similar to Ohm's law: $V = RI$)

---

## 3. Mutual Inductance Theory

### 3.1 Basic Concept

When current $i_1$ flows in the primary coil:

- Primary flux: $\phi_1$
- Flux linking secondary: $\phi_{12} = k \cdot \phi_1$
- Coefficient of coupling: $k \leq 1$

Since $\phi_{12} \propto \phi_1$ and $\phi_1 \propto i_1$: $$\phi_{12} \propto i_1$$

Therefore: $$v_2 = -\frac{d\phi_{12}}{dt} = -M\frac{di_1}{dt}$$

Where $M$ is the **mutual inductance**.

### 3.2 Mathematical Definition

$$M_{12} = \frac{\phi_{12}}{i_1} = \frac{N_2 \phi_{12}}{i_1}$$

$$M_{21} = \frac{\phi_{21}}{i_2} = \frac{N_1 \phi_{21}}{i_2}$$

**Important:** $M_{12} = M_{21} = M$ (reciprocity)

### 3.3 Mutual Inductance in Terms of Dimensions

For coupled coils with a common magnetic path: $$M = \frac{N_1 N_2}{\mathcal{R}}$$

Where $\mathcal{R}$ is the reluctance of the magnetic path.

---

## 4. Worked Example: Toroidal Coil

![A](./mutual/Pasted%20image%2020250615190338.png)

**Given:** Toroidal coil with N turns, current I, core permeability μ

**Find:** Magnetic flux density B, total flux φ, flux linkages λ, reluctance ℛ

**Solution:**

Using Ampère's law on the center line: $$\oint \vec{H} \cdot d\vec{l} = \sum I = N \times I = NI$$

$$H \times 2\pi R = NI$$

$$H = \frac{NI}{2\pi R}$$

$$B = \mu H = \frac{\mu NI}{2\pi R}$$

**Total flux:** $$\phi = \int \vec{B} \cdot d\vec{A} = B \times A = \frac{\mu NI}{2\pi R} \times 2\pi r h = \frac{\mu NIrh}{R}$$

**Flux linkages:** $$\lambda = N\phi = \frac{\mu N^2 Irh}{R}$$

**Reluctance:** $$\mathcal{R} = \frac{\mathcal{F}}{\phi} = \frac{NI}{\phi} = \frac{R}{\mu rh}$$

---

## 5. Dot Notation Convention

![A](./mutual/Pasted%20image%2020250615190416.png)

### 5.1 Rules for Dot Notation

**Case 1:** Both currents enter dotted terminals (or both leave)

- Fields **aid** each other
- Mutual inductance term has **same sign** as self-inductance term

**Case 2:** One current enters dotted terminal, other leaves

- Fields **oppose** each other
- Mutual inductance term has **opposite sign** to self-inductance term

### 5.2 Voltage Equations with Dot Notation

For two coupled coils:

**Aiding fluxes (+M):** 

![A](./mutual/Pasted%20image%2020250615190503.png)
$$v_1 = L_1 \frac{di_1}{dt} + M \frac{di_2}{dt}$$ $$v_2 = L_2 \frac{di_2}{dt} + M \frac{di_1}{dt}$$

**Opposing fluxes (-M):** 

![A](./mutual/Pasted%20image%2020250615190515.png)

$$v_1 = L_1 \frac{di_1}{dt} - M \frac{di_2}{dt}$$ $$v_2 = L_2 \frac{di_2}{dt} - M \frac{di_1}{dt}$$

---

## 6. Energy in Mutually Coupled Coils

The total energy stored in two mutually coupled coils:

**Aiding fluxes:** $$W = \frac{1}{2}L_1 i_1^2 + \frac{1}{2}L_2 i_2^2 + M i_1 i_2$$

**Opposing fluxes:** $$W = \frac{1}{2}L_1 i_1^2 + \frac{1}{2}L_2 i_2^2 - M i_1 i_2$$

**General form:** $$W = \frac{1}{2}L_1 i_1^2 + \frac{1}{2}L_2 i_2^2 \pm M i_1 i_2$$

---

## 7. Worked Examples

### Example 1: Mutual Inductance Calculation

![A](./mutual/Pasted%20image%2020250615190559.png)

**Given:**

- $L_1 = 1$ H, $L_2 = 2$ H, $M = 1$ H
- $i_1 = \sin(10t)$ A, $i_2 = 0.5\sin(10t)$ A

**Find:** $v_1(t)$ and $v_2(t)$

**Solution:** 

$$v_1 = L_1 \frac{di_1}{dt} - M \frac{di_2}{dt}$$ $$v_1 = 1 \times 10\cos(10t) - 1 \times 0.5 \times 10\cos(10t)$$ $$v_1 = 10\cos(10t) - 5\cos(10t) = 5\cos(10t) \text{ V}$$

### Example 2: Toroidal Core with Two Coils

![A](./mutual/Pasted%20image%2020250615190630.png)

**Given:**

- Two coils on toroidal core
- Core reluctance: $\mathcal{R} = 10^7$ (AT)/Wb
- $N_1 = 100$ turns, $N_2 = 200$ turns

**Find:** Self-inductances and mutual inductance

**Solution:**

**Self-inductances:** 

$$L_1 = \frac{N_1^2}{\mathcal{R}} = \frac{(100)^2}{10^7} = 1 \text{ mH}$$

$$L_2 = \frac{N_2^2}{\mathcal{R}} = \frac{(200)^2}{10^7} = 4 \text{ mH}$$

**Mutual inductance:** 

$$M = \frac{N_1 N_2}{\mathcal{R}} = \frac{100 \times 200}{10^7} = 2 \text{ mH}$$

---

## 8. Equivalent Circuits for Coupled Coils

### 8.1 T-Equivalent Circuit

For coupled coils, we can create an equivalent T-circuit:

![A](./mutual/Pasted%20image%2020250615190657.png)

This equivalent circuit eliminates mutual coupling while maintaining the same terminal behavior.

---

## 9. Key Relationships Summary

|Parameter|Formula|Units|
|---|---|---|
|Mutual Inductance|$M = \frac{N_1 N_2}{\mathcal{R}}$|H|
|Self Inductance|$L = \frac{N^2}{\mathcal{R}}$|H|
|Reluctance|$\mathcal{R} = \frac{l}{\mu A}$|AT/Wb|
|MMF|$\mathcal{F} = NI$|AT|
|Flux|$\phi = \frac{\mathcal{F}}{\mathcal{R}}$|Wb|

---

## 10. Important Notes

1. **Reciprocity:** $M_{12} = M_{21} = M$
2. **Coupling Coefficient:** $k = \frac{M}{\sqrt{L_1 L_2}} \leq 1$
3. **Perfect Coupling:** $k = 1$ (all flux links both coils)
4. **Energy Consideration:** Total energy must be positive for passive circuits
5. **Sign Convention:** Always use dot notation to determine correct signs