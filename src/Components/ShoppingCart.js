import React from "react";

function ShoppingCart(props) {
  return (
    <div>
      <h2>Shopping cart: </h2>
      <ul>
        {props.items.map((item) => {
          return (
            <div>
              <li>
                {item.name} x{item.quantity}, Price: $
                {item.quantity * item.price}
              </li>
              <button onClick={props.removeFromCart}>Remove from cart</button>
            </div>
          );
        })}
        <li>
          Total: $
          {props.items.reduce((sum, item) => {
            return sum + item.price * item.quantity;
          }, 0)}
        </li>
      </ul>
    </div>
  );
}

export default ShoppingCart;
