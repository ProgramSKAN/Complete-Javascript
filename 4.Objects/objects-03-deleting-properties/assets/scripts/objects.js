let person = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  greet: function() {
    alert('Hi there!');
  }
};

// ...

// person.age = 31;
delete person.age;//preferred//or  //remove property
// person.age = undefined;   //remove property
// person.age = null;  //age property still exists
person.isAdmin = true;

console.log(person);