import techImg from "@/assets/images/download.png";

function TechnologySection() {

  return (

    <section className="bg-black text-white py-24 mt-16">

      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}

        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Engineered <span className="text-red-500">For Performance</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Experience the thrill of cutting-edge engineering. Yamaha bikes are
            designed with racing DNA, powerful engines, and advanced technology
            to deliver unmatched performance on every road.
          </p>

          <div className="flex gap-4">

            <button className="bg-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition">
              Explore Technology
            </button>

            <button className="border border-gray-500 px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
              Learn More
            </button>

          </div>

        </div>

        {/* Right Image */}

        <div className="relative group">

          {/* Glow effect */}

          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-400 opacity-30 blur-2xl rounded-xl group-hover:opacity-60 transition"></div>

          <img
            src={techImg}
            alt="Bike Technology"
            className="relative rounded-xl shadow-2xl transform group-hover:scale-105 transition duration-500"
          />

        </div>

      </div>

    </section>

  );

}

export default TechnologySection;
