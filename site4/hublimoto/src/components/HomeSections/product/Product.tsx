import "./Product.css";
// import card1 from "../../../assets/images/download.png";
// import bikewithmen from "../../../assets/images/bike-with-men.png";
// import bikewithmen from "../../../assets/images/bike-with-men-removebg-preview.png";
import bikewithmen from "../../../assets/images/bike-with-men2.png";




function Product() {
 
  return (
    <>
      <div className="product-section-heading">
        <h1>Discover the power</h1>
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

  <div className="black-area"></div>

  <img src={bikewithmen} alt="bike" className="hero-bike" />

</div>

    </>
  );
}

export default Product;