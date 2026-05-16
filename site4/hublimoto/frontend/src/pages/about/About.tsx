import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  animate,
} from "framer-motion";
import "./About.css";

// ── Image imports ──────────────────────────────────────────────
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.webp";
import banner3 from "../../assets/images/banner3.jpg";
import banner4 from "../../assets/images/banner4.jpg";
import banner5 from "../../assets/images/banner5.jpg";
import banner6 from "../../assets/images/banner6.jpg";
import banner7 from "../../assets/images/banner7.jpg";
import banner8 from "../../assets/images/banner8.jpg";
import bikeWithMen from "../../assets/images/bike-with-men.png";
import xsrBlack from "../../assets/images/xsr_black-pc.webp";
import r15 from "../../assets/images/R15-S.png.webp";
import yamahaLogo from "../../assets/logos/yamaha_logo-black.webp";

// ── Fade-up wrapper ────────────────────────────────────────────
const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

// ── Animated counter ──────────────────────────────────────────
const Counter = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2.2,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix;
      },
    });
    return controls.stop;
  }, [inView, to, suffix]);
  return <span ref={ref}>0{suffix}</span>;
};

// ── Timeline data ─────────────────────────────────────────────
const timeline = [
  {
    year: "The Origin",
    title: "Born in Laxmeshwar",
    desc: "Mr. Sangamesh Tatti grew up in Laxmeshwar with an innate fascination for motorcycles — not just how they looked, but how they worked. What they stood for. To him, a two-wheeler was never just a vehicle. It was freedom, identity, and craftsmanship on wheels.",
    img: banner3,
  },
  {
    year: "2017",
    title: "The First Showroom",
    desc: "He opened the first Hubli Moto Wheels showroom — not to simply sell motorcycles, but to redefine what it felt like to buy one. Spotless. Thorough. Disciplined. Nothing left to chance. Because for Mr. Sangamesh, mediocrity was never an option.",
    img: banner4,
  },
  {
    year: "The Match",
    title: "Two Perfectionists. One Standard.",
    desc: "He found the perfect partner in Yamaha — a world-class brand that doesn't cut corners, doesn't compromise its ethics, and doesn't settle for second-best. Two perfectionists. One shared standard of excellence.",
    img: banner5,
  },
  {
    year: "Growth",
    title: "Word Spread Organically",
    desc: "The customers noticed. Word spread the way it always does when something is genuinely exceptional — organically, through trust, through experience, through the quiet confidence of people who know they were treated right.",
    img: banner6,
  },
  {
    year: "Today",
    title: "Five Locations. One Standard.",
    desc: "What started as one showroom grew — steadily, deliberately, without compromise — into five locations across the region: Hubli Gokul Road, Hubli Keshwapur, Dharwad, Gadag, and Laxmeshwar.",
    img: banner7,
  },
];

// ── Values data ───────────────────────────────────────────────
const values = [
  {
    icon: "⚡",
    title: "Performance First",
    desc: "Every machine we sell is tuned for the road ahead. We don't just sell bikes — we deliver adrenaline.",
  },
  {
    icon: "🛡️",
    title: "Uncompromised Trust",
    desc: "Genuine parts, certified service, transparent pricing. Your trust is the engine that drives us.",
  },
  {
    icon: "🔥",
    title: "Passion Driven",
    desc: "We are riders ourselves. Every recommendation comes from the heart of someone who lives the ride.",
  },
  {
    icon: "🌐",
    title: "Community Legacy",
    desc: "From group rides to track days — we build a brotherhood of riders across North Karnataka.",
  },
];

// ── Stats data ────────────────────────────────────────────────
const stats = [
  { value: 10000, suffix: "+", label: "Happy Riders" },
  { value: 7, suffix: "+", label: "Years of Legacy" },
  { value: 5, suffix: "", label: "Premium Locations" },
  { value: 98, suffix: "%", label: "Service Satisfaction" },
];

// ── Locations data ────────────────────────────────────────────
const locations = [
  {
    name: "Hubli – Gokul Road",
    address: "Gokul Road, Hubli",
    type: "Showroom & Service",
    img: banner1,
    hours: "9AM – 7PM",
  },
  {
    name: "Hubli – Keshwapur",
    address: "Keshwapur, Hubli",
    type: "Showroom & Service",
    img: banner2,
    hours: "9AM – 7PM",
  },
  {
    name: "Dharwad",
    address: "Dharwad, Karnataka",
    type: "Showroom",
    img: banner3,
    hours: "9AM – 6PM",
  },
  {
    name: "Gadag",
    address: "Gadag, Karnataka",
    type: "Showroom",
    img: banner4,
    hours: "9AM – 6PM",
  },
  {
    name: "Laxmeshwar",
    address: "Laxmeshwar, Karnataka",
    type: "Showroom",
    img: banner8,
    hours: "9AM – 6PM",
  },
];

// ── Testimonials ──────────────────────────────────────────────
const testimonials = [
  {
    name: "Rahul Patil",
    bike: "MT-15 V2 Owner",
    quote:
      "Walking into Hubli Moto Wheels felt like entering a different world. The team didn't just sell me a bike — they matched me with my soul machine.",
    avatar: "R",
  },
  {
    name: "Priya Desai",
    bike: "Fascino 125 Owner",
    quote:
      "The service team here is extraordinary. They treat every bike like it's their own. I've never trusted anyone else with my Yamaha.",
    avatar: "P",
  },
  {
    name: "Kiran Naik",
    bike: "R15 V4 Owner",
    quote:
      "Mr. Tatti's vision is visible in every corner of this dealership. Premium, passionate, and genuinely caring about riders.",
    avatar: "K",
  },
];

// ═══════════════════════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════
export default function About() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setActiveTestimonial((p) => (p + 1) % testimonials.length),
      4000
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="about-root">
      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="about-hero" ref={heroRef}>
        <motion.div className="hero-bg-wrap" style={{ y: heroY }}>
          <img src={xsrBlack} alt="Yamaha XSR" className="hero-bg-img" />
          <div className="hero-bg-overlay" />
        </motion.div>

        <motion.div className="about-hero-content" style={{ opacity: heroOpacity }}>
          <motion.p
            className="about-hero-eyebrow"
            initial={{ opacity: 0, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            HUBLI MOTO WHEELS
          </motion.p>

          <motion.h1
            className="about-hero-headline"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Born From
            <br />
            <span className="about-hero-accent">Passion.</span>
            <br />
            Built on Trust.
          </motion.h1>

          <motion.p
            className="about-hero-sub"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}
          >
            North Karnataka's most trusted Yamaha dealership since 2017.
          </motion.p>

          <motion.div
            className="about-hero-scroll-hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            <span className="about-scroll-line" />
            <span>Scroll to explore</span>
          </motion.div>
        </motion.div>

        {/* floating badge */}
        <motion.div
          className="about-hero-badge"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, type: "spring", stiffness: 120 }}
        >
          <img src={yamahaLogo} alt="Yamaha" />
          <span>Official Dealer</span>
        </motion.div>
      </section>

      {/* ── 2. FOUNDER STORY ────────────────────────────────── */}
      <section className="about-founder">
        <FadeUp className="founder-intro">
          <p className="section-eyebrow section-eyebrow--red">THE FOUNDER'S STORY</p>
          <h2 className="section-title">
            Some businesses are started for money.<br />
            <span className="red-accent">Hubli Moto Wheels was started for love.</span>
          </h2>
          <p className="founder-lead">
            The love of two wheels. The love of engineering. The love of getting things exactly right.
          </p>
        </FadeUp>
      </section>

      {/* ── 2b. TIMELINE ────────────────────────────────────── */}
      <section className="about-timeline">
        <FadeUp className="section-header">
          <p className="section-eyebrow">THE JOURNEY</p>
          <h2 className="section-title">
            Mr. Sangamesh Tatti —<br />
            <span className="red-accent">A Rider's Vision</span>
          </h2>
        </FadeUp>

        <div className="timeline-track">
          {timeline.map((item, i) => (
            <FadeUp key={item.year} delay={i * 0.12} className="timeline-item">
              <div className={`tl-card ${i % 2 === 0 ? "tl-left" : "tl-right"}`}>
                <div className="tl-img-wrap">
                  <img src={item.img} alt={item.title} />
                  <div className="tl-img-overlay" />
                </div>
                <div className="tl-body">
                  <span className="tl-year">{item.year}</span>
                  <h3 className="tl-title">{item.title}</h3>
                  <p className="tl-desc">{item.desc}</p>
                </div>
              </div>
              <div className="tl-dot">
                <div className="tl-dot-inner" />
              </div>
            </FadeUp>
          ))}
          <div className="tl-spine" />
        </div>
      </section>

      {/* ── 3. PHILOSOPHY / VALUES ──────────────────────────── */}
      <section className="about-values">
        <div className="values-bg">
          <img src={bikeWithMen} alt="" className="values-bg-img" />
          <div className="values-bg-overlay" />
        </div>

        <FadeUp className="section-header section-header--light">
          <p className="section-eyebrow section-eyebrow--red">OUR PHILOSOPHY</p>
          <h2 className="section-title section-title--white">
            What Drives <span className="red-accent">Everything</span> We Do
          </h2>
        </FadeUp>

        <div className="values-grid">
          {values.map((v, i) => (
            <FadeUp key={v.title} delay={i * 0.1}>
              <motion.div
                className="value-card glass-card"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="value-icon">{v.icon}</span>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
                <div className="value-glow" />
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── 4. YAMAHA PARTNERSHIP + STATS ───────────────────── */}
      <section className="about-partnership">
        <div className="partnership-inner">
          <div className="partnership-left">
            <FadeUp>
              <p className="section-eyebrow">OFFICIAL YAMAHA PARTNER</p>
              <h2 className="section-title">
                The <span className="red-accent">Yamaha</span>
                <br />
                Standard. Upheld.
              </h2>
              <p className="partnership-body">
                He found the perfect partner in Yamaha — a world-class brand that doesn't cut corners,
                doesn't compromise its ethics, and doesn't settle for second-best.
                Two perfectionists. One shared standard of excellence.
              </p>
              <img
                src={yamahaLogo}
                alt="Yamaha"
                className="partnership-logo"
              />
            </FadeUp>
          </div>

          <div className="partnership-right">
            <div className="stats-grid">
              {stats.map((s, i) => (
                <FadeUp key={s.label} delay={i * 0.1}>
                  <div className="stat-card glass-card">
                    <div className="stat-number">
                      <Counter to={s.value} suffix={s.suffix} />
                    </div>
                    <div className="stat-label">{s.label}</div>
                    <div className="stat-bar">
                      <motion.div
                        className="stat-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: i * 0.15 }}
                      />
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.3}>
              <div className="bike-showcase">
                <motion.img
                  src={r15}
                  alt="Yamaha R15"
                  className="showcase-bike"
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
                <div className="showcase-glow" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 5. LOCATIONS ────────────────────────────────────── */}
      <section className="about-locations">
        <FadeUp className="section-header">
          <p className="section-eyebrow">FIND US</p>
          <h2 className="section-title">
            Our <span className="red-accent">Five Locations</span>
          </h2>
          <p className="section-sub">
            Five premium touchpoints across North Karnataka — each one spotless, each one ready.
          </p>
        </FadeUp>

        <div className="locations-grid">
          {locations.slice(0, 3).map((loc, i) => (
            <FadeUp key={loc.name} delay={i * 0.15}>
              <motion.div
                className="location-card"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <div className="loc-img-wrap">
                  <img src={loc.img} alt={loc.name} />
                  <div className="loc-img-overlay" />
                  <span className="loc-type-badge">{loc.type}</span>
                </div>
                <div className="loc-body glass-card">
                  <h3 className="loc-name">{loc.name}</h3>
                  <p className="loc-address">📍 {loc.address}</p>
                  <p className="loc-hours">🕐 {loc.hours}</p>
                  <motion.button
                    className="loc-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Get Directions →
                  </motion.button>
                </div>
              </motion.div>
            </FadeUp>
          ))}

          {/* Row 2 — last 2 cards centered */}
          <div className="locations-row2">
            {locations.slice(3).map((loc, i) => (
              <FadeUp key={loc.name} delay={(i + 3) * 0.15}>
                <motion.div
                  className="location-card"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 250 }}
                >
                  <div className="loc-img-wrap">
                    <img src={loc.img} alt={loc.name} />
                    <div className="loc-img-overlay" />
                    <span className="loc-type-badge">{loc.type}</span>
                  </div>
                  <div className="loc-body glass-card">
                    <h3 className="loc-name">{loc.name}</h3>
                    <p className="loc-address">📍 {loc.address}</p>
                    <p className="loc-hours">🕐 {loc.hours}</p>
                    <motion.button
                      className="loc-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Get Directions →
                    </motion.button>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. TESTIMONIALS ─────────────────────────────────── */}
      <section className="about-testimonials">
        <div className="testimonials-bg">
          <img src={banner2} alt="" />
          <div className="testimonials-overlay" />
        </div>

        <FadeUp className="section-header section-header--light">
          <p className="section-eyebrow section-eyebrow--red">RIDER STORIES</p>
          <h2 className="section-title section-title--white">
            Voices of the <span className="red-accent">Road</span>
          </h2>
        </FadeUp>

        <div className="testimonials-stage">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className={`testimonial-card glass-card ${i === activeTestimonial ? "active" : ""}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: i === activeTestimonial ? 1 : 0.3,
                scale: i === activeTestimonial ? 1 : 0.88,
                y: i === activeTestimonial ? 0 : 20,
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">{t.quote}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.avatar}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-bike">{t.bike}</div>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`t-dot ${i === activeTestimonial ? "active" : ""}`}
                onClick={() => setActiveTestimonial(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CLOSING ETHOS ────────────────────────────────── */}
      <section className="about-ethos">
        <motion.div
          className="ethos-bg"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img src={banner1} alt="Ride" />
          <div className="ethos-overlay" />
        </motion.div>

        <FadeUp className="ethos-content">
          <p className="section-eyebrow section-eyebrow--red">OUR ETHOS</p>
          <h2 className="ethos-headline">
            We don't just sell bikes.
            <br />
            <span className="red-accent">We honour your decision to buy one.</span>
          </h2>
          <p className="ethos-body">
            Every showroom you walk into will be clean. Every team member you meet will be trained.
            Every bike you receive will be ready. That's not a promise. That's our ethos —
            set by one man from Laxmeshwar who believed that how you do anything is how you do everything.
          </p>
          <motion.a
            href="/"
            className="ethos-cta"
            whileHover={{ scale: 1.06, boxShadow: "0 0 40px rgba(226,6,19,0.6)" }}
            whileTap={{ scale: 0.97 }}
          >
            Explore Our Bikes
          </motion.a>
        </FadeUp>
      </section>
    </div>
  );
}
