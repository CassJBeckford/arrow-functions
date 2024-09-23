/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    return a + b;
}   
let sum = addTwoNumbers(3, 5);
console.log(sum); //8

// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    return a + b
}
let sum = addTwoNumber(3, 5);
console.log(sum); //8

// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(6, 4)
console.log(sum2) //10

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello there!!'); //Hello there!!

const sayHello = () => console.log('hello');
sayHello(); //hello

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
    This is a multiline string!
    </p>`
)
console.log(returnMultipleLines())
/**
*  <p>
*  This is a multiline string!
*  </p>
*/
