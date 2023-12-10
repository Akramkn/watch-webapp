import React from "react";

const Cart = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Your Shopping Cart</h2>
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <div className="card p-4">
            <h3>Your Cart is Empty</h3>
            <p className="lead">
              It seems like your shopping cart is currently empty. Explore our
              products and add items to your cart to make a purchase.
            </p>
            <a href="/shop" className="btn btn-success">
              Explore Products
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
