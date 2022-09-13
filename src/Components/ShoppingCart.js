import React from "react";

function ShoppingCart(props) {
  return (
    <div>
      <h2>Shopping cart: </h2>
      <ul>
        {props.items.map((item) => {
          return (
            <li>
              {item.name} x{item.quantity}, Price: ${item.quantity * item.price}
            </li>
          );
        })}
      </ul>
      <p>
        Total: $
        {props.items.reduce((sum, item) => {
          return sum + item.price * item.quantity;
        }, 0)}
      </p>
    </div>
  );
}

export default ShoppingCart;
