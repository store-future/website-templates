import { useState } from "react";
import "./Selecttype.css";
import card1 from "../../../assets/images/download.png";

const bikes = [
  { id: 1, name: "Bike 1", image: card1 },
  { id: 2, name: "Bike 2", image: card1 },
  { id: 3, name: "Bike 3", image: card1 },
  { id: 4, name: "Bike 4", image: card1 },
  { id: 5, name: "Bike 5", image: card1 },
  { id: 6, name: "Bike 6", image: card1 },
];

function Selecttype() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState("");

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection("slide-left");
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % bikes.length);
      setSlideDirection("");
      setIsAnimating(false);
    }, 650);
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection("slide-right");
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + bikes.length) % bikes.length);
      setSlideDirection("");
      setIsAnimating(false);
    }, 650);
  };

  const getIndex = (offset: number) => {
    return (current + offset + bikes.length) % bikes.length;
  };

  return (
    <>
      <div className="section-heading">
        <h1>Select Your Type</h1>
      </div>

      <div className="carousel-container">
        <button className="carousel-btn prev-btn" onClick={prev}>
          &#8249;
        </button>

        <div className="carousel-track">
          <div className={`carousel-item left ${slideDirection}`}>
            <img src={bikes[getIndex(-1)].image} alt={bikes[getIndex(-1)].name} />
            <h3>{bikes[getIndex(-1)].name}</h3>
          </div>

          <div className={`carousel-item center ${slideDirection}`}>
            <img src={bikes[getIndex(0)].image} alt={bikes[getIndex(0)].name} />
            <h3>{bikes[getIndex(0)].name}</h3>
          </div>

          <div className={`carousel-item right ${slideDirection}`}>
            <img src={bikes[getIndex(1)].image} alt={bikes[getIndex(1)].name} />
            <h3>{bikes[getIndex(1)].name}</h3>
          </div>

          {slideDirection === "slide-left" && (
            <div className="carousel-item incoming-right">
              <img src={bikes[getIndex(2)].image} alt={bikes[getIndex(2)].name} />
              <h3>{bikes[getIndex(2)].name}</h3>
            </div>
          )}

          {slideDirection === "slide-right" && (
            <div className="carousel-item incoming-left">
              <img src={bikes[getIndex(-2)].image} alt={bikes[getIndex(-2)].name} />
              <h3>{bikes[getIndex(-2)].name}</h3>
            </div>
          )}
        </div>

        <button className="carousel-btn next-btn" onClick={next}>
          &#8250;
        </button>
      </div>
    </>
  );
}

export default Selecttype;