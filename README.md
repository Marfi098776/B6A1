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