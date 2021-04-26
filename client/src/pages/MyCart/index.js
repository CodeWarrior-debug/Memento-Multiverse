import React, { useState, useEffect, useContext } from "react";
import './style.css'
import { Button } from 'rebass'
import CartContext from "../../utils/CartContext";

const MyCart = () => {
  const cart = useContext(CartContext);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    console.log(cart)
    let totalVal = 0;
    for (let i = 0; i < cart.items.length; i++) {
      totalVal += cart.items[i].fake_price;
    }
    setCartTotal(totalVal);
  }, [cart]);

  const removeFromCart = (product) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== product.id);
    // setCart(hardCopy);
  };

  return (
    <div className="cart">
      <h1>My Cart</h1>
      {/* <p>{cartItems}</p> */}
      <h3>Total: ${cartTotal}</h3>
      <Button className="btn">Checkout</Button>
    </div>
  );
};

export default MyCart
