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
  // let positionData;
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(timerData, posData);
  // .then(posData => {
  //   positionData = posData;
  //   return setTimer(2000);
  // })
  // .catch(err => {          //ERROR CATCH.if there 10 then() before catch() if 5th got error the after 5th no then() will execute.it directly comes to catch.afte catch if there are any then() ,they will execute.so catch() positioning matter.so use it after all then()
  //   console.log(err);
  //   return 'on we go...';
  // })
  // .then(data => {
  //   console.log(data, positionData);
  // });
  // setTimer(1000).then(() => {
  //   console.log('Timer done!');
  // });
  // console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);


















//------------can call erroe like below or catch-----
// .then(posData => {
  //   positionData = posData;
  //   return setTimer(2000);
  // },err=>{
  //   console.log(err)
  // })
  //----------------------------------------------------------------
//   PENDING => Promise is doing work, neither then() nor catch() executes at this moment

// RESOLVED => Promise is resolved => then() executes

// REJECTED  => Promise was rejected => catch() executes

// When you have another then() block after a catch() or then() block, the promise re-enters PENDING mode (keep in mind: then() and catch() always return a new promise - either not resolving to anything or resolving to what you return inside of then()). Only if there are no more then() blocks left, it enters a new, final mode: SETTLED.

// Once SETTLED, you can use a special block - finally() - to do final cleanup work. finally() is reached no matter if you resolved or rejected before.

// Here's an example:

// somePromiseCreatingCode()
//     .then(firstResult => {
//         return 'done with first promise';
//     })
//     .catch(err => {
//         // would handle any errors thrown before
//         // implicitly returns a new promise - just like then()
//     })
//     .finally(() => {
//         // the promise is settled now - finally() will NOT return a new promise!
//         // you can do final cleanup work here
//     });
