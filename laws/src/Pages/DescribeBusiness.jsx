import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DescribeBusiness.css";

const API = "http://localhost:5000";

const DescribeBusiness = () => {
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios
      .get(`${API}/api/businesses`) 
      .then((res) => setCards(res.data))
      .catch((err) => console.error("Error fetching business:", err));
  }, []);

  return (
    <div className="describe-container">
      <h1 className="describe-heading">Describe Business</h1>
      <p className="describe-subtext">Click a card to view details.</p>

      <div className="business-grid">
        {cards.map((c) => (
          <div
            className="business-card"
            key={c._id}
            onClick={() => setSelected(c)}
          >
            <div className="biz-img-placeholder">
              <img
                src={
                  c.image
                    ? `${API}/uploads/${c.image}` 
                    : process.env.PUBLIC_URL + "/tea-shop.png"
                }
                alt={c.title}
              />
            </div>
            <h3>{c.title}</h3>
            <p>
              {c.description?.length > 120
                ? c.description.slice(0, 120) + "…"
                : c.description}
            </p>
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selected.title}</h2>

            {selected.image && (
              <div className="modal-img-wrapper">
                <img
                  src={`${API}/uploads/${selected.image}`}
                  alt={selected.title}
                />
              </div>
            )}

            <div style={{ margin: "10px 0" }}>{selected.description}</div>

            {selected.permits?.length > 0 && (
              <div style={{ marginTop: "1rem" }}>
                <h3>Required Permits</h3>
                <ul>
                  {selected.permits.map((p, idx) => (
                    <li key={idx} style={{ marginBottom: "12px" }}>
                      <strong>{p.name}</strong>
                      <br />
                      Estimated Cost: ₹{p.estimatedCostINR}
                      <br />
                      Validity: {p.validityYears} year
                      {p.validityYears > 1 ? "s" : ""}
                      <br />
                      <div className="permit-apply-info">
                        <em>Where to apply:</em>{" "}
                        {p.whereToApply?.startsWith("http") ? (
                          <a
                            href={p.whereToApply}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {p.whereToApply}
                          </a>
                        ) : (
                          p.whereToApply
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button
              onClick={() => setSelected(null)}
              style={{ marginTop: 16 }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DescribeBusiness;
