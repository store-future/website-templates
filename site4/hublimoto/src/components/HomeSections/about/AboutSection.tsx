import "./AboutSection.css";
// import imgMain from "../../../assets/images/banner2.webp";

import imgMain from "../../../assets/images/banner6.jpg";
// import imgOverlap from "../../../assets/images/bike-with-men-removebg-preview.png";
import imgOverlap from "../../../assets/images/banner8.jpg";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-inner">

          {/* Left — image stack */}
          <div className="about-images">
            <img src={imgMain} alt="Hublimoto workshop" className="about-img-main" />
            <img src={imgOverlap} alt="Bike" className="about-img-overlap" />
            <div className="about-badge">
              <span className="about-badge-num">20+</span>
              <span className="about-badge-text">Years of<br />Experience</span>
            </div>
          </div>

          {/* Right — content */}
          <div className="about-content">
            <span className="about-eyebrow">
              <span className="about-eyebrow-line" />
              About Us
            </span>

            <h2 className="about-title">
              Built for the<br />
              <span className="about-title-accent">Passionate</span> Rider
            </h2>

            <p className="about-desc">
              Since 2004, Hublimoto has been crafting motorcycles that push the
              boundaries of performance and design. Every machine we build is a
              statement — precision-engineered, road-tested, and rider-approved.
            </p>

            <div className="about-stats">
              <div>
                <span className="about-stat-num">20+</span>
                <span className="about-stat-label">Years Active</span>
              </div>
              <div>
                <span className="about-stat-num">48</span>
                <span className="about-stat-label">Models Built</span>
              </div>
              <div>
                <span className="about-stat-num">120k</span>
                <span className="about-stat-label">Happy Riders</span>
              </div>
            </div>

            <button className="about-cta">
              Discover Our Story
              <span className="about-cta-arrow">→</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
