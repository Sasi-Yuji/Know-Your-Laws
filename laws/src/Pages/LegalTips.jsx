import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LegalTips.css";

const API = "http://localhost:5000/api/tips";

const LegalTips = () => {
  const [expandedTips, setExpandedTips] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [tips, setTips] = useState([]);
  const [categories, setCategories] = useState([]); 

  useEffect(() => {
    fetchTips();
  }, []);

  const fetchTips = async () => {
    try {
      const res = await axios.get(API);
      setTips(res.data);

      const uniqueCategories = [
        ...new Set(res.data.map((tip) => tip.category.toLowerCase())),
      ];
      setCategories(uniqueCategories);
    } catch (err) {
      console.error("Error fetching legal tips:", err);
    }
  };

  const toggleTip = (index) => {
    setExpandedTips((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const filteredTips = tips.filter((tip) => {
    const matchesSearch =
      tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tip.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tip.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tip.emergencyHelpline.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" ||
      tip.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="legal-tips-section">
      <div className="legal-tips-container">
        <h1 className="legal-tips-heading">Legal Tips</h1>
        <p className="legal-tips-subtitle">
          Quick awareness on FIR, arrests, traffic rules, bail, warrants, and more.
        </p>

        <div className="search-filter-row">
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search by keyword or helpline..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            className="category-filter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="tips-grid">
          {filteredTips.map((tip, index) => (
            <div
              className={`tip-card ${expandedTips[index] ? "expanded" : ""}`}
              key={tip._id}
            >
              <div className="tip-content">
                <h3>{tip.title}</h3>

                {expandedTips[index] && (
                  <>
                    <p className="tip-description">{tip.description}</p>
                    <p className="tip-helpline">
                       Helpline: {tip.emergencyHelpline}
                    </p>
                  </>
                )}
              </div>

              <button onClick={() => toggleTip(index)}>
                {expandedTips[index] ? "Hide" : "Learn More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegalTips;
