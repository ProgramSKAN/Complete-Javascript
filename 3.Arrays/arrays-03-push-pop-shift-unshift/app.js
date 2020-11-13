// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = Array(5, 2);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', {moreDetail: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);  
//   }
// }

// console.log(personalData[1]);

const hobbies = ['Sports', 'Cooking'];
hobbies.push('Reading');//['Sports', 'Cooking','Reading'] | retuns new length of the array
hobbies.unshift('Coding');//['Coding','Sports', 'Cooking','Reading'] | retuns new length of the array
const poppedValue = hobbies.pop();//poppedValue ='Reading'
hobbies.shift();
console.log(hobbies);

//unshift,shift is slower than push,pop

hobbies[1]='Coding';//replace value at index 1
hobbies[6]='Reading';//['Sports', 'Cooking',undefined,undefined,undefined,'Reading'];