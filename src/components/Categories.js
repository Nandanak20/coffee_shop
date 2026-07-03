import "../styles/Categories.css";

import {
  FaStar,
  FaCoffee,
  FaHamburger,
  FaGift,
  FaHome,
  FaUtensils
} from "react-icons/fa";

import drink from "../assets/images/drink.jpg";
import food from "../assets/images/food.jpg";
import coffee from "../assets/images/coffee1.jpg";
import merchandise from "../assets/images/merchandise.jpg";
import homeCoffee from "../assets/images/home.jpg";
import ready from "../assets/images/ready.jpg";

const categories = [
  {
    image: drink,
    title: "Bestseller",
    icon: <FaStar />,
  },
  {
    image: coffee,
    title: "Drinks",
    icon: <FaCoffee />,
  },
  {
    image: food,
    title: "Food",
    icon: <FaHamburger />,
  },
  {
    image: merchandise,
    title: "Merchandise",
    icon: <FaGift />,
  },
  {
    image: homeCoffee,
    title: "Coffee At Home",
    icon: <FaHome />,
  },
  {
    image: ready,
    title: "Ready To Eat",
    icon: <FaUtensils />,
  },
];

function Categories() {
  return (
    <section className="categories">

      <h2>Handcrafted Curations</h2>

      <div className="category-list">

        {categories.map((item, index) => (

          <div className="category-card" key={index}>

            <img
              src={item.image}
              alt={item.title}
            />

            <div className="circle-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Categories;