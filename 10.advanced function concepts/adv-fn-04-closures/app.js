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

function createTaxCalculator(tax) {//LEXICAL ENVIRINMENT 
  function calculateTax(amount) {//CLOSURE//ANOTHER LEXICAL ENVIRINMENT
    console.log(multiplier);
    return amount * tax * multiplier;
  }

  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);//AFTER THE OUTER FUNCTION THE VARIBALE STILL NOT THROWED AWAY BECAUSE IT STILL MIGHT USE IN INNER FUNCTION.THEREFORE INNER FUNCTION CLOSED OVER THE SURROUNDING VARIABLES AND STORES THEIR VALUES

// multiplier = 1.2;//this will be considered not 1.1

console.log(calculateVatAmount(100));//EVERY FUNCTION CLOSES OVER THE SURROUNDING ENVIRONMENT.ie.it registers the surrounding enviroment and variables registered there and it memorises the values of these variables
console.log(calculateVatAmount(200));//

//EVERY FUNCTION IN JAVASCRIPT IS A CLOSURE