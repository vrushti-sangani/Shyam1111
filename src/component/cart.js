import React, { useEffect, useState } from "react";
import Header from "./header";
import "../component/style1.css";
import "../component/style.css";
import "../component/Media.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCart);
    calculateTotal(storedCart);
  }, []);
  const calculateTotal = (items) => {
    const totalPrice = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(totalPrice);
  };
  const removeFromCart = (name) => {
    const updatedCart = cartItems.filter((item) => item.name !== name);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const updateQuantity = (index, change) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += change;

    setCartItems(updatedCart.filter((item) => item.quantity > 0)); // Removes item if quantity is 0
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  return (
    <>
      <Header />

      <h1 className="store-cart">Electronics Store</h1>
      <h2 style={{ textAlign: "center", fontSize: "30", fontStyle: "italic" }}>
        Shopping Cart
      </h2>

      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.name} />
              <h4 className="c-name">{item.name}</h4>
              <div className="cart-p1">
                <div>
                  <p className="c-price">Price: ₹{item.price}</p>
                  <p className="c-qua">quantity: {item.quantity}</p>
                  <p className="c-total">
                    Total: ₹{item.price * item.quantity}
                  </p>
                </div>
                <div className="cart-b">
                  <div className="pm">
                    <button  onClick={() => updateQuantity(index, 1)}>+</button>

                    <span id="quantity-${index}">{item.quantity}</span>
                    <button onClick={() => updateQuantity(index, -1)}>-</button>
                  </div>

                  <button
                    className="remove"
                    onClick={() => removeFromCart(item.name)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <br />
      <br />
      <br />
      <p className="total">
        Total: ₹<span id="total-price">{total}</span>
      </p>
    </>
  );
}

export default Cart;
