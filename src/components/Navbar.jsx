import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const favoriteItems = useSelector((state) => state.favorites.items);

  return (
    <nav className="navbar">
      <div className="nav-logo">🛒 MyShop</div>
      <div className="nav-links">
        <Link to="/">Accueil</Link>

        <Link to="/cart">
          Panier
          {cartItems.length > 0 && <span className="badge">{cartItems.length}</span>}
        </Link>

        <Link to="/favorites">
          Favoris
          {favoriteItems.length > 0 && <span className="badge">{favoriteItems.length}</span>}
        </Link>

        <Link to="/checkout">Checkout</Link>
      </div>
    </nav>
  );
}
