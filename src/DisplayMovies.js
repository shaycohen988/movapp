import React from "react";
import uuid from "uuid/v4";
import DisplaySingleMovie from "./DisplaySingleMovie";
export default function DisplayMovies({ movies }) {
  const moviesDisplay = movies.Search.map((movie) => {
    return <DisplaySingleMovie movie={movie} key={uuid()} />;
  });

  return (
    <>
      <h4>movies list</h4>
      {moviesDisplay}
    </>
  );
}
