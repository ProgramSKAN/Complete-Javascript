const h1 = document.getElementById('main-title');


h1.textContent = 'Some new title!';
h1.className='title';
h1.style.color = 'white';
h1.style.backgroundColor = 'red';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (Changed!)';

const body = document.body;

// const listItemElements = document.querySelectorAll('li');//it doest not reflect changes
const listItemElements = document.getElementsByTagName('li');//it gives live list which reflects changes to the selected element

for (const listItemEl of listItemElements) {
  console.dir(listItemEl);
}



//document.getElementById()  > returns single elemnt.reference to dom element is returned.different way of quering elements(by css selector, by id)

//document.getElementsByTagName,document.querySelectorAll  >return collections of elements(array like objects):node list ..different way of quering elements(by css selector,by tag name, by id)
//querySelectorAll() returns a non-live nodeList, getXByY() return live nodeLists



//NODES vs ELEMENTS
//Nodes > The object that makeup the dom.HTML tags are elemnt nodes(or just elements).Text creates "text nodes".Attribute creates "attribute nodes".
//Elements >they are one type of nodes.special properties and methods to interact with elements.selected using diff ways using javascript.can be created or removed via javascript


const h1ele = document.getElementById('main-title');
console.dir(h1ele);
console.dir(document.getElementsByClassName('list-item'));//list of all elements with that class name
console.dir(document.querySelector('.list-item'));//'.' for class.'#' for id. this return first matching element
console.dir(document.querySelectorAll('.list-item'));//this returns list of all matching elements
console.dir(document.querySelector('ul li:first-of-type'));//valid. retuns first list item
console.dir(document.querySelector('ul li:last-of-type'));//valid. retuns last list item

const ul=document.querySelector('ul');
ul.querySelector('li');//>retuns first li

//document.querySelector(<CSS selector>);
//Takes any CSS selector (e.g. '#some-id', '.some-class' or 'div p.some-class')

// document.body => Selects the <body> element node.
// document.head => Selects the <head> element node.
// document.documentElement => Selects the <html> element node


//ATTRIBUTES vs PROPERTIES
//<input id="input1" class="input-default" value="default text"></input>
const input=document.getElementsByTagName('input');
input.id='abc'//mapping live sync between js and html
input.className='abc';//different name but live sync
//if value entered in textbox, it is changed in js also.not other way around
input.value='new text';//this wont change html value but new text shown.mapping 1-way live sync from html to js
//to change html value if we change js value> use setattribute
input.setAttribute('value','some other text');
input.value=input.getAttribute('value');


