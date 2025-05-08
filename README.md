# Typescript Assignment of PH

Assignment Link: <https://github.com/Apollo-Level2-Web-Dev/B5-Assignment-1>

## Blog Post Q1: Differences Between Interfaces and Types in TypeScript

Both **types** and **interfaces** in TypeScript define custom types to enforce structure and type safety,
but they have distinct features, use cases, and behaviors.

### 1. Type Alias

A **type alias** is created using the `type` keyword and can represent any valid TypeScript type, including primitives, unions, intersections, objects, or complex types.

#### Syntax

```typescript
type AliasName = TypeDefinition;
```

#### **Examples**

```ts
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

## Blog Q2: Use of keyof keyword in TypeScript

The `keyof` keyword in TypeScript is used to **create a union of all property keys** of a given type. It is often used in conjunction with **generics**, **mapped types**, and **indexed access types** to provide powerful type-safe operations on objects.

---

### 🔍 **What it does:**

Given a type `T`, `keyof T` produces a union of string (or number) literal types that are the keys of `T`.

---

### ✅ **Example**

```ts
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

type PersonKeys = keyof Person; 
// Equivalent to: "name" | "age" | "isStudent"
```

Now you can use `PersonKeys` to restrict values to only valid keys of `Person`.

---

### ✅ **Use Case in a Generic Function**

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: "Alice", age: 25, isStudent: true };

const name = getProperty(person, "name"); // type: string
const age = getProperty(person, "age");   // type: number
// getProperty(person, "email"); // ❌ Error: "email" is not a key of person
```

---

### 💡 Summary

- `keyof` extracts the **property names** of a type as a union.
- Ensures **type safety** when accessing or manipulating object properties dynamically.

Would you like an example combining `keyof` with `typeof` or `Record`?
