
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../store/cartSlice";
import "./Cart.css";

export default function Cart() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Calcul du total
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return <h2 className="cart-empty">Votre panier est vide 🛒</h2>;
  }

  return (
    <div className="cart-container">
      <h2>🛍 Votre Panier</h2>

      {items.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="cart-item-info">
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.price} €</p>
            </div>
          </div>

          <div className="cart-item-actions">
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) =>
                dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
              }
            />
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Supprimer
            </button>
          </div>
        </div>
      ))}

      <div className="cart-total">Total : {total.toFixed(2)} €</div>

      <button className="clear-cart-btn" onClick={() => dispatch(clearCart())}>
        Vider le panier
      </button>
    </div>
  );
}
