import React from "react";

function ItemCard(props) {
  return (
    <div className="item-card" id={props.index}>
      <div className="product-text">Product: {props.name}</div>
      <img
        alt="Product"
        src={props.productImage}
        height={300}
        width={300}
        className="product-image"
      />
      <div>
        <label htmlFor="quantity">Quantity: </label>
        <input id="quantity" type="number" className="quantity" min={1}></input>
      </div>
      <div>Price: ${props.itemPrice}</div>
      <button onClick={props.addToCart}>Add to cart</button>
    </div>
  );
}

export default ItemCard;
