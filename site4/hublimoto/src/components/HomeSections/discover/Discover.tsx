import "./discover.css";
import card1 from "../../../assets/images/xsr_black-pc.webp";
import card2 from "../../../assets/images/xsr_silver_price-award-pc.webp";
import card3 from "../../../assets/images/xsr_black-pc.webp";
import card4 from "../../../assets/images/xsr_black-pc.webp";

function discover() {
  return (
<>
    <div className="section-heading">
        <h1>Let's Discover</h1>
    </div>
    <div className="whatsnew">
      <div className="card">
        <img src={card1} alt="XSR Black" />
        <div className="overlay">
          <p>New Release</p>
          <h2>XSR Black Edition</h2>
          <button>Discover</button>
        </div>
      </div>
      <div className="card">
        <img src={card2} alt="XSR Red" />
        <div className="overlay">
          <p>Award Winner</p>
          <h2>XSR Silver Edition</h2>
          <button>Discover</button>
        </div>
      </div>
      <div className="card">
        <img src={card3} alt="XSR Blue" />
        <div className="overlay">
          <p>Limited Edition</p>
          <h2>XSR Blue Edition</h2>
          <button>Discover</button>
        </div>
      </div>
      <div className="card">
        <img src={card4} alt="XSR Grey" />
        <div className="overlay">
          <p>Classic Style</p>
          <h2>XSR Grey Edition</h2>
          <button>Discover</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default discover;