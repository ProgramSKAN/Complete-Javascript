const startGameBtn = document.getElementById('start-game-btn');


// function startGame(){} //function declaration > hoisted to top, can be called anywhere in file (ie, also after its used)
// const start = function startGame() {}  //function expression >hoisted to top but not initialized/defined.can't be declared anywhere in the file (ie, not after its used)
const start = function() {
  console.log('Game is starting...');
};

// const person = {
//   name: 'Max',
//   greet: function greet() {
//     console.log('Hello there!');
//   }
// };

// person.greet();

// console.dir(startGame);

startGameBtn.addEventListener('click', start);
