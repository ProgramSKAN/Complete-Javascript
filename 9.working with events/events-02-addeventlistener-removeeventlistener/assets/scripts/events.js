const button = document.querySelector('button');

// button.onclick = function() {

// };

const buttonClickHandler = () => {
  alert('Button was clicked!');
};

const anotherButtonClickHandler = () => {
  console.log('This was clicked!');
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;//if 2 functions are pointed for button click (1st) above won't run

const boundFn = buttonClickHandler.bind(this);

button.addEventListener('click', boundFn);//prefer//can allow multiple event listeners and remove listeners

setTimeout(() => {
  button.removeEventListener('click', boundFn);
}, 2000);
