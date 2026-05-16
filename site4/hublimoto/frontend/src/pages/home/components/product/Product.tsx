import "./Product.css";
// import card1 from "../../../assets/images/download.png";
// import bikewithmen from "../../../assets/images/bike-with-men.png";
// import bikewithmen from "../../../assets/images/bike-with-men-removebg-preview.png";
import bikewithmen from "@/assets/images/bike-with-men2.png";




function Product() {
 
  return (
    <>
    <div className="wn-section">

      {/* <div className="wn-header">
        <div className="wn-eyebrow">Explore Special Programs</div>
        <div className="wn-title">Make The Most <span>Of Yamaha</span></div>
      </div> */}

   
    </div>
      {/* <div ClassName="carousel-container">
        <img src={bikewithmen} alt="Bike" className="section-image" />
      </div> */}


<div className="hero-section">
  <div className="top-content">
    <div className="text-area">
      <h2>RIDE THE FUTURE</h2>
      <p>Experience the thrill of power, speed and design built for the streets.</p>
    </div>
  </div>

  <img src={bikewithmen} alt="bike" className="hero-bike" />

  <div className="black-area">
    <div className="spec-cards">

      <div className="spec-card">
        <div className="spec-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v6l4 2"/>
          </svg>
        </div>
        <h3>BEST ENGINE</h3>
        <p>High-performance motor with cutting-edge technology</p>
      </div>

      <div className="spec-card">
        <div className="spec-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
          </svg>
        </div>
        <h3>TOP PERFORMANCE</h3>
        <p>Unmatched speed and acceleration for ultimate riding</p>
      </div>

    </div>
  </div>
</div>

    </>
  );
}

export default Product;