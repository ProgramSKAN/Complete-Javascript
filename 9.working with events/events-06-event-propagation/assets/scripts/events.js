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

// div.addEventListener('click', event => {
//   console.log('CLICKED DIV');//SENCOND because by default it will execute on BUBBLING phase
//   console.log(event);
// });

// button.addEventListener('click', event => {
//   console.log('CLICKED BUTTON');//FIRST
//   console.log(event);
// });
//------------
// div.addEventListener('click', event => {
//   console.log('CLICKED DIV');//FIRST  because now it will execute on CAPURING phase
//   console.log(event);
// },true);//true> CAPTURING PHASE

// button.addEventListener('click', event => {
//   console.log('CLICKED BUTTON');//SECOND
//   console.log(event);
// });
//------------
div.addEventListener('click', event => {//THIS EVENT WIL NOT EXECUTE AS THE CLICK EVENT STOPPED PROPAGATION ON THE BUTTON BELOW
  console.log('CLICKED DIV');
  console.log(event);
});

button.addEventListener('click', event => {
  event.stopPropagation();//ANY OTHER LISTNERS FOR THE SAME TYPE OF EVENT ON SOME ANCESTOR ELEMENTS WILL NOT TRIGGER THEIR EVENT LISTENERS FOR THIS EVENT
  //event.stopImmediatePropagation();//if there are multiple event listeners on same button element then after the first event listener, the other listeners on the same element wont run
  console.log('CLICKED BUTTON');//SECOND
  console.log(event);
});


//------------------BUBBLIND AND CAPTURING EVENTS-------------------------
//events in javascript runs in 2 phases. 1.capturing,2.bubbling
eg:
<section>
  <div>
    <button>click</button>
  </div>
</section>
//if button is clicked, browser runs through 2 phases where it checks for listeners to that event.
//first it runs through capturing phase, then bubbling phase
//capturing phase goes from outside to inside. ie,click event on nested button cannot be just listened with the event listeners on that button but also theevent listeners on that section.so browser duning caputing phase checks the capturing event listener then it will run the function before any event on button.
//capturing phase goes from inside to outside. ie,button event runs first then section event runs second