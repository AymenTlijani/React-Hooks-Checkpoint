import React , { useState } from "react";
import "./App.css";
import MovieList from "./Components/MovieList";
import Add from "./Components/Add";
import Filter from "./Components/Filter"
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  const movieList = [
    {
      Title: "florida",
      Year: "1983",
      Rate: "3",
      Type: "movie",
      Poster:
        "https://media.senscritique.com/media/000008859384/source_big/La_Florida.jpg",
    },
    {
      Title: "super man",
      Year: "1983",
      Rate: "4",
      Type: "herror",
      Poster:
        "https://img.filmsactu.net/datas/films/s/u/superman-man-of-steel/xl/superman-man-of-steel-5aba509296f6f.jpg",
    },
    {
      Title: "iron man ",
      Year: "1945",
      Rate: "5",
      Type: "action",
      Poster:
        "https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-05/capture_decran_2018-05-11_a_17.50.17.png",
    },
    {
      Title: "hit man",
      Year: "1977",
      Rate: "1",
      Type: "movie",
      Poster:
        "https://i.pinimg.com/originals/6a/66/c2/6a66c28da32a8ba59d279e055903591e.jpg",
    },
    {
      Title: "max payne",
      Year: "1980",
      Rate: "2",
      Type: "movie",
      Poster:
        "https://journalmetro.com/wp-content/uploads/2012/05/itech-max-payne-3.jpg",
    },
    {
      Title: "Star Wars: Episode VI - Return of the Jedi",
      Year: "1983",
      Rate: "2",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
  ];
  const[movie,setMovie]=useState(movieList);
  const [searchValue,setSearchValue]=useState('');
  const [fiterRating,setFiterRating]=useState("0");
 const fiterRate = (x) => {
  setFiterRating(x);
 }
  const filter =(title)=>{
    setSearchValue(title) ;  
     }
  
     const addMovies=(x)=>{
    setMovie([...movie,x])
  }
  
  return (
    <div className="container-fluid movie-app">
      <div className="row">
      <Filter filter={filter} fiterRate={fiterRate} />
        <MovieList movieList={movie.filter(el=>el.Title.toLocaleLowerCase().includes(searchValue.trim().toLocaleLowerCase())&&(el.Rate >= fiterRating))}/>
        
      </div>
      <Add submitMovies={addMovies}/>
    </div>
  );
};

export default App;
