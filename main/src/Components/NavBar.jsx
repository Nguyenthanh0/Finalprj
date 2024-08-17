import React from "react";
import "../Css/NavBar.css";
import img1 from "../img/anh01.png";
import { FaUser } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";
import { Link } from "react-router-dom";

const Navbar = () => {
  const userName = JSON.parse(localStorage.getItem("loggedInUser"))?.name;

  return (
    <nav className="navbar">
      <ul className="view">
        <li>
          <Link to="/homepage">
            <img src={img1} alt="AutoHunt Logo" width="118" height="32" />
          </Link>
        </li>
        <li>
          <Link to="/newcars">New Cars</Link>
        </li>
        <li>
          <Link to="/usedcars">Used Cars</Link>
        </li>
        <li>
          <Link to="">Compare</Link>
        </li>
        <li>
          <Link to="">Sell</Link>
        </li>
        <li>
          <Link to="">
            <select className="article-select">
              <option value="">Artical</option>
            </select>
          </Link>
        </li>
      </ul>

      <div className="navbar-right">
        {userName ? (
          <div className="user-info">
            <span style={{ color: "white" }}>
              {" "}
              <span style={{ color: "#007bff", fontSize: "24px" }}>
                Welcome
              </span>
              , {userName}
            </span>
            <button
              onClick={() => {
                localStorage.removeItem("loggedInUser");
                window.location.reload(); // Tải lại trang để cập nhật Navbar
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="signIn">
            <Link to="/login">
              <FaUser />
              <span className="sign-in">Sign In</span>
            </Link>
          </div>
        )}
        <div className="language">
          <GrLanguage className="lIcon" />
          <select className="language-select">
            <option value="en">EN</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
