import React, { useContext } from "react";
import { ShopContext } from "./ShopContextProvider";

const Prod = ({ data }) => {
  const { id, name, image, price, brand } = data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id] || 0;

  return (
    <div key={id} className="col-lg-3 col-md-4 col-sm-6">
      <div className="card mb-4">
        <img src={image} alt={name} className="card-img-top img-fluid" />
        <div className="card-body">
          <span className="text-muted">{brand}</span>
          <h5 className="card-title my-2">{name}</h5>
          <p className="card-text mb-2">
            <strong>${price}</strong>{" "}
            <span className="text-danger">
              <strike>${price * 2}</strike>
            </span>
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <button
              onClick={() => addToCart(id)}
              className="btn btn-success" 
              style={{ backgroundColor: "#00a97f", border: "none" }}
            >
              Add To Cart {cartItemCount > 0 && `(${cartItemCount})`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prod;
