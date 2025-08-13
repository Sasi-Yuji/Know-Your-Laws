import React, { useState } from 'react';
import legalTipsData from '../data/LegalTips';
import './LegalTips.css';

const LegalTips = () => {
  const [expandedTips, setExpandedTips] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const toggleTip = (index) => {
    setExpandedTips((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const filteredTips = legalTipsData.filter(
    (tip) =>
      tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tip.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="legal-tips-section">
      <div className="legal-tips-container">

        <h1 className="legal-tips-heading">Legal Tips</h1>
        <p className="legal-tips-subtitle">
          Quick awareness on FIR, arrests, traffic rules, bail, warrants, and more.
        </p>

        <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
         type="text"
         placeholder="Search by keyword (e.g., FIR, arrest, traffic)..."
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
         />
        </div>


        <div className="tips-grid">
          {filteredTips.map((tip, index) => (
            <div
              className={`tip-card ${expandedTips[index] ? 'expanded' : ''}`}
              key={index}
            >
              <h3>{tip.title}</h3>
              <button onClick={() => toggleTip(index)}>
                {expandedTips[index] ? 'Hide' : 'Learn More'}
              </button>
              {expandedTips[index] && (
                <p className="tip-description">{tip.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegalTips;
