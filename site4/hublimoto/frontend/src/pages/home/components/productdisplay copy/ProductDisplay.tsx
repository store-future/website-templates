import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  { key:"speed",  label:"TOP SPEED", unit:"km/h", icon:"⚡" },
  { key:"power",  label:"POWER",     unit:"PS",   icon:"🔋" },
  { key:"torque", label:"TORQUE",    unit:"Nm",   icon:"⚙" },
  { key:"weight", label:"WEIGHT",    unit:"kg",   icon:"🔒" },
] as const;

export default function ProductDisplay() {
  const [activeCat, setActiveCat] = useState<"moto"|"scooter"|"ev">("moto");
  const [selectedId, setSelectedId] = useState(1);

  const listBikes = allBikes.filter(b => b.category === activeCat);
  const selected  = allBikes.find(b => b.id === selectedId) ?? allBikes[0];

  const handleCatChange = (cat: "moto"|"scooter"|"ev") => {
    setActiveCat(cat);
    const first = allBikes.find(b => b.category === cat);
    if (first) setSelectedId(first.id);
  };

  return (
    <section className="pd-section">
      {/* ambient glow */}
      <div className="pd-ambient" />

      <div className="pd-layout">

        {/* ══════════ LEFT — BIKE SHOWCASE ══════════ */}
        <div className="pd-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              className="pd-left-inner"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* tag + name */}
              <p className="pd-tag">{selected.tag}</p>
              <h2 className="pd-bike-name">{selected.name}</h2>
              <p className="pd-bike-desc">{selected.desc}</p>

              {/* spec rows */}
              <div className="pd-specs">
                {SPECS.map(s => (
                  <div key={s.key} className="pd-spec-row">
                    <span className="pd-spec-icon">{s.icon}</span>
                    <div>
                      <p className="pd-spec-val">{selected[s.key as keyof Bike]}</p>
                      <p className="pd-spec-meta">{s.label}<br /><span>{s.unit}</span></p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="pd-cta">EXPLORE DETAILS →</button>
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
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.04, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
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
              return (
                <div key={c.key} className={`pd-col ${activeCat === c.key ? "pd-col-active" : ""}`}>
                  <div className="pd-col-list">
                    {bikes.map(b => (
                      <button
                        key={b.id}
                        className={`pd-bike-row ${selectedId === b.id ? "pd-bike-row-active" : ""}`}
                        onClick={() => { handleCatChange(c.key); setSelectedId(b.id); }}
                      >
                        {selectedId === b.id && activeCat === c.key && (
                          <motion.div layoutId="activeBar" className="pd-active-bar" />
                        )}
                        <span className="pd-bike-row-name">{b.name}</span>
                        {selectedId === b.id && activeCat === c.key && (
                          <span className="pd-active-dot" />
                        )}
                      </button>
                    ))}
                  </div>
                  {/* scroll indicator dot */}
                  <div className={`pd-col-dot ${activeCat === c.key ? "pd-col-dot-active" : ""}`} />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
