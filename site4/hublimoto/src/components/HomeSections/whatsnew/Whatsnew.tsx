import "./Whatsnew.css";
import card1 from "../../../assets/images/xsr_black-pc.webp";
import card2 from "../../../assets/images/xsr_silver_price-award-pc.webp";
import card3 from "../../../assets/images/download2.webp";

const updates = [
  {
    id: 1,
    tag: "NEW",
    title: "Track Edition Package",
    description: "Factory quickshifter, rearsets and performance tyres, ready for the circuit.",
    image: card1,
  },
  {
    id: 2,
    tag: "SOON",
    title: "Connected Ride App",
    description: "Live telemetry, ride logs and service reminders on your phone.",
    image: card2,
  },
  {
    id: 3,
    tag: "EVENT",
    title: "Night Ride Experience",
    description: "Join an exclusive city night ride with pro riders and curated routes.",
    image: card3,
  },
];

function Whatsnew() {
  return (
    <>
      <div className="section-heading">
        <span className="section-heading-label">HubliMoto • Updates</span>
        <h1>What&apos;s new</h1>
        <p className="section-heading-subtitle">
          Stay ahead of every launch, software update and curated riding experience from the
          HubliMoto garage.
        </p>
      </div>

      <div className="whatsnew-grid">
        {updates.map((item) => (
          <article key={item.id} className="whats-card">
            <div className="whats-card-media">
              <img src={item.image} alt={item.title} />
              <span className="whats-card-tag">{item.tag}</span>
            </div>
            <div className="whats-card-body">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button className="whats-card-cta">View details</button>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export default Whatsnew;