import React from "react";

export default function Search() {
  return (
    <form className="search-form" id="search">
      <input
        className="inputfield"
        id="city-search-input"
        type="text"
        placeholder="City Name"
      />
      <input
        className="submitbutton"
        id="submit"
        type="submit"
        value="Search"
      />
    </form>
  );
}
