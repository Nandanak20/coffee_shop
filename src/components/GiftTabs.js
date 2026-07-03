import { useState } from "react";
import "../styles/GiftTabs.css";

function GiftTabs() {

  const [activeTab, setActiveTab] = useState("Featured");

  const tabs = [
    "Featured",
    "Anytime",
    "Congratulations",
    "Thank You"
  ];

  return (

    <section className="gift-tabs-section">

      <div className="gift-tabs">

        {tabs.map((tab) => (

          <button
            key={tab}
            className={activeTab === tab ? "active-tab" : ""}
            onClick={() => setActiveTab(tab)}
          >

            {tab}

          </button>

        ))}

      </div>

    </section>

  );

}

export default GiftTabs;