import React from "react";

function DropDown({ productList, onCategorySelect }) {
  // Extract unique categories from the productList
  const uniqueCategories = [
    ...new Set(productList.map((product) => product.category)),
  ];

  const handleCategorySelect = (category) => {
    onCategorySelect(category);
  };

  return (
    <div className="dropdown h-100" id="dropdown-id">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        See by category
      </button>
      <ul className="dropdown-menu">
        {/* Dynamically generate the list items based on unique categories */}
        {uniqueCategories.map((category, index) => (
          <li key={index}>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDown;
