// let age: number =23;
// if (age < 50)
//  age += 10;
// console.log(age);

// // Types

// let sales = 123_456_789; // Number
// let course = "TypeScript"; // String
// let is_published = true; // boolean
// let level; // here level variable type is not declared so ts automatically considers it as 'any'

// function render(document: any) {
//   // this will loose the benefit of using ts
//   console.log(document);
// }

// // Array
// let number = [1, 2, 3, 4, 5, true, "7", 8];
// let number1: number[] = [1, 2, 3, 4, 5];
// let num: number[] =[];
// num.forEach(n=>n.toFixed(2));

// // Tuples
// let user: [number, string] = [1, "joy"];
// // get all the options as per type
// user[0].toFixed(2);
// user[1].toUpperCase();

// //enum
// // const small = 1;
// // const medium = 2;
// // const large = 3;
// // PascalCase
// const enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }
// let mySize: Size = Size.Medium;
// console.log(mySize);

// // Function
// function calculateTax(income: number, taxYear = 2022): number {
//   if (taxYear < 2022) return income * 1.2;

//   return income * 1.3;
// }
// console.log(calculateTax(10_000));
