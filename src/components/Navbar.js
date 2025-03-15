import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Update with correct path
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="WildTrace Logo" className="navbar-logo" />
        </Link>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/report" className="nav-link">Report Incident</Link>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/about" className="nav-link">About Us</Link>
      </div>

      <div className="navbar-right">
        <Link to="/auth" className="nav-link">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
