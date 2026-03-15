import trackVideo from "../../../assets/video/Yamaha Coimbatore Track Day.mp4";

function Highlight() {
  return (
    <>
      {/* Heading */}
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center gap-[30px] my-[50px]">
          <div className="shrink-0">
            <h1 className="text-[54px] font-extrabold tracking-[3px] bg-gradient-to-r from-black via-gray-900 to-red-600 bg-clip-text text-transparent">
              Highlights
            </h1>
            <p className="text-[14px] text-gray-500 mt-[5px] tracking-[0.5px]">
              Latest updates from the track
            </p>
          </div>

          <div className="flex-1 h-[3px] bg-gradient-to-r from-blue-900 to-transparent"></div>
        </div>
      </div>

      {/* Cards */}
      <div className="flex w-full h-[600px] bg-[#212121] mb-[150px]">

        {/* Card 1 */}
        <div className="group flex-1 flex flex-col overflow-hidden bg-[#1a1a1a] border-r border-[#333] cursor-pointer transition-all duration-500 hover:flex-[3] hover:shadow-[0_0_40px_rgba(51,51,51,0.4)] relative">

          <div className="flex-1 h-full overflow-hidden transition-all duration-500 group-hover:h-[75%]">
            <img
              src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800"
              alt="Yamaha R15"
              className="w-full h-full object-cover brightness-[0.8] transition-all duration-500 group-hover:scale-110 group-hover:brightness-100"
            />
          </div>

          <div className="bg-[#1a1a1af2] text-white flex flex-col justify-center border-t-2 border-[#333] h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:h-[25%] group-hover:px-[40px] group-hover:py-[30px] group-hover:opacity-100">

            <div className="opacity-0 translate-y-[20px] transition-all duration-500 delay-200 group-hover:opacity-100 group-hover:translate-y-0">

              <div className="text-[10px] text-gray-400 uppercase tracking-[2px] font-semibold mb-[8px]">
                Yamaha R15 • 2024
              </div>

              <h2 className="text-[20px] font-bold text-white mb-[8px]">
                Born From Racing DNA
              </h2>

              <p className="text-[12px] text-gray-300 leading-[1.5] mb-[8px]">
                Inspired by Yamaha's MotoGP heritage, the R15 delivers razor-sharp
                handling, aggressive aerodynamics, and thrilling performance.
              </p>

              <div className="text-[10px] text-gray-400 uppercase font-semibold tracking-[1px]">
                Yamaha Motor
              </div>

            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group flex-1 flex flex-col overflow-hidden bg-[#1a1a1a] border-r border-[#333] cursor-pointer transition-all duration-500 hover:flex-[3] hover:shadow-[0_0_40px_rgba(51,51,51,0.4)]">

          <div className="flex-1 h-full overflow-hidden transition-all duration-500 group-hover:h-[75%]">
            <img
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800"
              alt="Yamaha MT15"
              className="w-full h-full object-cover brightness-[0.8] transition-all duration-500 group-hover:scale-110 group-hover:brightness-100"
            />
          </div>

          <div className="bg-[#1a1a1af2] text-white flex flex-col justify-center border-t-2 border-[#333] h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:h-[25%] group-hover:px-[40px] group-hover:py-[30px] group-hover:opacity-100">

            <div className="opacity-0 translate-y-[20px] transition-all duration-500 delay-200 group-hover:opacity-100 group-hover:translate-y-0">

              <div className="text-[10px] text-gray-400 uppercase tracking-[2px] font-semibold mb-[8px]">
                Yamaha MT-15 • 2024
              </div>

              <h2 className="text-[20px] font-bold mb-[8px]">
                Unleash the Dark Warrior
              </h2>

              <p className="text-[12px] text-gray-300 leading-[1.5] mb-[8px]">
                The MT-15 combines raw street attitude with cutting-edge engineering.
                Lightweight, powerful, and fiercely agile.
              </p>

              <div className="text-[10px] text-gray-400 uppercase font-semibold">
                Yamaha Motor
              </div>

            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group flex-1 flex flex-col overflow-hidden bg-[#1a1a1a] cursor-pointer transition-all duration-500 hover:flex-[3] hover:shadow-[0_0_40px_rgba(51,51,51,0.4)]">

          <div className="flex-1 h-full overflow-hidden transition-all duration-500 group-hover:h-[75%]">
            <img
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800"
              alt="Yamaha R7"
              className="w-full h-full object-cover brightness-[0.8] transition-all duration-500 group-hover:scale-110 group-hover:brightness-100"
            />
          </div>

          <div className="bg-[#1a1a1af2] text-white flex flex-col justify-center border-t-2 border-[#333] h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:h-[25%] group-hover:px-[40px] group-hover:py-[30px] group-hover:opacity-100">

            <div className="opacity-0 translate-y-[20px] transition-all duration-500 delay-200 group-hover:opacity-100 group-hover:translate-y-0">

              <div className="text-[10px] text-gray-400 uppercase tracking-[2px] font-semibold mb-[8px]">
                Yamaha R7 • 2024
              </div>

              <h2 className="text-[20px] font-bold mb-[8px]">
                Precision Crafted for Pure Performance
              </h2>

              <p className="text-[12px] text-gray-300 leading-[1.5] mb-[8px]">
                With aggressive styling and track-focused dynamics, the Yamaha R7
                delivers an exhilarating ride.
              </p>

              <div className="text-[10px] text-gray-400 uppercase font-semibold">
                Yamaha Racing Division
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Video Section */}
      <div className="bg-black flex items-center gap-[40px] px-[60px] py-[80px] flex-col md:flex-row">

        <div className="flex-1 text-white">
          <h2 className="text-[56px] font-black mb-[20px] leading-[1.2] text-orange-400">
            Experience The Thrill
          </h2>

          <p className="text-[18px] text-gray-300 leading-[1.6]">
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