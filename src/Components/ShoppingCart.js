import React from "react";

function ShoppingCart(props) {
  const noStyle = {
    display: "none",
  };

  if (props.items.length > 0) {
    return (
      <div className="shopping-cart">
        <h3 className="shopping-cart-title">Shopping cart: </h3>
        <ul className="shopping-cart-list">
          {props.items.map((item) => {
            return (
              <div>
                <li className="shopping-cart-list-item">
                  {item.name} x{item.quantity}, Price: $
                  {item.quantity * item.price}
                </li>
                <p className="getThisValue" style={noStyle}>
                  {item.name}
                </p>
                <button onClick={props.removeFromCart}>Remove from cart</button>
              </div>
            );
          })}
        </ul>
        <p className="shopping-cart-total">
          Total: $
          {props.items.reduce((sum, item) => {
            return sum + item.price * item.quantity;
          }, 0)}
        </p>
      </div>
    );
  }
}

export default ShoppingCart;
