import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function DisplaySingleMovie({ movie }) {
  return (
    <Card className="text-center" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.Poster} alt="" />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Button variant="primary">On Imdb</Button>
      </Card.Body>
    </Card>
  );
}
