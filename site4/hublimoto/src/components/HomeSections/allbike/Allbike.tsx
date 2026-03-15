import "./Allbike.css";
import { useRef } from "react";
import card1 from "../../../assets/images/download.png";
import card2 from "../../../assets/images/download1.png";
import card3 from "../../../assets/images/download2.webp";
import card4 from "../../../assets/images/download.png";

function Allbike() {
  const bikes = [
    { id: 1, name: "XSR Black", image: card1, isNew: true },
    { id: 2, name: "XSR Silver", image: card2, isNew: false },
    { id: 3, name: "XSR Black Edition", image: card3, isNew: true },
    { id: 4, name: "XSR Classic", image: card4, isNew: false },
    { id: 4, name: "XSR Classic", image: card4, isNew: false },
  ];

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

  return (
    <>
      <div className="section-heading">
        <h1>All Bikes</h1>
      </div>

      <div className="slider-wrapper">
        <div className="slider-container" ref={sliderRef}>
          <div className="slider-track">
            {bikes.concat(bikes).map((bike, index) => (
              <div key={index} className="bike-card">
                <img src={bike.image} alt={bike.name} />
                <div className="card-footer">
                  <h3>{bike.name}</h3>
                  <button className="read-more-btn"><span>Read more</span></button>
                </div>
                {bike.isNew && <span className="new-badge">NEW</span>}
              </div>
            ))}
          </div>
        </div>
        <div className="nav-buttons">
          <button className="nav-btn left" onClick={() => scroll('left')}>←</button>
          <button className="nav-btn right" onClick={() => scroll('right')}>→</button>
        </div>
      </div>
    </>
  );
}

export default Allbike;