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
    <section className="section banner">
      <div className="banner-slider-clip">
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
      </div> 
      <div className="hero-overlay" />
      <div className="hero-content">
        {/* <p className="hero-eyebrow">Official Yamaha Dealer</p> */}
        <h1 className="hero-headline">
          <span className="hero-headline-thin">Karnataka's Biggest</span><br />
           Yamaha Showroom<br />
          <span className="hero-headline-accent">Now in Hubli.</span>
        </h1>
        <p className="hero-sub">Experience the thrill of Yamaha. Visit Hubli Moto Wheels <br />where every ride begins.</p>

      </div>
      <div className="quick-actions-wrapper">
        <div className="quick-actions-card">
          <div className="qa-item qa-divider">
            <div className="qa-icon-wrap">
              <svg className="qa-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div className="qa-text">
              <span className="qa-title">Quick Call</span>
              <span className="qa-desc">Reach our team instantly for any queries.</span>
            </div>
          </div>
          <div className="qa-item qa-divider">
            <div className="qa-icon-wrap">
              <svg className="qa-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="5.5" cy="17.5" r="3.5"/>
                <circle cx="18.5" cy="17.5" r="3.5"/>
                <path d="M15 6h-5l-3 7h11l-3-7z"/>
                <path d="M12 6V3"/>
                <path d="M5.5 17.5L9 10"/>
                <path d="M18.5 17.5L15 10"/>
              </svg>
            </div>
            <div className="qa-text">
              <span className="qa-title">Book Ride</span>
              <span className="qa-desc">Schedule a test ride at your convenience.</span>
            </div>
          </div>
          <div className="qa-item">
            <div className="qa-icon-wrap">
              <svg className="qa-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                <line x1="7" y1="7" x2="7.01" y2="7"/>
              </svg>
            </div>
            <div className="qa-text">
              <span className="qa-title">Latest Offers</span>
              <span className="qa-desc">Explore exclusive deals and seasonal offers.</span>
            </div>
          </div>
        </div>
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
    </section>
  );
}

export default Banner;
