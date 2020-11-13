//----------------COMPARISONS---------------
//Objects
const person1={name:'abcd'}
const person2={name:'abcd'}
person1==person2//false
person1===person2//false.beacuse objects are reference types.so person1,2 are references/address not values
person1.name===person2.name//true
const person3=person1
person3===person1//true


//similary with Arrays
const hobbies=['sports','trekking']
const moreHobbies=['sports','trekking']
hobbies==moreHobbies//false
hobbies===moreHobbies//false

//----------OPERATOR PRECEDENCE------------
//like BODMAS but not exactly, there are many operators.check mdn website

//-----------TRUE / FALSE----------------------
1===1//true
1==2//false
'a'==='a'//true

//------------TRUThY/FALSY-----------------------
0//false
//any other number including negative numbers//true
21//true
-5//tue
""//false
// any other string//true
"abcd"//true
// all objects and arrays including empty//true
const arr=[]
const obj={}
const arr1=[1,'a']
const obj1={name:'skan'}
arr//true
obj//true
arr1//true
obj1//true
undefined//false
NaN//false
null//false

//--------------------------------------
parseInt('1')//convert string to int
parseInt('abcd')//NaN
isNaN('1')//true//to check entered value is a num or not

//--------------Keep const as Capitals(preferred)-------------
const INITIAL_VALUE=10;

//--------------TERNARY OPERATER(inline if)-------------
const isLogin=true;
const userName=isLogin?'Skan':null;

//-------BOOLEAN COERCION VIA NOT/DOUBLE BANG------------------
!!""//false
!!1//true

//----------DEFAULT ASSIGNMENT-----------
const userName=someinput||'Skan'//returns someinput if not falsy,'Skan' otherwise
const userName=isLoggedIn&&'Skan'//'Skan' is set if isLoggedIn is true, false otherwise

const userInput='';
const isValidInput=userInput?true:false//OR
const isValidInput=!!userInput;//ie, '' is falsy.so keep original bool value use !!

const userName=userInput||'Jack'//Jack

const realUserInput='mike'
const realUserName=realUserInput||'Jack'//mike

let isLoggedIn=true;
const shoppingCart=isLoggedIn&&['Books']//['Books']

false && ['abcd']//false
null&&['abcd']//null
true && ""//""

//--------------------------LOOPS------------------------------------------------
//for LOOP to execute code for certain amount of times
for(let i=0;i<5;i++){
    console.log(i);
}
for(;;){}//infinite loop
//for-of LOOP to execute for every element in an array
const array=['car','bike','plane','train']
for(const el of array){
    console.log(el);
}
//for-in LOOP to execute every key in an object
const obj={name:'jack',age:20}
for(const key in obj){
    console.log(key);
    console.log(obj[key])
}
//while LOOP
while(true){

}

//------------LABLED STATEMENTS------------------------------
//---break;continue;  => breaks/continues nearest loop execution. -------------
let j=3;
outerWhile:do{
    console.log('Outer',j)
    innerFor:for(let k=0;k<5;k++){
        if(k=3){
            //break;//breaks only inner loop
            break outerWhile;//break outer loop
            //can also be used with contunue outerWhile;(dangerours > inifinte loop)
        }
    console.log('Inner',k);
    }
}while(j<3);



//---------------TRY-CATCH------------------------
let num=0;
try{
    if(num=0){
        throw {message:'number cannot be 0'}
    }
    let value=num;
}catch(error){
    console.log(error);
    alert('errror occured',error);
}finally{
    //release memory
}

//-------------------------ECMASCRIPT-------------------
//javascript is a specific version of ecmascript by ecma international body
//ES5(older)          |            ES6(newer) Modern Javascript

//-------------------VAR(old)/LET(new)/CONST(new)-------------------------------
//var => allow us to create variables in function and global scope.let does not really uses function and global scope.
//let => it uses block scope.some for const.let wont split data outside the block;  
//prefer to use let,const

let name='jack';
let name='mike';//invalid since already decalred

var name1='jack';
var name1='mike';//valid, overrides above

//----
let user='admin'
if(user='admin'){
    let access=['home','cart']//blocked scope
}
console.log(user);
console.log(access);//invalid
//----
var user='admin'
if(user='admin'){
    var access=['home','cart']//global scope
}
console.log(user);
console.log(access);//valid
//----
let sport='football'
function getSport(){
    let location='usa';
    let sport='baseball';//variable shadowing
    console.log(sport,location);//baseball,usa
}
console.log(location);//invaid
console.log(sport);//football

//---------HOISTING---------------------
console.log(userName);//undefined. no error because javascript at beginning loads all functions and var (declaration and assigned to undefined) and let (just declare) and registers before code execution
var userName='Jack';

console.log(user);//error
let user='mike';

//-------STRICT MODE-----------------------
/*
//without strict mode
myname='jack';//by default var
console.log(myname);//jack

var undefined=5;//valid

//with strict mode
'use strict';
myname='jack';
console.log(myname);//error

var undefined=5;//error
*/

//-------------------JAVASCRIPT ENGINES------------------------
//chrome v8 engine with turbofan compiler
//firefox spider monkey
//javascript code>Javascript parser & execution(interpreter=>byte code=>compiler (JIT))>machine code(it has access to broeser APIs like commucation bridges between javascript and C++ logic built into the browser)


//inside JS Engine
// HEAP: Memory allocation => stores data in your system memory and manages access to it.ex:functions are stored in heap
// STACK: Execution context => manages program flow(function calls and communication).ex:execution starts and push to the stack if program need that function and pop function out it it doesnt need.top of the stack is what currently executing.
                                //whenever a function returns it is poped out of the stack but stays in heap. 
                                //call stack can be viewed in dev tools>sources>call stack
                                //even if the call stack is empty, we can interact(clicks) with html.that is done by "EVENT LOOP"
//EVENT LOOP


//--------------PRIMITIVE VALUES AND REFERENCE TYPES--------------------------------
//PRIMITIVE VALUES => strings,numbers,booleans,null,undefined,symbol. they stored in memory(normally on stack).variables store value itself.
                    //coping a variable(=assign to diff variable) copies the value
let name2='jack';
let anothername2=name2;//anothername2 has a copy of 'jack'
anothername2;//jack
name2='mike';
anothername2;//jack

//REFERENCE TYPES => all other objects(more expensive to create).they stroed in heap, variables stores a pointer(address) to location in memory.
                    ////coping a variable(=assign to diff variable) copies the pointer/reference
let hobbies=['sports'];
let newHobbies=hobbies;//copies the ref or address not value
hobbies;//['sports']
newHobbies;//['sports']
hobbies.push('trekking');
hobbies;//['sports','trekking']
newHobbies;//['sports','trekking']
//OR
let person={age:21};
let anotherPerson=person;
anotherPerson.age=22;
person;//{age:22}
let yetAnotherPerson={...person};//... pulls all keyvalue pairs and adds as new keyvalue pairs.so its a new object.
yetAnotherPerson;//{age:22}
person.age=23;
yetAnotherPerson;//{age:22}
//OR
let hobbies1=['sports'];
let moreHobbies=[...hobbies];//new object
hobbies1.push('trekking');
hobbies1;//['sports','trekking']
moreHobbies;//['sports']

//--------------CONST----------
const hobbieArr=['sports'];
hobbieArr.push('trekking');//we can push values into hobbieArr eventhough it is const.because [] is ref type.so we push new value then array value changes but not the address.
hobbieArr;//['sports','trekking']

hobbieArr=['sports','trek'];//error because we creating new array for const at new address

