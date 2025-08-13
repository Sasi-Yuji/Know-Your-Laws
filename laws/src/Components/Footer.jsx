import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h2>Know Your Law</h2>
          <p>Empowering small businesses with legal knowledge & rights awareness.</p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Browse Laws</a></li>
              <li><a href="#">Legal Tips</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">GST Guide</a></li>
              <li><a href="#">Permits & Licenses</a></li>
              <li><a href="#">Consumer Rights</a></li>
              <li><a href="#">Business Compliance</a></li>
            </ul>
          </div>
          <div>
            <h4>Connect With Us</h4>
            <ul className="social-icons">
              <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Know Your Law. All Rights Reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
      </div>
    </footer>
  );
}

export default Footer;
