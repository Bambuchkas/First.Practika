const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели" , "");

const personalMovieDB = {
    count: numberOfFilms,
    movies:{
    },
    actors:{},
    genres:[],
    privat:false
}

const LastWatchedMovie = prompt('Один из последних просмотренных фильмов', "");
const MarkForMovie = +prompt("На сколько оцените его?", "")
const c = prompt('Один из последних просмотренных фильмов', "");
const d = +prompt("На сколько оцените его?", "")
personalMovieDB.movies[LastWatchedMovie] = MarkForMovie;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB)