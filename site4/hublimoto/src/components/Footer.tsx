function Footer() {
  return (
    <footer className="page-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <p className="footer-logo">Hublimoto</p>
          <p className="footer-copy">
            Performance-inspired motorcycles, crafted for riders who live for the next corner,
            next straight, and the next story.
          </p>
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <p className="footer-title">Explore</p>
            <a href="#">New models</a>
            <a href="#">Pre-owned</a>
            <a href="#">Track experiences</a>
          </div>

          <div className="footer-column">
            <p className="footer-title">Support</p>
            <a href="#">Service & care</a>
            <a href="#">Warranty</a>
            <a href="#">Finance & offers</a>
          </div>

          <div className="footer-column">
            <p className="footer-title">Visit</p>
            <a href="#">Find a dealer</a>
            <a href="#">Book a test ride</a>
            <a href="#">Events</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} Hublimoto. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;