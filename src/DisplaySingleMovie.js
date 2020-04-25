import React from "react";

export default function DisplaySingleMovie({ movie }) {
  return (
    <div>
      {movie.Title}
      <img src={movie.Poster} alt="" />
    </div>
  );
}
