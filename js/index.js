"use strict"

const array = [10, 20, 30, 40, 50, 60];
// -Create an array and loop through it, logging out each value using the basic loop syntax
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]); // Output: 10, 20, 30, 40, 50, 60
// }

// -Create an array and loop through it, logging out each value using the "for...of" syntax.
// const array = [10, 20, 30, 40, 50];
// for (const value of array) {
//   console.log(value); // Output: 10, 20, 30, 40, 50, 60
// }

// -Create an array and loop through it, logging out each value using the Array.forEach() method.
// array.forEach((value) => {
//   console.log(value); // Output: 10, 20, 30, 40, 50, 60
// });


// -Loop through an array using "for...of" and try assigning all the elements a new value. What happens?
// for (let value of array) { // I changed the const to let to be able to change the value.
//     value = value * 2; // Trying to assign new values
//     console.log(value); // Logs doubled values: 20, 40, 60, 80, 100, 120
// }
// console.log(array); // Original array remains unchanged: [10, 20, 30, 40, 50, 60]
// PD: The for...of loop works with the values of the array, not the array itself. Modifying value does not alter the original array.


// -Loop through an array using the Array.forEach() method and try assigning all the elements a new value. What happens?
// array.forEach((value, index, arr) => {
//     arr[index] = value * 2; // Modifies the original array
// });
// console.log(array); // Array is modified: [20, 40, 60, 80, 100, 120]
// PD: The forEach() method works with the array itself, so modifying the value will change the original array.


// -Research "for...in" loops. How do they differ from "for...of" loops?
// for (const index in array) {
//   array[index] = array[index] * 2; // Modifies the original array
// }
// console.log(array); // Array is modified: [20, 40, 60, 80, 100, 120]
// PD: The for...in loop works with the indexes of the array, not the values. Modifying the value using the index will change the original array.