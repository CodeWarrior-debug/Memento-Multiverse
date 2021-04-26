import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import { Button } from "rebass";
import CartContext from "../../utils/CartContext";
import API from "../../utils/API";

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

  // const handleCheckout = async e => {
  //   e.preventDefault();
  //   try {
  //     const 
  //   } catch (err) {
  //     console.log(err);
  //   }

  // }

  const removeFromCart = (product) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== product.id);
    // setCart(hardCopy);
  };

  return (
    <div className="cart">
      <h1>My Cart</h1>
      {/* <p>{cartItems}</p> */}
      <h3>Total: ${parseFloat(cartTotal)}</h3>
      <Button className="btn">Checkout</Button>
    </div>
  );
};

export default MyCart;
