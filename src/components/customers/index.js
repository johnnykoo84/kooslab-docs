import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; // Import Slider component
import customers from "/src/data/customers.json";
import { useColorMode } from "@docusaurus/theme-common";

const Customers = ({ logos }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 1500,
    autoplay: true,
  };

  const { colorMode, setColorMode } = useColorMode();

  console.log("customers", customers);
  return (
    <div
      className={`carousel-container ${
        colorMode === "dark" ? "bg-primary" : ""
      } mb-12`}
    >
      <Slider {...settings}>
        {customers.map((customer, index) => (
          <div key={index} className="flex items-center justify-center p-4">
            <img
              src={customer.logo}
              className="bg-white mx-auto h-24 object-contain"
              alt={`${customer.logo.split("/").pop().split(".")[0]} logo`}
              onError={(e) => (e.target.style.display = "none")} // Hide if error
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Customers;
