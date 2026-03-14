import { useRef } from "react";

import card1 from "../../../assets/images/download.png";
import card2 from "../../../assets/images/download1.png";
import card3 from "../../../assets/images/download2.webp";
import card4 from "../../../assets/images/download.png";

function Allbike() {

  const bikes = [
    {
      id: 1,
      name: "XSR 900",
      tag: "Heritage Performance",
      image: card1,
      isNew: true,
      offer: "₹15000 Cashback"
    },
    {
      id: 2,
      name: "XSR 700",
      tag: "Sport Heritage",
      image: card2,
      isNew: false,
      offer: "10% Festival Offer"
    },
    {
      id: 3,
      name: "XSR Black Edition",
      tag: "Limited Edition",
      image: card3,
      isNew: true,
      offer: "Free Riding Jacket"
    },
    {
      id: 4,
      name: "XSR Classic",
      tag: "Retro Style",
      image: card4,
      isNew: false,
      offer: "₹8000 Exchange Bonus"
    },
  ];

  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {

    if (sliderRef.current) {

      const scrollAmount = 420;

      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });

    }

  };

  return (

    <section className="py-20 bg-gray-50">

      {/* Heading */}

      <div className="text-center mb-14">

        <h2 className="text-4xl md:text-5xl font-bold tracking-wide relative inline-block">

          All Bikes

          <span className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-20 h-1 bg-red-600"></span>

        </h2>

      </div>

      <div className="relative">

        {/* Slider */}

        <div
          ref={sliderRef}
          className="overflow-x-auto scrollbar-hide scroll-smooth px-6"
        >

          <div className="flex gap-8 snap-x snap-mandatory">

            {bikes.map((bike) => (

              <div
                key={bike.id}
                className="snap-center min-w-[340px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-4 overflow-hidden group"
              >

                {/* Image */}

                <div className="relative h-[260px] overflow-hidden">

                  {/* NEW Badge */}

                  {bike.isNew && (

                    <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-4 py-1 rounded-full z-10">
                      NEW
                    </span>

                  )}

                  {/* Offer Badge */}

                  {bike.offer && (

                    <span className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full z-10">
                      OFFER
                    </span>

                  )}

                  <img
                    src={bike.image}
                    alt={bike.name}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Hover Offer Overlay */}

                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition">

                    {bike.offer}

                  </div>

                </div>

                {/* Offer Strip */}

                {bike.offer && (

                  <div className="bg-red-600 text-white text-sm text-center py-2 font-medium">

                    🔥 {bike.offer}

                  </div>

                )}

                {/* Content */}

                <div className="p-6">

                  <h3 className="text-xl font-bold text-gray-900">
                    {bike.name}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {bike.tag}
                  </p>

                  {/* Buttons */}

                  <div className="flex gap-3 mt-6">

                    <button className="flex-1 bg-black text-white py-2 rounded-full text-sm font-semibold hover:bg-red-600 transition">

                      Explore

                    </button>

                    <button className="flex-1 border border-gray-300 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition">

                      Specs

                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Navigation Buttons */}

        <div className="flex justify-center gap-6 mt-10">

          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center text-xl hover:bg-black hover:text-white transition"
          >
            ←
          </button>

          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center text-xl hover:bg-black hover:text-white transition"
          >
            →
          </button>

        </div>

      </div>

    </section>

  );

}

export default Allbike;