import "./Whatsnew.css";

function Whatsnew() {

  const image =
    "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1200";

  return (
    <div className="special-program-container">

      <div className="title-wrapper">
        <div className="eyebrow">EXPLORE SPECIAL PROGRAMS</div>
        <div className="title">Make The Most Of Hero</div>
      </div>

      <div className="content-wrapper">

        <div
          className="cut-corner-card"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="card-title">Goodlife Benefits</div>
        </div>

        <div className="card-wrapper">

          <div
            className="sp-card"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="card-title">Finance Your Dreams</div>
          </div>

          <div
            className="sp-card"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="card-title">Special Corporate Benefits</div>
          </div>

        </div>

        <div
          className="cut-corner-card"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="card-title">Gurudakshina Offer</div>
        </div>

      </div>

    </div>
  );
}

export default Whatsnew;