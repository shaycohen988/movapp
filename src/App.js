import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import SearchMovie from "./SearchMovie";
import DisplayMovies from "./DisplayMovies";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand href="#">MovieDip</Navbar.Brand>

          <SearchMovie newMovie={setmovies} />
        </Navbar>
        <Row>
          <Col>
            {movieData == null ? (
              "error display or null - tb"
            ) : (
              <DisplayMovies movies={movieData} />
            )}
          </Col>
        </Row>
      </Container>
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
