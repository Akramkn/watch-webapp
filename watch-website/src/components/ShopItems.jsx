import React from "react";
import Prod from "./Prod";
import { PRODUCTS, PRODUCTS1 } from "./Products";

const ShopItems = () => {
  return (
    <div className="row">
      {[...PRODUCTS, ...PRODUCTS1].map((product) => (
        <Prod key={PRODUCTS.id} data={product} />
      ))}
    </div>
  );
};

export default ShopItems;
