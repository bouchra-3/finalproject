
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { addToFavorites } from "../store/favoritesSlice";
import "./Home.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  // Récupération des produits depuis Store API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <h2 className="product-title">{product.title}</h2>
          <p className="product-price">{product.price} €</p>

          <div className="card-buttons">
            <button
              className="add-cart"
              onClick={() => dispatch(addToCart(product))}
            >
              Ajouter au panier
            </button>
            <button
              className="add-favorite"
              onClick={() => dispatch(addToFavorites(product))}
            >
               Favoris
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
