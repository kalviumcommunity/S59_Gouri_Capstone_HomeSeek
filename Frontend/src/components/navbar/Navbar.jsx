import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import {Link} from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src={logo} alt="Logo img" />
          <span>HomeSeek</span>
        </a>
        <a href="/list">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img src="https://th.bing.com/th?id=OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA&w=249&h=249&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"/>
            <span>Gouri Agarwal</span>
            <Link to="/profile" className="profile">
            <div className="notification"> 2 </div>
            <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign in</a>
            <a href="/" className="register">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img src={menu} alt="Menu" onClick={()=>setOpen(!open)} />
        </div>

        <div className={open ? "menu active" : "menu"}>
          <a href="/list">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
