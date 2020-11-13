const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(//THIRD
    posData => {//CALLBACK
      setTimeout(() => {
        console.log(posData);
      }, 2000);
    },
    error => {//CALLBACK
      console.log(error);
    }
  );
  setTimeout(() => {//CALLBACK
    console.log('Timer done!');//SECOND//because it goes through MESSAGE QUEUE AND EVENT LOOP
  }, 0);
  console.log('Getting position...');//FIRST
}

button.addEventListener('click', trackUserHandler);//trackUserHandler CALLBACK

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
