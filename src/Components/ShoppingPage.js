import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import ShoppingCart from "./ShoppingCart";

function ShoppingPage() {
  const [items, setItems] = useState([
    { name: "Sweater", id: 1, price: 10 },
    { name: "Shirt", id: 2, price: 12 },
    { name: "Shoes", id: 3, price: 14 },
    { name: "Jeans", id: 4, price: 16 },
    { name: "Vest", id: 5, price: 18 },
    { name: "Necklace", id: 6, price: 20 },
    { name: "Bracelet", id: 7, price: 22 },
    { name: "Beanie", id: 8, price: 24 },
  ]);
  const [boughtItems, setBoughtItems] = useState([]);

  const addToCart = (event) => {
    // This gets the value of the input element present on each item card
    let inputValue =
      event.target.parentNode.getElementsByClassName("quantity")[0].value;

    // Now it checks to see if the value from it is valid, if it is then it proceeds with the code, if not, nothing happens
    if (inputValue !== "" && inputValue !== "0" && inputValue > 0) {
      // Getting the id of the object that was clicked
      let cardId = event.target.parentNode.id - 1;
      // Setting a variable to be the object with the previously found id, and then setting a new "quantity" property to that object,
      //that will be equal to the value from the input
      let shoppedItem = items[cardId];
      shoppedItem.quantity = inputValue;

      //Checking the boughtItems array to see if the product is already present
      if (boughtItems.filter((e) => e.name === shoppedItem.name).length > 0) {
        // if it is indeed present, map through the whole array, find the product matching, and update its quantity

        //small bug, the second time add to cart is pressed, instead of taking the existing value it takes the one from the input
        //and doubles it.
        setBoughtItems((current) =>
          current.map((obj) => {
            if (obj.name === shoppedItem.name) {
              return {
                ...obj,
                quantity: Number(obj.quantity) + Number(inputValue),
              };
            }
            return obj;
          })
        );
      } else {
        // if there was no object matching inside the array, add it to the list instead
        setBoughtItems((prev) => [...prev, shoppedItem]);
      }
    }
  };

  // to be added
  const removeFromCart = (event) => {
    // gets the value of the product for which the remove button is clicked
    let value =
      event.target.parentNode.getElementsByClassName("getThisValue")[0]
        .textContent;

    // next, it sets the Bought Items array by iterating through each value (using filter) and returning the array with values that
    // do not match the variable "value"
    console.log(value);
    setBoughtItems((currentArray) =>
      currentArray.filter((item) => {
        return item.name !== value;
      })
    );
  };

  return (
    <div className="shopping-page">
      <h2>Shopping Page</h2>
      <ShoppingCart items={boughtItems} removeFromCart={removeFromCart} />
      <div className="item-container">
        <ItemCard
          name={items[0].name}
          addToCart={addToCart}
          index={items[0].id}
          productImage={process.env.PUBLIC_URL + "/P01.jpg"}
          itemPrice={items[0].price}
        />
        <ItemCard
          name={items[1].name}
          addToCart={addToCart}
          index={items[1].id}
          productImage={process.env.PUBLIC_URL + "/P02.jpg"}
          itemPrice={items[1].price}
        />
        <ItemCard
          name={items[2].name}
          addToCart={addToCart}
          index={items[2].id}
          productImage={process.env.PUBLIC_URL + "/P03.jpg"}
          itemPrice={items[2].price}
        />
        <ItemCard
          name={items[3].name}
          addToCart={addToCart}
          index={items[3].id}
          productImage={process.env.PUBLIC_URL + "/P04.jpg"}
          itemPrice={items[3].price}
        />
        <ItemCard
          name={items[4].name}
          addToCart={addToCart}
          index={items[4].id}
          productImage={process.env.PUBLIC_URL + "/P05.jpg"}
          itemPrice={items[4].price}
        />
        <ItemCard
          name={items[5].name}
          addToCart={addToCart}
          index={items[5].id}
          productImage={process.env.PUBLIC_URL + "/P06.jpg"}
          itemPrice={items[5].price}
        />
        <ItemCard
          name={items[6].name}
          addToCart={addToCart}
          index={items[6].id}
          productImage={process.env.PUBLIC_URL + "/P07.jpg"}
          itemPrice={items[6].price}
        />
        <ItemCard
          name={items[7].name}
          addToCart={addToCart}
          index={items[7].id}
          productImage={process.env.PUBLIC_URL + "/P08.jpg"}
          itemPrice={items[7].price}
        />
      </div>
    </div>
  );
}

export default ShoppingPage;
