import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BasicRights.css";

const BasicRights = () => {
  const [rights, setRights] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTag, setFilterTag] = useState("");
  const [selectedRight, setSelectedRight] = useState(null);

  useEffect(() => {
    const fetchRights = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/rights");
        setRights(res.data);
      } catch (err) {
        console.error("❌ Error fetching rights:", err);
      }
    };
    fetchRights();
  }, []);

  const filteredRights = rights.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.tag || "").toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = filterTag ? item.tag === filterTag : true;

    return matchesSearch && matchesFilter;
  });

  const uniqueTags = [...new Set(rights.map((item) => item.tag))];

  return (
    <div className="rights-section">
      <div className="rights-container">
        <h2 className="rights-heading">Know Your Basic Legal Rights</h2>
        <p
          style={{
            color: "#555",
            marginBottom: "1.5rem",
            fontSize: "1.1rem",
          }}
        >
          Essential rights every citizen should know to protect themselves.
        </p>

        <div className="search-filter-container">
          <input
            type="text"
            placeholder="Search rights by keywords like FIR, vote, equality..."
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="filter-dropdown"
            value={filterTag}
            onChange={(e) => setFilterTag(e.target.value)}
          >
            <option value="">All Categories</option>
            {uniqueTags.map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>

        <div className="card-grid">
          {filteredRights.map((item) => (
            <div key={item._id} className="law-card">
              <div className="law-title">{item.title}</div>
              <div className="law-description">{item.description}</div>
              <button
                className="learn-more-btn"
                onClick={() => setSelectedRight(item)}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        {selectedRight && (
          <div
            className="modal-overlay"
            onClick={() => setSelectedRight(null)}
          >
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <h3>{selectedRight.title}</h3>
              <p>{selectedRight.description}</p>
              <h4>Steps to Exercise this Right:</h4>
              <ol>
                {selectedRight.steps?.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
              <button
                className="close-modal-btn"
                onClick={() => setSelectedRight(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BasicRights;
