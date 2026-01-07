import React from "react";

const FoodItem = ({ item, addToCart }) => {
  return (
    <div className="food-item" onClick={() => addToCart(item)}>
      <img src={item.image} alt={item.name} className="food-image" />
      <h5>{item.name}</h5>
      <p>Rs. {item.price}</p>
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  );
};

export default FoodItem;
