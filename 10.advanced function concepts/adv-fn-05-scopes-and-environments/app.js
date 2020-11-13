function add(num1, num2) {
  return num1 + num2;
}

// function sendDataToServer() {}

console.log(add(1, 5)); // 6
console.log(add(12, 15)); // 27

function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(5));

let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ['Sports', 'Cooking'];

function printHobbies(h) {
  h.push('NEW HOBBY');
  console.log(h);
}

printHobbies(hobbies);

let multiplier = 1.1;

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    console.log(multiplier);
    return amount * tax * multiplier;
  }

  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

// multiplier = 1.2;

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));


//-----CLOSURE PRACTICE------
// let userName = 'Max';
// function greetUser() {
//   // let name = 'Anna';
//   console.log('Hi ' + userName);//Hi max
// }
//--------
// let userName = 'Max';
// function greetUser() {//username inside function is not part of functions environment,so function does close over username variable and would store username variable.if that variable then changes, function reflects that change
//   console.log('Hi ' + userName);//Hi Manuel//is access the variable not copies the value
// }
// userName = 'Manuel';
//------
// let userName = 'Max';
// function greetUser() {//name is part of the functions lexical environment but it point to outside the environment where it gets the latest value from
//   let name = userName;
//   console.log('Hi ' + name);//Hi manual
// }
// userName = 'Manuel';
//------
let userName = 'Max';
function greetUser() {//name created as a variable inside function.inner variable wins over the outer.ie.SHADOWING
  let name = 'Anna';//if this is not there, then  "Hi Jack"
  console.log('Hi ' + name);//Hi Anna//It check both inner and outer variable name.if inner exists then it will consider inner else outer
}
let name='Jack';
userName = 'Manuel';

greetUser();



//CLOSURE > Function remember the surrunding variables




//-------------------------------------------------------------
// IIFE stands for "Immediately Invoked Function Expression"
// (function() {
//   var age = 30;
//   console.log(age); // 30
// })()

// console.log(age); // Error: "age is not defined"
// What's that?

// We see a function expression which calls itself (please note the () right after the function).

// It's NOT a function declaration because it's wrapped in () - that happens on purpose since you can't immediately execute function declarations.

// But why would you write some code?

// Please note that the snippet uses var, NOT let or const. Remember that var does NOT use block scope but only differ between global and function scope.

// As a consequence, it was hard to control where variables were available - variables outside of function always were available globally. Well, IIFEs solve that problem since the script (or parts of it) essentially are wrapped in a function => Function scope is used.

// Nowadays, this is not really required anymore. With let and const we got block scope and if you want to restrict where variables are available (outside of functions, if statements, for loops etc - where you automatically have scoped variables since these structures create blocks), you can simply wrap the code that should have scoped variables with {}.

// {
//     const age = 30;
//     console.log(age); // 30
// }
 
// console.log(age); // Error: "age is not defined"
// Not something you see too often but something that is possible.