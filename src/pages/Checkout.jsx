import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/cartSlice";
import { useState } from "react";
import "./Checkout.css";

export default function Checkout() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const [paymentMethod, setPaymentMethod] = useState("");

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (!paymentMethod) {
      alert("Veuillez sélectionner un mode de paiement !");
      return;
    }
    alert(`Paiement effectué via ${paymentMethod} ✨\nMerci pour votre achat !`);
    dispatch(clearCart()); 
  };

  return (
    <div className="checkout-container">
      <h2>Page de Checkout 🛒</h2>

      <div className="checkout-summary">
        <h3>Résumé de votre panier</h3>
        {items.map(item => (
          <div key={item.id} className="checkout-item">
            <span>{item.title} x {item.quantity}</span>
            <span>{(item.price * item.quantity).toFixed(2)} €</span>
          </div>
        ))}
        <div className="checkout-total">
          Total : <strong>{total.toFixed(2)} €</strong>
        </div>
      </div>

      <div className="checkout-payment">
        <h3>Sélectionnez un mode de paiement</h3>
        <div className="payment-options">
          <button
            className={paymentMethod === "PayPal" ? "active" : ""}
            onClick={() => setPaymentMethod("PayPal")}
          >
            PayPal
          </button>
          <button
            className={paymentMethod === "Carte Bancaire" ? "active" : ""}
            onClick={() => setPaymentMethod("Carte Bancaire")}
          >
            Carte Bancaire
          </button>
          
          
        </div>
      </div>

      <button className="checkout-btn" onClick={handleCheckout}>
        Payer {total.toFixed(2)} €
      </button>
    </div>
  );
}
