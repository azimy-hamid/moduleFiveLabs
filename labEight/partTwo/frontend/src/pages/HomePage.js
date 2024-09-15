import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import DropDown from "../components/DropDown";
import SearchBy from "../components/SearchBy";
import SortBy from "../components/SortBy";
import { fetchProducts } from "../services/fetchProducts";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  const [selectedCategory, setSelectCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");

  const [searchedItem, setSearchedItem] = useState("");

  let filteredProducts =
    selectedCategory.toLocaleLowerCase() === "all"
      ? products
      : products.filter((product) => {
          return product.category === selectedCategory;
        });

  let searchedItemValidation = products.find((product) => {
    return product.title.toLowerCase() === searchedItem.toLowerCase();
  });

  filteredProducts =
    sortOption.toLocaleLowerCase() === ""
      ? filteredProducts
      : products.sort((a, b) => {
          if (sortOption.toLocaleLowerCase() === "price") {
            return b.price - a.price;
          } else if (sortOption.toLocaleLowerCase() === "title") {
            return a.title.localeCompare(b.title);
          }
        });

  return (
    <>
      <div className="container">
        <h1 className="text-primary">All Functionalities</h1>
        <div className="container d-flex flex-sm-column flex-md-row justify-content-start align-items-center gap-2">
          <DropDown
            productList={products}
            onCategorySelect={setSelectCategory}
          />

          <SearchBy productList={products} setSearch={setSearchedItem} />

          <SortBy productList={products} onSortOption={setSortOption} />
        </div>
      </div>
      <hr />

      {searchedItemValidation && (
        <>
          <div className="container" id="search-item-container">
            <h1 className="my-4 text-center">Searched Item: </h1>
            <div className="row">
              <div
                className="col-lg-3 col-md-6 mb-4"
                key={searchedItemValidation.id}
              >
                <ProductCard product={searchedItemValidation} />
              </div>
            </div>
          </div>
          <hr />
        </>
      )}

      <div className="container">
        <h1 className="my-4 text-center">Fake eCommerce Store</h1>
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-lg-3 col-md-6 mb-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
