import "./Allbike.css";
import { useRef } from "react";
import card1 from "@/assets/images/xsr_black-pc.webp";
import card2 from "@/assets/images/xsr_silver_price-award-pc.webp";
import card3 from "@/assets/images/R15-S.png.webp";
import card4 from "@/assets/images/bike-with-men2.png";
import card5 from "@/assets/images/download2.webp";

function Allbike() {
  const bikes = [
    { id: 1, name: "XSR 155 Black", tag: "NEW", tagType: "new", price: "₹1,49,900", cc: "155cc", image: card1 },
    { id: 2, name: "XSR 155 Silver", tag: "PREMIUM", tagType: "premium", price: "₹1,52,900", cc: "155cc", image: card2 },
    { id: 3, name: "R15-S", tag: "NEW", tagType: "new", price: "₹1,67,900", cc: "155cc", image: card3 },
    { id: 4, name: "MT-15 V2", tag: "PREMIUM", tagType: "premium", price: "₹1,72,900", cc: "155cc", image: card4 },
    { id: 5, name: "FZ-S FI V4", tag: "LATEST", tagType: "latest", price: "₹1,25,900", cc: "149cc", image: card5 },
  ];

  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -420 : 420,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="allbike-section">
      <div className="section-heading">
        <h1>All Bikes</h1>
        <p className="section-sub">Explore our latest & premium lineup</p>
      </div>

      <div className="slider-wrapper">
        <div className="slider-container" ref={sliderRef}>
          <div className="slider-track">
            {bikes.concat(bikes).map((bike, index) => (
              <div key={index} className="bike-card">
                <div className="bike-card-img-wrap">
                  <img src={bike.image} alt={bike.name} />
                  <span className={`badge badge-${bike.tagType}`}>{bike.tag}</span>
                </div>
                <div className="bike-card-body">
                  <div className="bike-meta">
                    <span className="bike-cc">{bike.cc}</span>
                  </div>
                  <h3>{bike.name}</h3>
                  <div className="card-footer">
                    <span className="bike-price">{bike.price}</span>
                    <button className="read-more-btn"><span>Explore</span></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="nav-buttons">
          <button className="nav-btn left" onClick={() => scroll('left')}>←</button>
          <button className="nav-btn right" onClick={() => scroll('right')}>→</button>
        </div>
      </div>
    </div>
  );
}

export default Allbike;
