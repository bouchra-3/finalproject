import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <div className="product-card-content">
        <h2 className="product-card-title">{product.name}</h2>
        <p className="product-card-price">{product.price} DA</p>

        <div className="product-card-buttons">
          <Link to={`/product/${product.id}`} className="btn-detail">
            Voir détails
          </Link>
          <button
            className="btn-cart"
            onClick={() => dispatch(addToCart(product))}
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}
