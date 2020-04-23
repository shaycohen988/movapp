import React, { useState } from "react";

export default function SearchMovie({ newMovie }) {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (val) => {
    setSearchInput(val);
    console.log("value", val);
  };
  return (
    <div>
      <form
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
      </form>
    </div>
  );
}
