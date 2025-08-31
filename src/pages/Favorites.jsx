
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../store/favoritesSlice";
import "./Favorites.css";

export default function Favorites() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.favorites.items);

  if (items.length === 0) {
    return <h2 className="favorites-empty">Vous n’avez pas encore de favoris </h2>;
  }

  return (
    <div className="favorites-container">
      <h2> Mes Favoris</h2>

      {items.map((item) => (
        <div key={item.id} className="favorite-item">
          <div className="favorite-item-info">
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.price} €</p>
            </div>
          </div>

          <div className="favorite-item-actions">
            <button
              className="remove-btn"
              onClick={() => dispatch(removeFromFavorites(item))}
            >
              Supprimer
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
