---
title : "Memory Management in C"
---
## Memory Layout of a C Program

When a C program is executed, the Operating System allocates a chunk of memory divided into distinct segments:

1. **TEXT Segment**
2. **Initialized Data Segment**
3. **Uninitialized Data Segment (BSS)**
4. **Stack**
5. **Heap**

```
High Memory Address
┌─────────────────────┐
│       Stack         │ ← Grows downward
├─────────────────────┤
│         ↓           │
│    (Free Space)     │
│         ↑           │
├─────────────────────┤
│        Heap         │ ← Grows upward
├─────────────────────┤
│ Uninitialized Data  │ (BSS)
├─────────────────────┤
│  Initialized Data   │
├─────────────────────┤
│       TEXT          │ (Program Code)
└─────────────────────┘
Low Memory Address
```

### Memory Segment Characteristics

- **TEXT, Initialized Data, Uninitialized Data, and Stack** have fixed sizes determined at compile time
- **Heap** size can be dynamically adjusted through system calls during runtime
- Stack and Heap grow toward each other, with free space in between

## TEXT Segment

The TEXT segment contains the compiled machine code of your program.

### Characteristics:
- **Read-only**: Prevents accidental modification of program code
- **Shared**: Multiple instances of the same program can share this segment
- **Fixed size**: Determined at compile time

### Example:
```c
// This function's compiled code goes in TEXT segment
int add(int a, int b) {
    return a + b;  // Machine instructions stored here
}
```

## Initialized Data Segment

Contains global and static variables that have been explicitly initialized by the programmer.

### Characteristics:
- **Read-write**: Variables can be modified during execution
- **Fixed size**: Known at compile time
- **Persistent**: Data persists throughout program execution

### Examples:
```c
int global_var = 42;           // Goes to initialized data
static int static_var = 100;   // Goes to initialized data
char message[] = "Hello";      // Goes to initialized data

int main() {
    // These are NOT in initialized data (they're on stack)
    int local_var = 10;
    return 0;
}
```

## Uninitialized Data Segment (BSS)

Contains global and static variables that have not been initialized or are initialized to zero.

### Characteristics:
- **Zero-initialized**: OS automatically initializes to zero
- **Fixed size**: Known at compile time
- **Memory efficient**: Doesn't store actual zero values in executable

### Examples:
```c
int global_array[1000];        // Goes to BSS (initialized to 0)
static int static_counter;     // Goes to BSS (initialized to 0)
char buffer[256];              // Goes to BSS (initialized to 0)

int main() {
    printf("%d\n", global_array[0]);  // Prints 0
    return 0;
}
```

## Stack

The stack is used for automatic memory management of local variables and function call management.

### Characteristics:
- **LIFO (Last In, First Out)**: Functions are called and return in reverse order
- **Limited size**: Typically 1-8 MB (system dependent)
- **Fast access**: Direct memory addressing
- **Automatic cleanup**: Variables are automatically deallocated when out of scope

### What's Stored on the Stack:
- **Primitive data types**: `int`, `float`, `char`, `double`
- **Pointers**: `int*`, `char*`, `void*`
- **Fixed-size arrays**: `int arr[100]`
- **Fixed-size structs**: User-defined structures
- **Function parameters and return addresses**
- **Local variables**

### Stack Operations:
```c
void function_example() {
    int local_int = 10;        // Pushed onto stack
    char local_array[50];      // Pushed onto stack
    int* ptr = &local_int;     // Pointer pushed onto stack
    
    // When function returns, all local variables are popped off
}
```

### Stack Overflow:
Occurs when stack size limit is exceeded, typically due to:
- Deep recursion
- Large local arrays
- Excessive function nesting

```c
// This will cause stack overflow
void infinite_recursion() {
    int large_array[10000];  // Each call adds to stack
    infinite_recursion();    // Never returns, keeps growing stack
}
```

## Heap

The heap provides dynamic memory allocation for data whose size or lifetime cannot be determined at compile time.

### Characteristics:
- **Virtually unlimited**: Can request more memory from OS
- **Manual management**: Programmer responsible for allocation/deallocation
- **Slower access**: Requires pointer dereferencing
- **Fragmentation**: Can become fragmented over time

### What's Stored on the Heap:
- **Dynamic arrays**: Arrays whose size is determined at runtime
- **Linked lists and trees**: Dynamic data structures
- **Large data structures**: When stack space is insufficient
- **Any data type**: No restrictions on what can be stored

### Heap Operations:
```c
#include <stdlib.h>

int main() {
    // Allocate memory on heap
    int* dynamic_array = malloc(1000 * sizeof(int));
    
    if (dynamic_array == NULL) {
        printf("Memory allocation failed!\n");
        return 1;
    }
    
    // Use the memory
    for (int i = 0; i < 1000; i++) {
        dynamic_array[i] = i * 2;
    }
    
    // Free the memory (important!)
    free(dynamic_array);
    dynamic_array = NULL;  // Prevent dangling pointer
    
    return 0;
}
```

### Heap Memory Functions:
- `malloc(size)`: Allocate memory
- `calloc(count, size)`: Allocate and zero-initialize memory
- `realloc(ptr, new_size)`: Resize previously allocated memory
- `free(ptr)`: Deallocate memory

## Pointers in C

Pointers are fundamental to understanding memory management in C.

### Types of Parameter Passing:

#### 1. Pass by Value (Copy)
```c
void modify_value(int x) {
    x = 100;  // Only modifies local copy
}

int main() {
    int num = 5;
    modify_value(num);
    printf("%d\n", num);  // Still prints 5
    return 0;
}
```

#### 2. Pass by Pointer
```c
void modify_through_pointer(int* x) {
    *x = 100;  // Modifies original value
}

int main() {
    int num = 5;
    modify_through_pointer(&num);
    printf("%d\n", num);  // Prints 100
    return 0;
}
```

#### 3. Pass Pointer to Pointer
```c
void allocate_memory(int** ptr) {
    *ptr = malloc(sizeof(int));
    **ptr = 42;
}

int main() {
    int* my_ptr = NULL;
    allocate_memory(&my_ptr);
    printf("%d\n", *my_ptr);  // Prints 42
    free(my_ptr);
    return 0;
}
```

## Memory Management Best Practices

### Do's:
- Always check if `malloc()` returns NULL
- Free every allocated block of memory
- Set pointers to NULL after freeing
- Use `valgrind` or similar tools to detect memory leaks
- Prefer stack allocation when possible (faster and automatic cleanup)

### Don'ts:
- Don't access freed memory
- Don't free the same memory twice
- Don't access memory outside allocated bounds
- Don't ignore compiler warnings about uninitialized variables

### Common Memory Errors:
1. **Memory leaks**: Allocated memory never freed
2. **Dangling pointers**: Pointers to freed memory
3. **Buffer overflows**: Writing beyond allocated bounds
4. **Double free**: Freeing same memory twice
5. **Use after free**: Accessing freed memory

## Example: Complete Memory Usage
```c
#include <stdio.h>
#include <stdlib.h>

// Global variables (Initialized Data)
int global_counter = 0;

// Global array (BSS - Uninitialized Data)
int global_array[100];

// Function (TEXT segment)
void demonstrate_memory() {
    // Local variables (Stack)
    int local_var = 10;
    char local_buffer[50];
    
    // Dynamic allocation (Heap)
    int* heap_array = malloc(200 * sizeof(int));
    
    if (heap_array != NULL) {
        // Use heap memory
        for (int i = 0; i < 200; i++) {
            heap_array[i] = i;
        }
        
        // Clean up
        free(heap_array);
    }
}

int main() {
    demonstrate_memory();
    return 0;
}
```
