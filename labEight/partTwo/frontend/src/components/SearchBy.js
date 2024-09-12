import React from "react";
import { useState } from "react";

function SearchBy({ productList, setSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setSearch(inputValue);
    }
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        id="exampleInputEmail1"
        placeholder="Find Item By Title"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default SearchBy;
