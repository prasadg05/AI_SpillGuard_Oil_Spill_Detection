import React from "react";
import "../style.css";

export default function ProjectReport() {
  return (
    <div className="container">
      <h2>Oil Spill Detection – Detailed Project Report</h2>

      <div className="report-card">


        <h3>Problem Statement</h3>
        <p>
          Oil spills pose a severe threat to marine ecosystems, coastal regions,
          and economic activities. Manual monitoring techniques are slow and
          inefficient. This project proposes an AI-based automated oil spill
          detection system using satellite imagery.
        </p>

        <h3>System Architecture</h3>
        <p>
          The system follows a modular architecture consisting of image
          preprocessing, segmentation, visualization, and reporting modules.
        </p>
        <p>
          <b>Challenge:</b> Noisy satellite images  
          <br />
          <b>Solution:</b> Preprocessing and normalization techniques
        </p>

        <h3>Data Collection</h3>
        <p>
          Satellite images were collected from open-source datasets such as SAR
          imagery and publicly available oil spill datasets.
        </p>
        <p>
          <b>Challenge:</b> Limited labeled data  
          <br />
          <b>Solution:</b> Dataset augmentation and manual annotation
        </p>

        <h3>Image Processing & Training</h3>
        <p>
          Images are converted to grayscale and processed using threshold-based
          segmentation. Deep learning models are trained to detect oil-contaminated
          regions.
        </p>
        <p>
          <b>Challenge:</b> Detecting fine spill boundaries  
          <br />
          <b>Solution:</b> Use of encoder–decoder architectures
        </p>

        <h3>Visualization</h3>
        <p>
          The detected oil spill regions are highlighted using colored overlays on
          the original image for easy interpretation.
        </p>

        <h3>Result Analysis</h3>
        <p>
          The system computes oil spill percentage and affected area using
          pixel-level analysis and confidence scoring.
        </p>

        <h3>Report Generation</h3>
        <p>
          A detailed PDF report is generated automatically including all detection
          metrics, timestamp, and environmental impact summary.
        </p>

        <h3>Technology Stack</h3>
        <ul>
          <li>Frontend: React.js</li>
          <li>Backend: Python Flask</li>
          <li>Image Processing: OpenCV</li>
          <li>Reporting: ReportLab</li>
        </ul>

        <h3>Conclusion</h3>
        <p>
          The OilspillGps System demonstrates how AI and image processing can be
          effectively applied to environmental monitoring, enabling faster and
          more accurate oil spill detection.
        </p>

      </div>
    </div>
  );
}
