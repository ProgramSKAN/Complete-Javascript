//COOKIES ARE ATTCHED TO OUGOING HTTP REQUESTS
//RUN PROJECT USING SERVER

const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

storeBtn.addEventListener('click', () => {
  const userId = 'u123';
  const user = {name: 'Max', age: 30};
  document.cookie = `uid=${userId}; max-age=360`;//EXPIRES AFTER 360 SECONDS.TO KEEP DATE OF EXPIRE USE "expires="
  document.cookie = `user=${JSON.stringify(user)}`;//EXPIRES WHEN SESSION EXPIRES
});

retrBtn.addEventListener('click', () => {
  console.log(document.cookie);
  const cookieData = document.cookie.split(';');
  const data = cookieData.map(i => {
    return i.trim();
  });
  console.log(data[1].split('=')[1]); // user value
  //console.log(data.includes()//use includes which is good than above in some cases
});
