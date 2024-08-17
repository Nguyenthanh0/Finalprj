import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { IoEyeSharp } from "react-icons/io5";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Register from "./Register";
import Navbar from "../Components/NavBar";
import Footer from "./Footer";
import logo from "../images/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State để quản lý hiển thị mật khẩu
  const navigate = useNavigate();

  const handleKeyDown = (e, nextInputId) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const nextInputElement = document.getElementById(nextInputId);
      if (nextInputElement) {
        nextInputElement.focus();
      }
    }
  };

  const handleLogin = () => {
    if (!name || !password) {
      setError("Please enter both name and password.");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.name === name && user.password === password
    );

    if (user) {
      alert("Đăng nhập thành công");
      if (rememberMe) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
      }
      navigate("/"); // Chuyển hướng đến trang chính sau khi đăng nhập thành công
    } else {
      alert("Name hoặc password không đúng");
    }
  };

  //   const handleRegisterRedirect = () => {
  //     navigate("/register");
  //   };

  return (
    <div>
      <div className="narbar-login">
        <Navbar></Navbar>
      </div>

      <div className="container-thanh text-center">
        <div className="div1-login-thanh">
          <div className="input-group">
            <label htmlFor="loginUsername">Name</label>
            <input
              id="loginName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, "loginPassword")}
              placeholder="Full name"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="loginPassword">Password</label>
            <input
              id="loginPassword"
              type={showPassword ? "text" : "password"} // Hiển thị mật khẩu nếu showPassword là true
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            {showPassword ? (
              <IoEyeSharp
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <BsFillEyeSlashFill
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
          {error && <p className="error">{error}</p>}{" "}
          {/* Hiển thị thông báo lỗi nếu có */}
          <div className="checkbox-group">
            <input
              id="rememberMe"
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="inputCheckbox-login-thanh"
            />
            <label htmlFor="rememberMe" style={{ color: "white" }}>
              Remember me
            </label>
          </div>
          <button className="btn-thanh" onClick={handleLogin}>
            Sign In
          </button>
          <p
            className="p-register-thanh"
            style={{ color: "#ffffff", textAlign: "center" }}
          >
            Not a member?{" "}
            <Link to="/register">
              <a className="link">Register</a>
            </Link>
          </p>
        </div>
        <div className="div2-login-thanh">
          <div className="box-login-thanh">
            <img
              src={logo}
              alt="carlogo"
              style={{ width: "236px", height: "63px" }}
            />
            <div className="welcome-login">
              <h2 className="h2-login">Login</h2>
              <p className="p-login">Welcome to Autohunt</p>
            </div>
            <div className="socialIcon">
              <FaFacebook />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Login;
