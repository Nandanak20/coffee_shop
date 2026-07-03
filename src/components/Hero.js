import "../styles/Hero.css";

import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Hero() {
  return (
    <section className="hero">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        speed={1200}
        loop={true}
      >

        <SwiperSlide>
          <img src={hero1} alt="Coffee" className="hero-image" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={hero2} alt="Coffee" className="hero-image" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={hero3} alt="Coffee" className="hero-image" />
        </SwiperSlide>

      </Swiper>

      <div className="overlay"></div>

      <div className="hero-content">

        <h1>New This Season</h1>

        <p>
          Enjoy handcrafted beverages and delicious treats made
          with premium coffee beans.
        </p>

        <button className="buy-btn">
          Buy Now
        </button>

      </div>

    </section>
  );
}

export default Hero;