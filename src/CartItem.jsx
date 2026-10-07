import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice.jsx';

const formatMoney = amount => `$${amount.toFixed(2)}`;

function CartItem({ onContinueShopping }) {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const [checkoutMessage, setCheckoutMessage] = useState('');
  const calculateTotalCost = item => parseFloat(item.cost.substring(1)) * item.quantity;
  const calculateTotalAmount = () => cart.reduce((total, item) => total + calculateTotalCost(item), 0);
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const handleContinueShopping = e => onContinueShopping(e);
  const handleIncrement = item => dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  const handleDecrement = item => {
    if (item.quantity > 1) dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    else dispatch(removeItem(item.name));
  };
  const handleRemove = item => dispatch(removeItem(item.name));
  const handleCheckoutShopping = () => setCheckoutMessage('Coming Soon — checkout functionality will be added in the future.');

  return (
    <main id="cart" className="page-container cart-container">
      <h1>Your shopping cart</h1>
      <p className="page-intro">Review your plants and proceed to checkout when you’re ready.</p>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>A little greenery goes a long way.</h2>
          <p>Your cart is empty. Find a plant to make your space feel like home.</p>
          <button className="primary-button" onClick={handleContinueShopping}>Continue Shopping</button>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cart.map(item => (
              <article className="cart-item" key={item.name} aria-label={`${item.name} in cart`}>
                <img className="cart-item-image" src={item.image} alt={item.name} width="100" height="100" />
                <div className="cart-item-details"><h2>{item.name}</h2><p>{item.description}</p></div>
                <div className="unit-price"><span className="small-label">Unit price</span>{formatMoney(parseFloat(item.cost.substring(1)))}</div>
                <div className="cart-item-quantity" aria-label={`${item.name} quantity`}>
                  <button onClick={() => handleDecrement(item)} aria-label={`Decrease ${item.name} quantity`}>−</button>
                  <span className="cart-item-quantity-value" aria-live="polite">{item.quantity}</span>
                  <button onClick={() => handleIncrement(item)} aria-label={`Increase ${item.name} quantity`}>+</button>
                </div>
                <div className="cart-item-total"><span className="small-label">Subtotal</span><span aria-live="polite">{formatMoney(calculateTotalCost(item))}</span></div>
                <button className="delete-button" onClick={() => handleRemove(item)} aria-label={`Delete ${item.name}`}>Delete</button>
              </article>
            ))}
          </div>
          <aside className="cart-summary" aria-label="Order summary">
            <h2>Total Cart Amount</h2>
            <p className="total-amount" aria-live="polite">{formatMoney(calculateTotalAmount())}</p>
            <p className="total-quantity" aria-live="polite">{totalQuantity} {totalQuantity === 1 ? 'plant' : 'plants'} in your cart</p>
            <button className="primary-button" onClick={handleCheckoutShopping}>Checkout</button>
            {checkoutMessage && <p className="checkout-message" role="status">{checkoutMessage}</p>}
            <button className="text-button" onClick={handleContinueShopping}>Continue Shopping</button>
          </aside>
        </div>
      )}
    </main>
  );
}
CartItem.propTypes = { onContinueShopping: PropTypes.func.isRequired };
export default CartItem;
