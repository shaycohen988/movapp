import React from "react";
import uuid from "uuid/v4";
import DisplaySingleMovie from "./DisplaySingleMovie";

export default function DisplayMovies({ movies }) {
  const moviesDisplay = movies.Search.map((movie) => {
    return <DisplaySingleMovie movie={movie} key={uuid()} />;
  });

  return <div className="card-columns mt-3">{moviesDisplay}</div>;
}
