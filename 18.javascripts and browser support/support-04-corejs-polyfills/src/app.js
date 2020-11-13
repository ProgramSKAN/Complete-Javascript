//import 'core-js'//just importing core js will bloat the application for just to make promises work in old browsers
// import 'core-js/features/promise'//so use this for supporting single feature
//core-js imports not needed as babel in webpack automatically does

// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
//keep above 2 imports only if  useBuiltIns: 'entry' in babel webpack

const button = document.querySelector('button');
const textParagraph = document.querySelector('p');

button.addEventListener('click', () => {
  const text = textParagraph.textContent;
  const promise = new Promise();
  console.log(promise);
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  } else {
    alert('Feature not available, please copy manually!');
  }
});


//babel loader takes our instructions and make our code to work in older browsers or almost works
//together with feature detection like if (navigator.clipboard) it might work because we are not even trying to get the clipboard api if not there.
//if we have other code that also relies on promises that can't be compiled to older code by babel, we would have code that works in older browsers from the core syntax perspective but doesn;t really work because we still use other features like promises that are not supported in older browsers
//so we need POLYFILLS to have best of both worlds

//FEATURE DETECTION
//TRANSPILE CODE(babel)
//POLYFILLS (code-js)  //npm install --save core-js  //not --save-dev because it is 3rd  partly library which is part of final code not a development tool
