const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = opts => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      success => {
        resolve(success);
      },
      error => {
        reject(error);
      },
      opts
    );
  });
  return promise;
};

const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

async function trackUserHandler() {
  let positionData;
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(timerData, posData);
  // getPosition()
  //   .then(posData => {
  //     positionData = posData;
  //     return setTimer(2000);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     return 'on we go...';
  //   })
  //   .then(data => {
  //     console.log(data, positionData);
  //   });
  setTimer(1000).then(() => {
    console.log('Timer done!');
  });
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);



// Promise.race([getPosition(), setTimer(1000)]).then(data => {//RUN ONLY ONE OF THEM WHICHEVER IS FASTEST PROMISE
//   console.log(data);//Done!
// });

// Promise.all([getPosition(), setTimer(1000)]).then(promiseData => {//RUN ALL  and the data is both in an [].throws error it any one is not resolved.other which is resolved will be printed
//   console.log(promiseData);
// });

Promise.allSettled([getPosition(), setTimer(1000)]).then(promiseData => {//RUNS ALL. it is always passesd is if any one or more is rejected.it will show data in [{},{}].and also mentions it is success or not
  console.log(promiseData);
});

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
