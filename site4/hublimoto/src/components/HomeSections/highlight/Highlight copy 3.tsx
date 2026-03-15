import trackVideo from "../../../assets/video/Yamaha Coimbatore Track Day.mp4";

function Highlight() {
  return (
    <>
      {/* Heading */}
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center gap-8 my-[50px]">
          <div>
            <h1 className="text-[54px] font-extrabold tracking-[3px] bg-gradient-to-r from-black via-gray-900 to-red-600 bg-clip-text text-transparent">
              Highlights
            </h1>
            <p className="text-sm text-gray-500 mt-1 tracking-wide">
              Latest updates from the track
            </p>
          </div>

          <div className="flex-1 h-[3px] bg-gradient-to-r from-blue-900 to-transparent"></div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex w-full h-[600px] bg-[#212121]">

        {/* Card 1 */}
        <div className="group flex-1 flex flex-col overflow-hidden bg-[#1a1a1a] border-r border-pink-400 cursor-pointer transition-all duration-500 hover:flex-[3] hover:shadow-[0_0_40px_rgba(255,90,145,0.4)] relative">

          <div className="flex-1 overflow-hidden h-[85%]">
            <img
              src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800"
              alt="Yamaha R15"
              className="w-full h-full object-cover brightness-75 transition-all duration-500 group-hover:scale-110 group-hover:brightness-100"
            />
          </div>

          <div className="bg-[#1a1a1af2] text-white px-6 py-4 flex flex-col justify-center border-t-2 border-pink-400 h-[15%] transition-all duration-500 group-hover:h-[25%]">

            <div className="text-center transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-2">
              <span className="text-[14px] font-bold text-pink-400 tracking-[2px] uppercase">
                YAMAHA R15 • 2024
              </span>
            </div>

            <div className="opacity-0 translate-y-5 pointer-events-none transition-all duration-500 delay-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">

              <div className="text-[10px] text-pink-400 uppercase tracking-[2px] font-semibold mb-1">
                Yamaha R15 • 2024
              </div>

              <h2 className="text-[20px] font-bold text-white mb-1">
                Born From Racing DNA
              </h2>

              <p className="text-[12px] text-gray-300 leading-relaxed mb-1">
                Inspired by Yamaha's MotoGP heritage, the R15 delivers razor-sharp handling, aggressive aerodynamics, and thrilling performance.
              </p>

              <div className="text-[10px] text-pink-400 font-semibold uppercase tracking-[1px]">
                Yamaha Motor
              </div>

            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group flex-1 flex flex-col overflow-hidden bg-[#1a1a1a] border-r border-pink-400 cursor-pointer transition-all duration-500 hover:flex-[3] hover:shadow-[0_0_40px_rgba(255,90,145,0.4)]">

          <div className="flex-1 overflow-hidden h-[85%]">
            <img
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800"
              alt="Yamaha MT15"
              className="w-full h-full object-cover brightness-75 transition-all duration-500 group-hover:scale-110 group-hover:brightness-100"
            />
          </div>

          <div className="bg-[#1a1a1af2] text-white px-6 py-4 flex flex-col justify-center border-t-2 border-pink-400 h-[15%] transition-all duration-500 group-hover:h-[25%]">

            <div className="text-center transition-all duration-500 group-hover:opacity-0">
              <span className="text-[14px] font-bold text-pink-400 tracking-[2px] uppercase">
                YAMAHA MT-15 • 2024
              </span>
            </div>

            <div className="opacity-0 translate-y-5 pointer-events-none transition-all duration-500 delay-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">

              <div className="text-[10px] text-pink-400 uppercase tracking-[2px] font-semibold mb-1">
                Yamaha MT-15 • 2024
              </div>

              <h2 className="text-[20px] font-bold mb-1">
                Unleash the Dark Warrior
              </h2>

              <p className="text-[12px] text-gray-300 leading-relaxed mb-1">
                The MT-15 combines raw street attitude with cutting-edge engineering. Lightweight, powerful, and fiercely agile.
              </p>

              <div className="text-[10px] text-pink-400 uppercase font-semibold">
                Yamaha Motor
              </div>

            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group flex-1 flex flex-col overflow-hidden bg-[#1a1a1a] cursor-pointer transition-all duration-500 hover:flex-[3] hover:shadow-[0_0_40px_rgba(255,90,145,0.4)]">

          <div className="flex-1 overflow-hidden h-[85%]">
            <img
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800"
              alt="Yamaha R7"
              className="w-full h-full object-cover brightness-75 transition-all duration-500 group-hover:scale-110 group-hover:brightness-100"
            />
          </div>

          <div className="bg-[#1a1a1af2] text-white px-6 py-4 flex flex-col justify-center border-t-2 border-pink-400 h-[15%] transition-all duration-500 group-hover:h-[25%]">

            <div className="text-center transition-all duration-500 group-hover:opacity-0">
              <span className="text-[14px] font-bold text-pink-400 tracking-[2px] uppercase">
                YAMAHA R7 • 2024
              </span>
            </div>

            <div className="opacity-0 translate-y-5 pointer-events-none transition-all duration-500 delay-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">

              <div className="text-[10px] text-pink-400 uppercase tracking-[2px] font-semibold mb-1">
                Yamaha R7 • 2024
              </div>

              <h2 className="text-[20px] font-bold mb-1">
                Precision Crafted for Pure Performance
              </h2>

              <p className="text-[12px] text-gray-300 leading-relaxed mb-1">
                With aggressive styling and track-focused dynamics, the Yamaha R7 delivers an exhilarating ride.
              </p>

              <div className="text-[10px] text-pink-400 uppercase font-semibold">
                Yamaha Racing Division
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Video Section */}
      <div className="bg-black flex items-center gap-10 px-[60px] py-[80px] flex-col md:flex-row">

        <div className="flex-1 text-white">
          <h2 className="text-[56px] font-black mb-5 leading-tight text-orange-400">
            Experience The Thrill
          </h2>

          <p className="text-lg text-gray-400 leading-relaxed">
            Join us on the track and feel the adrenaline rush of pure performance
          </p>
        </div>

        <div className="flex-[2]">
          <video autoPlay loop muted playsInline className="w-full">
            <source src={trackVideo} type="video/mp4" />
          </video>
        </div>

      </div>
    </>
  );
}

export default Highlight;