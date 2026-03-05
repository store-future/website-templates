import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logos/yamaha_logo-black.webp";    

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Yamaha Logo" />
          </Link>
        </div>

        {/* Menu */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/dealers">Dealers</Link></li>
          <li><Link to="/service">Service</Link></li>
          <li><Link to="/parts">Parts</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

      </div>
    </header>
  );
}

export default Navbar;