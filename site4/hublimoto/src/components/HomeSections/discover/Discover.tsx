import "./Discover.css";
import card1 from "../../../assets/images/xsr_black-pc.webp";
import card2 from "../../../assets/images/xsr_silver_price-award-pc.webp";
import card3 from "../../../assets/images/banner3.jpg";
import card4 from "../../../assets/images/banner4.jpg";

const products = [
  {
    img: card1,
    badge: "New Release",
    model: "XSR Series • 2025",
    name: "XSR Black Edition",
    specs: [{ val: "155cc", key: "Engine" }, { val: "19.3ps", key: "Power" }, { val: "14.7nm", key: "Torque" }],
  },
  {
    img: card2,
    badge: "Award Winner",
    model: "XSR Series • 2025",
    name: "XSR Silver Edition",
    specs: [{ val: "155cc", key: "Engine" }, { val: "19.3ps", key: "Power" }, { val: "14.7nm", key: "Torque" }],
  },
  {
    img: card3,
    badge: "Limited Edition",
    model: "Sport Series • 2025",
    name: "R15 Blue Edition",
    specs: [{ val: "155cc", key: "Engine" }, { val: "18.6ps", key: "Power" }, { val: "14.1nm", key: "Torque" }],
  },
  {
    img: card4,
    badge: "Classic Style",
    model: "Naked Series • 2025",
    name: "MT-15 Grey Edition",
    specs: [{ val: "155cc", key: "Engine" }, { val: "18.5ps", key: "Power" }, { val: "13.9nm", key: "Torque" }],
  },
];

function Discover() {
  return (
    <div className="disc-section">
      <div className="container">
        <div className="disc-heading">
          <div className="disc-heading-left">
            <span className="disc-eyebrow">
              <span className="disc-eyebrow-line" />
              2025 Lineup
            </span>
            <h1 className="disc-title">
              Discover the <span className="disc-title-accent">Power</span>
            </h1>
          </div>
          <div className="disc-heading-divider" />
          <div className="disc-heading-right">
            <strong>04</strong> Models
          </div>
        </div>
      </div>

      <div className="disc-grid">
        {products.map((p, i) => (
          <div className="disc-card" key={i}>
            <img src={p.img} alt={p.name} />
            <span className="disc-badge">{p.badge}</span>
            <div className="disc-info">
              <span className="disc-model">{p.model}</span>
              <h2 className="disc-name">{p.name}</h2>
              <div className="disc-hover">
                <div className="disc-specs">
                  {p.specs.map((s, j) => (
                    <div className="disc-spec" key={j}>
                      <span className="disc-spec-val">{s.val}</span>
                      <span className="disc-spec-key">{s.key}</span>
                    </div>
                  ))}
                </div>
                <button className="disc-btn">Explore →</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discover;
