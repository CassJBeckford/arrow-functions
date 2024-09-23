/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("second array:", arr2); // second array: [1, 2, 3, 4]
console.log("first array:", arr1);  // first array: [1, 2, 3, 4]

// Copying an array
let arr3 = [4, 5, 6];
let arr4 = [...arr3];

arr4.push(7);
console.log("third array:", arr3); // third array: [4, 5, 6]
console.log("fourth array:", arr4); // fourth array: [4, 5, 6, 7]

// Copying an object
let obj1 = {a: 1, b: 2, c: 3};
let obj2 = { ...obj1, d: 4};
let obj3 = { ...obj1, b: 5}
console.log("first object:", obj1); // first object: {a: 1, b: 2, c: 3}
console.log("second object:", obj2); // second object: {a: 1, b: 2, c: 3, d: 4}
console.log("third object:", obj3); // third object: {a: 1, b: 5, c: 3}

// Copying only part of an array/object
let arr5 = [...arr1, { ...obj1 }, ...arr3, "x", "y", "z"]
console.log(arr5); // [1, 2, 3, 4, {a: 1, b: 2, c: 3}, 4, 5, 6, 'x', 'y', 'z']