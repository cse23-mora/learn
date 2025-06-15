---
title: Sequential Logic Circuits
---

Output depends on current inputs and past outputs
- **State :** Collection of state variables
> Sequential logic circuits are also called as  *finite state machines*

## Sequential Circuit types
- **Feedback sequential circuits:** Use individual logic gates and feedback loops for memory
- **Clocked synchronous state machines :** Use latches and flipflops as building blocks controlled by clock
## Latches and Flip Flops

| Latch                          | Flip Flop                       |
| ------------------------------ | ------------------------------- |
| Triggered by input level       | Triggered by clock edges        |
| Asynchronous                   | Synchronous                     |
| Can change state while enabled | State change only at clock edge |
### S-R Latch
| Block Diagram                        | Logic diagram                        |
| ------------------------------------ | ------------------------------------ |
| ![SR](./sequential/Pasted%20image%2020250614155834.png) | ![SR](./sequential/Pasted%20image%2020250614155922.png) |

| S   | R   | Q      | QN      |
| --- | --- | ------ | ------- |
| 0   | 0   | last Q | last QN |
| 0   | 1   | 0      | 1       |
| 1   | 0   | 1      | 0       |
| 1   | 1   | 0      | 0       |
### S-R Latch with Enable
| Block Diagram                        | Logic Diagram                        |
| ------------------------------------ | ------------------------------------ |
| ![SR](./sequential/Pasted%20image%2020250614160123.png) | ![SR](./sequential/Pasted%20image%2020250614160138.png) |

| S   | R   | C   | Q      | QN      |
| --- | --- | --- | ------ | ------- |
| 0   | 0   | 1   | last Q | last QN |
| 0   | 1   | 1   | 0      | 1       |
| 1   | 0   | 1   | 1      | 0       |
| 1   | 1   | 1   | 1      | 1       |
| x   | x   | 0   | last Q | last QN |
### D Latch
- Stores one bit of information
- A transparent Latch

| Block Diagram                        | Logic Diagram                        |
| ------------------------------------ | ------------------------------------ |
| ![D](./sequential/Pasted%20image%2020250614160603.png) | ![D](./sequential/Pasted%20image%2020250614160624.png) |

| C   | D   | Q      | QN      |
| --- | --- | ------ | ------- |
| 1   | 0   | 0      | 1       |
| 1   | 1   | 1      | 0       |
| 0   | x   | last Q | last QN |
### D Flip Flop
- Output changes only at an edge of a clock signal
- Two Types:
	- Positive Edge Triggered
	- Negative Edge Triggered

| Block Diagram                        | Logic Diagram                        |
| ------------------------------------ | ------------------------------------ |
| ![D](./sequential/Pasted%20image%2020250614160904.png) | ![D](./sequential/Pasted%20image%2020250614160919.png) |

| D   | CLK                                                                                                                                                                                                                                                                                                                                                                                                                               | Q      | QN      |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| 0   | <svg width="100" height="60" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg"> <g stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"> <!-- Horizontal line (left) --> <line x1="10" y1="40" x2="40" y2="40" /> <!-- Vertical line (rising edge) --> <line x1="40" y1="40" x2="40" y2="20" /> <!-- Horizontal line (right) --> <line x1="40" y1="20" x2="70" y2="20" /> </g> </svg> | 0      | 1       |
| 1   | <svg width="100" height="60" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg"> <g stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"> <!-- Horizontal line (left) --> <line x1="10" y1="40" x2="40" y2="40" /> <!-- Vertical line (rising edge) --> <line x1="40" y1="40" x2="40" y2="20" /> <!-- Horizontal line (right) --> <line x1="40" y1="20" x2="70" y2="20" /> </g> </svg> | 1      | 0       |
| x   | 0                                                                                                                                                                                                                                                                                                                                                                                                                                 | last Q | last QN |
| x   | 1                                                                                                                                                                                                                                                                                                                                                                                                                                 | last Q | last QN |
## J-K Flip Flop
| Block Diagram                        | Logic Diagram                        |
| ------------------------------------ | ------------------------------------ |
| ![JK](./sequential/Pasted%20image%2020250614162708.png) | ![JK](./sequential/Pasted%20image%2020250614162748.png) |

| J   | K   | CLK                                                                                                                                                                                                                                                                                                                                                                                                                               | Q       | QN      |
| --- | --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------- |
| x   | x   | 0                                                                                                                                                                                                                                                                                                                                                                                                                                 | last Q  | last QN |
| x   | x   | 1                                                                                                                                                                                                                                                                                                                                                                                                                                 | last Q  | last QN |
| 0   | 0   | <svg width="100" height="60" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg"> <g stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"> <!-- Horizontal line (left) --> <line x1="10" y1="40" x2="40" y2="40" /> <!-- Vertical line (rising edge) --> <line x1="40" y1="40" x2="40" y2="20" /> <!-- Horizontal line (right) --> <line x1="40" y1="20" x2="70" y2="20" /> </g> </svg> | last Q  | last QN |
| 0   | 1   | <svg width="100" height="60" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg"> <g stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"> <!-- Horizontal line (left) --> <line x1="10" y1="40" x2="40" y2="40" /> <!-- Vertical line (rising edge) --> <line x1="40" y1="40" x2="40" y2="20" /> <!-- Horizontal line (right) --> <line x1="40" y1="20" x2="70" y2="20" /> </g> </svg> | 0       | 1       |
| 1   | 0   | <svg width="100" height="60" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg"> <g stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"> <!-- Horizontal line (left) --> <line x1="10" y1="40" x2="40" y2="40" /> <!-- Vertical line (rising edge) --> <line x1="40" y1="40" x2="40" y2="20" /> <!-- Horizontal line (right) --> <line x1="40" y1="20" x2="70" y2="20" /> </g> </svg> | 1       | 0       |
| 1   | 1   | <svg width="100" height="60" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg"> <g stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"> <!-- Horizontal line (left) --> <line x1="10" y1="40" x2="40" y2="40" /> <!-- Vertical line (rising edge) --> <line x1="40" y1="40" x2="40" y2="20" /> <!-- Horizontal line (right) --> <line x1="40" y1="20" x2="70" y2="20" /> </g> </svg> | last QN | last Q  |
## T Flip Flop
- Toggle at every Clock signal

| Using D                              | Using J-K                            | D with Enable                        | J-K With Enable                      |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| ![[Pasted image 20250614163111.png]](./sequential/Pasted%20image%2020250614163111.png) | ![[Pasted image 20250614163120.png]](./sequential/Pasted%20image%2020250614163120.png) | ![[Pasted image 20250614163130.png]](./sequential/Pasted%20image%2020250614163130.png) | ![[Pasted image 20250614163137.png]](./sequential/Pasted%20image%2020250614163137.png) |
# Clocked Synchronous State Machines
- **State Machine :** Sequential Operation
- **Clocked :** State change with clock edge
- **Synchronous :** All flip flops use the same clock
![[Pasted image 20250614163446.png]]
## Example: 3 Bit Counter using D-FlipFlops

### State Diagram

![A](./sequential/Pasted%20image%2020250614164724.png)
### Excitation Table
![A](./sequential/Pasted%20image%2020250614164759.png)
### K-Maps
![A](./sequential/Pasted%20image%2020250614164845.png)
### Excitation Equations
![A](./sequential/Pasted%20image%2020250614164919.png)

### Logic circuit for Individual Excitations
![A](./sequential/Pasted%20image%2020250614164956.png)
### Complete Logic Circuit
![A](./sequential/Pasted%20image%2020250614165509.png)
### Circuit in Action
![A](./sequential/SmartSelect_20250614_165323_Logic%20Circuit%20Simulator%20Pro.gif)
