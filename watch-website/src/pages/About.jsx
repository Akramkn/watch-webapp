import React from "react";
import img1 from "../assets/images/products/product1.jpg";

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="about-image-container text-center">
            <img
              src={img1}
              alt="WristUp Watches"
              className="img-fluid rounded mx-auto d-block"
              style={{
                maxWidth: "80%",
                height: "auto",
                borderRadius: "15px",
                transition: "transform 0.2s ease-in-out",
              }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            />
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="mb-4">
            About <span className="text-success">WristUp</span>
          </h2>
          <p>
            Welcome to <span className="text-success">WristUp</span>, your
            premier destination for luxury watches. We take pride in offering a
            curated selection of timepieces that seamlessly blend style and
            functionality.
          </p>
          <p>
            Our collection features an array of designs, ranging from timeless
            classics to modern marvels. Each watch is meticulously crafted with
            precision, using only the finest materials to ensure longevity and
            timeless beauty.
          </p>
          <p>
            At <span className="text-success">WristUp</span>, we believe that a
            watch is not merely a timekeeping device; it is a statement piece
            that reflects your personality and complements your unique style.
            Explore our carefully curated collection and discover the perfect
            watch to accompany you on every occasion.
          </p>
          <p>
            Thank you for choosing <span className="text-success">WristUp</span>
            . Elevate your style with our exquisite watches and experience the
            perfect blend of craftsmanship and elegance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
