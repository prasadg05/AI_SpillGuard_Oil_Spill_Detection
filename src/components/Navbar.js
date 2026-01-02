import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">OilSpillGps System</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/oil-spill-data">Oil Spill Data</Link>
        <Link to="/project-report">Project Report</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </div>
  );
}
