import "./Allbike.css";
import card1 from "../../../assets/images/xsr_black-pc.webp";
import card2 from "../../../assets/images/xsr_silver_price-award-pc.webp";
import card3 from "../../../assets/images/xsr_black-pc.webp";
import card4 from "../../../assets/images/xsr_black-pc.webp";

function Allbike() {
  const bikes = [
    { id: 1, name: "XSR Black", image: card1, isNew: true },
    { id: 2, name: "XSR Silver", image: card2, isNew: false },
    { id: 3, name: "XSR Black Edition", image: card3, isNew: true },
    { id: 4, name: "XSR Classic", image: card4, isNew: false },
    { id: 4, name: "XSR Classic", image: card4, isNew: false },


  ];



  return (
    <>
      <div className="section-heading">
        <h1>All Bikes</h1>
      </div>

      <div className="allbike-container">
        <div className="bike-scroll">
          {bikes.map((bike) => (
            <div key={bike.id} className="bike-card">
              {bike.isNew && <span className="new-badge">NEW</span>}
              <img src={bike.image} alt={bike.name} className="bike-image" />
              <h3 className="bike-name">{bike.name}</h3>
              <div className="bike-overlay">
                <button className="book-ride-btn">Book Ride</button>
              </div>
            </div>
          ))}
        </div>
        <div className="scroll-bar">
          <div className="scroll-thumb"></div>
        </div>
      </div>
    </>
  );
}

export default Allbike;