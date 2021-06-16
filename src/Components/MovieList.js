import React from "react";
import MovieCard from "./MovieCard.js";

const MovieList = ({ movieList }) => {
  return (
    <>
      {movieList.map((movie) => {
        return (
          <div>
            <MovieCard movie={movie} />
          </div>
        );
      })}
    </>
  );
};

export default MovieList;
