import "./Highlight.css";
import trackVideo from "../../../assets/video/Yamaha Coimbatore Track Day.mp4";

function Highlight() {
  return (
    <>
      <div className="container">
        <div className="highlight-section-heading">
          <div className="highlight-heading-content">
            <h1>Highlights</h1>
            <p className="highlight-heading-subtitle">Latest updates from the track</p>
          </div>
          <div className="highlight-heading-line"></div>
        </div>
      </div>

    <div className="highlight-cards-container">
      <div className="split-layout">
        <div className="split-right">
          <img
            src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800"
            alt="Yamaha R15"
          />
        </div>
        <div className="split-left">
          <div className="split-left-collapsed">
            <span>YAMAHA R15 • 2024</span>
          </div>
          <div className="split-left-content">
            <div className="location-year">Yamaha R15 • 2024</div>
            <h2 className="split-heading">
              Born From Racing DNA
            </h2>
            <p className="split-subheading">
              Inspired by Yamaha's MotoGP heritage, the R15 delivers razor-sharp
              handling, aggressive aerodynamics, and thrilling performance.
            </p>
            <div className="split-name">Yamaha Motor</div>
          </div>
        </div>
      </div>

      <div className="split-layout">
        <div className="split-right">
          <img
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800"
            alt="Yamaha MT15"
          />
        </div>
        <div className="split-left">
          <div className="split-left-collapsed">
            <span>YAMAHA MT-15 • 2024</span>
          </div>
          <div className="split-left-content">
            <div className="location-year">Yamaha MT-15 • 2024</div>
            <h2 className="split-heading">
              Unleash the Dark Warrior
            </h2>
            <p className="split-subheading">
              The MT-15 combines raw street attitude with cutting-edge engineering.
              Lightweight, powerful, and fiercely agile.
            </p>
            <div className="split-name">Yamaha Motor</div>
          </div>
        </div>
      </div>

      <div className="split-layout">
        <div className="split-right">
          <img
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800"
            alt="Yamaha R7"
          />
        </div>
        <div className="split-left">
          <div className="split-left-collapsed">
            <span>YAMAHA R7 • 2024</span>
          </div>
          <div className="split-left-content">
            <div className="location-year">Yamaha R7 • 2024</div>
            <h2 className="split-heading">
              Precision Crafted for Pure Performance
            </h2>
            <p className="split-subheading">
              With aggressive styling and track-focused dynamics, the Yamaha R7
              delivers an exhilarating ride.
            </p>
            <div className="split-name">Yamaha Racing Division</div>
          </div>
        </div>
      </div>
    </div>

      
      <div className="highlight-video-section">
        <div className="highlight-content">
          <h2 className="highlight-title">Experience The Thrill</h2>
          <p className="highlight-description">Join us on the track and feel the adrenaline rush of pure performance</p>
        </div>
        <div className="highlight-video">
          <video autoPlay loop muted playsInline>
            <source src={trackVideo} type="video/mp4" />
          </video>
        </div>
      </div>

    </>
  );
}

export default Highlight;
