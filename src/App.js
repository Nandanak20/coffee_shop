import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Gift from "./pages/Gift";
import Products from "./pages/Products";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/gift" element={<Gift />} />

        <Route path="/products" element={<Products />} />

        <Route path="/about" element={<About />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;