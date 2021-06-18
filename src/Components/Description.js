import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";

const Description = ({movies}) => {

    
    const { Title} = useParams();
    const [movie, setMovies] = useState("");
    useEffect(() => {
      setMovies (movies.find((el) => el.Title == Title ))
    }, []);
  
  return(

  <div >
          <div >
              <Link to="/" >
                Go Back Home
              </Link>
          </div>
          
            <div >
           <img src={movie.Poster} alt={movie.Title} /> 
           
           <div>
            <h3> Title :{movie.Title}</h3>
            </div>
            <div>
            <h3> Year : {movie.Year}</h3>
            </div>
            <div>
            <h3> Description : {movie.Description}</h3>
            </div>
            <div>
            <h3> Rate : {movie.Rate}</h3>
            </div>
          </div>
          <div >
          <div>
            <h1>voici le lien</h1>
            </div>
            <br/>
            <div>
            <ReactPlayer url={movie.Trail} title="video"/>
            </div>
          </div> 
  </div>
  )
  }

export default Description;