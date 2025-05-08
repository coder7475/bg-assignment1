# Typescript Assignment of PH

Assignment Link: <https://github.com/Apollo-Level2-Web-Dev/B5-Assignment-1>

## Blog Post on Q1: Differences Between Interfaces and Types in TypeScript

### Table of Contents

- [Introduction](#introduction)
- [Type Alias](#type-alias)
- [Interface](#interface)
- [Key Differences](#key-differences)
- [When to Use Which?](#when-to-use-which)
- [Practical Example](#practical-example)
- [Conclusion](#conclusion)

### Introduction

TypeScript: Types vs. Interfaces - Key Differences and When to Use Them

In TypeScript, types (type aliases) and interfaces are powerful tools for defining custom data structures and enforcing type safety. While they often serve similar purposes, they have distinct features, use cases, and behaviors that make them suited for different scenarios. This article breaks down their differences and provides guidance on when to use each.

## Blog Post: Differences Between Interfaces and Types in TypeScript

TypeScript: Types vs. Interfaces - Key Differences and When to Use Them

### Type Alias

A type alias is a way to create a new name for any TypeScript type using the `type` keyword. It is highly versatile and can represent a wide range of types, including primitives, unions, intersections, objects, tuples, and more.

#### Syntax

```typescript
type AliasName = TypeDefinition;
```

#### Examples

```typescript
// Primitive
type ID = string;

// Union
type Status = "success" | "error" | "loading";

// Object
type Point = {
  x: number;
  y: number;
};

// Intersection
type User = { name: string };
type Permissions = { role: string };
type AdminUser = User & Permissions;

// Tuple
type Coordinates = [number, number];
```

#### Key Characteristics

- **Versatility**: Can define primitives, unions, intersections, tuples, functions, or generics, making it suitable for complex type logic.
- **No Declaration Merging**: Once defined, a type alias cannot be reopened to add new properties. However, you can create new types using intersections (`&`).
- **Immutable**: Type aliases are fixed after declaration, requiring a new type for extensions.
- **Use Case**: Ideal for defining non-object types, complex type combinations, or one-off type definitions where extensibility is not needed.

#### Example Use Case

When defining a variable that can hold multiple types, such as an API response:

```typescript
type ApiAn interface is a TypeScript construct designed to define the shape of objects, declared using the `interface` keyword. It is particularly well-suited for object-oriented programming and scenarios requiring extensibility.

#### Syntax
```typescript
interface InterfaceName {
  property: Type;
}
```

#### Examples

```typescript
// Basic object shape
interface Point {
  x: number;
  y: number;
}

// Extending an interface
interface User {
  name: string;
}
interface Admin extends User {
  role: string;
}

// Declaration merging
interface Product {
  id: number;
}
interface Product {
  name: string;
}
// Product now has both id and name
```

#### Key Characteristics

- **Object-Focused**: Primarily used to define object structures, though it can include methods or index signatures.
- **Declaration Merging**: Interfaces can be reopened to add new properties, which is useful for extending existing types (e.g., in third-party libraries).
- **Extensibility**: Supports inheritance via the `extends` keyword, allowing interfaces to build upon others.
- **Class Implementation**: Interfaces can be implemented by classes, making them ideal for object-oriented patterns.
- **Use Case**: Best for defining consistent object shapes, especially in reusable APIs, libraries, or class-based codebases.

#### Example Use Case

When defining a class that must adhere to a specific structure:

```typescript
interface Vehicle {
  start(): void;
  stop(): void;
}

class Car implements Vehicle {
  sta### Key Differences

| Feature                 | Type Alias                                       | Interface                                  |
| ----------------------- | ------------------------------------------------ | ------------------------------------------ |
| Syntax                  | `type Name = Type;`                              | `interface Name { ... }`                   |
| Type Flexibility        | Can define primitives, unions, intersections, etc. | Primarily for object shapes.             |
| Declaration Merging     | Not supported.                                Use Type Aliases when:

- Defining non-object types (e.g., primitives, unions, tuples).
- Working with complex type logic (e.g., intersections, mapped types).
- Creating one-off type definitions without the need for extensibility.

Example:

```typescript
type ID = string | number;
```

Use Interfaces when:

- Defining object shapes for APIs, libraries, or class implementations.
- Needing declaration merging to extend existing types (e.g., third-party libraries).
- Working in object-oriented programming with classes.

Example:

```typescript
interface User { name: string; }
```

### Practical Example

Suppose you're building a TypeScript application with an API and a class-based model:

```typescript
// Use type for a union type
type FetchResult = { data: string } | { error: string };

// Use interface for a class-implemented structure
interface Employee {
  id: number;
  name: string;
  work(): void;
}

class Developer implements Employee {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  work() {
    console.log(`${this.name} is coding`);
  }
}
```

In this example, a type is used for the flexible `FetchResult` (which could be a success or error response), while an interface defines the `Employee` structure for class implementation.

### Conclusion

Both types and interfaces are essential for writing robust TypeScript code, but they serve different purposes. Use types for flexibility and complex type definitions, and interfaces for object-oriented programming and extensible object shapes. By understanding their differences, you can choose the right tool for your specific use case, improving code clarity and maintainability.

For most simple object shapes, either can work, but aligning with their strengths ensures your codebase remains scalable and intuitive.
