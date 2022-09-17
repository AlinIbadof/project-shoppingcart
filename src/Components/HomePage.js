import React from "react";

function HomePage() {
  return (
    <div className="home-page">
      <h2 className="home-header">Home Page</h2>
      <div className="home-images">
        <img
          alt="Fashion model"
          src={process.env.PUBLIC_URL + "/model1.jpg"}
          height={400}
        />
        <img
          alt="Fashion model"
          src={process.env.PUBLIC_URL + "/model2.jpg"}
          height={400}
        />
        <img
          alt="Fashion model"
          src={process.env.PUBLIC_URL + "/model3.jpg"}
          height={400}
        />
      </div>

      <div className="home-text">
        This project was created with Create-React-App, and its main purpose was
        to learn about using Routing (with react-router-dom), while also gaining
        valuable practice with React Hooks (useState mainly). It is a simple 3
        page site, and in the Shopping Page there are 8 different product cards,
        each with an add to cart button. The user may enter a quantity, and the
        item will be added to the cart, providing insight about the name,
        quantity which was added, the price. The shopping cart will also provide
        a total cost.
      </div>
    </div>
  );
}

export default HomePage;
