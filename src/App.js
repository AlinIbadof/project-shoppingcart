import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./Components/AboutPage";
import HomePage from "./Components/HomePage";
import Nav from "./Components/Nav";
import ShoppingPage from "./Components/ShoppingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/project-shoppingcart">
        <Nav />
        <Routes>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Shopping" element={<ShoppingPage />} />
          <Route path="/About" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
