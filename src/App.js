import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import axios from "axios";
import SearchMovie from "./SearchMovie";
import DisplayMovies from "./DisplayMovies";

const API_KEY = "87f19960";

function App() {
  const [movies, setmovies] = useState("");
  const [movieData, setmovieData] = useState(null);

  const isInitMount = useRef(true);

  useEffect(() => {
    if (isInitMount.current) {
      isInitMount.current = false;
    } else {
      document.title = movies;
      async function fatchData() {
        try {
          const data = await axios.get(
            `http://www.omdbapi.com/?s=${movies}&apikey=${API_KEY}`
          );
          console.log(data);
          if (data.data.Response === "False") {
            console.log("res false");
          } else {
            setmovieData(data.data);
          }
        } catch {
          console.log("err");
        }
      }
      fatchData();
    }
  }, [movies]);

  return (
    <>
      <SearchMovie newMovie={setmovies} />
      {movieData == null ? (
        "search for a movie"
      ) : (
        <DisplayMovies movies={movieData} />
      )}
    </>
  );
  /* 
  useEffect(() => {
    async function fatchData() {
      const data = await axios.get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`
      );
      Console.log(data);
    }

    fatchData();
  }, [movieOne]); */
}
export default App;
