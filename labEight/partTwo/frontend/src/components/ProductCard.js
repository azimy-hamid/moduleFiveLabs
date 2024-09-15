import React from "react";

function ProductCard({ product }) {
  const getBadgeColor = (category) => {
    switch (category.toLowerCase()) {
      case "men's clothing":
        return "bg-primary"; // Blue for electronics
      case "jewelery":
        return "bg-success"; // Green for clothing
      case "electronics":
        return "bg-warning"; // Yellow for furniture
      case "women's clothing":
        return "bg-danger"; // Red for food
      default:
        return "bg-secondary"; // Default gray color
    }
  };

  return (
    <div className="card h-100" id="product-card-id">
      <img
        src={product.image_url}
        className="card-img-top"
        alt={product.title}
        style={{ height: "300px", objectFit: "contain" }}
      />
      <span
        className={`badge ${getBadgeColor(product.category)}`}
        id="product-card-badge-id"
      >
        {product.category}
      </span>

      <div className="card-body">
        <h5 className="card-title">{product.title} </h5>
        <p className="card-text text-muted">${product.price}</p>
        <p className="card-text">{product.description.substring(0, 100)}...</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-danger btn-block">Buy Now</button>
      </div>
    </div>
  );
}

export default ProductCard;
