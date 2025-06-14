---
title: Memory Organization
---

## Memory Cell
Carries two stable states 1 and 0

![Memory Cell](./memory/Pasted%20image%2020250614202953.png)
## Memory Types
### RAM (Random Access Memory)

Think of RAM as your computer's "working desk" - it's where active tasks happen.

**Dynamic RAM (DRAM)**
- Uses tiny capacitors (like mini batteries) that need constant refreshing
- Cheaper but slower
- Used for main memory in computers

**Static RAM (SRAM)**
- Uses flip-flop circuits (more stable)
- Faster but more expensive
- Used for cache memory (super-fast temporary storage)
### ROM (Read-Only Memory)

Like a book that's already written - you can read it but can't easily change it.

**Types of ROM:**

- **PROM** - Programmable ROM (can be written once)
- **EPROM** - Erasable PROM (can be erased with UV light)
- **EEPROM** - Electrically Erasable PROM
- **Flash** - Modern version used in USB drives and SSDs

| **Memory Type**                     | **Category**       | **Erasure**               | **Write Mechanism** | **Volatility** |
| ----------------------------------- | ------------------ | ------------------------- | ------------------- | -------------- |
| Random-access memory (RAM)          | Read-write memory  | Electrically, byte-level  | Electrically        | Volatile       |
| Read-only memory (ROM)              | Read-only memory   | Not possible              | Masks               | Nonvolatile    |
| Programmable ROM (PROM)             | Read-only memory   | Not possible              | Electrically        | Nonvolatile    |
| Erasable PROM (EPROM)               | Read-mostly memory | UV light, chip-level      | Electrically        | Nonvolatile    |
| Electrically Erasable PROM (EEPROM) | Read-mostly memory | Electrically, byte-level  | Electrically        | Nonvolatile    |
| Flash memory                        | Read-mostly memory | Electrically, block-level | Electrically        | Nonvolatile    |
## Memory Modules
A memory module is like a team of memory chips working together. Instead of using one huge chip, manufacturers combine smaller chips to create the memory size they need.

### Example: Building a 256K×8bit Module

- **Goal**: Create memory that stores 256,000 words, each 8 bits long
- **Available**: 256K×1bit chips (each stores one bit per word)
- **Solution**: Use 8 chips (one for each bit position)
- **Result**: When you read one address, you get 8 bits (one from each chip)

### Larger Example: 1M×8bit Module

- **Goal**: 1 million words of 8 bits each
- **Available**: 256K×1bit chips
- **Math**: Need 4 chips for capacity (4 × 256K = 1M) and 8 chips for width
- **Total**: 32 chips arranged in a 4×8 grid