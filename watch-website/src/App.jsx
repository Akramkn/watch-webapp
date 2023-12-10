import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import ShopContextProvider from "./components/ShopContextProvider";

const App = () => {
  return (
    <>
      <ShopContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="cart" element={<Cart />} />
              <Route path="login" element={<Login />} />
              <Route path="Wishlist" element={<Wishlist />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </>
  );
};

export default App;
