import { useState, useEffect, useRef } from "react";
import "./Banner.css";

// import banner1 from "../../../assets/images/xsr_black-pc.webp";
// import banner2 from "../../../assets/images/xsr_silver_price-award-pc.webp";
// import banner1 from "../../../assets/images/banner1.jpg";
import banner2 from "@/assets/images/banner2.webp";
import videoSrc from "@/assets/video/R3.mp4";

type Slide = { type: "video"; src: string } | { type: "image"; src: string };
const realSlides: Slide[] = [
  { type: "video", src: videoSrc },
  { type: "image", src: banner2 },
  // { type: "image", src: banner1 },
];

// Infinite loop: clone last slide at front, clone first slide at end
const slides: Slide[] = [realSlides[realSlides.length - 1], ...realSlides, realSlides[0]];

function Banner() {
  const [index, setIndex] = useState(1); // start at first real slide
  const [transition, setTransition] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTransition(true);
      setIndex((prev) => prev + 1);
    }, 13000);
    return () => clearInterval(timer);
  }, []);

  // When we land on a clone, silently jump to the real slide
  useEffect(() => {
    if (index === slides.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, 800);
    } else if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(slides.length - 2);
      }, 800);
    }
  }, [index]);

  const realIndex = index === 0 ? realSlides.length - 1 : index === slides.length - 1 ? 0 : index - 1;

  return (
    <div className="banner">
      <div
        ref={sliderRef}
        className="slider"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: transition ? "transform 0.8s ease-in-out" : "none",
        }}
      >
        {slides.map((slide, i) =>
          slide.type === "video" ? (
            <video key={i} className="banner-video" src={slide.src} autoPlay muted loop playsInline />
          ) : (
            <img key={i} src={slide.src} alt="Yamaha" />
          )
        )}
      </div>
      <div className="dots">
        {realSlides.map((_, i) => (
          <span
            key={i}
            className={`dot ${realIndex === i ? "active" : ""}`}
            onClick={() => { setTransition(true); setIndex(i + 1); }}
          />
        ))}
      </div>
    </div>
  );
}

export default Banner;
