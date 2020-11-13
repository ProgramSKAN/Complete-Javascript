const numbers = [1, 2, 3];
console.log(numbers);

// const moreNumbers = Array(5, 2);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);//nodelist of li's

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);//Array of li's



//---------CREATE ARRAYS----------
const arr=[1];
const arr=['Hi'];  
const arr=Array.of(1);

const arr=Array(1);
const arr=Array('Hi');
const arr=Array.of('Hi');
const arr=Array.from(1);

const arr=new Array(1,2);//[1,2]
const arr=new Array(5);//[empty,empty,empty,empty,empty] ,length=5
//or//const arr=Array(5);
const arr=Array.of(1,2);//[1,2]
const arr=Array.from(1,2);//error
const arr=Array.from([1,2]);//[1,2]
const arr=Array.from([1,2]);//[1,2]
const arr=Array.from('Hi!');//["H","i","!"]





