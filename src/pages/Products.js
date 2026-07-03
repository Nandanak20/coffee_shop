import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductHero from "../components/ProductHero";
import ProductSection from "../components/ProductSection";

import coffee1 from "../assets/images/coffee1.jpg";
import coffee2 from "../assets/images/coffee2.jpg";
import coffee3 from "../assets/images/coffee3.jpg";

import cold1 from "../assets/images/cold1.jpg";
import cold2 from "../assets/images/cold2.jpg";
import cold3 from "../assets/images/cold3.jpg";

import dessert1 from "../assets/images/dessert1.jpg";
import dessert2 from "../assets/images/dessert2.jpg";
import dessert3 from "../assets/images/dessert3.jpg";

import snack1 from "../assets/images/snack1.jpg";
import snack2 from "../assets/images/snack2.jpg";
import snack3 from "../assets/images/snack3.jpg";

import "../styles/Products.css";

function Products() {

  const coffee = [
    {
      image: coffee1,
      name: "Cappuccino",
      price: "₹220",
      description: "Rich espresso with steamed milk."
    },
    {
      image: coffee2,
      name: "Latte",
      price: "₹250",
      description: "Smooth coffee with creamy milk."
    },
    {
      image: coffee3,
      name: "Espresso",
      price: "₹180",
      description: "Strong and bold coffee shot."
    }
  ];

  const coldDrinks = [
    {
      image: cold1,
      name: "Cold Coffee",
      price: "₹240",
      description: "Refreshing chilled coffee."
    },
    {
      image: cold2,
      name: "Chocolate Shake",
      price: "₹270",
      description: "Creamy chocolate delight."
    },
    {
      image: cold3,
      name: "Iced Latte",
      price: "₹250",
      description: "Cold espresso with milk."
    }
  ];

  const desserts = [
    {
      image: dessert1,
      name: "Brownie",
      price: "₹150",
      description: "Soft chocolate brownie."
    },
    {
      image: dessert2,
      name: "Cheesecake",
      price: "₹260",
      description: "Creamy baked cheesecake."
    },
    {
      image: dessert3,
      name: "Chocolate Muffin",
      price: "₹180",
      description: "Freshly baked muffin."
    }
  ];

  const snacks = [
    {
      image: snack1,
      name: "Veg Sandwich",
      price: "₹180",
      description: "Fresh grilled sandwich."
    },
    {
      image: snack2,
      name: "French Fries",
      price: "₹160",
      description: "Crispy golden fries."
    },
    {
      image: snack3,
      name: "Burger",
      price: "₹220",
      description: "Loaded veggie burger."
    }
  ];

  return (
    <>
      <Navbar />

      <ProductHero />

      <ProductSection
        title="Hot Coffee"
        products={coffee}
      />

      <ProductSection
        title="Cold Beverages"
        products={coldDrinks}
      />

      <ProductSection
        title="Desserts"
        products={desserts}
      />

      <ProductSection
        title="Snacks"
        products={snacks}
      />

      <Footer />
    </>
  );
}

export default Products;