import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import SearchMovie from "./SearchMovie";
import DisplayMovies from "./DisplayMovies";

const API_KEY = "87f19960";

function App() {
  const [movies, setmovies] = useState("");
  const [movieData, setmovieData] = useState("");

  useEffect(() => {
    document.title = movies;
    async function fatchData() {
      try {
        const data = await axios.get(
          `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`
        );
        console.log(data);

        setmovieData(data.data);
      } catch {
        console.log("err");
      }
    }
    fatchData();
  }, [movies]);

  return (
    <>
      <SearchMovie newMovie={setmovies} />
      <DisplayMovies />
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
