import React , { useState } from "react";
import "./App.css";
import MovieList from "./Components/MovieList";
import Add from "./Components/Add";
import Filter from "./Components/Filter"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Description from "./Components/Description";

const App = () => {
  const movieList = [
    {
      Title: "florida",
      Year: "1983",
      Rate: "3",
      Description: "La Florida est un film québécois de George Mihalka sorti en 1993. C'est également le premier long métrage de la maison de production Sarrazin Couture​ ...",
      Type: "movie",
      Poster:
        "https://media.senscritique.com/media/000008859384/source_big/La_Florida.jpg",
        Trail:"https://youtu.be/ir4TuZTklm8",
    },
    {
      Title: "super man",
      Year: "1983",
      Rate: "4",
      Description:"Films et serials — Christopher Reeve (1952–2004), interprète de Superman dans quatre films. Le personnage de Superman a donné lieu dès les ...",
      Type: "herror",
      Poster:
        "https://img.filmsactu.net/datas/films/s/u/superman-man-of-steel/xl/superman-man-of-steel-5aba509296f6f.jpg",
        Trail:"https://youtu.be/6qtTbaOF7-Y",
    },
    {
      Title: "iron man ",
      Year: "1945",
      Rate: "5",
      Description:"Iron Man est un film américain réalisé par Jon Favreau, sorti en 2008. Il raconte les origines et les débuts du personnage éponyme issu du comics publié par ...",
      Type: "action",
      Poster:
        "https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-05/capture_decran_2018-05-11_a_17.50.17.png",
        Trail:"https://youtu.be/rT22nYLaVbo",
      },
    {
      Title: "hit man",
      Year: "1977",
      Rate: "1",
      Description:"Hitman est un film réalisé par Xavier Gens avec Timothy Olyphant, Dougray Scott​. Synopsis : Crâne rasé, code barre tatoué sur la nuque, costume noir, chemise ..",
      Type: "movie",
      Poster:
        "https://i.pinimg.com/originals/6a/66/c2/6a66c28da32a8ba59d279e055903591e.jpg",
        Trail:"https://youtu.be/_rGInWID0ns",
    },
    {
      Title: "max payne",
      Year: "1980",
      Rate: "2",
      Description:"Max Payne est un film américano-canadien adapté du jeu vidéo du même nom, réalisé par John Moore et sorti en 2008. Les rôles principaux sont joués par .",
      Type: "movie",
      Poster:
        "https://journalmetro.com/wp-content/uploads/2012/05/itech-max-payne-3.jpg",
        Trail:"https://youtu.be/OSa8JpwrIdo",
    },
    {
      Title: "Star Wars: Episode VI - Return of the Jedi",
      Year: "1983",
      Rate: "2",
      Description:"· Star Wars, épisode I : La Menace fantôme de George Lucas, sorti en 1999 ; · Star Wars, épisode II : L'Attaque des clones .",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
       Trail:"https://youtu.be/dh100KL49Do",
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
    <Router>
		<Switch>
		
    <Route exact path="/">
  
    <div className="container-fluid movie-app">
      <div className="row">
      <Filter filter={filter} fiterRate={fiterRate} />
        <MovieList movieList={movie.filter(el=>el.Title.toLocaleLowerCase().includes(searchValue.trim().toLocaleLowerCase())&&(el.Rate >= fiterRating))}/>
        
      </div>
      <Add submitMovies={addMovies}/>
    </div>
    </Route>
    <Route path="/movie/:Title" render={(props) => <Description movies={movie} {...props}/>}	/>
        </Switch>
	</Router>
  );
};

export default App;
