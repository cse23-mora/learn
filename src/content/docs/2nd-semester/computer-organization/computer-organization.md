---
title: Computer Organization
---

## High Level Overview

![A](./organization/Pasted%20image%2020250614173605.png)
-  CPU – execute instructions
- Memory – store program & data
- IO devices – receive inputs & produce outputs
- Bus – interconnects everything by transferring data

## $2^{nd}$ Level overview of a Computer

![A](./organization/Pasted%20image%2020250614173534.png)

## $3^{rd}$ Level overview of a Computer

![A](./organization/Pasted%20image%2020250614173551.png)

## Blocks of a Microprocessor

![A](./organization/Pasted%20image%2020250614173710.png)

## Registers
- Capable of storing a set of bits
- Built with flip flops

![A](./organization/Pasted%20image%2020250614173814.png)

### 4-bit parallel-in parallel-out Register

![A](./organization/Pasted%20image%2020250614173959.png)

### 4-bit Register with LOAD

![A](./organization/Pasted%20image%2020250614174124.png)

### 4-bit serial-in, serial-out register

![A](./organization/Pasted%20image%2020250614174252.png)

## Internal structure of a CPU

![A](./organization/Pasted%20image%2020250614174323.png)

### Registers
- Type of memory located inside CPU
- Can hold a single piece of data
	- Useful in both data processing & control functionalities
- Special purpose registers
	- Program Counter (PC)
	- Instruction Register (IR)
	- Accumulator or working register
	- Flag/Status register
- General purpose registers
	- Used to store data

| Register                  | Function                                                                 |
|---------------------------|--------------------------------------------------------------------------|
| **Accumulator (A) / Working Register (W)** | - Stores results of arithmetic and logic operations  <br> - Connected directly to ALU output     |
| **Program Counter (PC)** | - Keeps track of address of next instruction  <br> - Instruction at PC is fetched into CPU  <br> - After fetching, PC is updated: `PC = PC + d` |
| **Instruction Register (IR)** | - Stores fetched instruction for execution  <br> - Close to control unit for decoding |

### FLAG / STATUS Register
![A](./organization/Pasted%20image%2020250614173249.png)


## Instruction Execution Sequence
1. Fetch next instruction from memory to IR
2. Change PC to point to next instruction
3. Determine type of instruction just fetched
4. If instruction needs data from memory, determine where it is
5. Fetch data if needed into register
6. Execute instruction
7. Go to step 1 & continue with next instruction

## Instruction Cycle
<iframe width="100%" style="aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/Z5JC9Ve1sfI" title="The Fetch-Execute Cycle: What&#39;s Your Computer Actually Doing?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

