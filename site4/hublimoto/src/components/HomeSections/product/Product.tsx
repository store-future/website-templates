import "./Product.css";
import bikewithmen from "../../../assets/images/bike-with-men2.png";

function Product() {
  return (
    <>
      <div className="section-heading">
        <span className="section-heading-label">HubliMoto • Performance</span>
        <h1>Discover the power</h1>
        <p className="section-heading-subtitle">
          A new generation of motorcycles born from racing DNA, engineered to turn every city
          street and highway into your personal circuit.
        </p>
      </div>

      <div className="hero-section">
        <div className="top-content">
          <div className="text-area">
            <h2>Ride the future</h2>
            <p>
              Experience instant response, precision handling and design language that looks
              fast even at a standstill.
            </p>
            <div className="hero-quick-specs">
              <div>
                <span className="hero-spec-label">0–100 km/h</span>
                <span className="hero-spec-value">3.2s</span>
              </div>
              <div>
                <span className="hero-spec-label">Max power</span>
                <span className="hero-spec-value">14.2 kW</span>
              </div>
              <div>
                <span className="hero-spec-label">Torque</span>
                <span className="hero-spec-value">18.3 Nm</span>
              </div>
            </div>
          </div>
        </div>

        <div className="black-area">
          <div className="spec-cards">
            <div className="spec-card">
              <div className="spec-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3>Best engine</h3>
              <p>High-performance motor with ride-by-wire for absolute control.</p>
            </div>

            <div className="spec-card">
              <div className="spec-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3>Top performance</h3>
              <p>Track-inspired chassis with adjustable suspension and lightweight wheels.</p>
            </div>
          </div>
        </div>

        <img src={bikewithmen} alt="HubliMoto performance bike" className="hero-bike" />
      </div>
    </>
  );
}

export default Product;