---
title: Combinational Logic Elements
---


Combinational logic circuits produce outputs based **only on current inputs**. They do not have memory.

---

## 📦 1. Decoder

![alt text](image.png)

- Converts binary input into maximum of m = 2<sup>n</sup> or less  unique output lines.
- Common types: 2-to-4, 3-to-8 decoders.
- Example: Used in memory address decoding.

### 🔢 2-to-4 Decoder 
![alt text](image-3.png)
![alt text](image-4.png)


### 🔢 3-to-8 Decoder 
![alt text](image-5.png)

### Decoder expansion
- Each minterm → one AND gate
- Large decoders → need many-input ANDs (not practical)
- Use small decoders → build big decoder (hierarchical)
- Final AND gates → only 2 inputs
- ANDs implement minterms

Example:-![alt text](image-6-1.png)

 

![alt text](image-7.png)
### Implementing logic functions using a decoder
![alt text](image-8.png)
---

## 🎙️ 2. Encoder

![alt text](image-9.png)
Opposite of Decoding:
- m-bit input → n-bit output (n ≤ m ≤ 2ⁿ)
- Input: one-hot (only one 1)

### 4-to-2 encoder
![alt text](image-10.png)

### 8-to-3 line encoder (octal-to-binary encoder)
![alt text](image-11.png)
### Decimal to BCD encoder
![alt text](image-12.png)
### Priority encoder
![alt text](image-13.png)

### Example application:
- Positional encoder
![alt text](image-14.png)

---

## 🔀 3. Multiplexer (MUX)

![alt text](image-15.png)

- Selects one of many input lines and forwards it to a single output.
- Controlled using select lines.


### 2 input MUX
![alt text](image-16.png)


### 4-to-1 MUX

![alt text](image-17.png)


### Difference between Multiplexer, Decoder, and Encoder

| Feature            | Multiplexer (MUX)                 | Decoder                          | Encoder                           |
|--------------------|-----------------------------------|----------------------------------|-----------------------------------|
| Purpose            | Selects one input to pass to output | Converts binary input to 1-hot output | Converts 1-hot input to binary output |
| Inputs             | Multiple data inputs, select lines | n input lines                    | 2ⁿ input lines                    |
| Outputs            | Single output                     | 2ⁿ output lines                  | n output lines                    |
| Control Signals    | Select lines                      | Input acts as select             | No select; active input only      |
| Direction          | Many → 1                          | n → 2ⁿ                           | 2ⁿ → n                            |
| Example Use        | Data routing                      | Address decoding                 | Priority coding                   |


---

## 🧰 4. Digital Buffers

### Single input digital buffer

![alt text](image-18.png)

### Three state (Tri State buffer)

![alt text](image-19.png)


Tri-state Buffer:
- 2 logic levels (0,1), 3 output levels (0,1, High-Z)
- EN=0 → High-Z (acts like open circuit)
- Used to isolate output from bus
- Allows multiple devices to share same bus
- Common in data buses (e.g., computer peripherals)

### Tri-state Digital Buffer Data Bus Control
![alt text](image-20.png)

### Tri-state Digital Buffer Control
![alt text](image-21.png)

- allowing only one set of data to pass either a logic “1” or logic “0” output 
state onto the bus
- all the other tri-state outputs connected to the same bus lines are disabled 
by being placed in their high impedance Hi-Z state.


There are four types of tri-state buffers:
- 1. Active High tri-state buffer
- 2. Active high inverting tri-state buffer
- 3. Active Low tri-state buffer
- 4. Active low inverting tri-state buffer

#### Tri-state buffer - active high variants
![alt text](image-22.png)

#### Tri-state buffer - active low variants
![alt text](image-23.png)
---

## ⚖️ 5. Comparator

- Compares two binary numbers.

![alt text](image-24.png)

### Types of Comparators

1. **Equality Comparator**
   - Single output
   - Output HIGH if A = B, else LOW

2. **Magnitude Comparator**
   - Three outputs:
     - A < B
     - A = B
     - A > B

#### 1-bit magnitude comparator
![alt text](image-25.png)

#### 2-bit magnitude comparator
1. Designing 
![alt text](image-26.png)

2. Realizing
![alt text](image-27.png)

#### N-bit magnitude comparator
![alt text](image-28.png)





## ➕➖ 6. Adders, Subtractors, and ALUs

### ➕ Adders:

- Do binary addition
- Inputs: two or more binary numbers
- Outputs: SUM and CARRY (Cout)


#### Half Adder: Adds two bits.
![alt text](image-30.png)
#### Full Adder: Adds three bits (including carry-in).

-  Has an additional input bit C <sub>in</sub> to represent a carry-in bit coming from a 
previous addition step
![alt text](image-31.png)
![alt text](image-32.png)

#### Full adder implementation with half adders
![alt text](image-33.png)
#### Ripple Carry Adder

- Uses n full adders connected in series
- Carry ripples from LSB to MSB (right to left)

##### 4-bit ripple carry adder
![alt text](image-34.png)
- **Disadvantage:** output will not be valid until any carry-input has “rippled” through every full adder in 
the chain

#### Carry Lookahead Adder (CLA)
![alt text](image-35.png)

- Speeds up addition by computing carries in parallel
- No need to wait for ripple from LSB to MSB
- At each bit:
  1. Generate carry (from x<sub>i</sub> and y<sub>i</sub>)
  2. Propagate carry (pass carry-in to carry-out)

![alt text](image-36.png)

- 3 levels of delay:
  1. Generate & propagate signals
  2. Carry lookahead (sum-of-products)
- Faster than ripple carry due to parallel carry logic
### ➖ Subtractors:
- A – B = A + 2’s complement of B
- 2’s complement: B’ + 1
- Circuit: Adder + inverters on B inputs
- Set input carry C0 = 1

#### 4-bit Adder-Subtractor
![alt text](image-37.png)


#### Overflow:
- Happens when result > range of bits
- Common in signed binary addition/subtraction
- Detected when:
  - Two positives → negative result
  - Two negatives → positive result
- **Example** 
![alt text](image-38.png)



### 🧮 ALUs (Arithmetic Logic Units):
- Perform arithmetic and logical operations.
- Core component of a CPU.

![alt text](image-39.png)

- Basic ALU Architecture
![alt text](image-40.png)


---

## 🧾 7. Lookup Tables (LUTs)


- Memory-based way to implement logic
- Store outputs for all input combinations
- Inputs = address, output = stored value
- No need for logic gates
- Can be cascaded for complex functions

#### Half adder using LUTs
![alt text](image-41.png)

#### Multiplexers as LUTs

![alt text](image-42.png)

#### Uses of LUTs:
1. PLDs: Used in FPGAs/CPLDs to build custom logic
2. Speed: Precomputed outputs → faster than gate-based logic
3. Simplifies complex functions → fewer gates
4. Function approximation → for math/nonlinear functions

---
