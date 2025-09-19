import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminDashboard.css";

const API = "http://localhost:5000";

function AdminDashboard() {
  const [stats, setStats] = useState({
    businessCount: 0,
    rightsCount: 0,
    tipsCount: 0,
  });

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken"); 
    navigate("/admin/login"); 
  };

  useEffect(() => {
    axios
      .get(`${API}/api/dashboard-stats`)
      .then((res) => setStats(res.data))
      .catch((err) => console.error("Error fetching stats:", err));
  }, []);

  return (
    <div className="admin-dashboard d-flex">
      <aside className="sidebar">
        <h2 className="mb-4">Admin Panel</h2>
        <ul className="list-unstyled">
          <li>
            <Link to="/admin/dashboard">
              <i className="bi bi-speedometer2 me-2"></i> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/laws">
              <i className="bi bi-briefcase-fill me-2"></i> Business Laws
            </Link>
          </li>
          <li>
            <Link to="/admin/rights">
              <i className="bi bi-shield-lock-fill me-2"></i> Basic Rights
            </Link>
          </li>
          <li>
            <Link to="/admin/legal">
              <i className="bi bi-journal-text me-2"></i> Legal Tips
            </Link>
          </li>
        </ul>

        <button className="btn btn-danger mt-4 w-100" onClick={handleLogout}>
          <i className="bi bi-box-arrow-right me-2"></i> Logout
        </button>
      </aside>

      <main className="main-content flex-grow-1 p-4">
        <h1 className="mb-4">Dashboard</h1>

        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card text-center shadow-sm border-primary">
              <div className="card-body">
                <i className="bi bi-briefcase-fill display-5 text-primary"></i>
                <h5 className="card-title mt-2">Business Laws</h5>
                <p className="card-text display-6 text-primary">
                  {stats.businessCount}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card text-center shadow-sm border-success">
              <div className="card-body">
                <i className="bi bi-shield-lock-fill display-5 text-success"></i>
                <h5 className="card-title mt-2">Basic Rights</h5>
                <p className="card-text display-6 text-success">
                  {stats.rightsCount}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card text-center shadow-sm border-danger">
              <div className="card-body">
                <i className="bi bi-journal-text display-5 text-danger"></i>
                <h5 className="card-title mt-2">Legal Tips</h5>
                <p className="card-text display-6 text-danger">
                  {stats.tipsCount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
