import React from "react";

function ItemCard() {
  return (
    <div className="item-card">
      <div>Product: title</div>
      <div>Product image</div>
      <div>
        <label htmlFor="quantity">Quantity: </label>
        <input id="quantity" type="number" placeholder="1"></input>
      </div>
      <button>Add to cart</button>
    </div>
  );
}

export default ItemCard;
