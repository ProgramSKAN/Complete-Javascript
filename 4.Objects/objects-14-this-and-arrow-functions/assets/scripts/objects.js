'use strict';
const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter
    ? movies
    : movies.filter(movie => movie.info.title.includes(filter));

  filteredMovies.forEach(movie => {
    const movieEl = document.createElement('li');
    const { info, ...otherProps } = movie;
    console.log(otherProps);
    // const { title: movieTitle } = info;
    let { getFormattedTitle } = movie;
    // getFormattedTitle = getFormattedTitle.bind(movie);
    let text = getFormattedTitle.apply(movie) + ' - ';
    for (const key in info) {
      if (key !== 'title') {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue
    },
    id: Math.random().toString(),
    getFormattedTitle() {
      console.log(this);
      return this.info.title.toUpperCase();
    }
  };

  movies.push(newMovie);
  renderMovies();
};

// const searchMovieHandler = function () {
//   console.log(this);//this refers to button since it is called by button if it is inside normal function () {. 
//   const filterTerm = document.getElementById('filter-title').value;
//   renderMovies(filterTerm);
// };
const searchMovieHandler =  ()=> {
   console.log(this);//though it is called by button, this refers to window as it is inside arrow function- ()=> {
     //this inside arrow func is same as this outside arrow function.since arrow function donno 'this'
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);







//----------------------------------------------------------
const memebers={
  teamName:'TeamA',
  people:['jack','max'],
  getTeamMembers(){
    this.people.forEach(p=>{
      console.log(this);//members. arraw function doesn't change the binding of 'this'. so 'this' has the binding same as when written outside of the function which is getTeamMembers() which inturn members
      console.log(p+' - '+this.teamName);//jack - TeamA     max - TeamA  .
    })
  },
  getTeamMembers1(){
    this.people.forEach(function(p){
      console.log(this);//window .Here this is bound.foreach doesn't any binding for this here.function is triggered by browser not member
      console.log(p+' - '+this.teamName);//jack - undefined     max - undefined
    })
  }
}




// --------------------"this" - Summary--------------------
// The this keyword can lead to some headaches in JavaScript - this summary hopefully acts as a remedy.

// this refers to different things, depending on where it's used and how (if used in a function) a function is called.

// Generally, this refers to the "thing" which called a function (if used inside of a function). That can be the global context, an object or some bound data/ object (e.g. when the browser binds this to the button that triggered a click event).

// 1) this in Global Context (i.e. outside of any function)

// function something() { ... }
 
// console.log(this); // logs global object (window in browser) - ALWAYS (also in strict mode)!
// 2) this in a Function (non-Arrow) - Called in the global context

// function something() { 
//     console.log(this);
// }
 
// something(); // logs global object (window in browser) in non-strict mode, undefined in strict mode
// 3) this in an Arrow-Function - Called in the global context

// const something = () => { 
//     console.log(this);
// }
 
// something(); // logs global object (window in browser) - ALWAYS (also in strict mode)!
// 4) this in a Method (non-Arrow) - Called on an object

// const person = { 
//     name: 'Max',
//     greet: function() { // or use method shorthand: greet() { ... }
//         console.log(this.name);
//     }
// };
 
// person.greet(); // logs 'Max', "this" refers to the person object
// 5) this in a Method (Arrow Function) - Called on an object

// const person = { 
//     name: 'Max',
//     greet: () => {
//         console.log(this.name);
//     }
// };
 
// person.greet(); // logs nothing (or some global name on window object), "this" refers to global (window) object, even in strict mode
// this can refer to unexpected things if you call it on some other object, e.g.:

// const person = { 
//     name: 'Max',
//     greet() {
//         console.log(this.name);
//     }
// };
 
// const anotherPerson = { name: 'Manuel' }; // does NOT have a built-in greet method!
 
// anotherPerson.sayHi = person.greet; // greet is NOT called here, it's just assigned to a new property/ method on the "anotherPerson" object
 
// anotherPerson.sayHi(); // logs 'Manuel' because method is called on "anotherPerson" object => "this" refers to the "thing" which called it
// If in doubt, a console.log(this); can always help you find out what this is referring to at the moment!
