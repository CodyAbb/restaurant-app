import React from "react";

function SearchBox(props) {
  return (
    <>
      <input
        placeholder="search reservation..."
        onChange={props.handleSearchInput}
        type="text"
      ></input>
    </>
  );
}

export default SearchBox;
