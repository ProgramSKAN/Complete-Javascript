const defaultResult=0;
let currentResult=defaultResult;
let logEntries=[];

function getUserInput(){
    return parseInt(userInput.value);
}

function createAndWirteOutput(operator, resultBeforeCalc,calNumber){
    const calDescription=`${resultBeforeCalc} ${operator} ${calNumber}`;
    outputResult(currentResult,calDescription);
}

// function add(){
//     const enteredNumber=getUserInput();
//     const calDescription=`${currentResult}+${enteredNumber}`;
//     //currentResult=currentResult+ +userInput.value; //OR
//     currentResult=currentResult+ enteredNumber;
//     outputResult(currentResult,calDescription);
// }
function add(){
    var enteredNumber=getUserInput();
    const initialResult=currentResult;
    currentResult+= enteredNumber;//currentResult++;
    createAndWirteOutput('+',initialResult,enteredNumber);
    /*const logEntry={//OBJECT
        operation:'ADD',
        prevResult:initialResult,
        number:enteredNumber,
        result:currentResult
    };
    logEntries.push(enteredNumber);//ARRAY
    console.log(logEntries);
    console.log(logEntries[0]);
    console.log(logEntry);
    logEntries.push(logEntry);
    console.log(logEntries);
    console.log(logEntry.operation);*/
    writeToLog('ADD',initialResult,enteredNumber,currentResult);
}

function substract() {
    const enteredNumber=getUserInput();
    const initialResult=currentResult;
    currentResult-= enteredNumber;
    createAndWirteOutput('-',initialResult,enteredNumber);
    writeToLog('SUBSTRACT',initialResult,enteredNumber,currentResult);
}
function multiply() {
    const enteredNumber=getUserInput();
    const initialResult=currentResult;
    currentResult*=enteredNumber;
    createAndWirteOutput('*',initialResult,enteredNumber);
    writeToLog('MULTIPLY',initialResult,enteredNumber,currentResult);
}
function divide() {
    const enteredNumber=getUserInput();
    const initialResult=currentResult;
    currentResult=currentResult/ enteredNumber;
    createAndWirteOutput('/',initialResult,enteredNumber);
    writeToLog('DIVIDE',initialResult,enteredNumber,currentResult);
}
function writeToLog(operationIdentifier,prevResult,operationNumber,newResult){
    const logEntry={
        operation:operationIdentifier,
        prevResult:prevResult,
        number:operationNumber,
        result:newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}


addBtn.addEventListener('click',add)
subtractBtn.addEventListener('click',substract)
multiplyBtn.addEventListener('click',multiply)
divideBtn.addEventListener('click',divide)
























/*
//------------------------BASICS-------------------------------
// alert('Hello');


// let userName;let ageGroup5;let $kindOfSpecial;let _intervalValue;//VALID
// let user_name;//VALID but bad practice
// let 21Players;let user-b;let let;//INVALID


const defaultResult=0;

let currentResult=defaultResult;
currentResult=(defaultResult+10)*3/2-1;
// OPERATORS: +,-,*,/,%,**(exp)

//let calculationDescription='('+defaultResult+' + 10) * 3 / 2 - 1';//OR
let calculationDescription=`(${defaultResult }+ 10) 

* 3 / 2 - 1`;//template literal syntax//linenreak whitesapce will be considered in html but not shown unless css>  white-space:pre;
let errorMessage='An error \n'+
                 'occured!';

outputResult(currentResult,calculationDescription);



function addAlert(num1,num2){
    const result=num1+num2;
    alert('The result is '+result);
}
function add(num1,num2){
    const result=num1+num2;
    return result;
}
const additionResult=add(1,4);

*/


/*
//--------------------SHADOWING------------------------
// Variable shadowing occurs when a variable of an inner scope is defined with the same name as a variable in the outer scope. 
let userName = 'Max';
function greetUser(name) {
  let userName = name;
  alert(userName);
}
userName = 'Manu';
greetUser('Max');
// This will actually show an alert that says 'Max' (NOT 'Manu').
*/

/*
//----------DIRECT FUNCTION VS INDIRECT FUNCTION-------------------
add(1,2);//direct. it will be called immediately
add;//indirect.function reference
*/

//textbox.value will always gives the string.so use ParseInt() or +textbox.value

/*
//---------MIXING NUMBERS AND STRINGS-------------
3 + '3' => '33'
'hi' - 'i' => NaN
3 * '3' => 9
3 - '3' => 0
3 / '3' => 1
3 + '3' => '33'
*/

//-------------SPECIAL VALUES------------------
//undefined/null/NaN

//------------------TYPEOF-----------------------
/*let userName='skan'
typeof 'Skan'//string
typeof userName//string
typeof 1//number
typeof 1.1//number
typeof true//boolean
typeof [1,2,3,4]//object
typeof {name:'skan',age:18}//object
typeof undefined//undefined
typeof null//object
typeof NaN//number
*/

//------------CONDITIONS---------------
/*
==
=== //prefer
!=
!==
> & <
>= &<=

'ab' > 'aa' // true
'a' > 'B' // true
'a' > 'b' // false
*/