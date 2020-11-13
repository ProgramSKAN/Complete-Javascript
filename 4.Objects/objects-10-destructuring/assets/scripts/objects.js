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
    // if(!('info' in movie)){};//validation
    // if(movie.info===undefined){};//validation

    const { info, ...otherProps } = movie;//OBJECT DESTRUCTURING //info key
    console.log(otherProps);
    const { title: movieTitle } = info;//OBJECT DESTRUCTURING //title key// assign new name for key 'title' as movieTitle
    let text = movieTitle + ' - ';
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
    id: Math.random().toString()
  };

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);



//---SPREAD OPERATOR--------
const person={name:'jack',hobbies:['sports','trekking']};
const anotherPerson=person;//it is reference not copy
person.age=20;
console.log(anotherPerson);//{name:'jack',hobbies:['sports','trekking'],age:20};
const person2={...person};//copy
person.age=21;
console.log(person2);//{name:'jack',hobbies:['sports','trekking'],age:20}  //not 21 since it is copy
//but
person.hobbies.push('coding');
console.log(person2);//{name:'jack',hobbies:['sports','trekking','coding'],age:20}
//though person2 is copy, changing person effected person because objects(hobbies) are ref types
//to copy objects also ,do manually like below

const person3={...person,age:22,hobbies:[...person.hobbies]};//here ...person spreads whole person object.whatever there after overrides it
person3;//{name:'jack',hobbies:['sports','trekking','coding'],age:20} 
person.hobbies.pop();
person3;//{name:'jack',hobbies:['sports','trekking','coding'],age:20}  //same

//-----COPY OBJECT WITHOUT ...------------------
const persn={name:'jack'};
const persn2=Object.assign({},persn);//copy from souce to target.tartget can be empty or existing object
persn2;//{name:'jack'}
persn.name='jacker';
persn2;//{name:'jack'} //same due to copy



