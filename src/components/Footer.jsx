function Footer() {
    return (
      <footer className="footer" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '20px 0' }}>
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Company</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>info@company.com</p>
            <p>+123 456 7890</p>
            <div className="social-icons">
              <span>f</span>
              <span>t</span>
              <span>in</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;