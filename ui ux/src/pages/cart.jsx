import { useNavigate } from 'react-router-dom';
import { useCartContext } from "../Context/CartContext";
import CartOrderTIle from '../components/Cart/CartOrderTIle';
import './CSS/Cart.css'; // Import the normal CSS file

const Cart = () => {
  const cartContext = useCartContext();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/cart/checkout');
  };

  const columnNames = ["Product", "Price", "Quantity", "Sub total"];

  return (
    <div className="cart-container">
      <div className="cart-header">
        {columnNames.map((name, idx) => (
          <div key={name} className={idx !== 0 ? "align-right" : ""}>
            {name}
          </div>
        ))}
      </div>

      <div className="cart-items">
        {cartContext.orderLength > 0 ? (
          cartContext.cartList.map(order => (
            <CartOrderTIle
              key={order.product._id}
              removeItem={cartContext.removeItemFromCart}
              cart={order}
              decrementQuantity={cartContext.decrementQuantity}
              incrementQuantity={cartContext.incrementQuantity}
            />
          ))
        ) : (
          <div className="empty-cart">Your cart is empty</div>
        )}
      </div>

      <div className="cart-summary">
        <div className="summary-box">
          <CartPricings title="Sub Total" value={`$${cartContext.cartTotal}`} />
          <hr />
          <CartPricings title="Shipping Fee" value="Free" />
          <hr />
          <CartPricings title="Total" value={`$${cartContext.cartTotal}`} />
          <button
            className={`checkout-button ${cartContext.orderLength === 0 ? "disabled" : ""}`}
            onClick={handleCheckout}
            disabled={cartContext.orderLength === 0}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

const CartPricings = ({ title, value }) => {
  return (
    <p className="cart-pricing">
      <span className="bold">{title}:</span>
      {value}
    </p>
  );
};

export default Cart;
