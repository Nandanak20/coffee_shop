import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import GiftBanner from "../components/GiftBanner";
import GiftTabs from "../components/GiftTabs";
import GiftSection from "../components/GiftSection";
import Footer from "../components/Footer";

import "../styles/Gift.css";

function Gift() {
  return (
    <>
      <Navbar />

      <Breadcrumb />

      <GiftBanner />

      <GiftTabs />

      <GiftSection />

      <Footer />
    </>
  );
}

export default Gift;