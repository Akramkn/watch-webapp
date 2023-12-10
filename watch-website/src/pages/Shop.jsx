import React from "react";
import ShopItems from "../components/ShopItems";

const Shop = () => {
  return (
    <>
      <section className="shop-banner p-2">
        <div className="container-xxl">
          <div className="row justify-content-center align-items-center">
            <div className="repair-details text-center p-5">
              <div>
                <h1 className="text-white">
                  On <span className="text-success">100%</span> Off on All
                  Watches
                </h1>
              </div>
              <div>
                <p className="text-white">make your orders we will deliver</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shop-products p-5">
        <div className="container-xxl">
          <div className="row">
            <ShopItems />
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
