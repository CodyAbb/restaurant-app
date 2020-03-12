import React from "react";

function SearchBox({ handleSearchInput }) {
  return (
    <>
      <input
        placeholder="search reservation..."
        onChange={handleSearchInput}
        type="text"
      ></input>
    </>
  );
}

export default SearchBox;
