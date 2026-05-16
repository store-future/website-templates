import { useState } from "react";
import "./LeadCapture.css";

const YAMAHA_MODELS = [
  "MT-15", "R15 V4", "FZ-S FI", "FZS 25", "FZ-X",
  "Aerox 155", "Ray ZR 125", "Fascino 125", "Saluto 125", "Other",
];

const TIME_SLOTS = [
  "9 AM – 11 AM", "11 AM – 1 PM", "1 PM – 3 PM", "3 PM – 5 PM", "5 PM – 7 PM",
];

const BENEFITS = [
  { icon: "🎯", text: "Exclusive showroom price — not available online" },
  { icon: "🏍️", text: "Free test ride at your doorstep" },
  { icon: "💰", text: "Zero down payment options available" },
  { icon: "⚡", text: "Same-day delivery on select models" },
];

function LeadCapture() {
  const [form, setForm] = useState({
    name: "", mobile: "", model: "", city: "", time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enquiry submitted:", form);
  };

  return (
    <section className="lc-section">
      <div className="lc-wrap">
        <div className="lc-inner">
          <div className="lc-slash" />

          {/* ── LEFT — Marketing panel ── */}
          <div className="lc-left">
            <div className="lc-urgency">
              <span className="lc-urgency-dot" />
              Limited Offer — This Month Only
            </div>

            <h2 className="lc-headline">
              Ready to Find Your<br />Perfect Yamaha?
              <span className="lc-headline-accent">Let's Talk.</span>
            </h2>

            <p className="lc-copy">
              Fill in the form and our team will get back to you within{" "}
              <strong>2 hours</strong> with the best price available.
            </p>

            <div className="lc-benefits">
              {BENEFITS.map((b) => (
                <div className="lc-benefit" key={b.text}>
                  <span className="lc-benefit-icon">{b.icon}</span>
                  <span className="lc-benefit-text">{b.text}</span>
                </div>
              ))}
            </div>

            <div className="lc-trust">
              <span className="lc-trust-item">No Spam</span>
              <span className="lc-trust-sep" />
              <span className="lc-trust-item">100% Free</span>
              <span className="lc-trust-sep" />
              <span className="lc-trust-item">Authorised Dealer</span>
            </div>
          </div>

          {/* ── RIGHT — Form card ── */}
          <div className="lc-right">
            <div className="lc-form-card">
              <p className="lc-form-title">Get Your Best Price</p>
              <h3 className="lc-form-subtitle">Book Your Free<br />Consultation</h3>

              <form className="lc-form" onSubmit={handleSubmit}>
                <div className="lc-row">
                  <div className="lc-field">
                    <span className="lc-icon">👤</span>
                    <input name="name" type="text" placeholder="Full Name"
                      value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="lc-field">
                    <span className="lc-icon">📱</span>
                    <input name="mobile" type="tel" placeholder="Mobile Number"
                      pattern="[0-9]{10}" maxLength={10}
                      value={form.mobile} onChange={handleChange} required />
                  </div>
                </div>

                <div className="lc-field">
                  <span className="lc-icon">🏍️</span>
                  <select name="model" value={form.model} onChange={handleChange}
                    className={form.model ? "filled" : ""} required>
                    <option value="">Yamaha Model Interest</option>
                    {YAMAHA_MODELS.map((m) => <option key={m}>{m}</option>)}
                  </select>
                </div>

                <div className="lc-row">
                  <div className="lc-field">
                    <span className="lc-icon">📍</span>
                    <input name="city" type="text" placeholder="City / Area"
                      value={form.city} onChange={handleChange} required />
                  </div>
                  <div className="lc-field">
                    <span className="lc-icon">🕐</span>
                    <select name="time" value={form.time} onChange={handleChange}
                      className={form.time ? "filled" : ""} required>
                      <option value="">Preferred Time</option>
                      {TIME_SLOTS.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <button type="submit" className="lc-btn">
                  Book Free Consultation →
                </button>

                <p className="lc-disclaimer">🔒 Your details are safe. No spam, ever.</p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default LeadCapture;
