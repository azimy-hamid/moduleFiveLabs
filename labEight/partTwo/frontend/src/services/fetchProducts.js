import axios from "axios";

// Service to fetch products from Fake Store API
export const fetchProducts = async () => {
  return axios
    .get("https://fakestoreapi.com/products")
    .then((response) => response.data)
    .catch((error) => {
      console.error("API fetch error:", error);
      throw error;
    });
};
