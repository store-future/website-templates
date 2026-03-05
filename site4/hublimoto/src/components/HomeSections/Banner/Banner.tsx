import { useState, useEffect } from "react";
import "./Banner.css";
import banner1 from "../../../assets/images/xsr_black-pc.webp";
import banner2 from "../../../assets/images/xsr_silver_price-award-pc.webp";

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [banner1, banner2,banner1];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="banner">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <img key={index} src={slide} alt="Yamaha XSR" />
        ))}
      </div>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Banner;
