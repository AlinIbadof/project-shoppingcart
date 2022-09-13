import React, { useState } from "react";
import ItemCard from "./ItemCard";
import ShoppingCart from "./ShoppingCart";

function ShoppingPage() {
  const [items, setItems] = useState([
    { name: "Product 1", id: 1, price: 10 },
    { name: "Product 2", id: 2, price: 12 },
    { name: "Product 3", id: 3, price: 14 },
    { name: "Product 4", id: 4, price: 16 },
    { name: "Product 5", id: 5, price: 18 },
    { name: "Product 6", id: 6, price: 20 },
    { name: "Product 7", id: 7, price: 22 },
    { name: "Product 8", id: 8, price: 24 },
  ]);
  const [boughtItems, setBoughtItems] = useState([]);

  const addToCart = (event) => {
    // maybe remove the placeholder from the input inside ItemCard.js, and create an if condition:
    //    if the value is "" (nothing is being input), then do nothing, else do the steps below

    let cardId = event.target.parentNode.id - 1;
    let shoppedItem = items[cardId];
    shoppedItem.quantity =
      event.target.parentNode.getElementsByClassName("quantity")[0].value;

    setBoughtItems((prev) => [...prev, shoppedItem]);

    // if the product that should be added to the cart is already in the cart, just update quantity;

    console.log(shoppedItem);
  };

  return (
    <div>
      <h1>Shopping Page</h1>
      <ShoppingCart items={boughtItems} />
      <div className="item-container">
        <ItemCard
          name={items[0].name}
          addToCart={addToCart}
          index={items[0].id}
        />
        <ItemCard
          name={items[1].name}
          addToCart={addToCart}
          index={items[1].id}
        />
        <ItemCard
          name={items[2].name}
          addToCart={addToCart}
          index={items[2].id}
        />
        <ItemCard
          name={items[3].name}
          addToCart={addToCart}
          index={items[3].id}
        />
        <ItemCard
          name={items[4].name}
          addToCart={addToCart}
          index={items[4].id}
        />
        <ItemCard
          name={items[5].name}
          addToCart={addToCart}
          index={items[5].id}
        />
        <ItemCard
          name={items[6].name}
          addToCart={addToCart}
          index={items[6].id}
        />
        <ItemCard
          name={items[7].name}
          addToCart={addToCart}
          index={items[7].id}
        />
      </div>
    </div>
  );
}

export default ShoppingPage;
