import React, { useEffect, useState } from "react";
import "./ViralCases.css";

const ViralCases = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "pub_eddd1fbf18d44d719973b303ba0f2a35";

  useEffect(() => {
    const fetchViralCases = async () => {
      try {
        const response = await fetch(
          `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=india court case&country=in&language=en`
        );
        const data = await response.json();
        if (data.results) {
          setCases(data.results.slice(0, 6));
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching viral cases:", error);
        setLoading(false);
      }
    };

    fetchViralCases();
  }, []);

  return (
    <div className="viral-cases-section">
      <h2 className="viral-heading">Top Viral Cases</h2>
      <p className="viral-subtitle">
        Stay updated with the most trending legal cases and their latest developments.
      </p>

      {loading ? (
        <p className="loading-text">Loading cases...</p>
      ) : (
        <div className="cases-grid">
          {cases.map((item, index) => (
            <div key={index} className="case-card">
              {item.image_url && (
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="case-image"
                />
              )}
              <h3 className="case-title">{item.title}</h3>
              <p className="case-description">
                {item.description
                  ? item.description.slice(0, 120) + "..."
                  : "No description available."}
              </p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more-btn"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      )}

      
    </div>
  );
};

export default ViralCases;
