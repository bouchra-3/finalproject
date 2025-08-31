import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { addFavorite } from "../store/favoritesSlice";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector(s => s.products.items.find(p => String(p.id) === id));

  if (!product) return <p>Produit introuvable</p>;

  return (
    <div className="container detail">
      <button className="back" onClick={() => navigate(-1)}>← Retour</button>

      <div className="detail-grid">
        <img src={product.image} alt={product.title} className="detail-img" />
        <div>
          <h2>{product.title}</h2>
          <p className="price">€{product.price.toFixed(2)}</p>
          <p>{product.description}</p>

          <div className="detail-actions">
            <button className="btn btn-accent" onClick={() => dispatch(addToCart(product))}>Ajouter au panier</button>
            <button className="btn btn-outline" onClick={() => dispatch(addFavorite(product))}>Ajouter aux favoris</button>
          </div>
        </div>
      </div>
    </div>
  );
}
