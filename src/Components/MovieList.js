import React from "react";
import MovieCard from "./MovieCard.js";
import { Link } from "react-router-dom";

const MovieList = ({ movieList }) => {
  return (
    <>
      {movieList.map((movie) => {
        return (
          <>
          <Link  to={"/movie/"+movie.Title}>
            <MovieCard movie={movie} />
          </Link>
          </>
        );
      })}
    </>
  );
};

export default MovieList;
