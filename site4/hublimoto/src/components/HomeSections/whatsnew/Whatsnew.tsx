import "./Whatsnew.css";
import card1 from "../../../assets/images/xsr_black-pc.webp";
import card2 from "../../../assets/images/xsr_silver_price-award-pc.webp";
import card3 from "../../../assets/images/banner1.jpg";

function Whatsnew() {
  return (
    <div className="wn-section">
      <div className="container">

        <div className="wn-heading">
          <div className="wn-heading-left">
            <span className="wn-eyebrow">
              <span className="wn-eyebrow-line" />
              2025 Collection
            </span>
            <h1 className="wn-title">
              What's <span className="wn-title-accent">New</span>
            </h1>
          </div>
          <div className="wn-heading-center">
            <div className="wn-divider" />
          </div>
          <div className="wn-heading-right">
            <p className="wn-subtitle">Engineered for performance,<br />built for the road.</p>
            <span className="wn-count">
              <strong>03</strong> New Models
            </span>
          </div>
        </div>

        <div className="whatsnew-diagonal">
          <div className="wn-left" style={{ backgroundImage: `url(${card1})`, backgroundPosition: "center center" }}>
            <div className="wn-label">Sport Series</div>
          </div>
          <div className="wn-right-top" style={{ backgroundImage: `url(${card2})`, backgroundPosition: "top center" }}>
            <div className="wn-label">Headlight</div>
          </div>
          <div className="wn-right-bottom" style={{ backgroundImage: `url(${card3})`, backgroundPosition: "bottom center" }}>
            <div className="wn-label">Tyre</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Whatsnew;
