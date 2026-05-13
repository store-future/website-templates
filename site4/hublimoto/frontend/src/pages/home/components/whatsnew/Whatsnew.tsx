import "./Whatsnew.css";
import r3Video from "@/assets/video/R3.mp4";
import trackVideo from "@/assets/video/Yamaha Coimbatore Track Day.mp4";
import img1 from "@/assets/images/xsr_black-pc.webp";
import img2 from "@/assets/images/R15-S.png.webp";
import img3 from "@/assets/images/xsr_silver_price-award-pc.webp";
import img4 from "@/assets/images/download2.webp";

const cards = [
  { image: img1, tag: "New Launch", title: "XSR 900", sub: "Neo-Retro Sport", desc: "Torque-rich CP3 engine meets timeless design." },
  { image: img2, tag: "Best Seller", title: "YZF-R15", sub: "Supersport 155cc", desc: "Track-bred DNA in an everyday machine." },
  { image: img3, tag: "Limited", title: "XSR Silver", sub: "Award Edition", desc: "Iconic silver livery. Collector's pride." },
  { image: img4, tag: "Adventure", title: "Ténéré 700", sub: "Rally Replica", desc: "Dakar spirit. Road-legal freedom." },
];

function Whatsnew() {
  return (
    <section className="whatsnew__section">

      {/* Left video strip */}
      <div className="whatsnew__video-strip whatsnew__video-left">
        <video src={r3Video} autoPlay muted loop playsInline />
        <div className="whatsnew__video-label">R3 · Pure Sport</div>
      </div>

      {/* Main content */}
      <div className="whatsnew__main">
        <div className="whatsnew__header">
          <span className="whatsnew__eyebrow">WHAT'S NEW</span>
          <h2 className="whatsnew__heading">Latest from Yamaha</h2>
          <p className="whatsnew__subtitle">Discover the newest machines, editions and stories from the world of Yamaha.</p>
        </div>

        <div className="whatsnew__grid">
          {cards.map((c) => (
            <div className="whatsnew__card" key={c.title} style={{ backgroundImage: `url(${c.image})` }}>
              <div className="whatsnew__card-overlay" />
              <span className="whatsnew__card-tag">{c.tag}</span>
              <div className="whatsnew__card-body">
                <p className="whatsnew__card-sub">{c.sub}</p>
                <h3 className="whatsnew__card-title">{c.title}</h3>
                <p className="whatsnew__card-desc">{c.desc}</p>
                <button className="whatsnew__card-btn">Explore →</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right video strip */}
      <div className="whatsnew__video-strip whatsnew__video-right">
        <video src={trackVideo} autoPlay muted loop playsInline />
        <div className="whatsnew__video-label">Track Day · Coimbatore</div>
      </div>

    </section>
  );
}

export default Whatsnew;
