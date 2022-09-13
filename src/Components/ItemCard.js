import React from "react";

function ItemCard(props) {
  return (
    <div className="item-card" id={props.index}>
      <div>Product: {props.name}</div>
      <div>Product image</div>
      <div>
        <label htmlFor="quantity">Quantity: </label>
        <input
          id="quantity"
          type="number"
          placeholder="1"
          className="quantity"
        ></input>
      </div>
      <button onClick={props.addToCart}>Add to cart</button>
    </div>
  );
}

export default ItemCard;
