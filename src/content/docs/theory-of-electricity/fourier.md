---
title: Fourier Series
---

## Introduction

In electrical circuit analysis, we often encounter waveforms that are **not** purely sinusoidal. While we've mastered DC (constant) and AC (sinusoidal) analysis, real-world signals frequently have more complex shapes that repeat periodically.

![A](./fourier/Pasted%20image%2020250615142103.png)

## What is Fourier Series?

**Fourier Series** is a mathematical technique that allows us to express any periodic waveform as a **sum of sinusoidal components**. This powerful concept was developed by French mathematician Jean-Baptiste Joseph Fourier (1768-1830).

### Key Concept

Any periodic waveform with period $T$ and fundamental frequency $\omega_0 = \frac{2\pi}{T}$ can be represented as:

$$f(t) = \frac{a_0}{2} + \sum_{n=1}^{\infty} [a_n \cos(n\omega_0 t) + b_n \sin(n\omega_0 t)]$$

Where:

- $\frac{a_0}{2}$ = DC component (average value)
- $\omega_0$ = Fundamental frequency
- $2\omega_0, 3\omega_0, 4\omega_0, ...$ = 2nd, 3rd, 4th harmonics
- $a_n, b_n$ = Fourier coefficients to be determined

### Why is this useful?

Since electrical circuits are linear, we can:

1. Apply each harmonic component separately
2. Solve for each component individually
3. Use superposition to combine all responses
4. Get the total response to the original waveform

## Waveform Symmetries

Many practical waveforms exhibit symmetry, which greatly simplifies Fourier analysis calculations.

### 1. Even Symmetry

**Mathematical condition:** $f(t) = f(-t)$

![A](./fourier/Pasted%20image%2020250615142205.png)

**Properties:**

- Left side of y-axis is mirror image of right side
- Contains only cosine terms: $b_n = 0$ for all $n$
- Simplified calculation: $a_n = \frac{4}{T} \int_0^{T/2} f(t) \cos(n\omega t) dt$

### 2. Odd Symmetry

**Mathematical condition:** $f(t) = -f(-t)$

![A](./fourier/Pasted%20image%2020250615142224.png)

**Properties:**

- Left side is negative mirror image of right side
- Contains only sine terms: $a_n = 0$ for all $n$ (including DC component)
- Simplified calculation: $b_n = \frac{4}{T} \int_0^{T/2} f(t) \sin(n\omega t) dt$

### 3. Half-Wave Symmetry

**Mathematical condition:** $f(t) = -f(t - \frac{T}{2}) = -f(t + \frac{T}{2})$

![A](./fourier/Pasted%20image%2020250615142242.png)

**Properties:**

- One half of waveform equals negative of other half
- No DC component possible
- Contains only odd harmonics: $a_n = b_n = 0$ for even $n$
- For odd $n$: $a_n = \frac{4}{T} \int_{\tau}^{\tau + T/2} f(t) \cos(n\omega t) dt$

## Summary of Symmetry Rules

| Symmetry Type        | DC Component ($a_0$) | Cosine Terms ($a_n$) | Sine Terms ($b_n$) |
| -------------------- | -------------------- | -------------------- | ------------------ |
| **Even**             | Present              | Present              | Zero               |
| **Odd**              | Zero                 | Zero                 | Present            |
| **Half-wave**        | Zero                 | Odd harmonics only   | Odd harmonics only |
| **Even + Half-wave** | Zero                 | Odd harmonics only   | Zero               |
| **Odd + Half-wave**  | Zero                 | Zero                 | Odd harmonics only |

## Calculating Fourier Coefficients

### General Formulas

**DC Component:** $$a_0 = \frac{2}{T} \int_{\tau}^{\tau+T} f(t) dt$$

**Cosine Coefficients:** $$a_n = \frac{2}{T} \int_{\tau}^{\tau+T} f(t) \cos(n\omega t) dt$$

**Sine Coefficients:** $$b_n = \frac{2}{T} \int_{\tau}^{\tau+T} f(t) \sin(n\omega t) dt$$

### Useful Trigonometric Properties

These orthogonality relationships are crucial for coefficient calculation:

$$\int_{\tau}^{\tau+T} \sin(n\omega t) dt = 0, \quad \int_{\tau}^{\tau+T} \cos(n\omega t) dt = 0$$

$$\int_{\tau}^{\tau+T} \sin(n\omega t) \sin(m\omega t) dt = \begin{cases} 0 & \text{when } n \neq m \ \frac{T}{2} & \text{when } n = m \end{cases}$$

$$\int_{\tau}^{\tau+T} \cos(n\omega t) \cos(m\omega t) dt = \begin{cases} 0 & \text{when } n \neq m \ \frac{T}{2} & \text{when } n = m \end{cases}$$

## Example 1: Triangular Wave

![A](./fourier/Pasted%20image%2020250615142334.png)

**Given:** Triangular wave with period $2T$, amplitude $±E$

**Analysis:**

- $\omega = \frac{2\pi}{2T} = \frac{\pi}{T}$
- Mean value = 0 (equal positive and negative areas) → $a_0 = 0$
- **Odd symmetry** → $a_n = 0$ for all $n$
- **Half-wave symmetry** → $b_n = 0$ for even $n$

**Calculation for odd harmonics:** Using integration by parts: $\int u \frac{dv}{dt} dt = uv - \int v \frac{du}{dt} dt$

Let $u = t$ and $\frac{dv}{dt} = \sin(n\omega t)$

After detailed integration: $$b_n = -\frac{4E}{n\pi} \cos\left(\frac{n\pi}{2}\right) + \frac{8E}{n^2\pi^2} \sin\left(\frac{n\pi}{2}\right)$$

**Final Result:** $$f(t) = \frac{8E}{\pi^2} \left[ \sin(\omega t) - \frac{1}{3^2}\sin(3\omega t) + \frac{1}{5^2}\sin(5\omega t) - \frac{1}{7^2}\sin(7\omega t) + \cdots \right]$$

## Example 2: Full-Wave Rectified Sine

![A](./fourier/Pasted%20image%2020250615142416.png)

**Given:** $f(t) = A|\sin(\omega_0 t)|$

**Analysis:**

- Period of rectified wave = $\frac{T}{2}$ (double frequency)
- New fundamental frequency: $\omega' = 2\omega_0$
- **Even symmetry** → $b_n = 0$ for all $n$

**DC Component:** $$\frac{a_0}{2} = \frac{2A}{\pi} = 0.637A$$

**AC Components:** After detailed trigonometric integration: $$a_n = -\frac{4A}{\pi} \cdot \frac{1}{4n^2 - 1}$$

**Final Result:** $$f(t) = \frac{2A}{\pi} \left[ 1 - \frac{2}{3}\cos(\omega't) - \frac{2}{15}\cos(2\omega't) - \frac{2}{35}\cos(3\omega't) - \cdots \right]$$
## Frequency Spectrum

The **frequency spectrum** is a plot showing the amplitude of each harmonic component versus frequency (or harmonic number).

**Harmonic Magnitude:** $\sqrt{a_n^2 + b_n^2}$

**Phase Angle:** $\tan^{-1}\left(\frac{b_n}{a_n}\right)$

<iframe style="aspect-ratio: 4 / 3;" src="https://phet.colorado.edu/sims/html/fourier-making-waves/latest/fourier-making-waves_en.html"
        width="100%"
        allowfullscreen>
</iframe>

## RMS Value of Fourier Series

For a waveform expressed as a Fourier series: $$y(t) = \frac{a_0}{2} + \sum_{n=1}^{\infty} [a_n \cos(n\omega_0 t) + b_n \sin(n\omega_0 t)]$$

The **RMS value** is: $$Y_{rms} = \sqrt{\left(\frac{a_0}{2}\right)^2 + \sum_{n=1}^{\infty} \left(\frac{a_n^2 + b_n^2}{2}\right)}$$

**Key Point:** The RMS value equals the square root of the sum of squares of individual RMS components.

## Total Harmonic Distortion (THD)

THD measures how much a waveform deviates from a pure sinusoid:

$$THD = \frac{\sqrt{h_2^2 + h_3^2 + h_4^2 + \cdots}}{h_1} \times 100\%$$

Where:

- $h_1$ = RMS value of fundamental component
- $h_2, h_3, h_4, \cdots$ = RMS values of 2nd, 3rd, 4th harmonics
- DC component is ignored in THD calculation

**Lower THD** = waveform closer to pure sinusoid
**Higher THD** = more distorted waveform