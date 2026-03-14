import Banner from "../../components/HomeSections/Banner/Banner";
import Whatsnew from "../../components/HomeSections/whatsnew/Whatsnew";
import Discover from "../../components/HomeSections/discover/Discover";
// import Bikecarousal from "../../components/HomeSections/selecttype_copy/Selecttype";
import Product from "../../components/HomeSections/product/Product";
import Allbike from "../../components/HomeSections/allbike/Allbike";
import Highlight from "../../components/HomeSections/highlight/Highlight";

// import bikeImage from "../../assets/images/download.png";



function Home() {
  return (
    <main>
      <Banner />

      <section className="page-section surface" id="product">
        <div className="container">
          <Product />
        </div>
      </section>

      <section className="page-section" id="all-bikes">
        <div className="container">
          <Allbike />
        </div>
      </section>

      <section className="page-section surface" id="highlights">
        <Highlight />
      </section>

      <section className="page-section" id="discover">
        <div className="container">
          <Discover />
        </div>
      </section>

      <section className="page-section surface" id="whats-new">
        <div className="container">
          <Whatsnew />
        </div>
      </section>
    </main>
  );
}

export default Home