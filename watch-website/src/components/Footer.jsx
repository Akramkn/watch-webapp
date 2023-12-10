import React from "react";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import google from "../assets/images/pay/play.jpg";
import app from "../assets/images/pay/app.jpg";
import payment from "../assets/images/pay/pay.png";

const Footer = () => {
  return (
    <>
      <footer className="footer p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4 d-flex flex-column">
              <h3 className="mb-4">Contact us</h3>
              <div className="footer-details">
                <p className="mb-3">
                  <b>Address:</b> comsats university Abbottabad
                </p>
                <p className="mb-3">
                  <b>Phone:</b>{" "}
                  <a href="tel: +92123456789"> Call us 92123456789</a>
                </p>
                <p className="mb-5">
                  <b>Hours:</b> From 11 a.m To 10 p.m
                </p>
                <p className="mb-3">
                  <b>Follow us</b>
                </p>
                <div className="col-3 social-icons d-flex mb-3 justify-content-around">
                  <Link>
                    <FaTwitter className="fs-4" />
                  </Link>
                  <Link>
                    <FaFacebook className="fs-4" />
                  </Link>
                  <Link>
                    <AiFillInstagram className="fs-4" />
                  </Link>
                  <Link>
                    <FaLinkedin className="fs-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-2">
              <h3 className="mb-4">About</h3>
              <div className="footer-details d-flex flex-column">
                <Link className="mb-3">About us</Link>
                <Link className="mb-3">Delivery</Link>
                <Link className="mb-3">Privacy Policy</Link>
                <Link className="mb-3">Fee policy</Link>
                <Link className="mb-3">Tax policy</Link>
                <Link className="mb-3">Terms & conditions</Link>
              </div>
            </div>
            <div className="col-2">
              <h3 className="mb-4">Account</h3>
              <div className="footer-details d-flex flex-column">
                <Link className="mb-3">Profile</Link>
                <Link className="mb-3">View Cart</Link>
                <Link className="mb-3">Help</Link>
                <Link className="mb-3">Payments</Link>
                <Link className="mb-3">My Wishlist</Link>
                <Link className="mb-3">Coupons</Link>
              </div>
            </div>
            <div className="col-4">
              <h3 className="mb-3">Install App</h3>
              <div className="footer-details">
                <p>Available On Google Play Services & App Store</p>
                <div className="pay">
                  <Link>
                    <img src={google} alt="" className="img-fluid p-4 my-3 " />
                  </Link>
                  <Link>
                    <img src={app} alt="" className="img-fluid p-4 my-3" />
                  </Link>
                </div>
                <p className="mb-3">Payment Methods</p>
                <Link className="pay">
                  <img src={payment} alt="" className="img-fluid p-3 " />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <hr />
            <div className="row d-flex justify-content-between">
              <div className="col-9">
                <p>
                  <b>&copy; Developed By Muhammad Akram Khan</b>
                </p>
              </div>
              <div className="col-3 d-flex justify-content-around">
                <Link className="text-black" style={{ textDecoration: "none" }}>
                  privacy policy
                </Link>
                <Link className="text-black" style={{ textDecoration: "none" }}>
                  Terms of Use
                </Link>
                <Link className="text-black" style={{ textDecoration: "none" }}>
                  Contact me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
