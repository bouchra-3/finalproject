import Navbar from "./components/Navbar"; 
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import Checkout from "./pages/Checkout";

export default function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}
