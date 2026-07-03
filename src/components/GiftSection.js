import "../styles/Gift.css";
import GiftCard from "./GiftCard";

import gift1 from "../assets/images/gift1.jpg";
import gift2 from "../assets/images/gift2.jpg";
import gift3 from "../assets/images/gift3.jpg";
import gift4 from "../assets/images/gift4.jpg";
import gift5 from "../assets/images/gift5.jpg";
import gift6 from "../assets/images/gift6.jpg";

const featuredCards = [
  {
    image: gift1,
    title: "India Exclusive",
    description: "Bring in the festive season and make every celebration memorable."
  },
  {
    image: gift2,
    title: "COFFECAFE Coffee",
    description: "A perfect coffee gift for your loved ones."
  },
  {
    image: gift3,
    title: "Special Moments",
    description: "Celebrate birthdays, anniversaries and every joyful occasion."
  }
];

const anytimeCards = [
  {
    image: gift4,
    title: "Anytime Gift",
    description: "Gift happiness any day, anytime."
  },
  {
    image: gift5,
    title: "Thank You",
    description: "Express your gratitude with a Starbucks Gift Card."
  },
  {
    image: gift6,
    title: "Congratulations",
    description: "Celebrate achievements with coffee and smiles."
  }
];

function GiftSection() {
  return (
    <div className="gift-section">

      {/* Featured */}

      <h2 className="section-title">
        Featured
      </h2>

      <div className="gift-row">

        {featuredCards.map((card, index) => (

          <GiftCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />

        ))}

      </div>

      {/* Anytime */}

      <h2 className="section-title">
        Anytime
      </h2>

      <div className="gift-row">

        {anytimeCards.map((card, index) => (

          <GiftCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />

        ))}

      </div>

    </div>
  );
}

export default GiftSection;