import React from "react";
import DisplaySingleMovie from "./DisplaySingleMovie";
export default function DisplayMovies({ movies }) {

    
  const moviesDisplay = movies.Search.map((movie) => {
    return <DisplaySingleMovie movie={movie} />;
  });

  return (
    <>
      <h4>movies list</h4>
      {moviesDisplay}
    </>
  );
}
