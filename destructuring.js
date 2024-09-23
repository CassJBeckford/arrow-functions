/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
let [john, mary, joe] = ages
console.log(john, mary, joe); // 30, 26, 27;

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let {mike, jill, alicia} = jobs
console.log(mike, jill, alicia); // designer developer accountant 

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary); // english french

let [, ,maryNative, marySecondary] = languages
console.log(maryNative, marySecondary)

// Using rest parameter syntax // spanish german
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite); // apple
console.log(secondFavorite); // orange
console.log(others); // ['banana', 'peach', 'cherry']