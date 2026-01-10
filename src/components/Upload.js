import React, { useState } from "react";
import axios from "axios";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!file) {
      alert("Please upload an image");
      return;
    }

    const form = new FormData();
    form.append("image", file);

    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:5000/predict",
        form
      );
      setData(res.data);
    } catch (err) {
      alert("Error while processing image");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      {/* Upload Section */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={submit}>
        {loading ? "Analyzing..." : "Upload & Analyze"}
      </button>

      {/* Result Section */}
      {data && (
        <div className="result">
          <h3>Oil Spill Detection Report</h3>

          {/* Core Results */}
          <p className="metric"><b>Status:</b> {data.status}</p>
          <p className="metric"><b>Confidence:</b> {data.confidence}%</p>
          <p className="metric"><b>Oil Spill Percentage:</b> {data.oil_percent}%</p>
          <p className="metric"><b>Affected Area:</b> {data.affected_area} sq.km</p>
          <p className="metric"><b>Uploaded Time:</b> {data.time}</p>

          {/* Technical Metadata (from backend only) */}
          <h4 style={{ marginTop: "15px", color: "#28a745" }}>
            Technical Metadata
          </h4>
          <p className="metric">
            <b>Image Resolution:</b> {data.metadata.image_resolution}
          </p>
          <p className="metric">
            <b>Segmentation Method:</b> {data.metadata.segmentation_method}
          </p>
          <p className="metric">
            <b>Threshold Value:</b> {data.metadata.threshold_value}
          </p>

          {/* Original Image */}
          <h4 style={{ marginTop: "15px", color: "#007bff" }}>
            Original Image
          </h4>
          <img
            src={`http://localhost:5000${data.original_image}`}
            alt="Original Uploaded Image"
            style={{
              width: "100%",
              marginTop: "10px",
              borderRadius: "8px",
              border: "2px solid #007bff"
            }}
          />

          {/* Segmented Image */}
          <h4 style={{ marginTop: "15px", color: "#007bff" }}>
            Oil Spill Detected
          </h4>
          <img
            src={`http://localhost:5000${data.result_image}`}
            alt="Oil Spill Detection Result"
            style={{
              width: "100%",
              marginTop: "10px",
              borderRadius: "8px",
              border: "2px solid #007bff"
            }}
          />

          {/* Mask Image */}
          <h4 style={{ marginTop: "15px", color: "#007bff" }}>
            Segmentation Mask
          </h4>
          <img
            src={`http://localhost:5000${data.mask_image}`}
            alt="Segmentation Mask"
            style={{
              width: "100%",
              marginTop: "10px",
              borderRadius: "8px",
              border: "2px solid #007bff"
            }}
          />

          {/* Detection Overlay */}
          <h4 style={{ marginTop: "15px", color: "#007bff" }}>
            Detection Overlay
          </h4>
          <img
            src={`http://localhost:5000${data.overlay_image}`}
            alt="Detection Overlay"
            style={{
              width: "100%",
              marginTop: "10px",
              borderRadius: "8px",
              border: "2px solid #007bff"
            }}
          />

          {/* Explanation */}
          <p className="impact" style={{ marginTop: "15px" }}>
            <b>Methodology:</b> The uploaded image is converted to grayscale,
            threshold-based segmentation is applied to detect darker regions,
            noise is removed using morphological operations, and oil spill area
            is estimated using pixel-level analysis.
          </p>

          {/* PDF Download */}
          <a
            href={`http://localhost:5000${data.pdf}`}
            target="_blank"
            rel="noreferrer"
          >
            Download PDF Report
          </a>
        </div>
      )}
    </div>
  );
}
