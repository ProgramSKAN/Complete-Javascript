const buttons = document.querySelectorAll('button');

// button.onclick = function() {

// };

const buttonClickHandler = event => {//EVERY EVENT WILL HAVE EVENT DATA WITH IT
  event.target.disabled = true;//TO DISABLE THE BUTTON ONCE CLICKED
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

buttons.forEach(btn => {
  btn.addEventListener('click', buttonClickHandler);
});



//--------REMOVING LISTENERS IS TRICKY--------------------
// button.addEventListener('click',()=>{
//   console.log('Hello');
// })
//setTimeout(() => {
// button.removeEventListener('click',()=>{//this won't remove above event listener because anaonymous function is different
//   console.log('Hello');
// }),2000}
//---------------------------
// button.addEventListener('click',buttonClickHandler);
// setTimeout(() => {
//   button.removeEventListener('click',buttonClickHandler);
// }//this will work since it pointed to same anonymous function object
//------------------------------
// button.addEventListener('click',buttonClickHandler.bind(this));
// setTimeout(() => {
//   button.removeEventListener('click',buttonClickHandler.bind(this));
// }//this wont work since it pointed to different this anonymous function object
//------------------------------
//const boundFn=buttonClickHandler.bind(this);
// button.addEventListener('click',boundFn);
// setTimeout(() => {
//   button.removeEventListener('click',boundFn);
// }//this will work since it pointed to same this anonymous function object
