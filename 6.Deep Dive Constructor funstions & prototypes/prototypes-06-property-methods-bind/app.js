class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person {
  name = 'Max';

  constructor() {
    // super();
    this.age = 30;
    // this.greet = function() { ... }//OR//LIKE NORMAL FUNCTION INSIDE CONSTRUNCTOR FUNCTION which is created for every object creation.not stays in __proto__
  }
  //greet=function() {}//LIKE NORMAL FUNCTION INSIDE CONSTRUNCTOR FUNCTION
  //OR
  // greet = () => {//LIKE NORMAL FUNCTION INSIDE CONSTRUNCTOR FUNCTION
  //   console.log(
  //     'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
  //   );
  // };//PROPERTY ARROW FUNCTION....|GOOD TO USE ARROW FUNCTION THAN BELOW TO BIND 'this' CORRECTLY

  greet() {//METHOD SHORTHAND....
    console.log(
      'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
    );
  }
}

// function Person() {
//   this.age = 30;
//   this.name = 'Max';
//   // this.greet = function() { ... };
// }

// Person.prototype.greet = function() {//BEHAVED LIKE HOW METHODS IN CLASS BEHAVE
//   console.log(
//     'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
//   );
// };

// Person.describe = function() {
//   console.log('Creating persons...');
// }

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   }
// };

// Person.prototype.printAge = function() {
//   console.log(this.age);
// };

// console.dir(Person);

// const p = new Person();
// p.greet();
// p.printAge();
// console.log(p.length);
// console.log(p.toString());
// const p2 = new p.__proto__.constructor();
// console.dir(Object.prototype.__proto__);

const p = new Person();
const p2 = new Person();
p.greet();
console.log(p);

const button = document.getElementById('btn');
//button.addEventListener('click', p.greet);//WORKS WITH ARROW FUNCTION INSIDE CLASS where 'this' is binded correctly
button.addEventListener('click', p.greet.bind(p));//WORKS WITH greet() also

















//-------------------------------------------------------
//------------ METHOD SHORTHAND------------
// class person{//GOOD PERFORMACE
//   greet(){
//     console.log('Hello');
//   }
// }
// Assigned to person's prototype and hence stored across all instances(not recreated per instance)
// 
//------------ PROPERTY FUNCTION----------------
// class person{
//   greet=function(){...}
//   constructor(){
//    this.greet2.function(){...}
//   }
// }
// Assigned to individual instances and hence recreated per object.this refers to "what called the method"
// 
// 
// 
//------------ PROPERTY ARROW FUNCTION------------
// class person{
//   greet=()=>{...}
//   constructor(){
//    this.greet2=()=>{...}
//   }
// }
// Assigned to individual instances and hence recreated per object.this always refers to the instance
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
