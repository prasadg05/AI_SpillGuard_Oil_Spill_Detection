import React from "react";
import "../style.css";

export default function About() {
  return (
    <div className="container">
      <h2>About OilGps System</h2>

      <div className="card" style={{ textAlign: "left", marginTop: "30px" }}>
        <p style={{ fontSize: "15px" }}>
          <b>OilGps System</b> is an AI-driven Oil Spill Detection and Environmental
          Monitoring platform designed to identify oil spill regions from satellite
          and aerial imagery. The system helps environmental agencies, researchers,
          and authorities to quickly detect oil spills, estimate affected areas,
          and analyze environmental impact.
        </p>

        <p style={{ fontSize: "15px", marginTop: "15px" }}>
          The platform uses image processing and machine learning concepts such as
          image segmentation, pixel analysis, and visualization techniques to
          highlight oil-contaminated regions. It also generates automated PDF
          reports to support documentation and decision-making.
        </p>

        <h3 style={{ marginTop: "30px", color: "#007bff" }}>
          System Administration
        </h3>

        <p style={{ fontSize: "15px" }}>
          <b>System Administrator:</b> Prasad Gahiwal
        </p>

        <p style={{ fontSize: "15px", marginTop: "10px" }}>
          The system is developed and managed under the supervision of Prasad
          Gahiwal, ensuring smooth operation, data handling, system security, and
          continuous improvement of the OilGps platform.
        </p>
      </div>
    </div>
  );
}
