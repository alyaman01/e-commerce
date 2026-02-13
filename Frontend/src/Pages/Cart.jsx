import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item, index) => (
        <div key={index} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <img src={item.img} alt="" width="100" />
          <h3>{item.title}</h3>
          <p>₹{item.price}</p>
          <button onClick={() => removeItem(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
