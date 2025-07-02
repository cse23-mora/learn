---
title: "Object oriented Design"
---

## Table of Contents
- [Java Basics](#java-basics)
- [Object-Oriented Programming Fundamentals](#object-oriented-programming-fundamentals)
- [Main Design Principles](#main-design-principles)
- [Advanced OOP Concepts](#advanced-oop-concepts)
- [Design Quality Metrics](#design-quality-metrics)
- [Best Practices](#best-practices)

## Java Basics

### Objects
An **object** is a fundamental unit in object-oriented programming that represents a real-world entity. Objects have:
- **State**: Represented by attributes/fields
- **Behavior**: Represented by methods/functions
- **Identity**: Each object has a unique identity

Example:
```java
// Object example - a Car object
Car myCar = new Car("Toyota", "Camry", 2023);
myCar.start(); // behavior
myCar.accelerate(50); // behavior
```

### Classes
A **class** is a blueprint or template that defines the structure and behavior of objects. It describes:
- What attributes an object will have
- What methods an object can perform
- How objects should be created

```java
public class Car {
    // Attributes
    private String brand;
    private String model;
    private int year;
    
    // Constructor
    public Car(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    
    // Methods
    public void start() {
        System.out.println("Car is starting...");
    }
}
```

## Object-Oriented Programming Fundamentals

### Core Concept
Object-Oriented Programming (OOP) is a programming paradigm that:
- Organizes code into objects
- Models real-world entities as software objects
- Promotes code reusability and maintainability
- Objects contain both attributes (data) and methods (behavior)

### Class vs Object Relationship

**Class**: 
- Describes the structure of an object
- Acts as a template or blueprint
- Defines what attributes and methods objects will have

**Object**:
- An instance of a class
- Has actual values for the attributes defined in the class
- Can invoke the methods defined in the class
- Multiple objects can be created from a single class

```java
// Class definition
public class Student {
    private String name;
    private int age;
    
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

// Creating objects (instances)
Student student1 = new Student("Alice", 20);
Student student2 = new Student("Bob", 22);
```

### Constructor
A **constructor** is a special method that:
- Has the same name as the class
- Is called automatically when an object is created
- Initializes the object's attributes
- Simplifies object creation process
- Can be overloaded to provide different ways of creating objects

```java
public class Rectangle {
    private double width;
    private double height;
    
    // Default constructor
    public Rectangle() {
        this.width = 1.0;
        this.height = 1.0;
    }
    
    // Parameterized constructor
    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }
}
```

### Java Access Modifiers

#### Public
- **Scope**: Accessible from anywhere
- **Usage**: Methods and attributes that need to be accessed by other classes
- **Example**: Public methods that form the class interface

#### Private
- **Scope**: Accessible only within the same class
- **Usage**: Internal implementation details that should be hidden
- **Example**: Instance variables that store object state

#### Protected
- **Scope**: Accessible within the same package and by subclasses
- **Usage**: Members that should be inherited but not publicly accessible

#### Default (Package-Private)
- **Scope**: Accessible within the same package only
- **Usage**: Classes and members that should only be used within the package

```java
public class BankAccount {
    private double balance;        // Private - internal state
    protected String accountType;  // Protected - for inheritance
    String bankName;              // Default - package access
    public void deposit(double amount) { // Public - external interface
        balance += amount;
    }
}
```

### Static Keyword
The **static** keyword indicates that a member belongs to the class itself rather than to instances:

**Static Variables**:
- Shared among all instances of the class
- Also called class variables
- Initialized when the class is first loaded

**Static Methods**:
- Can be called without creating an object
- Cannot access non-static (instance) members directly
- Commonly used for utility methods

```java
public class MathUtils {
    public static final double PI = 3.14159; // Static constant
    private static int instanceCount = 0;    // Static variable
    
    public static double calculateArea(double radius) { // Static method
        return PI * radius * radius;
    }
    
    public MathUtils() {
        instanceCount++; // Increment when new instance created
    }
    
    public static int getInstanceCount() {
        return instanceCount;
    }
}

// Usage without creating objects
double area = MathUtils.calculateArea(5.0);
int count = MathUtils.getInstanceCount();
```

## Main Design Principles

### 1. Decomposition
**Definition**: Breaking down complex problems into smaller, manageable components.

**Benefits**:
- Easier to understand and solve individual pieces
- Promotes code reusability
- Enables parallel development
- Simplifies testing and debugging

**Types of Relationships**:

#### Association
- **Definition**: A general relationship where objects interact with each other
- **Characteristics**: Objects can exist independently
- **Example**: A Student takes a Course

```java
public class Student {
    private List<Course> courses;
    
    public void enrollInCourse(Course course) {
        courses.add(course);
    }
}
```

#### Aggregation ("Has-a" relationship)
- **Definition**: A specialized association representing a "whole-part" relationship
- **Characteristics**: Parts can exist without the whole
- **Example**: A Department has Employees

```java
public class Department {
    private List<Employee> employees;
    // Employees can exist even if department is dissolved
}
```

#### Composition ("Part-of" relationship)
- **Definition**: A strong aggregation where parts cannot exist without the whole
- **Characteristics**: When the whole is destroyed, parts are also destroyed
- **Example**: A House contains Rooms

```java
public class House {
    private List<Room> rooms;
    
    public House() {
        rooms = new ArrayList<>();
        rooms.add(new Room("Living Room"));
        rooms.add(new Room("Bedroom"));
        // Rooms are created with the house and destroyed with it
    }
}
```

### 2. Abstraction
**Definition**: Focusing on essential features while hiding unnecessary implementation details.

**Key Concepts**:
- Show "what" an object can do, not "how" it does it
- Simplifies design and usage
- Reduces complexity for users of the class

**Implementation Methods**:
- Abstract classes
- Interfaces
- Method signatures without implementation details

```java
// Abstract class example
public abstract class Vehicle {
    protected String brand;
    
    public abstract void start(); // Abstract method - no implementation
    
    public void displayInfo() {   // Concrete method
        System.out.println("Brand: " + brand);
    }
}

// Interface example
public interface Drawable {
    void draw(); // Implicitly abstract
    default void erase() { // Default implementation
        System.out.println("Erasing...");
    }
}
```

### 3. Encapsulation
**Definition**: Bundling data and methods together while hiding internal implementation details.

**Key Components**:
- **Bundle**: Data (attributes) and functions (methods) together
- **Expose**: Only necessary interfaces/methods
- **Restrict**: Access to internal state and implementation

**Benefits**:
- Data protection and integrity
- Flexibility to change implementation
- Reduced coupling between classes
- Better maintainability

```java
public class BankAccount {
    private double balance; // Hidden internal state
    private String accountNumber;
    
    // Controlled access through methods
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
    
    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            return true;
        }
        return false;
    }
    
    public double getBalance() {
        return balance; // Read-only access
    }
}
```

### 4. Generalization
**Definition**: Extracting common behaviors and attributes from multiple classes into a generalized superclass.

**Process**:
1. Identify common features across classes
2. Create a parent class with shared attributes/methods
3. Make specific classes inherit from the parent

**Benefits**:
- Code reuse
- Consistent interface
- Easier maintenance
- Natural hierarchy representation

```java
// Generalized superclass
public class Animal {
    protected String name;
    protected int age;
    
    public void eat() {
        System.out.println(name + " is eating");
    }
    
    public abstract void makeSound(); // Each animal sounds different
}

// Specialized subclasses
public class Dog extends Animal {
    public void makeSound() {
        System.out.println("Woof!");
    }
}

public class Cat extends Animal {
    public void makeSound() {
        System.out.println("Meow!");
    }
}
```

## Advanced OOP Concepts

### Inheritance
**Definition**: Establishing a parent-child relationship where child classes inherit attributes and methods from parent classes.

**Types**:
- **Single Inheritance**: One parent class
- **Multilevel Inheritance**: Chain of inheritance
- **Hierarchical Inheritance**: Multiple children from one parent

**Keywords**:
- `extends`: Used to inherit from a class
- `super`: Reference to parent class
- `@Override`: Indicates method overriding

```java
public class Vehicle {
    protected String brand;
    protected int year;
    
    public void start() {
        System.out.println("Vehicle starting...");
    }
}

public class Car extends Vehicle {
    private int doors;
    
    public Car(String brand, int year, int doors) {
        super(); // Call parent constructor
        this.brand = brand;
        this.year = year;
        this.doors = doors;
    }
    
    @Override
    public void start() {
        super.start(); // Call parent method
        System.out.println("Car engine started");
    }
}
```

### Polymorphism
**Definition**: The ability of objects to respond differently to the same method call based on their actual type.

**Types**:

#### Method Overloading (Compile-time Polymorphism)
- Same method name with different parameters
- Resolved at compile time

```java
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
    
    public double add(double a, double b) {
        return a + b;
    }
    
    public int add(int a, int b, int c) {
        return a + b + c;
    }
}
```

#### Method Overriding (Runtime Polymorphism)
- Child class provides specific implementation of parent method
- Resolved at runtime based on actual object type

```java
public class Shape {
    public double calculateArea() {
        return 0;
    }
}

public class Circle extends Shape {
    private double radius;
    
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
}

public class Rectangle extends Shape {
    private double width, height;
    
    @Override
    public double calculateArea() {
        return width * height;
    }
}

// Polymorphic usage
Shape[] shapes = {new Circle(), new Rectangle()};
for (Shape shape : shapes) {
    System.out.println(shape.calculateArea()); // Calls appropriate method
}
```

## Design Quality Metrics

### Cohesion
**Definition**: Measures how closely related and focused the responsibilities of a single module are.

**Types**:
- **High Cohesion** (Good): Methods work together toward a single, well-defined purpose
- **Low Cohesion** (Bad): Methods perform unrelated tasks

```java
// High Cohesion - all methods related to user management
public class UserManager {
    public void createUser(String username) { }
    public void deleteUser(String username) { }
    public void updateUser(String username, UserData data) { }
    public User findUser(String username) { return null; }
}

// Low Cohesion - mixed responsibilities
public class BadClass {
    public void calculateTax() { }      // Tax calculation
    public void sendEmail() { }        // Email service
    public void parseXML() { }         // XML parsing
}
```

### Coupling
**Definition**: Measures the degree of interdependence between software modules.

**Types**:
- **Low Coupling** (Good): Modules are independent and changes in one don't affect others
- **High Coupling** (Bad): Modules are tightly connected and changes cascade

**Ways to Reduce Coupling**:
- Use interfaces instead of concrete classes
- Dependency injection
- Observer pattern
- Facade pattern

```java
// High Coupling - direct dependency
public class OrderProcessor {
    private EmailService emailService = new EmailService(); // Tight coupling
    
    public void processOrder(Order order) {
        // Process order
        emailService.sendConfirmation(order.getCustomerEmail());
    }
}

// Low Coupling - using interface
public class OrderProcessor {
    private NotificationService notificationService; // Interface dependency
    
    public OrderProcessor(NotificationService service) {
        this.notificationService = service; // Dependency injection
    }
    
    public void processOrder(Order order) {
        // Process order
        notificationService.sendNotification(order.getCustomerEmail());
    }
}
```

## Best Practices

### 1. Design Principles (SOLID)
- **S**ingle Responsibility Principle: A class should have only one reason to change
- **O**pen/Closed Principle: Open for extension, closed for modification
- **L**iskov Substitution Principle: Objects should be replaceable with instances of their subtypes
- **I**nterface Segregation Principle: Many specific interfaces are better than one general interface
- **D**ependency Inversion Principle: Depend on abstractions, not concretions

### 2. Naming Conventions
- Use meaningful and descriptive names
- Classes: PascalCase (e.g., `CustomerOrder`)
- Methods and variables: camelCase (e.g., `calculateTotal()`)
- Constants: UPPER_SNAKE_CASE (e.g., `MAX_RETRY_COUNT`)

### 3. Method Design
- Keep methods short and focused (single responsibility)
- Use descriptive parameter names
- Minimize the number of parameters
- Return meaningful values or use void appropriately

### 4. Error Handling
- Use exceptions for exceptional conditions
- Create custom exception classes when needed
- Always clean up resources (use try-with-resources)
- Don't catch exceptions you can't handle

### 5. Documentation
- Write clear javadoc comments for public methods
- Explain complex algorithms and business logic
- Keep comments up-to-date with code changes
- Use meaningful variable and method names to reduce need for comments