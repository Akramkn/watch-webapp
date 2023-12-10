import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineInboxIn } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";
import { PiShoppingCart } from "react-icons/pi";
import { useContext } from "react";
import { ShopContext } from "./ShopContextProvider";

const Header = () => {
  const location = useLocation();
  const { cartItems } = useContext(ShopContext);

  const cartItemCount = Object.values(cartItems).reduce(
    (total, count) => total + count,
    0
  );
  return (
    <header>
      <div className="header-upper px-3 fixed-top">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2 text-center">
              <Link to="/" style={{ textDecoration: "none" }}>
                <p className="logo-fluid">WristUp</p>
              </Link>
            </div>
            <div className="nav-links col-5 d-flex align-items-center justify-content-between">
              <Link
                style={{ textDecoration: "none" }}
                to={"/"}
                className={location.pathname === "/" ? "active" : "inactive"}
              >
                Home
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to={"/shop"}
                className={
                  location.pathname === "/shop" ? "active" : "inactive"
                }
              >
                Shop
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to={"/about"}
                className={
                  location.pathname === "/about" ? "active" : "inactive"
                }
              >
                About
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to={"/contact"}
                className={
                  location.pathname === "/contact" ? "active" : "inactive"
                }
              >
                Contact
              </Link>
            </div>
            <div className="nav-links-nav col-3 d-flex align-items-center justify-content-around">
              <Link
                to={"wishlist"}
                className="d-flex"
                style={{ textDecoration: "none" }}
              >
                <HiOutlineInboxIn className="fs-3  mx-2 m-auto" />
                <p>wishlist</p>
              </Link>
              <Link
                to={"login"}
                className="d-flex"
                style={{ textDecoration: "none" }}
              >
                <VscAccount className="fs-3 mx-2" />
                <p>Acccount</p>
              </Link>
              <Link
                to={"cart"}
                className="d-flex"
                style={{ textDecoration: "none" }}
              >
                <PiShoppingCart className="fs-3 mx-2" />
                <p className="cartstate bg-success text-light p-2 rounded-pill">
                  {cartItemCount}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
