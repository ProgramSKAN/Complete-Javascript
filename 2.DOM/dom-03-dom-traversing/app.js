const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);

//CHILD >direct child node or element. ex:<div><p>abcd<em>ok!</em></p></div>  : <p> is a child of <div>,<em> isn't
//DESCENDENT >direct or indirect child node or element. ex:<div><p>abcd<em>ok!</em></p></div>  : <p> is a descendent of <div>,so is <em> 
//PARENT >direct parent node or element. ex:<div><p>abcd<em>ok!</em></p></div>  : <div> is a parent of <p>,but not of <em> 
//ANCESTOR >direct or indirect parent node or element. ex:<div><p>abcd<em>ok!</em></p></div>  : <div> is a ancestor of <p> and of <em> 

//document.body
//      ^
//      |
//patrentNode,parentElement,closest()
//      |
//current node (<div>)  ---->previousSibling,previousElementSibling|nextSibling,nextElementSibling
//      |
//      `>
//childNodes,children,querySelector()  | firstChild,firstElementChild  | lastChild,lastElementChild

const li=document.querySelector('li');//retuns first li element
const ul=document.querySelector('ul');
console.dir(ul.children)//list of all li's in ul
ul.children[1]//second li inside ul
console.dir(ul.childNodes)//list of all textnodes(empty white spaces) and li's in ul

//ie:childnodes select all child nodes including white spaces.
//children selects all child element nodes
//---------------------
ul.querySelector('li:last-of-type');//gets last li //or
ul.firstChild;//text node(white space)
ul.firstElementChild;//first li elemnt in ul
ul.lastElementChild;//last li elemnt in ul
//-------------------------
document.documentElement.parentElement;//null
document.documentElement.parentNode;//document obj
const liFirst=document.querySelector('li');
liFirst.parentElement;//ul
liFirst.parentNode;//ul
liFirst.closest('body');//body //nearest ancestor element
liFirst.closest('header');//null
//--------------------------
const lilast = document.querySelector('li:last-of-type');
const ul=lilast.parentElement;//ul
ul.previousSibling;//text  node (line break)
ul.previousElementSibling;//<header>
ul.nextSibling;//text  node (line break)
ul.nextElementSibling;//<input>










