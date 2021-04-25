import { useState, useEffect } from "react";
import { useParams } from "react-router";
import API from "../../utils/API";
import {Button} from 'rebass'
import './style.css'

const ProductPage = () => {
    
    const [item, setItem] = useState([]);
    const productNum = window.location.pathname;
    const id = parseInt(productNum.replace("/products/",""));
    
    useEffect(()=>{
        API.getOneItem(id)
        .then(thing=>
            setItem(thing.data))})
    return (
        <>
        <div className="container">
        <div className="title">{item.product_name}</div>
        <div className="grid">
        <img src={item.image_link} className="image" alt="Product"></img>
        <div className="row">
        <div className="info">
        <div className="price">Price:{' '}{item.fake_price}</div>
        <div>Stock:{' '}{item.fake_quantity} </div>
        <div>Sold:{' '}{item.fake_sold} </div>
        </div>
        </div>
        <div className="description">{item.fun_description}</div>
        <div className="row">
        <div className="btns">
        <Button>Add to Cart</Button>
        </div>
        </div>
        </div>
        </div>
        </>)
}
export default ProductPage;