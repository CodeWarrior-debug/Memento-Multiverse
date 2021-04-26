import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import { Button, Card } from "rebass";
import CartContext from "../../utils/CartContext";
import API from "../../utils/API";
import { Redirect } from "react-router";

const MyCart = () => {
  const cart = useContext(CartContext);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    console.log(cart);
    let totalVal = 0;
    if (!cart.items.length) return;
    for (let i = 0; i < cart.items.length; i++) {
      totalVal += parseFloat(cart.items[i].fake_price);
    }
    setCartTotal(totalVal);
  }, [cart]);

  const handleCheckout = async e => {
    e.preventDefault();
    try {
      const purchaseArr = cart.items.map(item => item.id)
      API.postTransactions(purchaseArr);
    } catch (err) {
      console.log(err);
    }

  }

  const emptyCart = () => {
    localStorage.clear();
    window.location.reload();
  }

  const removeFromCart = (product) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== product.id);
    // setCart(hardCopy);
  };

  return (
    <div className="cart">
      <h1>My Cart</h1>
        {cart.items.map((item, i) => (
          <p>{item.product_name} = ${item.fake_price}</p>
        ))}
      <h3>Total: ${parseFloat(cartTotal)}</h3>
      <Button className="btn" onClick={handleCheckout}>Checkout</Button>
      <Button className="btn" onClick={emptyCart}>Empty Cart</Button>
    </div>
  );
};

export default MyCart;
