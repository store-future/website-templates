import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logos/yamaha_logo-black.webp";

function Navbar() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 10);

      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    // close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => (location.pathname === path ? "active" : "");

  return (
    <header
      className={`navbar ${isVisible ? "visible" : "hidden"} ${
        isScrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Yamaha Logo" />
          </Link>
        </div>

        <nav className={`nav-links-wrapper ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <Link className={isActive("/")} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={isActive("/products")} to="/products">
                Products
              </Link>
            </li>
            <li>
              <Link className={isActive("/dealers")} to="/dealers">
                Dealers
              </Link>
            </li>
            <li>
              <Link className={isActive("/service")} to="/service">
                Service
              </Link>
            </li>
            <li>
              <Link className={isActive("/parts")} to="/parts">
                Parts
              </Link>
            </li>
            <li>
              <Link className={isActive("/events")} to="/events">
                Events
              </Link>
            </li>
            <li>
              <Link className={isActive("/contact")} to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          <div className="nav-cta">
            <button className="btn-primary nav-cta-btn">Book a test ride</button>
          </div>
        </nav>

        <button
          className={`nav-toggle ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;