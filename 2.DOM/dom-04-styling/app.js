document.body.firstElementChild;//header
const ul = document.body.firstElementChild.nextElementSibling;//section not ul
const firstLi = ul.firstElementChild;//ul

console.log(firstLi);

const section = document.querySelector('section');
const button = document.querySelector('button');

// section.style.backgroundColor = 'blue';
section.className = 'red-bg';

button.addEventListener('click', () => {
  // if (section.className === 'red-bg visible') {
  //   section.className = 'red-bg invisible';
  // } else {
  //   section.className = 'red-bg visible';
  // }

  // section.classList.toggle('visible');//contains,add,remove,replace,toggle
  section.classList.toggle('invisible');
});


//STYLING DOM
//1.VIA STYLE PROPERTY
//2.VIA CLASSNAME
//3.VIA CLASSLIST OBJ
