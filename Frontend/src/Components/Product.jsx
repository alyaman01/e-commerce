import React from "react";
import "./Product.css";

const Product = ({ img, title, price }) => {

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const item = { img, title, price };

    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Item added to cart ✅");
  };

  return (
    <div className="product-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>₹{price}</p>
      <button onClick={addToCart}>Add To Cart</button>
    </div>
  );
};

export default Product;
