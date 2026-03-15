import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logos/yamaha_logo-black.webp";
import card1 from "../../assets/images/download.png";
import card2 from "../../assets/images/download1.png";
import card3 from "../../assets/images/download2.webp";
import card4 from "../../assets/images/R15-S.png.webp";
import card5 from "../../assets/images/xsr_black-pc.webp";
import card6 from "../../assets/images/xsr_silver_price-award-pc.webp";

type BikeItem = { name: string; image: string };
type RightContent = { type: "bikes"; items: BikeItem[] } | { type: "links"; items: string[] };

type NavMegaConfig = {
  sidebar: string[];
  // if a sidebar item has subseries, it goes here
  subseries?: Record<string, string[]>;
  // content keyed by sidebar item OR subseries item
  content: Record<string, RightContent>;
};

const navMegaData: Record<string, NavMegaConfig> = {
  Products: {
    sidebar: ["Motorcycle", "Scooter", "EV"],
    subseries: {
      Motorcycle: ["R-Series", "MT-Series", "XSR", "FZ-Series"],
      Scooter:    ["Fascino", "Ray ZR", "Aerox", "Cygnus"],
      EV:         ["E01", "NEO's", "D'elight", "EC-05"],
    },
    content: {
      // Motorcycle subseries
      "R-Series":  { type: "bikes", items: [{ name: "YZF-R1", image: card1 }, { name: "YZF-R3", image: card2 }, { name: "YZF-R15", image: card4 }, { name: "YZF-R6", image: card3 }] },
      "MT-Series": { type: "bikes", items: [{ name: "MT-07", image: card2 }, { name: "MT-09", image: card3 }, { name: "MT-15", image: card1 }, { name: "MT-03", image: card4 }] },
      "XSR":       { type: "bikes", items: [{ name: "XSR 900", image: card5 }, { name: "XSR 700", image: card6 }, { name: "XSR 125", image: card3 }, { name: "XSR Silver", image: card2 }] },
      "FZ-Series": { type: "bikes", items: [{ name: "FZ-S FI", image: card3 }, { name: "FZ 25", image: card1 }, { name: "FZS 25", image: card4 }, { name: "FZ-X", image: card2 }] },
      // Scooter subseries
      "Fascino":   { type: "bikes", items: [{ name: "Fascino 125", image: card5 }, { name: "Fascino Fi", image: card6 }, { name: "Fascino S", image: card2 }, { name: "Fascino Hybrid", image: card3 }] },
      "Ray ZR":    { type: "bikes", items: [{ name: "Ray ZR 125", image: card6 }, { name: "Ray ZR Street", image: card5 }, { name: "Ray ZR Fi", image: card1 }, { name: "Ray ZR Sport", image: card4 }] },
      "Aerox":     { type: "bikes", items: [{ name: "Aerox 155", image: card2 }, { name: "Aerox S", image: card3 }, { name: "Aerox R", image: card1 }, { name: "Aerox MotoGP", image: card4 }] },
      "Cygnus":    { type: "bikes", items: [{ name: "Cygnus Ray", image: card3 }, { name: "Cygnus Alpha", image: card1 }, { name: "Cygnus ZR", image: card2 }, { name: "Cygnus X", image: card4 }] },
      // EV subseries
      "E01":       { type: "bikes", items: [{ name: "E01 Standard", image: card3 }, { name: "E01 Pro", image: card1 }, { name: "E01 Sport", image: card4 }, { name: "E01 Urban", image: card2 }] },
      "NEO's":     { type: "bikes", items: [{ name: "NEO's Base", image: card1 }, { name: "NEO's Plus", image: card2 }, { name: "NEO's Sport", image: card3 }, { name: "NEO's City", image: card4 }] },
      "D'elight":  { type: "bikes", items: [{ name: "D'elight 125", image: card4 }, { name: "D'elight S", image: card2 }, { name: "D'elight Urban", image: card1 }, { name: "D'elight Plus", image: card3 }] },
      "EC-05":     { type: "bikes", items: [{ name: "EC-05 Base", image: card2 }, { name: "EC-05 Pro", image: card3 }, { name: "EC-05 Sport", image: card1 }, { name: "EC-05 Max", image: card4 }] },
    },
  },
  Service: {
    sidebar: ["Maintenance", "Repairs", "Warranty", "Accessories"],
    content: {
      Maintenance:  { type: "links", items: ["Oil Change", "Tyre Service", "Chain Lubrication", "Brake Inspection", "Battery Check"] },
      Repairs:      { type: "links", items: ["Engine Overhaul", "Suspension Repair", "Electrical Repair", "Body Work", "Gear Box Service"] },
      Warranty:     { type: "links", items: ["Standard Warranty", "Extended Warranty", "Warranty Claims", "Warranty Registration"] },
      Accessories:  { type: "links", items: ["Helmets", "Riding Gear", "Bike Covers", "Luggage & Bags", "Performance Parts"] },
    },
  },
  Dealers: {
    sidebar: ["Find Dealer", "Showrooms", "Service Centers", "Test Ride"],
    content: {
      "Find Dealer":     { type: "links", items: ["Dealer Locator", "Nearest Dealer", "Dealer Contact", "Dealer Hours"] },
      Showrooms:         { type: "links", items: ["City Showrooms", "Premium Outlets", "Experience Centers", "Virtual Tour"] },
      "Service Centers": { type: "links", items: ["Authorized Centers", "Express Service", "Mobile Service", "Service Booking"] },
      "Test Ride":       { type: "links", items: ["Book Test Ride", "Test Ride Locations", "Upcoming Events", "Ride Experience"] },
    },
  },
  Parts: {
    sidebar: ["Genuine Parts", "Performance", "Apparel", "Merchandise"],
    content: {
      "Genuine Parts": { type: "links", items: ["Engine Parts", "Brake Parts", "Electrical Parts", "Body Parts", "Filters"] },
      Performance:     { type: "links", items: ["Exhaust Systems", "Air Filters", "Suspension Kits", "ECU Tuning", "Brake Upgrades"] },
      Apparel:         { type: "links", items: ["Helmets", "Jackets", "Gloves", "Boots", "Riding Pants"] },
      Merchandise:     { type: "links", items: ["T-Shirts", "Caps", "Keychains", "Model Bikes", "Stickers"] },
    },
  },
  Events: {
    sidebar: ["Racing", "Rides", "Exhibitions", "Training"],
    content: {
      Racing:      { type: "links", items: ["MotoGP", "Superbike Championship", "Local Racing", "Track Days", "Race Results"] },
      Rides:       { type: "links", items: ["Group Rides", "Adventure Tours", "City Rides", "Charity Rides"] },
      Exhibitions: { type: "links", items: ["Auto Expo", "Bike Shows", "Product Launches", "Dealer Events"] },
      Training:    { type: "links", items: ["Riding School", "Safety Courses", "Advanced Training", "Off-Road Training"] },
    },
  },
};

const NAV_ITEMS = ["Home", "Products", "Dealers", "Service", "Parts", "Events", "Contact"];

function Navbar() {
  const [isVisible, setIsVisible]           = useState(true);
  const [lastScrollY, setLastScrollY]       = useState(0);
  const [activeNav, setActiveNav]           = useState<string | null>(null);
  const [activeSidebar, setActiveSidebar]   = useState<string>("");
  const [activeSub, setActiveSub]           = useState<string>("");
  const [contentVisible, setContentVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsVisible(!(y > lastScrollY && y > 100));
      setLastScrollY(y);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const openMega = (nav: string) => {
    if (!navMegaData[nav]) return;
    const config = navMegaData[nav];
    const firstSidebar = config.sidebar[0];
    const firstSub = config.subseries?.[firstSidebar]?.[0] ?? "";
    setActiveNav(nav);
    setActiveSidebar(firstSidebar);
    setActiveSub(firstSub);
    setContentVisible(true);
  };

  const closeMega = () => setActiveNav(null);

  const handleSidebarHover = (item: string) => {
    if (item === activeSidebar) return;
    const config = navMegaData[activeNav!];
    const firstSub = config.subseries?.[item]?.[0] ?? "";
    setContentVisible(false);
    setTimeout(() => {
      setActiveSidebar(item);
      setActiveSub(firstSub);
      setContentVisible(true);
    }, 160);
  };

  const handleSubHover = (sub: string) => {
    if (sub === activeSub) return;
    setContentVisible(false);
    setTimeout(() => {
      setActiveSub(sub);
      setContentVisible(true);
    }, 160);
  };

  const currentConfig  = activeNav ? navMegaData[activeNav] : null;
  const subseriesList  = currentConfig?.subseries?.[activeSidebar];
  // content key: if there are subseries use activeSub, otherwise use activeSidebar
  const contentKey     = subseriesList ? activeSub : activeSidebar;
  const currentContent = currentConfig?.content[contentKey];

  return (
    <>
      <header className={`navbar ${isVisible ? "visible" : "hidden"}`}>
        <div className="nav-container">
          <div className="logo">
            <Link to="/"><img src={logo} alt="Yamaha Logo" /></Link>
          </div>

          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li
                key={item}
                onMouseEnter={() => navMegaData[item] ? openMega(item) : closeMega()}
              >
                <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {activeNav && currentConfig && (
          <div className="mega-menu" onMouseLeave={closeMega}>

            {/* Level 1 sidebar — always shown */}
            <div className="mega-sidebar">
              {currentConfig.sidebar.map((item) => (
                <button
                  key={item}
                  className={`mega-sub-btn ${activeSidebar === item ? "active" : ""}`}
                  onMouseEnter={() => handleSidebarHover(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Level 2 sub-sidebar — only when subseries exist */}
            {subseriesList && (
              <div className="mega-subsidebar">
                {subseriesList.map((sub) => (
                  <button
                    key={sub}
                    className={`mega-subsub-btn ${activeSub === sub ? "active" : ""}`}
                    onMouseEnter={() => handleSubHover(sub)}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            )}

            {/* Right content panel */}
            <div className="mega-right">
              <h3 className="mega-section-title">{activeSub || activeSidebar}</h3>
              <div className={`mega-content ${contentVisible ? "content-visible" : "content-hidden"}`}>
                {currentContent?.type === "bikes" ? (
                  <div className="mega-bikes">
                    {currentContent.items.map((bike) => (
                      <div key={bike.name} className="mega-bike-card">
                        <img src={bike.image} alt={bike.name} />
                        <p>{bike.name}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="mega-links-list">
                    {currentContent?.items.map((link) => (
                      <li key={link}><Link to="#">{link}</Link></li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

          </div>
        )}
      </header>

      {activeNav && <div className="mega-backdrop" onClick={closeMega} />}
    </>
  );
}

export default Navbar;
