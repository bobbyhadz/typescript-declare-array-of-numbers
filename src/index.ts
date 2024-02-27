export {};

// EXAMPLE 1 - Declare an Array of Numbers in TypeScript

// ✅ Array of numbers with inline declaration
const arr: number[] = [1, 2, 3];

// ✅ Empty array of numbers
const arr2: number[] = [];

// ✅ Using a type
type NumberArray = number[];

const arr3: NumberArray = [1, 2, 3];

// ---------------------------------------------------

// // EXAMPLE 2 - Letting TypeScript infer the type of numeric arrays

// // 👇️ const arr: number[]
// const arr = [1, 2, 3];

// ---------------------------------------------------

// // EXAMPLE 3 - Using an interface instead

// interface Person {
//   favNumbers: number[];
// }

// const arr: Person = {
//   favNumbers: [1, 2, 3],
// };

// ---------------------------------------------------

// // EXAMPLE 4 - Declaring numeric arrays containing exactly N elements

// const coords: [number, number] = [5, 10];

// ---------------------------------------------------

// // EXAMPLE 5 - Declaring read-only numeric arrays in TypeScript

// const coords: Readonly<number[]> = [5, 10];

// ---------------------------------------------------

// // EXAMPLE 6 - Define an Array of Strings in TypeScript

// // ✅ Array of strings with inline declaration
// const arr: string[] = ['bobby', 'hadz', 'com'];

// // ✅ Empty array of strings
// const arr2: string[] = [];

// // ✅ Using a type
// type Colors = string[];

// const arr3: Colors = ['bobby', 'hadz', 'com'];

// ---------------------------------------------------

// // EXAMPLE 7 - Letting TypeScript infer the type of string arrays

// // 👇️ const arr: string[]
// const arr = ['bobby', 'hadz', 'com'];

// ---------------------------------------------------

// // EXAMPLE 8 - Declaring an array containing N strings in TypeScript

// // 👇️ const arr: [string, string]
// const arr: [string, string] = ['bobby', 'hadz'];

// ---------------------------------------------------

// // EXAMPLE 9 - Declare an Array of Booleans in TypeScript

// // ✅ Array of booleans with an inline declaration
// const arr: boolean[] = [true, false, true];

// // ✅ Empty array of booleans
// const arr2: boolean[] = [];

// // ✅ Using a type
// type BooleanArray = boolean[];

// const arr3: BooleanArray = [true, false, true];

// ---------------------------------------------------

// // EXAMPLE 10 - Initialize a boolean array using a type assertion

// const arr = [] as boolean[];

// arr.push(false); // ✅ OK

// ---------------------------------------------------

// // EXAMPLE 11 - Declaring a boolean array of N elements in TypeScript

// const arr: [boolean, boolean] = [true, false];

// ---------------------------------------------------

// // EXAMPLE 12 - Declaring a read-only boolean array

// const arr: Readonly<boolean[]> = [true, false];
