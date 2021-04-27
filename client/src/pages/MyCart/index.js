import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import { Button } from "rebass";
import CartContext from "../../utils/CartContext";
import API from "../../utils/API";
import { Redirect } from "react-router";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const MyCart = ({ user }) => {
  const cart = useContext(CartContext);
  const [cartTotal, setCartTotal] = useState(0);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    console.log(cart);
    let totalVal = 0;
    if (!cart.items.length) return;
    for (let i = 0; i < cart.items.length; i++) {
      totalVal += parseFloat(cart.items[i].fake_price);
    }
    setCartTotal(totalVal);
  }, [cart]);
      //set hooks END

  //create functions
  const handleCheckout = async (e) => {
    e.preventDefault();
    if (!user.user_name) return setRedirect(true)

    toast.info('Your item has been added to the cart!', {

    });

    try {
      const purchaseArr = cart.items.map(item => item.id)
      console.log(purchaseArr,"tested code");
      //looping through each in purchaseArr.
      let i;
       for (i=0; i < purchaseArr.length; i++) {
        API.create(purchaseArr[i]);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const emptyCart = () => {
    localStorage.clear();
    window.location.reload();
  }
    //create functions END
  
  //display
  return (
    <div className="cart">
      {redirect && <Redirect to="/login" />}
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
