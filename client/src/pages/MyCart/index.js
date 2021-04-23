import React, { useState, useEffect } from "react";
import './style.css'
import {Button} from 'rebass'

const MyCart = () => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const items = [
    {
      id: 1,
      name: "item1",
      price: 20,
    },
    {
      id: 2,
      name: "item2",
      price: 32,
    },
    {
      id: 3,
      name: "item3",
      price: 51,
    },
  ];

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  const addToCart = (product) => {
      setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== product.id);
    setCart(hardCopy);
  };

  const listItems = items.map((product) => (
    <div key={product.id}>
      {`${product.name}: $${product.price}`}
      <input type="submit" value="add" onClick={() => addToCart(product)} />
    </div>
  ));

  const cartItems = cart.map((product) => (
    <div key={product.id}>
      {`${product.name}: $${product.price}`}
      <input type="submit" value="remove" onClick={() => removeFromCart(product)} />
    </div>
  ));

  return (
    <div className="cart">
      <h1>My Cart</h1>
      <p>{cartItems}</p>
      <h3>Total: ${cartTotal}</h3>
      <Button className="btn">Checkout</Button>
    </div>
  );
};

export default MyCart
