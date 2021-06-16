import React from "react";
/*import { ReactStars } from "react-rating-stars-component";*/

const MovieCard = ({ movie }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{movie.Title}</li>
        <li className="list-group-item">{movie.Year}</li>
        <li className="list-group-item">{movie.Type}</li>
      </ul>
      {<div className="card-body">rate{movie.Rate}</div>}
    </div>
  );
};

export default MovieCard;
