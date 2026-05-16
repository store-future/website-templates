import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./ProductDisplay.css";

import bikeImg    from "@/assets/images/download.png";
import scooterImg from "@/assets/images/download1.png";
import evImg      from "@/assets/images/download2.webp";
import r15        from "@/assets/images/R15-S.png.webp";
import xsrBlack   from "@/assets/images/xsr_black-pc.webp";
import xsrSilver  from "@/assets/images/xsr_silver_price-award-pc.webp";
import bikeWithMen from "@/assets/images/bike-with-men2.png";

/* ── Data ── */
type Bike = {
  id: number; name: string; tag: string; desc: string;
  speed: string; power: string; torque: string; weight: string;
  image: string; category: "moto" | "scooter" | "ev";
};

const allBikes: Bike[] = [
  { id:1,  name:"YZF R15 S",      tag:"SUPERSPORT", desc:"Born on the track, built to dominate.",          speed:"150", power:"18.4", torque:"14.2", weight:"142", image:r15,         category:"moto"    },
  { id:2,  name:"XSR 155 Black",  tag:"HERITAGE",   desc:"Retro soul. Modern heart.",                      speed:"130", power:"19.3", torque:"14.7", weight:"134", image:xsrBlack,    category:"moto"    },
  { id:3,  name:"XSR 155 Silver", tag:"HERITAGE",   desc:"Classic lines, cutting-edge performance.",       speed:"130", power:"19.3", torque:"14.7", weight:"134", image:xsrSilver,   category:"moto"    },
  { id:4,  name:"MT Series",      tag:"HYPER NAKED",desc:"The master of torque.",                          speed:"180", power:"42",   torque:"29.5", weight:"193", image:bikeWithMen, category:"moto"    },
  { id:5,  name:"Aerox 155",      tag:"MAXI SCOOTER",desc:"Aggressive. Fast. Unstoppable.",                speed:"110", power:"15.5", torque:"13.9", weight:"125", image:scooterImg,  category:"scooter" },
  { id:6,  name:"Fascino 125",    tag:"SCOOTER",    desc:"Style that speaks for itself.",                  speed:"90",  power:"8.2",  torque:"10.3", weight:"99",  image:scooterImg,  category:"scooter" },
  { id:7,  name:"Ray ZR 125",     tag:"STREET RALLY",desc:"Rally-inspired street fighter.",                speed:"95",  power:"8.7",  torque:"10.2", weight:"103", image:scooterImg,  category:"scooter" },
  { id:8,  name:"EMF EV",         tag:"ELECTRIC",   desc:"Zero emissions. Maximum thrill.",                speed:"100", power:"12",   torque:"22",   weight:"110", image:evImg,       category:"ev"      },
  { id:9,  name:"Neo EV",         tag:"ELECTRIC",   desc:"The future rides today.",                        speed:"95",  power:"10",   torque:"20",   weight:"105", image:evImg,       category:"ev"      },
];

const CATS = [
  { key:"moto",    label:"MOTO",    icon:"🏍" },
  { key:"scooter", label:"SCOOTER", icon:"🛵" },
  { key:"ev",      label:"EV",      icon:"⚡" },
] as const;

const SPECS = [
  { key:"power",  label:"POWER",     unit:"PS",   icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
  { key:"torque", label:"ENGINE CC",  unit:"cc",   icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg> },
  { key:"weight", label:"MILEAGE",   unit:"kmpl", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/><circle cx="18" cy="6" r="3" fill="currentColor" stroke="none"/></svg> },
  { key:"speed",  label:"TOP SPEED", unit:"km/h", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0"/><path d="M3 12a9 9 0 1 0 18 0"/><path d="M12 12l4-4"/></svg> },
] as const;

const PRICES: Record<number, string> = {
  1:"₹1,82,900", 2:"₹1,59,900", 3:"₹1,62,900", 4:"₹3,49,900",
  5:"₹1,44,900", 6:"₹82,900",  7:"₹88,900",  8:"₹1,10,000", 9:"₹98,000",
};

export default function ProductDisplay() {
  const [activeCat, setActiveCat] = useState<"moto"|"scooter"|"ev">("moto");
  const [selectedId, setSelectedId] = useState(1);
  const headingRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headingRef, { once: true, margin: "-60px" });

  const selected = allBikes.find(b => b.id === selectedId) ?? allBikes[0];

  const handleCatChange = (cat: "moto"|"scooter"|"ev") => {
    setActiveCat(cat);
    const first = allBikes.find(b => b.category === cat);
    if (first) setSelectedId(first.id);
  };

  return (
    <section className="pd-section">
      <div className="pd-bg-deep" />
      <div className="pd-ambient" />

      {/* ══ CINEMATIC HEADING ══ */}
      <div ref={headingRef} className="pd-heading-wrap">
        <motion.div
          className="pd-heading-inner"
          initial={{ opacity: 0, y: 40 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="pd-heading-line"
            initial={{ width: "0%" }}
            animate={headInView ? { width: "100%" } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          />
          <p className="pd-heading-eyebrow">Hubli Moto Wheels · Official Yamaha Dealer</p>
          <h2 className="pd-heading-title">
            <span className="pd-heading-white">CHOOSE YOUR</span>
            <span className="pd-heading-red"> RIDE</span>
          </h2>
          <p className="pd-heading-sub">Every machine. Every category. One showroom.</p>
          <motion.div
            className="pd-heading-line"
            initial={{ width: "0%" }}
            animate={headInView ? { width: "100%" } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          />
        </motion.div>
      </div>

      <div className="pd-layout">

        {/* ══════════ LEFT — BIKE SHOWCASE ══════════ */}
        <div className="pd-left">
          <div className="pd-halo-top" />
          <div className="pd-halo-bottom" />

          {/* ── TOP-LEFT: 4 key indicators ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`specs-${selected.id}`}
              className="pd-top-indicators"
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              variants={{ hidden:{}, show:{ transition:{ staggerChildren:0.07 } } }}
            >
              {SPECS.map(s => (
                <motion.div
                  key={s.key}
                  className="pd-spec-cell"
                  variants={{ hidden:{ opacity:0, x:-14 }, show:{ opacity:1, x:0, transition:{ duration:0.45, ease:[0.16,1,0.3,1] } } }}
                >
                  <span className="pd-spec-icon">{s.icon}</span>
                  <div className="pd-spec-text">
                    <p className="pd-spec-val">{selected[s.key as keyof Bike]}<span className="pd-spec-unit"> {s.unit}</span></p>
                    <p className="pd-spec-label">{s.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* ── BOTTOM-LEFT: name + price + button ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`info-${selected.id}`}
              className="pd-bottom-info"
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, x: -16, transition: { duration: 0.22 } }}
              variants={{ hidden:{}, show:{ transition:{ staggerChildren:0.08 } } }}
            >
              <motion.p
                className="pd-tag"
                variants={{ hidden:{ opacity:0, y:10 }, show:{ opacity:1, y:0, transition:{ duration:0.4, ease:[0.16,1,0.3,1] } } }}
              >{selected.tag}</motion.p>

              <motion.h2
                className="pd-bike-name"
                variants={{ hidden:{ opacity:0, y:16 }, show:{ opacity:1, y:0, transition:{ duration:0.5, ease:[0.16,1,0.3,1] } } }}
              >{selected.name}</motion.h2>

              <motion.div
                className="pd-price"
                variants={{ hidden:{ opacity:0, y:10 }, show:{ opacity:1, y:0, transition:{ duration:0.45, ease:[0.16,1,0.3,1] } } }}
              >
                <span className="pd-price-label">Starting at</span>
                <span className="pd-price-val">{PRICES[selected.id] ?? "—"}</span>
              </motion.div>

              <motion.button
                className="pd-cta"
                variants={{ hidden:{ opacity:0, y:8 }, show:{ opacity:1, y:0, transition:{ duration:0.4, ease:[0.16,1,0.3,1] } } }}
              >VIEW DETAILS →</motion.button>
            </motion.div>
          </AnimatePresence>

          {/* Bike image + platform glow */}
          <div className="pd-stage">
            <div className="pd-platform-glow" />
            <AnimatePresence mode="wait">
              <motion.img
                key={selected.id}
                src={selected.image}
                alt={selected.name}
                className="pd-stage-img"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              />
            </AnimatePresence>
            <div className="pd-platform-ring" />
          </div>
        </div>

        {/* ══════════ RIGHT — CHOOSE YOUR RIDE ══════════ */}
        <div className="pd-right">
          <p className="pd-right-title">CHOOSE YOUR RIDE</p>

          {/* Category tabs */}
          <div className="pd-cat-tabs">
            {CATS.map(c => (
              <button
                key={c.key}
                className={`pd-cat-tab ${activeCat === c.key ? "active" : ""}`}
                onClick={() => handleCatChange(c.key)}
              >
                <span className="pd-cat-icon">{c.icon}</span>
                <span className="pd-cat-label">{c.label}</span>
                {activeCat === c.key && (
                  <motion.div layoutId="tabUnderline" className="pd-tab-underline" />
                )}
              </button>
            ))}
          </div>

          {/* Three-column bike list */}
          <div className="pd-cols">
            {CATS.map(c => {
              const bikes = allBikes.filter(b => b.category === c.key);
              const isActive = activeCat === c.key;
              return (
                <div key={c.key} className={`pd-col ${isActive ? "pd-col-active" : ""}`}>
                  <div className="pd-col-list">
                    {bikes.map(b => (
                      <button
                        key={b.id}
                        className={`pd-bike-row ${selectedId === b.id && isActive ? "pd-bike-row-active" : ""}`}
                        onClick={() => { handleCatChange(c.key); setSelectedId(b.id); }}
                      >
                        {selectedId === b.id && isActive && (
                          <motion.div layoutId="activeBar" className="pd-active-bar" />
                        )}
                        <span className="pd-bike-row-name">{b.name}</span>
                        {selectedId === b.id && isActive && (
                          <span className="pd-active-dot" />
                        )}
                      </button>
                    ))}
                  </div>
                  <div className={`pd-col-dot ${isActive ? "pd-col-dot-active" : ""}`} />
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* long black gradient tail so next section doesn't feel abrupt */}
      <div className="pd-tail" />
    </section>
  );
}
