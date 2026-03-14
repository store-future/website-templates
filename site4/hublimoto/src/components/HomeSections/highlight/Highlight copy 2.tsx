import trackVideo from "../../../assets/video/Yamaha Coimbatore Track Day.mp4";

function Highlight() {
  return (
    <>
      {/* Heading */}
      <div className="flex items-center gap-8 my-14 px-6">
        <div>
          <h1 className="text-5xl font-extrabold tracking-[3px] bg-gradient-to-r from-black via-gray-800 to-red-600 bg-clip-text text-transparent">
            Highlights
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Latest updates from the track
          </p>
        </div>

        <div className="flex-1 h-[3px] bg-gradient-to-r from-blue-900 to-transparent"></div>
      </div>

      {/* Cards Section */}
      <div className="flex w-full h-[600px] bg-neutral-900 overflow-hidden">

        {/* Card 1 */}
        <div className="group flex-1 flex flex-col bg-neutral-800 border-r border-pink-400 transition-all duration-500 hover:flex-[3] relative cursor-pointer">

          <div className="relative h-[85%] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800"
              className="w-full h-full object-cover brightness-75 transition duration-500 group-hover:scale-110 group-hover:brightness-100"
            />
          </div>

          <div className="bg-neutral-900 border-t-2 border-pink-400 text-white p-6 h-[15%] group-hover:h-[25%] transition-all duration-500 flex flex-col justify-center">

            <div className="text-center group-hover:hidden">
              <span className="text-xs font-bold tracking-widest text-pink-400">
                YAMAHA R15 • 2024
              </span>
            </div>

            <div className="opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">

              <div className="text-[10px] text-pink-400 uppercase tracking-widest font-semibold mb-2">
                Yamaha R15 • 2024
              </div>

              <h2 className="text-lg font-bold mb-2">
                Born From Racing DNA
              </h2>

              <p className="text-xs text-gray-300 mb-2">
                Inspired by Yamaha's MotoGP heritage, the R15 delivers razor-sharp
                handling, aggressive aerodynamics, and thrilling performance.
              </p>

              <div className="text-[10px] text-pink-400 uppercase tracking-widest font-semibold">
                Yamaha Motor
              </div>

            </div>
          </div>
        </div>


        {/* Card 2 */}
        <div className="group flex-1 flex flex-col bg-neutral-800 border-r border-pink-400 transition-all duration-500 hover:flex-[3] relative cursor-pointer">

          <div className="relative h-[85%] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800"
              className="w-full h-full object-cover brightness-75 transition duration-500 group-hover:scale-110 group-hover:brightness-100"
            />
          </div>

          <div className="bg-neutral-900 border-t-2 border-pink-400 text-white p-6 h-[15%] group-hover:h-[25%] transition-all duration-500 flex flex-col justify-center">

            <div className="text-center group-hover:hidden">
              <span className="text-xs font-bold tracking-widest text-pink-400">
                YAMAHA MT-15 • 2024
              </span>
            </div>

            <div className="opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">

              <div className="text-[10px] text-pink-400 uppercase tracking-widest font-semibold mb-2">
                Yamaha MT-15 • 2024
              </div>

              <h2 className="text-lg font-bold mb-2">
                Unleash the Dark Warrior
              </h2>

              <p className="text-xs text-gray-300 mb-2">
                Lightweight, powerful, and fiercely agile — built for riders who want
                adrenaline in every twist of the throttle.
              </p>

              <div className="text-[10px] text-pink-400 uppercase tracking-widest font-semibold">
                Yamaha Motor
              </div>

            </div>
          </div>
        </div>


        {/* Card 3 */}
        <div className="group flex-1 flex flex-col bg-neutral-800 transition-all duration-500 hover:flex-[3] relative cursor-pointer">

          <div className="relative h-[85%] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800"
              className="w-full h-full object-cover brightness-75 transition duration-500 group-hover:scale-110 group-hover:brightness-100"
            />
          </div>

          <div className="bg-neutral-900 border-t-2 border-pink-400 text-white p-6 h-[15%] group-hover:h-[25%] transition-all duration-500 flex flex-col justify-center">

            <div className="text-center group-hover:hidden">
              <span className="text-xs font-bold tracking-widest text-pink-400">
                YAMAHA R7 • 2024
              </span>
            </div>

            <div className="opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">

              <div className="text-[10px] text-pink-400 uppercase tracking-widest font-semibold mb-2">
                Yamaha R7 • 2024
              </div>

              <h2 className="text-lg font-bold mb-2">
                Precision Crafted for Performance
              </h2>

              <p className="text-xs text-gray-300 mb-2">
                Aggressive styling and track-focused dynamics engineered to elevate
                your riding experience.
              </p>

              <div className="text-[10px] text-pink-400 uppercase tracking-widest font-semibold">
                Yamaha Racing Division
              </div>

            </div>
          </div>
        </div>

      </div>


      {/* Video Section */}
      <div className="bg-black flex flex-col md:flex-row items-center gap-10 px-8 py-20">

        <div className="flex-1 text-white">
          <h2 className="text-5xl font-black mb-5 text-orange-400">
            Experience The Thrill
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Join us on the track and feel the adrenaline rush of pure performance
          </p>
        </div>

        <div className="flex-[2]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
          >
            <source src={trackVideo} type="video/mp4" />
          </video>
        </div>

      </div>
    </>
  );
}

export default Highlight;