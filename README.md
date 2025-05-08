# Typescript Assignment of PH

1. What are some differences between interfaces and types in TypeScript?

## Blog Post: Differences Between Interfaces and Types in TypeScript

Both **types** and **interfaces** in TypeScript define custom types to enforce structure and type safety,
but they have distinct features, use cases, and behaviors.

### 1. Type Alias

A **type alias** is created using the `type` keyword and can represent any valid TypeScript type, including primitives, unions, intersections, objects, or complex types.

#### Syntax

```typescript
type AliasName = TypeDefinition;
```

#### **Examples**

```typescript
// Primitive
type ID = number;

// Union
type Status = "success" | "error";

// Object
type Point = { x: number; y: number };

// Intersection
type User = { name: string };
type Admin = { role: string };
type AdminUser = User & Admin;
```

#### Key Characteristics

- **Flexible**: Can represent primitives, unions, intersections, tuples, functions, or generics.
- **No Declaration Merging**: Cannot be reopened to add new properties after definition.
- **Immutable**: Once defined, the type alias is fixed unless redefined.
- **Use Case**: Ideal for complex types, unions, or non-object shapes.

### 2. Interface

An **interface** is used to define the shape of an object and is created with the `interface` keyword. It is primarily designed for object types but can be extended or merged.

#### Syntax

```typescript
interface InterfaceName {
    property: Type;
}
```

#### **Examples**

```typescript
interface Point {
    x: number;
    y: number;
}

interface User {
    name: string;
}

// Extending an interface
interface Admin extends User {
    role: string;
}
```

#### Key Characteristics

- **Object-Focused**: Primarily used to define object shapes.
- **Declaration Merging**: Can be reopened to add new properties in different parts of the code.
- **Extensible**: Supports inheritance via `extends` for combining interfaces.
- **Use Case**: Best for defining consistent object structures, especially in libraries or extensible codebases.
