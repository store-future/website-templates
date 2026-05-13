import Banner from "./components/Banner/Banner";
import Whatsnew from "./components/whatsnew/Whatsnew";
// import Discover from "./components/discover/Discover";
// import Bikecarousal from "./components/selecttype/Selecttype";
import Product from "./components/product/Product";
import Allbike from "./components/allbike/Allbike";
import Highlight from "./components/highlight/Highlight";
import TechnologySection from "./components/TechnologySection";
import AboutSection from "./components/about/AboutSection";
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