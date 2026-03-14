import { useState } from "react";
import card1 from "../../../assets/images/download.png";

const bikes = [
  { id: 1, name: "Bike 1", image: card1 },
  { id: 2, name: "Bike 2", image: card1 },
  { id: 3, name: "Bike 3", image: card1 },
  { id: 4, name: "Bike 4", image: card1 },
  { id: 5, name: "Bike 5", image: card1 },
  { id: 6, name: "Bike 6", image: card1 },
];

function Selecttype() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState("");

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection("slide-left");

    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % bikes.length);
      setSlideDirection("");
      setIsAnimating(false);
    }, 650);
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection("slide-right");

    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + bikes.length) % bikes.length);
      setSlideDirection("");
      setIsAnimating(false);
    }, 650);
  };

  const getIndex = (offset: number) =>
    (current + offset + bikes.length) % bikes.length;

  return (
    <>
      {/* Heading */}
      <div className="text-center my-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide relative inline-block">
          Select Your Type
          <span className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-20 h-1 bg-blue-900"></span>
        </h1>
      </div>

      <div className="relative max-w-[1200px] mx-auto flex items-center justify-center py-10 overflow-hidden">

        {/* Prev Button */}
        <button
          className="absolute left-5 bg-blue-900 text-white w-12 h-12 rounded-full text-2xl flex items-center justify-center hover:bg-blue-700 hover:scale-110 transition"
          onClick={prev}
        >
          ‹
        </button>

        <div className="relative flex items-center justify-center w-full h-[400px]">

          {/* Left */}
          <div className="absolute left-[5%] w-[250px] opacity-50 scale-75">
            <img
              src={bikes[getIndex(-1)].image}
              alt={bikes[getIndex(-1)].name}
              className="w-full h-full object-contain"
            />
            <h3 className="text-center text-lg font-semibold mt-3">
              {bikes[getIndex(-1)].name}
            </h3>
          </div>

          {/* Center */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[400px] z-10">
            <img
              src={bikes[getIndex(0)].image}
              alt={bikes[getIndex(0)].name}
              className="w-full h-full object-contain"
            />
            <h3 className="text-center text-xl font-semibold mt-3">
              {bikes[getIndex(0)].name}
            </h3>
          </div>

          {/* Right */}
          <div className="absolute right-[5%] w-[250px] opacity-50 scale-75">
            <img
              src={bikes[getIndex(1)].image}
              alt={bikes[getIndex(1)].name}
              className="w-full h-full object-contain"
            />
            <h3 className="text-center text-lg font-semibold mt-3">
              {bikes[getIndex(1)].name}
            </h3>
          </div>

        </div>

        {/* Next Button */}
        <button
          className="absolute right-5 bg-blue-900 text-white w-12 h-12 rounded-full text-2xl flex items-center justify-center hover:bg-blue-700 hover:scale-110 transition"
          onClick={next}
        >
          ›
        </button>

      </div>
    </>
  );
}

export default Selecttype;