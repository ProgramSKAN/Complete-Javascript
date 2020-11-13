// class AgedPerson {
//   printAge() {
//     console.log(this.age);
//   }
// }

// class Person extends AgedPerson {
//   name = 'Max';

//   constructor() {
//     super();
//     this.age = 30;
//   }

//   greet() {
//     console.log(
//       'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
//     );
//   }
// }
//OR  
function Person() {//constructor function same as class
  this.age = 30;
  this.name = 'Max';
  this.greet = function() {
    console.log(
      'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
    );
  };
}

Person.prototype = {//Javascript uses prototypical inheritance.every object has a __proto__.prototype will have only on functions.it is a fallback object.__proto__ also has __proto__(prototype chain).whaterver set to prototye is set to __proto__
  printAge() {
    console.log(this.age);
  }
};

console.dir(Person);

const p = new Person();//what new does is, it will create this={} and adds all in person function into that objecst and returns this.
p.greet();
p.printAge();
console.log(p.__proto__);//__ >double underscore or dunder
console.log(p.__proto__===Person.prototype);//true


const p = Person();
p.greet();//error


//--------------------------------------------------
const userA = new User();
userA.__proto__ === User.prototype; // true
userA.__proto__ === User.__proto__ // false
