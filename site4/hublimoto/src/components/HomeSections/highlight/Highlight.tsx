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


<div className="container">
  <div className="split-layout">
    <div className="split-left">
      <div className="location-year">Mumbai • 2024</div>
      <h2 className="split-heading">
        Track Excellence on Every Mile of the Journey
      </h2>
      <p className="split-subheading">
        Experience unmatched performance, precision engineering, and a driving
        spirit designed to push boundaries on every corner of the road.
      </p>
      <div className="split-name">Rajesh Kumar</div>
    </div>
    <div className="split-right">
      <img
        src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800"
        alt="Highlight"
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