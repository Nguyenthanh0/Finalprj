import React from "react";
import imghp from "../images/imghp.png";
import "./Header.css";
import Search from "./Search";
import Carousel from "./Carousel";
import Navbar from "../Components/NavBar";

function Header() {
  return (
    <>
      <div className="header">
        <Carousel></Carousel>
        <div className="message">
          <h1>Find your dream car</h1>
          <p style={{ width: "329px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        <div className="navbar">
          <Navbar></Navbar>
        </div>
      </div>
      <Search></Search>
    </>
  );
}

export default Header;
