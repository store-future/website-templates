import { useState, useEffect } from "react";

import banner1 from "../../../assets/images/xsr_black-pc.webp";
import banner2 from "../../../assets/images/xsr_silver_price-award-pc.webp";

function Banner() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [banner1, banner2];

  useEffect(() => {

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);

  }, []);

  return (

    <div className="relative w-full h-[90vh] pt-[72px] overflow-hidden">

      {/* Slider */}

      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >

        {slides.map((img, index) => (

          <div key={index} className="w-full h-full flex-shrink-0 relative">

            <img
              src={img}
              className="w-full h-full object-cover"
            />

            {/* overlay */}

            <div className="absolute inset-0 bg-black/40"></div>

          </div>

        ))}

      </div>

      {/* dots */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">

        {slides.map((_, index) => (

          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index
                ? "bg-white"
                : "bg-white/50"
            }`}
          />

        ))}

      </div>

    </div>
  );
}

export default Banner;