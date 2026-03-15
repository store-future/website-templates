import "./Whatsnew.css";

const items = [
  { tag: "Lifestyle", title: "Goodlife Benefits", desc: "Exclusive perks and rewards for every Hero rider." },
  { tag: "Finance", title: "Finance Your Dreams", desc: "Flexible EMI plans tailored to your budget." },
  { tag: "Corporate", title: "Special Corporate Benefits", desc: "Premium deals for corporate employees." },
  { tag: "Offer", title: "Gurudakshina Offer", desc: "Special tribute discounts for educators." },
];

const image = "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1200";

function Whatsnew() {
  return (
    <div className="wn-section">

      <div className="wn-header">
        <div className="wn-eyebrow">Explore Special Programs</div>
        <div className="wn-title">Make The Most <span>Of Yamaha</span></div>
      </div>

      <div className="wn-strip">
        {items.map((item, i) => (
          <div
            key={i}
            className="wn-item"
            style={{ backgroundImage: `url(${image})` }}
          >
            <span className="wn-num">0{i + 1}</span>
            <div className="wn-item-content">
              <div className="wn-tag">{item.tag}</div>
              <div className="wn-item-title">{item.title}</div>
              <div className="wn-item-desc">{item.desc}</div>
              <div className="wn-cta">Explore</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Whatsnew;
