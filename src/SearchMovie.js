import React, { useState } from "react";

import Form from "react-bootstrap/Form";

export default function SearchMovie({ newMovie }) {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (val) => {
    setSearchInput(val);
    console.log("value", val);
  };
  return (
    <>
      {/*      <form
        onSubmit={(e) => {
          e.preventDefault();
          newMovie(searchInput);
        }}
      >
        <label>Search</label>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => handleChange(e.target.value)}
        />
      </form> */}
      <Form
        className=" ml-auto"
        onSubmit={(e) => {
          e.preventDefault();
          newMovie(searchInput);
        }}
      >
        <Form.Control
          type="text"
          placeholder="Moive title"
          value={searchInput}
          onChange={(e) => handleChange(e.target.value)}
        />
      </Form>
    </>
  );
}
