const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

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

  // section.classList.toggle('visible');
  section.classList.toggle('invisible');
});


//CREATING | INSERTING ELEMENTS
//1.HTMLString :: innerHtml,innerAdjacentHTML() | Add(render) HTML string,Add(render) HTML string in specific position
//2.createElement() :: appendChild(),append(),prepend(),before(),after(),insertBefore(),replaceChild(),replaceWith() | Append new DOM element/node,insert new DOM element/node in specific position,Replace existing DOM element
section.textContent;//all text inside the section
// section.textContent='new section text!'//replaces the section text
// section.innerHTML='<h2>Hello</h2>';//replaces existing html with this new element
const list=document.querySelector('ul');
//list.innerHTML=list.innerHTML+'<li>item 4</li>';//append new list item//not good for performance since it rerenders all list items
//or

const div=document.querySelector('div');
div.insertAdjacentHTML('beforeend','<p>Some new element</p>');//afterbegin.,afterend,beforebegin,beforeend  //adding innerHTML is not good because accessing or add listeners later is cumbersome

const newLi=document.createElement('li');
list.appendChild(newLi);//appends element node at the end of list
newLi.textContent='item5';
newLi.style.backgroundColor='blue';


list.append('some text');//appends text node or newli

list.prepend(newLi);//prpends li at the begining of the list

const newLi2=document.createElement('li');
newLi.textContent='item6';
list.lastElementChild.before(newLi2);//add list item one before the last item
list.lastElementChild.after(newLi2);//add list item after the last item
list.firstElementChild.replaceWith(newLi2);//replace first list item with this


const secondLi=list.children[1];
const newLi3=document.createElement('li');
newLi3.textContent='item newli3';
//secondLi.after(newLi3);//safari wont support
//or
secondLi.insertAdjacentElement('afterend',newLi3);//inserted after second element

//-------------CLONE DOM NODES-----------------------
const newLi4=document.createElement('li');
const newLi5=newLi4.cloneNode(true);//true> with child nodes
list.append(newLi4,newLi5);//both are appended at the end of the list

//-------LIVE NODE LISTS vs STATIC NODE LISTS------------
const list10=document.querySelector('ul');
const listItems10=list.querySelectorAll('li');//returns list of li's(Node List) >it is just a snapshot
const listItems20=list.getElementsByTagName('li');//returns list of li's(HTML collenction) >it is live
const newLi10=document.createElement('li');
newLi10.textContent='item newli10';
list10.append(newLi10);//this will not be reflected in Nodelist listItems10  =>non live  | but reflected in HTMLCollection listItems20  =>Live list


//------REMOVE ELEMENTS------------
const list7=document.querySelector('ul');
// list7.remove();//IE wont support 
//or
list7.parentElement.removeChild(list7);// there is replace child also




