---
title: Number Systems
---

## Basic Definitions

### Number Bases

- **Binary (Base 2)**: Uses digits 0, 1
- **Octal (Base 8)**: Uses digits 0-7
- **Decimal (Base 10)**: Uses digits 0-9
- **Hexadecimal (Base 16)**: Uses digits 0-9, A-F

### Key Concepts

- **Positional Number System**: Each digit's value depends on its position
- **Multiple Representations**: Same binary pattern can represent different values depending on the number system used
    - Example: $1010$ could be 10, -2, -5, or -6

## Base Conversions

### Binary to Decimal

Use positional notation:

- $101_2 = 1 \times 2^2 + 0 \times 2^1 + 1 \times 2^0 = 4 + 0 + 1 = 5_{10}$

### Binary to Octal

Group binary digits in sets of 3 (from right):

- $10011110001_2 = 10|011|110|001 = 2361_8$

### Binary to Hexadecimal

Group binary digits in sets of 4 (from right):

- $10011110001_2 = 100|1111|0001 = 4F1_{16}$

### Other Examples

- $63.4_8 = 6 \times 8^1 + 3 \times 8^0 + 4 \times 8^{-1} = 48 + 3 + 0.5 = 51.5_{10}$
- $A1_{16} = 10 \times 16^1 + 1 \times 16^0 = 160 + 1 = 161_{10}$

## Negative Binary Numbers

### Three Main Approaches

1. **Sign-and-Magnitude**
2. **Ones'-Complement**
3. **Two's-Complement**

### Common Features

- **MSB (Most Significant Bit)** is the sign bit:
    - `0` = Positive
    - `1` = Negative

### Two's-Complement (Preferred Method)

- **Advantages**:
    - Widely used in modern systems
    - Simplifies arithmetic operations
    - Only one representation for zero
- **Process**: To get negative of a number:
    1. Invert all bits (ones'-complement)
    2. Add 1 to the result

## Binary Numbers with Decimals

### Fractional Binary Representation

- Uses negative powers of 2 for digits after the binary point
- Example: $101.101_2 = 1 \times 2^2 + 0 \times 2^1 + 1 \times 2^0 + 1 \times 2^{-1} + 0 \times 2^{-2} + 1 \times 2^{-3}$
- $= 4 + 0 + 1 + 0.5 + 0 + 0.125 = 5.625_{10}$

### Converting Decimal Fractions to Binary

**Method**: Multiply by 2, take integer part, repeat with fractional part

- Example: Convert $0.375_{10}$ to binary
    - $0.375 \times 2 = 0.75$ → 0
    - $0.75 \times 2 = 1.5$ → 1
    - $0.5 \times 2 = 1.0$ → 1
    - Result: $0.011_2$

### Limitations

- Some decimal fractions cannot be exactly represented in binary
- Example: $0.1_{10} = 0.000110011001..._2$ (repeating)
- This leads to precision issues in computer calculations

## Floating Point Numbers

### IEEE 754 Standard

The most common floating point representation:

#### Single Precision (32-bit)

| Sign | Exponent | Mantissa/Significand |
| ---- | -------- | -------------------- |
| 1    | 8        | 23                   |

#### Double Precision (64-bit)

| Sign | Exponent | Mantissa/Significand |
|---|---|---|
|  1   |    11    |         52          |

### Components

1. **Sign Bit**: 0 for positive, 1 for negative
2. **Exponent**: Biased representation (actual exponent + bias)
    - Single: bias = 127
    - Double: bias = 1023
3. **Mantissa**: Fractional part (normalized, implicit leading 1)

### Formula

$\text{Value} = (-1)^{\text{sign}} \times (1 + \text{mantissa}) \times 2^{(\text{exponent} - \text{bias})}$

### Special Values

- **Zero**: Exponent = 0, Mantissa = 0
- **Infinity**: Exponent = all 1s, Mantissa = 0
- **NaN (Not a Number)**: Exponent = all 1s, Mantissa ≠ 0
- **Denormalized**: Exponent = 0, Mantissa ≠ 0

### Example

Single precision representation of $12.375_{10}$:

1. Convert to binary: $1100.011_2$
2. Normalize: $1.100011 \times 2^3$
3. Sign: 0 (positive)
4. Exponent: $3 + 127 = 130 = 10000010_2$
5. Mantissa: $10001100000000000000000_2$

## A/D and D/A Conversion

- **Real-world signals**: Continuous/analog form
- **Digital systems**: Model these as 0s and 1s
- **Conversion needed**: Between analog and digital representations