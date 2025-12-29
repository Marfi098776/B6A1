# What is the use of the keyof keyword in TypeScript? Provide an example.

The keyof keyword in typescript refers that the set of valid property names of this type. It should not be values or string in general, only the keys that actually exist on an object type.
*example:* 

```ts
type person = {
    name: string;
    age: number;
    isActive: boolean;
};

type personKeys = keyof Person;
// "name" | "age" | "isActive"
```

in this case personKeys becomes a union of string literal, not just string.For instance Keyof turns a type's structure into a set of allowed options. 

# Explain the difference between any, unknown, and never types in TypeScript.

let's explain these separately
- *any*: this is out of type safety. we can call or access  anything.here type checking are disable.

- *unknown*: this is the safe version of *any*.It prefers that it don't know the type yet but we must have to prove it before using it. Otherwise it return error.So we must narrow the type first.

- *never*: It represents values that cannot exit.We can use it when a function never returns, doing exhaustive checks.