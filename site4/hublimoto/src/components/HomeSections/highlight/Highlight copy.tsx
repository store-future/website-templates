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
      <div className="flex flex-col w-full gap-[20px] mb-[40px] px-[20px]">

        {/* Card 1 */}
        <div className="group relative w-full h-[120px] flex overflow-hidden rounded-[12px] bg-[#f5f5f5] shadow-[0_4px_15px_rgba(0,0,0,0.1)] cursor-pointer transition-all duration-500 hover:h-[400px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]">

          <div className="w-full h-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800"
              alt="Yamaha R15"
              className="w-full h-full object-cover brightness-90 transition-all duration-500 group-hover:scale-105 group-hover:brightness-100"
            />
          </div>

          {/* collapsed text */}
          <div className="absolute bottom-[20px] left-[35px] z-[2] transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-[10px]">
            <span className="text-[16px] font-bold text-white tracking-[2px] uppercase drop-shadow-lg">
              YAMAHA R15 • 2024
            </span>
          </div>

          {/* hover content */}
          <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end px-[35px] py-[25px] bg-gradient-to-t from-black/90 via-black/70 to-transparent text-white opacity-0 translate-y-[20px] transition-all duration-500 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">

            <div className="text-[11px] text-orange-400 uppercase tracking-[2px] font-semibold mb-[10px]">
              Yamaha R15 • 2024
            </div>

            <h2 className="text-[28px] font-bold mb-[12px]">
              Born From Racing DNA
            </h2>

            <p className="text-[14px] text-gray-200 leading-relaxed mb-[10px]">
              Inspired by Yamaha's MotoGP heritage, the R15 delivers razor-sharp
              handling, aggressive aerodynamics, and thrilling performance.
            </p>

            <div className="text-[11px] text-orange-400 uppercase tracking-[1px] font-semibold">
              Yamaha Motor
            </div>

          </div>
        </div>

        {/* Card 2 */}
        <div className="group relative w-full h-[120px] flex overflow-hidden rounded-[12px] bg-[#f5f5f5] shadow-[0_4px_15px_rgba(0,0,0,0.1)] cursor-pointer transition-all duration-500 hover:h-[400px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]">

          <img
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800"
            alt="Yamaha MT15"
            className="w-full h-full object-cover brightness-90 transition-all duration-500 group-hover:scale-105 group-hover:brightness-100"
          />

          <div className="absolute bottom-[20px] left-[35px] transition-all duration-500 group-hover:opacity-0">
            <span className="text-[16px] font-bold text-white tracking-[2px] uppercase drop-shadow-lg">
              YAMAHA MT-15 • 2024
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end px-[35px] py-[25px] bg-gradient-to-t from-black/90 via-black/70 to-transparent text-white opacity-0 translate-y-[20px] transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">

            <div className="text-[11px] text-orange-400 uppercase tracking-[2px] font-semibold mb-[10px]">
              Yamaha MT-15 • 2024
            </div>

            <h2 className="text-[28px] font-bold mb-[12px]">
              Unleash the Dark Warrior
            </h2>

            <p className="text-[14px] text-gray-200 leading-relaxed mb-[10px]">
              The MT-15 combines raw street attitude with cutting-edge engineering.
              Lightweight, powerful, and fiercely agile.
            </p>

            <div className="text-[11px] text-orange-400 uppercase tracking-[1px] font-semibold">
              Yamaha Motor
            </div>

          </div>
        </div>

        {/* Card 3 */}
        <div className="group relative w-full h-[120px] flex overflow-hidden rounded-[12px] bg-[#f5f5f5] shadow-[0_4px_15px_rgba(0,0,0,0.1)] cursor-pointer transition-all duration-500 hover:h-[400px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]">

          <img
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800"
            alt="Yamaha R7"
            className="w-full h-full object-cover brightness-90 transition-all duration-500 group-hover:scale-105 group-hover:brightness-100"
          />

          <div className="absolute bottom-[20px] left-[35px] transition-all duration-500 group-hover:opacity-0">
            <span className="text-[16px] font-bold text-white tracking-[2px] uppercase drop-shadow-lg">
              YAMAHA R7 • 2024
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end px-[35px] py-[25px] bg-gradient-to-t from-black/90 via-black/70 to-transparent text-white opacity-0 translate-y-[20px] transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">

            <div className="text-[11px] text-orange-400 uppercase tracking-[2px] font-semibold mb-[10px]">
              Yamaha R7 • 2024
            </div>

            <h2 className="text-[28px] font-bold mb-[12px]">
              Precision Crafted for Pure Performance
            </h2>

            <p className="text-[14px] text-gray-200 leading-relaxed mb-[10px]">
              With aggressive styling and track-focused dynamics, the Yamaha R7
              delivers an exhilarating ride.
            </p>

            <div className="text-[11px] text-orange-400 uppercase tracking-[1px] font-semibold">
              Yamaha Racing Division
            </div>

          </div>
        </div>

      </div>

      {/* Video Section */}
      <div className="bg-black flex items-center gap-[40px] px-[60px] py-[80px] flex-col md:flex-row">

        <div className="flex-1 text-white">
          <h2 className="text-[56px] font-black mb-[20px] leading-tight text-orange-400">
            Experience The Thrill
          </h2>

          <p className="text-[18px] text-gray-300 leading-relaxed">
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