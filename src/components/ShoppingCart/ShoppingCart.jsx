import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  selectCartTotalQuantity,
  selectCartTotalAmount,
  removeFromCart,
  updateQuantity,
} from "../../store/cartSlice";
import "./ShoppingCart.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { useState } from "react";
import Modal from "../Modal/Modal";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectCartTotalQuantity);
  const totalAmount = useSelector(selectCartTotalAmount);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdateQuantity = (id, type) => {
    dispatch(updateQuantity({ id, type }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  if (cartItems.length === 0) {
    return (
      <>
        <Header />
        <div className="empty-cart">
          <h2>Your Cart is empty</h2>
          <p>Total Cart Amount: $0</p>
          <Link to="/products" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="shopping-cart">
        <h2>Shopping Cart</h2>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="item-price">${item.price.toFixed(2)}</p>
              </div>
              <div className="quantity-controls">
                <button
                  onClick={() => handleUpdateQuantity(item.id, "decrease")}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleUpdateQuantity(item.id, "increase")}
                >
                  +
                </button>
              </div>
              <div className="item-total">
                <p>${item.totalPrice.toFixed(2)}</p>
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <div className="summary-row">
            <span>Total Items:</span>
            <span>{totalQuantity}</span>
          </div>
          <div className="summary-row total">
            <span>Total Amount:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          <div className="action-links">
            <button
              onClick={() => setIsModalOpen(true)}
              className="checkout-btn"
            >
              Checkout
            </button>
            <Link to="/products" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2>Coming Soon!</h2>
          <p>
            Our checkout feature is currently under development. Please check
            back later.
          </p>
        </Modal>
      </div>
    </>
  );
};

export default ShoppingCart;
