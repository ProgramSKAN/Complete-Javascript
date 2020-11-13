const button = document.querySelector('button');

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

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector('div');

div.addEventListener('mouseenter', event => {
  console.log('CLICKED DIV');
  console.log(event);
});

button.addEventListener('mouseenter', event => {
  event.stopPropagation();
  console.log('CLICKED BUTTON');
  console.log(event);
});

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach(listItem => {       //THIS WORKS BUT HAVE LOT OF LISTENERS FOR EACH LI
//   listItem.addEventListener('click', event => {
//     event.target.classList.toggle('highlight');
//   });
// });

list.addEventListener('click', event => {   //THIS ALSO WORKS LIKE ABOVE BUT ONLY WITH ONE LISTENER, TAKING ADVANTAGE OF EVENT BUBLING
  // console.log(event.currentTarget);//entire ul
  // event.target.classList.toggle('highlight');//this works if <ul<li>hello</li></ul>  not <ul<li><h2>hello</h2><p>there</p></li></ul>, beacuse event.target is the lowest possible element like h2,p,so only those gets hilited not entire li.remedy use below
  event.target.closest('li').classList.toggle('highlight');
});
