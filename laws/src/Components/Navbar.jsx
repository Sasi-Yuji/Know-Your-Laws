import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar px-4">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-4 text-white" to="/">
          Know Your Law
        </Link>

        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link custom-link text-white fw-bold" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link text-white fw-bold" to="/viral-cases">Viral Cases</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link text-white fw-bold" to="/BasicRights">Basic Rights</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link text-white fw-bold" to="/describe">Describe Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link text-white fw-bold" to="/Tips">Legal Tips</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
