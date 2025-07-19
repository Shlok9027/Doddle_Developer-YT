import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Laptop', price: 800, quantity: 1 },
    { id: 2, name: 'Headphones', price: 50, quantity: 2 },
    { id: 3, name: 'Smartphone', price: 600, quantity: 1 },
  ]);

  const updateQuantity = (id, action) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          const newQuantity =
            action === 'increase' ? item.quantity + 1 : item.quantity - 1;
          return { ...item, quantity: Math.max(newQuantity, 0) };
        }
        return item;
      })
    );
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <header className="header">
        <h1>✨ Luxury Shopping Cart 💫</h1>
      </header>
      <main className="main-content">
        <div className="cart">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price} × {item.quantity}</p>
                </div>
                <div className="controls">
                  <button onClick={() => updateQuantity(item.id, 'increase')}>+</button>
                  <button onClick={() => updateQuantity(item.id, 'decrease')}>-</button>
                  <button className="remove-btn" onClick={() => removeItem(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="empty-cart">Your cart is empty! 🛍️ Add some stylish items. 💎</p>
          )}
        </div>
        <div className="total">
          <h2>Total: ${calculateTotalPrice().toFixed(2)}</h2>
        </div>
      </main>
    </div>
  );
};

export default App;