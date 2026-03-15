import card1 from "../../../assets/images/xsr_black-pc.webp";
import card2 from "../../../assets/images/xsr_silver_price-award-pc.webp";
import card3 from "../../../assets/images/xsr_black-pc.webp";
import card4 from "../../../assets/images/xsr_black-pc.webp";

function Discover() {
  return (
    <>
      {/* Section Heading */}
      <div className="text-center my-14">
        <h1 className="text-[48px] font-bold text-gray-900 tracking-[2px] relative inline-block">
          Let's Discover
          <span className="absolute left-1/2 -bottom-3 w-20 h-[4px] bg-blue-900 -translate-x-1/2"></span>
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* Card 1 */}
        <div className="relative overflow-hidden group aspect-[16/10] cursor-pointer">
          <img
            src={card1}
            alt="XSR Black"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-blue-900/90 flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500">

            <p className="text-white text-sm mb-2 uppercase tracking-wider">
              New Release
            </p>

            <h2 className="text-white text-3xl font-bold mb-5">
              XSR Black Edition
            </h2>

            <button className="border-2 border-white text-white px-8 py-3 text-sm font-semibold uppercase transition-all duration-300 hover:bg-white hover:text-blue-900">
              Discover
            </button>

          </div>
        </div>

        {/* Card 2 */}
        <div className="relative overflow-hidden group aspect-[16/10] cursor-pointer">
          <img
            src={card2}
            alt="XSR Silver"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-blue-900/90 flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500">

            <p className="text-white text-sm mb-2 uppercase tracking-wider">
              Award Winner
            </p>

            <h2 className="text-white text-3xl font-bold mb-5">
              XSR Silver Edition
            </h2>

            <button className="border-2 border-white text-white px-8 py-3 text-sm font-semibold uppercase transition-all duration-300 hover:bg-white hover:text-blue-900">
              Discover
            </button>

          </div>
        </div>

        {/* Card 3 */}
        <div className="relative overflow-hidden group aspect-[16/10] cursor-pointer">
          <img
            src={card3}
            alt="XSR Blue"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-blue-900/90 flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500">

            <p className="text-white text-sm mb-2 uppercase tracking-wider">
              Limited Edition
            </p>

            <h2 className="text-white text-3xl font-bold mb-5">
              XSR Blue Edition
            </h2>

            <button className="border-2 border-white text-white px-8 py-3 text-sm font-semibold uppercase transition-all duration-300 hover:bg-white hover:text-blue-900">
              Discover
            </button>

          </div>
        </div>

        {/* Card 4 */}
        <div className="relative overflow-hidden group aspect-[16/10] cursor-pointer">
          <img
            src={card4}
            alt="XSR Grey"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-blue-900/90 flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500">

            <p className="text-white text-sm mb-2 uppercase tracking-wider">
              Classic Style
            </p>

            <h2 className="text-white text-3xl font-bold mb-5">
              XSR Grey Edition
            </h2>

            <button className="border-2 border-white text-white px-8 py-3 text-sm font-semibold uppercase transition-all duration-300 hover:bg-white hover:text-blue-900">
              Discover
            </button>

          </div>
        </div>

      </div>
    </>
  );
}

export default Discover;