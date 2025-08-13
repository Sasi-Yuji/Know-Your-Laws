import React, { useEffect, useState } from "react";
import "./ViralCasesPreview.css";

const ViralCasesPreview = () => {
  const [cases, setCases] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(`https://newsdata.io/api/1/news?apikey=pub_eddd1fbf18d44d719973b303ba0f2a35&q=india court case&country=in&language=en`)
      .then(res => res.json())
      .then(data => {
        if (data.results) {
          setCases(data.results.slice(0, 3)); 
        }
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % cases.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [cases]);

  if (cases.length === 0) return <p>Loading viral cases...</p>;

  const caseItem = cases[currentIndex];

  return (
    <div className="viral-preview">
      <h2>Top Viral Cases</h2>
      <div className="viral-card">
        <h3>{caseItem.title}</h3>
        <p>{caseItem.description?.slice(0, 120)}...</p>
        <a href={caseItem.link} target="_blank" rel="noopener noreferrer" className="read-more">
          Read More
        </a>
      </div>
<button 
  className="allview"
  onClick={() => window.location.href = "/viral-cases"}
>
  View All Cases
</button>

    </div>
  );
};

export default ViralCasesPreview;
