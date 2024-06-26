import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("Header render");

  // if dependency array is empty = [] => useEffect is called on inital render
  // if no dependency array => useEffect is called on every render
  useEffect(() => {
    console.log("useEffect called");
  });

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul className="li">
          <li><Link to = "/">Home</Link></li>
          <li><Link to = "/about">About Us</Link></li>
          <li><Link to = "/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
