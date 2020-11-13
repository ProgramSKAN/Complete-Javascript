// setInterval(() => {
//   console.log('Sending analytics data...')
// }, 2000,[]);//ANONYMOUS FUNCTION EXECUTES EVERY 2000ms.[] is the array of arguments to fed to the funtion


const intervalId = setInterval(() => {
  console.log('Sending analytics data...')
}, 2000);

document.getElementById('stop-analytics-btn').addEventListener('click', () => {
  clearInterval(intervalId);
});