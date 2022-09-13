import React from "react";

function ItemCard(props) {
  return (
    <div className="item-card" id={props.index}>
      <div>Product: {props.name}</div>
      <div>Product image</div>
      <div>
        <label htmlFor="quantity">Quantity: </label>
        <input id="quantity" type="number" className="quantity" min={1}></input>
      </div>
      <button onClick={props.addToCart}>Add to cart</button>
    </div>
  );
}

export default ItemCard;
