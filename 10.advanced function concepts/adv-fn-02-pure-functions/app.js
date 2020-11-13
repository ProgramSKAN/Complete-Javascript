//PURE FUNCTION: same input always produces same output.Also it does not change anything outside the function(SIDE EFFECT)

function add(num1, num2) {//PURE FUNCTION
  return num1 + num2;
}

// function sendDataToServer() {}

console.log(add(1, 5)); // 6
console.log(add(12, 15)); // 27

function addRandom(num1) {//IMPURE FUNCTION
  return num1 + Math.random();
}

console.log(addRandom(5));

let previousResult = 0;

function addMoreNumbers(num1, num2) {//IMPURE FUNCTION because it changing somthing outside the function
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ['Sports', 'Cooking'];

function printHobbies(h) {//IMPURE FUNCTION
  h.push('NEW HOBBY');
  console.log(h);
}

printHobbies(hobbies);