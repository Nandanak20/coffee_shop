import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Recommended from "../components/Recommended";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Recommended />
      <Blog />
      <Footer />
    </>
  );
}

export default Home;