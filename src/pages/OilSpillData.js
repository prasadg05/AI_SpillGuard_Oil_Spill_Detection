import React from "react";
import "../style.css";

export default function OilSpillData() {
  return (
    <div className="container">
      <h2>Major Historical Oil Spill Incidents</h2>

      <div className="card oil-spill-card" style={{ textAlign: "left", marginTop: "30px" }}>
        <table className="spill-table">
          <thead>
            <tr>
              <th>Incident</th>
              <th>Location</th>
              <th>Year</th>
              <th>Spill Size (barrels)</th>
              <th>Impact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Deepwater Horizon</td>
              <td>Gulf of Mexico</td>
              <td>2010</td>
              <td>4,900,000</td>
              <td>Severe marine ecosystem damage, fisheries loss</td>
            </tr>
            <tr>
              <td>Exxon Valdez</td>
              <td>Alaska, USA</td>
              <td>1989</td>
              <td>260,000</td>
              <td>Long-term coastal and wildlife damage</td>
            </tr>
            <tr>
              <td>Ixtoc I Oil Spill</td>
              <td>Gulf of Mexico</td>
              <td>1979</td>
              <td>3,300,000</td>
              <td>Large-scale ocean pollution</td>
            </tr>
            <tr>
              <td>Atlantic Empress</td>
              <td>Caribbean Sea</td>
              <td>1979</td>
              <td>2,100,000</td>
              <td>Open-sea pollution and tanker collision damage</td>
            </tr>
            <tr>
              <td>Prestige Oil Spill</td>
              <td>Coast of Spain</td>
              <td>2002</td>
              <td>440,000</td>
              <td>Coastal contamination and economic loss</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ marginTop: "25px", fontSize: "14px", maxWidth: "800px", marginInline: "auto" }}>
        These incidents highlight the importance of early oil spill detection and
        monitoring systems like OilGps to minimize environmental and economic
        damage.
      </p>
    </div>
  );
}
