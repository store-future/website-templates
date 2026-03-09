import Banner from "../../components/HomeSections/Banner/Banner";
import Whatsnew from "../../components/HomeSections/whatsnew/Whatsnew";
import Discover from "../../components/HomeSections/discover/Discover";
import Selecttype from "../../components/HomeSections/selecttype/Selecttype";
import Allbike from "../../components/HomeSections/allbike/Allbike";
import Highlight from "../../components/HomeSections/highlight/Highlight";
// import bikeImage from "../../assets/images/download.png";



function Home() {
  return (
    <>
      <Banner />
      <Allbike />
      <Highlight />
      <Selecttype />
      <Discover />
      <Whatsnew />

      {/* <img src={bikeImage} className="logo" alt="Vite logo" /> */}

    </>
  );
}

export default Home