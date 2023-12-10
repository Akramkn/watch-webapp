import React from "react";

const Wishlist = () => {
  return (
    <div className="container mt-5 text-center mb-5">
      <h2 className="mb-4">Wishlist</h2>
      <div className="card p-4 shadow-sm rounded">
        <p className="fs-4 text-black mb-4">Your Wishlist is Empty</p>
        <p className="text-muted">Start adding items to your wishlist today!</p>
      </div>
    </div>
  );
};

export default Wishlist;
