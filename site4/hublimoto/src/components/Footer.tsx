import './Footer.css'
import yamahaLogo from '../assets/logos/brand-logo.webp'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">

        {/* ── LEFT — Logo + About ── */}
        <div className="footer-col footer-left">
          <div className="footer-logo-wrap">
            <img src={yamahaLogo} alt="Yamaha" className="footer-logo" />
            <p className="footer-brand-tagline">Revs Your Heart</p>
          </div>
          <p className="footer-about">
            Yamaha Motor made its initial foray into India in 1985 as a joint-venture. In August 2001,
            it became a 100% subsidiary of Yamaha Motor Co., Ltd, Japan (YMC). In 2008, Mitsui &amp; Co. Ltd.
            entered into an agreement with YMC to become a joint-investor in India Yamaha Motor Private Limited (IYM).
          </p>
        </div>

        {/* ── MIDDLE — Links ── */}
        <div className="footer-col footer-middle">
          <p className="footer-section-label">Navigation</p>
          <h3>
            Explore Yamaha
            <span>Revs Your Heart</span>
          </h3>
          <ul className="footer-links">
            <li><a href="#">Motorcycles</a></li>
            <li><a href="#">Scooters</a></li>
            <li><a href="#">Racing</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Service &amp; Support</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>

        {/* ── RIGHT — Stay Connected ── */}
        <div className="footer-col footer-right">
          <h4>Stay Connected</h4>
          <p className="footer-connect-title">Find Us &amp; Follow</p>

          <div className="footer-location">
            <div className="footer-location-icon">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>
            <div className="footer-location-text">
              <strong>Yamaha Motor India Pvt. Ltd.</strong>
              Opposite the Urban Oasis Mall on Airport Road,  <br />
              Hubli, Karnataka — 201 306
            </div>
          </div>

          <p className="footer-socials-label">Follow us</p>
          <div className="footer-socials">
            {/* Instagram */}
            <a href="#" aria-label="Instagram">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" aria-label="Facebook">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" aria-label="YouTube">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0d0d0d" />
              </svg>
            </a>
          </div>
        </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
