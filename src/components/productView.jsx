// ProductView.js
import React from "react";
import { useParams } from "react-router-dom";
import { useData } from "./context/DataContext";
import "../components/productsView.css"; // Create this file for styling if needed
// import { Link } from "react-router-dom";

const ProductView = () => {
  const { id } = useParams(); // Get the product ID from the URL

  const { myData, addToCart } = useData();

  // Find the product with the matching ID
  const product = myData.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found!</div>; // Handle edge case if product is not found
  }

  const { image, title, description, price, rating } = product;

  const handleAddToCart = () => {
    addToCart(product); // Add the current product to the cart
    alert("add to cart");
  };

  return (
     <div className="view-container">
       <div className="product_view">
        <img className="product-image" src={image} alt={title} />
        <div className="product_view_detail">
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>
          <p className="price">Price: ${price}</p>
          {rating && (
            <div className="rating">
              <span>Rating: {rating.rate}</span>
              <span>Count: {rating.count}</span>
            </div>
          )}
          <button className="add_Cart" onClick={handleAddToCart}>
            add to cart
          </button>
        </div>
      </div>
     </div>
  );
};

export default ProductView;
