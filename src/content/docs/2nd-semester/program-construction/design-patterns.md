---
title: "Design Patterns"
---

Design patterns are reusable solutions to commonly occurring problems in software design. They represent best practices and provide a common vocabulary for developers. The patterns are typically divided into three main categories:

- **Creational Patterns** - Deal with object creation mechanisms
- **Structural Patterns** - Deal with object composition and relationships
- **Behavioral Patterns** - Deal with communication between objects and responsibilities

---

## Creational Patterns
*How objects get created*

Creational patterns abstract the instantiation process and help make systems independent of how objects are created, composed, and represented.

### Abstract Factory

**Purpose:** Create sets or families of related objects without specifying their concrete classes.

**When to use:**
- You need to create families of related products
- You want to ensure products from the same family are used together
- You want to hide the implementation details of product creation

**Example Use Case:** Creating UI components for different themes (Light Theme vs Dark Theme) where each theme has its own set of buttons, text fields, and panels.

**Structure:**
```
AbstractFactory → ConcreteFactory1, ConcreteFactory2
AbstractProduct → ConcreteProduct1, ConcreteProduct2
```

**Benefits:**
- Ensures product compatibility
- Separates product creation from usage
- Easy to add new product families

---

### Builder Pattern

**Purpose:** Construct complex objects step by step, allowing different representations of the same construction process.

**When to use:**
- Objects need many optional parameters
- You want to avoid telescoping constructors
- Construction process must allow different representations

**Example Use Case:** Building a House object with optional features like garage, garden, swimming pool, etc.

**Key Components:**
- **Director:** Controls the construction process
- **Builder:** Abstract interface for creating parts
- **ConcreteBuilder:** Implements the Builder interface
- **Product:** The complex object being built

**Benefits:**
- Eliminates complex constructors
- Allows step-by-step construction
- Same construction process can create different representations

---

### Factory Method

**Purpose:** Create objects without specifying their exact classes, delegating the instantiation to subclasses.

**When to use:**
- A class can't anticipate the type of objects it needs to create
- Subclasses need to specify which objects to create
- You want to localize object creation logic

**Example Use Case:** A Document application where different document types (PDF, Word, Excel) are created by their respective factories.

**Structure:**
```
Creator (abstract) → ConcreteCreator1, ConcreteCreator2
Product (abstract) → ConcreteProduct1, ConcreteProduct2
```

**Benefits:**
- Eliminates the need to bind application classes
- Provides hooks for subclasses
- Connects parallel class hierarchies

---

### Prototype

**Purpose:** Create new objects by cloning existing instances rather than creating from scratch.

**When to use:**
- Object creation is expensive
- You want to avoid subclassing
- Runtime object creation based on dynamic loading

**Example Use Case:** Game objects where creating enemies by cloning a prototype is more efficient than instantiating from scratch.

**Key Concepts:**
- **Shallow Copy:** Copies object's primitive fields
- **Deep Copy:** Recursively copies all fields, including referenced objects

**Benefits:**
- Reduces object creation cost
- Dynamic object creation
- Avoids complex inheritance hierarchies

---

### Singleton

**Purpose:** Ensure a class has only one instance and provide global access to it.

**When to use:**
- Exactly one instance is needed (database connection, logger, cache)
- Global access point is required
- Instance should be extensible through subclassing

**Implementation Considerations:**
- **Thread Safety:** Use synchronization or eager initialization
- **Lazy vs Eager:** Create instance when needed vs at class loading
- **Registry Pattern:** For multiple named singletons

**Common Pitfalls:**
- Testing difficulties
- Hidden dependencies
- Violation of Single Responsibility Principle

---

## Structural Patterns
*Putting objects together*

Structural patterns explain how to assemble objects and classes into larger structures while keeping these structures flexible and efficient.

### Adapter

**Purpose:** Allow incompatible interfaces to work together by providing a wrapper.

**When to use:**
- Existing class interface doesn't match what you need
- You want to use existing functionality with incompatible interface
- Legacy code integration

**Example Use Case:** Integrating a third-party payment gateway with your application's payment interface.

**Types:**
- **Object Adapter:** Uses composition
- **Class Adapter:** Uses inheritance (multiple inheritance required)

**Benefits:**
- Reuses existing functionality
- Separates interface conversion from business logic
- Transparent to clients

---

### Bridge

**Purpose:** Separate abstraction from implementation so both can vary independently.

**When to use:**
- You want to avoid permanent binding between abstraction and implementation
- Both abstraction and implementation should be extensible
- Implementation changes shouldn't affect clients

**Example Use Case:** Drawing shapes on different platforms (Windows, Linux, macOS) where Shape is the abstraction and Platform-specific drawing is the implementation.

**Structure:**
```
Abstraction → RefinedAbstraction
Implementor → ConcreteImplementorA, ConcreteImplementorB
```

**Benefits:**
- Implementation can be selected at runtime
- Abstractions and implementations can be extended independently
- Changes to implementation don't affect client code

---

### Composite

**Purpose:** Compose objects into tree structures to represent part-whole hierarchies.

**When to use:**
- You want to represent part-whole hierarchies
- Clients should treat individual objects and compositions uniformly
- Tree-like structures are needed

**Example Use Case:** File system where files and folders are treated uniformly, or GUI components where containers and individual widgets are handled the same way.

**Key Components:**
- **Component:** Common interface for all objects
- **Leaf:** Individual objects with no children
- **Composite:** Objects that can contain other components

**Benefits:**
- Simplifies client code
- Easy to add new component types
- Flexible tree structures

---

### Decorator

**Purpose:** Add new functionality to objects dynamically without altering their structure.

**When to use:**
- You want to add responsibilities to objects without subclassing
- Responsibilities can be withdrawn
- Extension by subclassing is impractical

**Example Use Case:** Coffee shop where you can add milk, sugar, whipped cream to basic coffee, or text formatting where you can add bold, italic, underline decorations.

**Structure:**
```
Component → ConcreteComponent, Decorator → ConcreteDecoratorA, ConcreteDecoratorB
```

**Benefits:**
- More flexible than inheritance
- Avoids feature-heavy classes high up in hierarchy
- Decorators can be combined in various ways

---

### Façade

**Purpose:** Provide a simplified interface to a complex subsystem.

**When to use:**
- You want to provide a simple interface to a complex subsystem
- There are many dependencies between clients and implementation classes
- You want to layer your subsystems

**Example Use Case:** Computer startup process where pressing power button triggers complex subsystem interactions (CPU, memory, hard drive, etc.).

**Benefits:**
- Shields clients from subsystem complexity
- Promotes weak coupling
- Provides entry point to subsystem

---

### Flyweight

**Purpose:** Minimize memory usage by sharing efficiently among large numbers of similar objects.

**When to use:**
- Application uses large numbers of objects
- Storage costs are high due to object quantity
- Object state can be made extrinsic
- Objects can be replaced by few shared objects

**Example Use Case:** Text editor where character objects share formatting information (font, size, color) but have unique position information.

**Key Concepts:**
- **Intrinsic State:** Stored in flyweight, shared among objects
- **Extrinsic State:** Passed to flyweight methods, unique per object

**Benefits:**
- Reduces memory footprint
- May reduce total number of instances
- Centralizes state management

---

### Proxy

**Purpose:** Provide a placeholder or surrogate for another object to control access to it.

**When to use:**
- You need a more sophisticated reference than a simple pointer
- Lazy initialization is required
- Access control is needed
- Local representative for remote object is needed

**Types:**
- **Virtual Proxy:** Controls access to expensive objects
- **Remote Proxy:** Represents objects in different address spaces
- **Protection Proxy:** Controls access permissions
- **Smart Reference:** Performs additional actions when object is accessed

**Benefits:**
- Controls object access
- Can perform optimization (caching, lazy loading)
- Additional functionality without changing object interface

---

## Behavioral Patterns
*How objects interact*

Behavioral patterns are concerned with algorithms and the assignment of responsibilities between objects.

### Chain of Responsibility

**Purpose:** Pass requests along a chain of handlers until one handles it.

**When to use:**
- More than one object can handle a request
- You want to issue requests without specifying the receiver
- Handler set should be specified dynamically

**Example Use Case:** Customer support system where requests are passed from Customer Care → Technical Tier 1 → Technical Tier 2 → Management until someone can resolve it.

**Benefits:**
- Reduces coupling between sender and receiver
- Flexibility in assigning responsibilities
- Easy to add or remove handlers

---

### Command

**Purpose:** Encapsulate requests as objects, allowing parameterization and queuing of requests.

**When to use:**
- You want to parameterize objects with different requests
- You need to queue, log, or support undo operations
- You want to support macro recording

**Example Use Case:** Text editor with undo/redo functionality where each operation (cut, copy, paste) is a command object.

**Key Components:**
- **Command:** Interface for executing operations
- **ConcreteCommand:** Implements execute method
- **Invoker:** Calls execute on command
- **Receiver:** Performs the actual work

**Benefits:**
- Decouples invoker from receiver
- Commands can be stored, logged, queued
- Supports undo/redo operations
- Easy to add new commands

---

### Interpreter

**Purpose:** Define a representation for a language's grammar and provide an interpreter.

**When to use:**
- Grammar is simple and efficiency is not critical
- You want to interpret sentences in a language
- Grammar changes frequently

**Example Use Case:** Mathematical expression evaluator, SQL query processor, or configuration file parser.

**Structure:**
- **Abstract Expression:** Interface for interpret operation
- **Terminal Expression:** Implements grammar rules
- **Non-terminal Expression:** Composite expressions
- **Context:** Global information for interpreter

**Benefits:**
- Easy to change and extend grammar
- Complex grammars are maintainable
- Adding new ways to interpret expressions is easy

---

### Iterator

**Purpose:** Provide a way to access elements of a collection sequentially without exposing underlying representation.

**When to use:**
- You want to access collection contents without exposing internal structure
- You need multiple traversals of objects
- You want a uniform interface for different collections

**Example Use Case:** Iterating through different data structures (arrays, trees, hash tables) with the same interface.

**Types:**
- **Internal Iterator:** Collection controls iteration
- **External Iterator:** Client controls iteration

**Benefits:**
- Supports variations in traversal
- Simplifies collection interface
- Multiple iterators can work simultaneously

---

### Mediator

**Purpose:** Define how objects interact with each other through a mediator object.

**When to use:**
- Objects communicate in complex but well-defined ways
- Reusing objects is difficult due to communication dependencies
- Behavior distributed between classes should be customizable

**Example Use Case:** Air traffic control system where planes don't communicate directly but through control tower, or dialog box where controls interact through form controller.

**Benefits:**
- Reduces dependencies between communicating objects
- Centralizes complex communications
- Reusable mediator can be used with different object sets

---

### Memento

**Purpose:** Capture object's internal state without violating encapsulation, allowing later restoration.

**When to use:**
- You need to save/restore object state
- Direct interface to state would expose implementation details
- You want to provide undo capability

**Example Use Case:** Text editor's undo functionality, game save states, or database transaction rollback.

**Key Components:**
- **Originator:** Creates and uses mementos
- **Memento:** Stores originator's internal state
- **Caretaker:** Responsible for memento's safekeeping

**Benefits:**
- Preserves encapsulation boundaries
- Simplifies originator code
- Can provide unlimited undo levels

---

### Observer

**Purpose:** Define one-to-many dependency so when one object changes state, all dependents are notified.

**When to use:**
- Changes to one object require changing others
- You don't know how many objects need to change
- Object should notify others without making assumptions about who they are

**Example Use Case:** Model-View-Controller architecture where model changes notify all views, or event handling systems.

**Key Components:**
- **Subject:** Maintains list of observers, provides interface to attach/detach
- **Observer:** Interface for objects that should be notified
- **ConcreteSubject:** Stores state, sends notification
- **ConcreteObserver:** Implements update interface

**Benefits:**
- Loose coupling between subject and observers
- Dynamic relationships between objects
- Broadcast communication capability

---

### State

**Purpose:** Allow object to alter behavior when internal state changes, appearing as if object changed class.

**When to use:**
- Object behavior depends on its state
- Operations have large conditional statements based on state
- State transitions are explicit

**Example Use Case:** TCP connection states (established, listening, closed), vending machine states, or media player states (playing, paused, stopped).

**Benefits:**
- Localizes state-specific behavior
- Makes state transitions explicit
- State objects can be shared if they don't have instance variables

---

### Strategy

**Purpose:** Define family of algorithms, encapsulate each one, and make them interchangeable.

**When to use:**
- Many related classes differ only in behavior
- You need different variants of an algorithm
- Algorithm uses data clients shouldn't know about

**Example Use Case:** Payment processing with different strategies (credit card, PayPal, bank transfer), or sorting algorithms (quicksort, mergesort, bubblesort).

**Benefits:**
- Eliminates conditional statements
- Provides alternative implementations
- Runtime algorithm selection

---

### Template Method

**Purpose:** Define skeleton of algorithm in base class, letting subclasses override specific steps.

**When to use:**
- Common behavior among subclasses should be factored out
- You want to control which parts of algorithm subclasses can extend
- Code duplication should be avoided

**Example Use Case:** Data processing pipeline where steps are defined but implementation varies, or framework classes that define workflow.

**Benefits:**
- Code reuse through inheritance
- Controls which parts can be extended
- Inverts control structure (framework calls application code)

---

### Visitor

**Purpose:** Perform operations on object structure elements without changing their classes.

**When to use:**
- Object structure contains many classes with differing interfaces
- Many distinct operations need to be performed on objects
- Object structure rarely changes but operations change frequently

**Example Use Case:** Compiler abstract syntax tree where different operations (type checking, code generation, optimization) are performed on same node structure.

**Key Components:**
- **Visitor:** Interface for visiting each type of element
- **ConcreteVisitor:** Implements operations for each element type
- **Element:** Interface with accept method
- **ConcreteElement:** Implements accept to call appropriate visitor method

**Benefits:**
- Easy to add new operations
- Gathers related operations in one class
- Can accumulate state while visiting

---

## Pattern Relationships

### Pattern Combinations
- **Abstract Factory + Factory Method:** Abstract factory often uses factory methods
- **Builder + Composite:** Builder can construct composite structures
- **Observer + Mediator:** Mediator can use observer to communicate with colleagues
- **Strategy + Template Method:** Template method uses strategy for algorithm steps

---