import "./Allbike.css";
import { useRef, useState } from "react";
import card1 from "../../../assets/images/download.png";
import card2 from "../../../assets/images/download1.png";
import card3 from "../../../assets/images/download2.webp";
import card4 from "../../../assets/images/download.png";

function Allbike() {
  const bikes = [
    { id: 1, name: "XSR Black", image: card1, isNew: true, segment: "Neo-retro", displacement: "155 cc" },
    { id: 2, name: "XSR Silver", image: card2, isNew: false, segment: "Neo-retro", displacement: "155 cc" },
    { id: 3, name: "XSR Black Edition", image: card3, isNew: true, segment: "Sport heritage", displacement: "155 cc" },
    { id: 4, name: "XSR Classic", image: card4, isNew: false, segment: "Classic", displacement: "150 cc" },
  ];

  const [selectedModel, setSelectedModel] = useState<string>("all");
  const [selectedBike, setSelectedBike] = useState<(typeof bikes)[number] | null>(null);

  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 400;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const models = ["all", ...Array.from(new Set(bikes.map((b) => b.name)))];

  const filteredBikes =
    selectedModel === "all" ? bikes : bikes.filter((bike) => bike.name === selectedModel);

  const displayBikes = filteredBikes.concat(filteredBikes);

  const handleModelChange = (value: string) => {
    setSelectedModel(value);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const handleCardClick = (bike: (typeof bikes)[number]) => {
    setSelectedBike(bike);
  };

  const closeOverlay = () => setSelectedBike(null);

  return (
    <>
      <div className="section-heading">
        <h1>All Bikes</h1>
      </div>

      <div className="bike-filter-bar">
        <label className="bike-filter-label">
          Choose model
          <select
            className="bike-filter-select"
            value={selectedModel}
            onChange={(e) => handleModelChange(e.target.value)}
          >
            {models.map((model) => (
              <option key={model} value={model}>
                {model === "all" ? "All models" : model}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="slider-wrapper">
        <div className="slider-container" ref={sliderRef}>
          <div className="slider-track">
            {displayBikes.map((bike, index) => (
              <button
                key={`${bike.id}-${index}`}
                className="bike-card"
                type="button"
                onClick={() => handleCardClick(bike)}
              >
                <img src={bike.image} alt={bike.name} />
                <div className="card-footer">
                  <h3>{bike.name}</h3>
                  <span className="read-more-btn">
                    <span>View model</span>
                  </span>
                </div>
                {bike.isNew && <span className="new-badge">NEW</span>}
              </button>
            ))}
          </div>
        </div>
        <div className="nav-buttons">
          <button className="nav-btn left" onClick={() => scroll('left')}>←</button>
          <button className="nav-btn right" onClick={() => scroll('right')}>→</button>
        </div>
      </div>

      {selectedBike && (
        <div className="bike-detail-overlay" onClick={closeOverlay}>
          <div className="bike-detail-panel" onClick={(e) => e.stopPropagation()}>
            <div className="bike-detail-media">
              <img src={selectedBike.image} alt={selectedBike.name} />
              {selectedBike.isNew && <span className="new-badge large">NEW</span>}
            </div>
            <div className="bike-detail-body">
              <p className="bike-detail-kicker">Model highlight</p>
              <h2>{selectedBike.name}</h2>
              <p className="bike-detail-meta">
                {selectedBike.segment} • {selectedBike.displacement}
              </p>
              <p className="bike-detail-copy">
                Agile chassis, responsive power delivery and premium details crafted for riders who
                want everyday usability with weekend thrill. Perfectly balanced for city streets and
                open stretches alike.
              </p>
              <div className="bike-detail-actions">
                <button className="btn-primary">Book a test ride</button>
                <button type="button" className="bike-detail-secondary" onClick={closeOverlay}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Allbike;