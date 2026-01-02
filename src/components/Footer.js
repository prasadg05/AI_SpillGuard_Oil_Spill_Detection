import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>OilSpillGPSSystem</h4>
          <p>Company: OilGPSSystem</p>
          <p>Advanced oil spill detection and monitoring system using AI and satellite imagery.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/oil-spill-data">Oil Spill Data</Link></li>
            <li><Link to="/project-report">Project Report</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 OilGPS System. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;