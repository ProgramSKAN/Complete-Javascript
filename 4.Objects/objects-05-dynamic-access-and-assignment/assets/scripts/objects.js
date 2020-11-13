const movieList = document.getElementById('movie-list');

movieList.style['background-color'] = 'red';
movieList.style.display = 'block';

const userChosenKeyName = 'level';

let person = {
  'first name': 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  [userChosenKeyName]: '...',//dynamic key name
  greet: function() {
    alert('Hi there!');
  },
  1.5: 'hello'
  //-1.5: 'hello'//invalid
};

// ...

// person.age = 31;
delete person.age;
// person.age = undefined;
// person.age = null;
person.isAdmin = true;

const keyName = 'first name';

console.log(person[keyName]);//'Max'    //dynamically access values
// console.log(person.keyName);//undefined
console.log(person[1.5]);
console.log(person);//person object is ordered based same as how it is initialized but
const numbers={5:'hi',1:'true'};
console.log(numbers);//{1:'true',5:'hi'}//if the object is all based on numerics keys then it is ordered according to numbers 

