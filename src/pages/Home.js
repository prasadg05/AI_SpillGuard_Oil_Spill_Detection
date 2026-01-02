import React from "react";
import Upload from "../components/Upload";
import "../style.css";


export default function Home() {
  return (
    <div className="container">
      <h1>OilSpillGps System</h1>

      <p className="subtitle">
        AI-Driven Oil Spill Detection & Environmental Impact Analysis
      </p>

      <p style={{ fontSize: "14px", maxWidth: "700px", margin: "0 auto 30px" }}>
        OilGps System is an intelligent platform designed to detect and analyze
        oil spills from satellite imagery. The system highlights affected regions,
        estimates impacted area, and generates detailed reports to support
        environmental monitoring and decision-making.
      </p>

      <Upload />
    </div>
  );
}
