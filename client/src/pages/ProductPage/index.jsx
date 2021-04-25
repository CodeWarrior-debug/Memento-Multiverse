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
        <img src="" className="image" alt="Product Image"></img>
        <div className="row">
        <div className="info">
        <div>Price:</div>
        <div>Stock:</div>
        <div>Sold:</div>
        </div>
        </div>
        <div className="description">Product Description</div>
        <div className="row">
        <div className="btns">
        <Button>Add to Cart</Button>
        <Button>Buy Now</Button>
        </div>
        </div>
        </div>
        </div>


        </>)
}
export default ProductPage;