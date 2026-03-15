import Banner from "../../components/HomeSections/Banner/Banner";
import Whatsnew from "../../components/HomeSections/whatsnew/Whatsnew";
// import Discover from "../../components/HomeSections/discover/Discover";
// import Bikecarousal from "../../components/HomeSections/selecttype_copy/Selecttype";
import Product from "../../components/HomeSections/product/Product";
import Allbike from "../../components/HomeSections/allbike/Allbike";
import Highlight from "../../components/HomeSections/highlight/Highlight";
import TechnologySection from "../../components/HomeSections/TechnologySection";
import AboutSection from "../../components/HomeSections/about/AboutSection";
// import bikeImage from "../../assets/images/download.png";



function Home() {
  return (
    <>
      <Banner />
      <Product />
      <Allbike />
      <AboutSection />
      <Highlight />
      <Whatsnew />
      <TechnologySection/>
      {/* <Bikecarousal /> */}
      {/* <Discover /> */}

      {/* <img src={bikeImage} className="logo" alt="Vite logo" /> */}

    </>
  );
}

export default Home