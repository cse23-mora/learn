---
title: Transformers
---

## What is an Ideal Transformer?

An **ideal transformer** is a theoretical transformer with perfect characteristics:

- **No copper losses** in the windings (zero resistance)
- **No leakage flux** (all flux links both windings)
- **Zero reluctance** in the core (infinite permeability)
- **No core losses** (no eddy current or hysteresis losses)

![A](./transformer/Pasted%20image%2020250615192904.png)

## Basic Transformer Equations

### Voltage Relationships

For an ideal transformer, the voltage relationship is:

$$\frac{V_1}{V_2} = \frac{N_1}{N_2} = a$$

Where:

- $V_1$ = Primary voltage
- $V_2$ = Secondary voltage
- $N_1$ = Number of turns in primary
- $N_2$ = Number of turns in secondary
- $a$ = Turns ratio

### Instantaneous Voltages

$$v_1(t) = N_1 \frac{d\phi}{dt}$$

$$v_2(t) = N_2 \frac{d\phi}{dt}$$

For sinusoidal excitation: $$v_1(t) = V_m \cos(\omega t) = N_1 \omega \Phi_m \sin(\omega t)$$

## Transformer as Coupled Circuits

### MMF (Magnetomotive Force) Balance

The currents $i_1$ and $i_2$ produce **opposing magnetic fields**. The total MMF applied to the core is:

$$\mathcal{F} = N_1 i_1 - N_2 i_2 = \mathcal{R}\phi$$

For an ideal transformer with zero reluctance ($\mathcal{R} = 0$):

$$N_1 i_1 - N_2 i_2 = 0$$

Therefore: $$\frac{i_1}{i_2} = \frac{N_2}{N_1} = \frac{1}{a}$$

### Current Relationship

$$i_1 = \frac{i_2}{a}$$

The current ratio is **inverse** to the voltage ratio.

## Power in an Ideal Transformer

### Power Conservation

In an ideal transformer, **no power is lost**:

$$P_1 = P_2$$

$$V_1 I_1 \cos\phi_1 = V_2 I_2 \cos\phi_2$$

Since $\phi_1 = \phi_2$ (same power factor):

$$V_1 I_1 = V_2 I_2$$

This confirms our voltage and current relationships.

## Impedance Transformation

### Referred Impedance

An impedance $Z_L$ connected to the secondary appears as $Z_L'$ on the primary side:

$$Z_L' = a^2 Z_L$$

Where: $$Z_L' = \frac{V_1}{I_1} = \frac{a V_2}{I_2/a} = a^2 \frac{V_2}{I_2} = a^2 Z_L$$

![A](./transformer/Pasted%20image%2020250615193124.png)

## Multi-Winding Transformers

### Three-Winding Example

For a transformer with three windings:

**Voltage relationships:**

- $V_2 = \frac{N_2}{N_1} V_1$
- $V_3 = \frac{N_3}{N_1} V_1$

**MMF balance:** $$N_1 i_1 - N_2 i_2 - N_3 i_3 = 0$$

**Current relationship:** $$i_1 = \frac{N_2 i_2 + N_3 i_3}{N_1}$$

![A](./transformer/Pasted%20image%2020250615193203.png)

## Polarity and Dot Convention

### Dot Notation Rules

1. **Voltage polarities:** When the dotted terminals are both positive (or both negative), the voltages are in phase
2. **Current directions:** Currents entering dotted terminals produce MMFs in the same direction
3. **Opposing MMFs:** For transformer action, currents should enter opposite dot polarities

## Practical Example Problem

**Given:** Transformer with $V_1 = 120V$, $N_1/N_2 = 2$, Load $Z_L = 8\Omega$

**Solution:**

1. Secondary voltage: $V_2 = \frac{V_1}{a} = \frac{120}{2} = 60V$
2. Secondary current: $I_2 = \frac{V_2}{Z_L} = \frac{60}{8} = 7.5A$
3. Primary current: $I_1 = \frac{I_2}{a} = \frac{7.5}{2} = 3.75A$
4. Power delivered: $P = V_2 I_2 = 60 \times 7.5 = 450W$

## Real vs Ideal Transformers

### Transition to Real Transformers

Real transformers are modeled as **mutually coupled coils** with:

$$V_1 = j\omega L_1 I_1 - j\omega M I_2$$ $$V_2 = -j\omega M I_1 - j\omega L_2 I_2$$

Where:

- $L_1, L_2$ = Self inductances
- $M$ = Mutual inductance
- $k$ = Coupling coefficient

### Equivalent Circuit Elements

- **Leakage inductances:** $l_p = (1-k)L_p$, $l_s = (1-k)L_s$
- **Magnetizing inductance:** $L_m = aM$

![A](./transformer/Pasted%20image%2020250615193350.png)

## Key Takeaways

1. **Perfect transformation:** Ideal transformers provide perfect voltage and current transformation
2. **Power conservation:** No losses in ideal transformers
3. **Impedance scaling:** Impedances transform by the square of turns ratio
4. **MMF balance:** Sum of ampere-turns equals zero
5. **Polarity matters:** Dot convention determines phase relationships