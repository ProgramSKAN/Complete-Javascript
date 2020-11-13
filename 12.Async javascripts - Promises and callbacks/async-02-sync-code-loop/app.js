const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {//TODO TASK IN MESSAGE QUEUE.later pushed to the stack by event loop after the call stack is empty
  console.log('Clicked!');
}

button.addEventListener('click', trackUserHandler);//SECOND

let result = 0;

for (let i = 0; i < 100000000; i++) {
  result += i;
} 

console.log(result);//FIRST

//----------------
// SETTIEMEOUT as message queue where the callback functions are registered to call later
//EVENT LOOP will synchronize the call satck and the engine with the waiting messages in message queue
//so eventloop rns all the time and it always sees "is the stack empty?do we have pending todos?".if the stack is empty the event loop executes and it pushes waiting messages into the call stack