import bikewithmen from "../../../assets/images/bike-with-men2.png";

function Product() {
  return (
    <>
      <div className="text-center mt-20 mb-10">
        <h1 className="text-5xl font-extrabold tracking-wider bg-gradient-to-r from-black via-blue-800 to-black bg-clip-text text-transparent">
          Discover the Power
        </h1>
      </div>

      <div className="relative w-full h-[700px] overflow-hidden">

        {/* top section */}
        <div className="w-full h-[60%] flex items-center px-24 bg-gradient-to-br from-gray-100 to-gray-200">

          <div className="max-w-xl space-y-6">
            <h2 className="text-5xl font-bold text-gray-900">
              RIDE THE FUTURE
            </h2>

            <p className="text-lg text-gray-600 border-l-4 border-blue-800 pl-5">
              Experience the thrill of power, speed and design built for the
              streets.
            </p>
          </div>

        </div>

        {/* black section */}
        <div className="absolute bottom-0 w-full h-[50%] bg-gradient-to-b from-gray-900 to-black flex items-center px-20">

          <div className="flex gap-10 max-w-2xl">

            {/* card 1 */}
            <div className="p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl text-center hover:scale-105 transition duration-500 shadow-xl">

              <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-700 to-blue-500 text-white">
                ⚙️
              </div>

              <h3 className="text-white font-bold tracking-wider">
                BEST ENGINE
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                High-performance motor with cutting-edge technology
              </p>
            </div>

            {/* card 2 */}
            <div className="p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl text-center hover:scale-105 transition duration-500 shadow-xl">

              <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-700 to-blue-500 text-white">
                ⚡
              </div>

              <h3 className="text-white font-bold tracking-wider">
                TOP PERFORMANCE
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                Unmatched speed and acceleration for ultimate riding
              </p>

            </div>

          </div>
        </div>

        {/* bike image */}
        <img
          src={bikewithmen}
          alt="bike"
          className="absolute right-[2%] bottom-[5%] h-[650px] drop-shadow-2xl animate-pulse"
        />

      </div>
    </>
  );
}

export default Product;