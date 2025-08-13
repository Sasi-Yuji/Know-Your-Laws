import React, { useState } from "react";
import businessData from "../data/businessPermits.json";
import "./DescribeBusiness.css";

const DescribeBusiness = () => {
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  const handleCardClick = (business) => {
    setSelectedBusiness(business);
  };

  const closeModal = () => {
    setSelectedBusiness(null);
  };

  return (
    <div className="describe-container">
      <h1 className="describe-heading">Describe Business</h1>
      <p className="describe-subtext">
        Click a card to view permit details, estimated costs, validity, and where to apply.
      </p>

      <div className="business-grid">
        {businessData.map((business, index) => (
          <div
            className="business-card"
            key={index}
            onClick={() => handleCardClick(business)}
          >
            <div className="biz-img-placeholder">
              <img src="tea-shop.png" alt="Tea Shop" />
            </div>
            <h3>{business.businessType}</h3>
            <p>
              Learn about permits & licenses needed for {business.businessType}.
            </p>
          </div>
        ))}
      </div>

      {selectedBusiness && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Required Permits:</h2>
            <ul>
              {selectedBusiness.permits.map((permit, i) => (
                <li key={i}>
                  <strong>{permit.name}</strong> – ₹{permit.estimatedCostINR} (
                  {permit.validityYears} year
                  {permit.validityYears > 1 ? "s" : ""})
                  {permit.whereToApply && (
                    <div className="permit-apply-info">
                      <em>Where to apply:</em> {permit.whereToApply}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DescribeBusiness;
