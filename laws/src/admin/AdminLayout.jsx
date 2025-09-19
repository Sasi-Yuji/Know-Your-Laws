import { Link, Outlet, useLocation } from "react-router-dom";
import "./AdminLayout.css";

function AdminLayout() {
  const location = useLocation();

  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <h2 className="sidebar-title">Admin Panel</h2>
        <nav>
          <ul>
            <li className={location.pathname === "/admin-dashboard" ? "active" : ""}>
              <Link to="/admin-dashboard">Dashboard</Link>
            </li>
            <li className={location.pathname === "/admin-laws" ? "active" : ""}>
              <Link to="/admin">Business Laws</Link>
            </li>
            <li className={location.pathname === "/admin-rights" ? "active" : ""}>
              <Link to="/admin-rights">Basic Rights</Link>
            </li>
            <li className={location.pathname === "/admin-legal" ? "active" : ""}>
              <Link to="/admin-legal">Legal Tips</Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
