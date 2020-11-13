const buttons = document.querySelectorAll('button');

// button.onclick = function() {

// };

const buttonClickHandler = event => {
  // event.target.disabled = true;
  console.log(event);
};

const anotherButtonClickHandler = () => {
  console.log('This was clicked!');
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

const boundFn = buttonClickHandler.bind(this);

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler);
// }, 2000);

// buttons.forEach(btn => {
//   btn.addEventListener('mouseenter', buttonClickHandler);
// });

// window.addEventListener('scroll', event => {
//   console.log(event);
// });

const form = document.querySelector('form');

form.addEventListener('submit', event => {//WHEN SUBMIT BUTTON IS CLICKED,PAGE RELOADS AND THE FORM DATA WILL SEND TO SERVER.BUT TO VALIDATE FORM DATA BEFORE SENDING TO SERVER, WE CAN PREVENT DEFAULT BEHAVIOUR
  event.preventDefault();//prevent default behaviour.PREVENTDEFAULT can be used in any event in javascript
  console.log(event);  
});