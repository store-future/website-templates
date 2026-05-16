import "./AboutSection.css";
import imgMain from "@/assets/images/banner6.jpg";
import imgOverlap from "@/assets/images/banner8.jpg";

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
              <span className="about-badge-num">9+</span>
              <span className="about-badge-text">Years of<br />Trust</span>
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

            <p className="about-lead">
              First-time buyer — your perfect Yamaha is waiting for you here.
            </p>
            <p className="about-desc">
            We don't just sell bikes — we deliver the full Yamaha experience. Largest authorised Yamaha dealership in North Karnataka, we bring you the complete range of Yamaha two-wheelers, backed by expert guidance, genuine accessories, and service you can trust.
            Whether you're a first-time buyer looking for a dependable commuter or a passionate rider seeking the thrill of performance 

            </p>

            <div className="about-stats">
            <div>
              <span className="about-stat-num">#1</span>
              <span className="about-stat-label">Yamaha Showroom in Hubli</span>
            </div>
              <div>
                <span className="about-stat-num">40 +</span>
                <span className="about-stat-label">Models</span>
              </div>
              <div>
                <span className="about-stat-num">50K </span>
                <span className="about-stat-label">Happy Riders </span>
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
