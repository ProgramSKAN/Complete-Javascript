const button = document.querySelector('button');
const output = document.querySelector('p');

const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {//PROMISIFY
    setTimeout(() => {//as setTimeout is old, it doesn't have promises.so wrap it in promise
      resolve('Done!');
    }, duration);
  });
  return promise;
};

//AS CALLBACKS AND NESTED CALLBACKS increses it beacome a callback hell, not readable.so use promises
function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    posData => {
      setTimer(2000).then(data => {//PROMISIFIED setTimeout()
        console.log(data, posData);
      });
    },
    error => {
      console.log(error);
    }
  );
  setTimer(1000).then(() => {
    console.log('Timer done!');
  });
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
