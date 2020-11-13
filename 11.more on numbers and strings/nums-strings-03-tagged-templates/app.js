function randomIntBetween(min, max) {//RANDOM VALUE BETWEEN MIN AND MAX
  // min: 5, max: 10
  return Math.floor(Math.random() * (max - min + 1) + min); // 10.999999999999 => 10
}

console.log(randomIntBetween(1, 10));

'hello'.toUpperCase();//HELLO
'hello'.startsWith('he');//true
`${1}`;//"1"  //template literal
// `${getName()}`;//can call function. can have if else


function productDescription(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(productPrice);
  let priceCategory = 'pretty cheap regarding its price';
  if (productPrice > 20) {
    priceCategory = 'fairly priced';
  }
  // return `${strings[0]}${productName}${strings[1]}${priceCategory}${
  //   strings[2]
  // }`;
  return {name: productName, price: productPrice};
}

const prodName = 'JavaScript Course';
const prodPrice = 29.99;

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;//this will call productDescription and passes 3 arguments not 1. first arguments passes as string array
console.log(productOutput);



//---------------------------------
const userInput='testgmail.com';
userInput.includes('@');//false
userInput.includes('0');//true
//OR REGULAR EXP
// const regex=new RegExp('');
//or
const regex=/^\S+@\S+\.\S+$/;
regex.test(userInput);//false
regex.test('test@gmail.com');//true


const regex1=/hello/;
regex1.test('hello');//true
regex1.test('hi there, hello ...');//true
regex1.test('Hello');//false

const regex2=/(h|H)ello/;
regex2.test('hello');//true
regex2.test('Hello');//true
regex2.test('ksjfjfs  Hello dfgfdgfd');//true
regex2.test('ello');//false


const regex3=/.ello/;
regex3.test('hello');//true
regex3.test('ello');//false
regex3.test('djfjksdello');//true
regex3.exec('Jello');//[] array data of info.eg:index where it matched 
'hello'.match(regex3);//true

