import img1 from "../.././assets/images/bg1img.jpg";
import img2 from "../../assets/images/bike-with-men-removebg-preview.png";

function AboutSection() {
  return (
    <section className="py-24 bg-gray-100">

      <div className="max-w-[2000px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Images */}

        <div className="relative">

          {/* Main Image */}

          <img
            src={img1}
            alt="Workshop"
            className="w-[90%] rounded-lg shadow-xl"
          />

          {/* Overlap Image */}

          <img
            src={img2}
            alt="Bike"
            className="absolute bottom-[-40px] right-[40px] w-[45%] rounded-lg shadow-2xl border-8 border-white"
          />

        </div>

        {/* Right Content */}

        <div>

          <p className="text-orange-500 font-semibold mb-2">
            About Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            We Over 20 Years <br />
            Experience
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
            natoque penatibus et magnis dis parturient montes.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            Donec pede justo, fringilla vel, aliquet nec, vulputate
            eget, arcu. In enim justo, rhoncus ut, imperdiet a,
            venenatis vitae.
          </p>

          <button className="border border-orange-500 text-orange-500 px-8 py-3 font-semibold hover:bg-orange-500 hover:text-white transition">
            ABOUT US
          </button>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;