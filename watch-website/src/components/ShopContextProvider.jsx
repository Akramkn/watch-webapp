import React, { createContext, useState } from "react";
import { PRODUCTS, PRODUCTS1 } from "./Products";

export const ShopContext = createContext();

const getDefaultCart = () => {
  const cart = {};

  for (const product of [...PRODUCTS, ...PRODUCTS1]) {
    cart[product.id] = 0;
  }

  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [selectedProduct, setSelectedProduct] = useState(null);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const productId in cartItems) {
      if (cartItems[productId] > 0) {
        let itemInfo =
          PRODUCTS.find((product) => product.id === Number(productId)) ||
          PRODUCTS1.find((product) => product.id === Number(productId));
        totalAmount += cartItems[productId] * itemInfo.price;
      }
    }
    return totalAmount.toFixed(2);
  };

  const getTotalCartProducts = () => {
    let totalProducts = 0;
    for (const productId in cartItems) {
      if (cartItems[productId] > 0) {
        totalProducts += cartItems[productId];
      }
    }
    return totalProducts;
  };

  const addToCart = (productId) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: prev[productId] + 1,
    }));
  };

  const removeToCart = (productId) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: prev[productId] - 1,
    }));
  };

  const updateCartItemCount = (newAmount, productId) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: newAmount,
    }));
  };

  const clearCart = () => {
    const updatedCartItems = {};
    for (const productId in cartItems) {
      updatedCartItems[productId] = 0;
    }
    setCartItems(updatedCartItems);
  };

  const resetCart = () => {
    setCartItems(getDefaultCart());
  };

  const viewProductDetails = (productId) => {
    setSelectedProduct(productId);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeToCart,
    updateCartItemCount,
    getTotalCartAmount,
    getTotalCartProducts,
    clearCart,
    resetCart,
    viewProductDetails,
    closeProductDetails,
    selectedProduct,
  };

  console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
