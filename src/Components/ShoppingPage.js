import React from "react";
import ItemCard from "./ItemCard";
import ShoppingCart from "./ShoppingCart";

function ShoppingPage() {
  return (
    <div>
      <h1>Shopping Page</h1>
      <ShoppingCart />
      <div className="item-container">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
}

export default ShoppingPage;
