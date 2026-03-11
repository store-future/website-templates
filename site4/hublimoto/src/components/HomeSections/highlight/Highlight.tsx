import "./Highlight.css";
import trackVideo from "../../../assets/video/Yamaha Coimbatore Track Day.mp4";
// import card1 from "../../../assets/images/download.png";
// import card2 from "../../../assets/images/download1.png";
// import card3 from "../../../assets/images/download2.webp";
// import card4 from "../../../assets/images/download.png";

  // const bikes = [
  //   { id: 1, name: "XSR Black", image: card1, isNew: true },
  //   { id: 2, name: "XSR Silver", image: card2, isNew: false },
  //   { id: 3, name: "XSR Black Edition", image: card3, isNew: true },
  //   { id: 4, name: "XSR Classic", image: card4, isNew: false },
  //   { id: 4, name: "XSR Classic", image: card4, isNew: false },
  // ];

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


    <div className="container">
<div className="split-layout">
  <div className="split-left">
    <div className="location-year">Yamaha R15 • 2024</div>
    <h2 className="split-heading">
      Born From Racing DNA
    </h2>
    <p className="split-subheading">
      Inspired by Yamaha’s MotoGP heritage, the R15 delivers razor-sharp
      handling, aggressive aerodynamics, and thrilling performance for riders
      who demand track-level precision on everyday roads.
    </p>
    <div className="split-name">Yamaha Motor</div>
  </div>

  <div className="split-right">
    <img
      src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800"
      alt="Yamaha R15"
    />
  </div>
</div>


<div className="split-layout">
  <div className="split-left">
    <div className="location-year">Yamaha MT-15 • 2024</div>
    <h2 className="split-heading">
      Unleash the Dark Warrior
    </h2>
    <p className="split-subheading">
      The MT-15 combines raw street attitude with cutting-edge engineering.
      Lightweight, powerful, and fiercely agile — built for riders who want
      adrenaline in every twist of the throttle.
    </p>
    <div className="split-name">Yamaha Motor</div>
  </div>

  <div className="split-right">
    <img
      src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800"
      alt="Yamaha MT15"
    />
  </div>
</div>


<div className="split-layout">
  <div className="split-left">
    <div className="location-year">Yamaha R7 • 2024</div>
    <h2 className="split-heading">
      Precision Crafted for Pure Performance
    </h2>
    <p className="split-subheading">
      With aggressive styling and track-focused dynamics, the Yamaha R7
      delivers an exhilarating ride. Every curve, every acceleration, every
      mile — engineered to elevate your riding experience.
    </p>
    <div className="split-name">Yamaha Racing Division</div>
  </div>

  <div className="split-right">
    <img
      src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800"
      alt="Yamaha R7"
    />
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