import React from "react";
import "../style.css";

export default function Contact() {
  return (
    <div className="container">
      <h2>Contact Us</h2>

      <div className="card" style={{ textAlign: "left", marginTop: "25px" }}>
        <p>
          This project is developed as part of the{" "}
          <b>Infosys Springboard Internship Program</b>, focusing on the
          application of Artificial Intelligence and Image Processing techniques
          for environmental monitoring.
        </p>

        <h3 style={{ color: "#64ffda", marginTop: "20px" }}>
          Developer & Project Owner
        </h3>

        <p><b>Name:</b> Prasad Gahiwal</p>
        <p><b>Degree:</b> B.Tech in Information Technology</p>
        <p>
          <b>Institute:</b> JSPM Rajarshi Shahu College of Engineering, Pune
        </p>

        <h3 style={{ color: "#64ffda", marginTop: "20px" }}>
          Project Information
        </h3>

        <p><b>Project Title:</b> OilspillGps System</p>
        <p>
          <b>Project Domain:</b> Oil Spill Detection & Environmental Management
        </p>
        <p>
          <b>Project Mentor :</b> Springboard Mentor 
        </p>

        <p style={{ marginTop: "20px", fontSize: "14px" }}>
          This platform demonstrates the integration of web technologies with
          AI-based image analysis to address real-world environmental challenges.
        </p>
      </div>
    </div>
  );
}
