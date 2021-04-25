import { useEffect } from "react";
import { useParams } from "react-router";
import API from "../../utils/API";
import {Button} from 'rebass'
import './style.css'

const ProductPage = () => {
    
    const {id} = useParams()
    useEffect(()=>{
        console.log(id)
        API.getOneItem(id)
        .then(product=>console.log(product))
    },[id])
    return (
        <>
        <div className="container">
        <div className="title">Product Name</div>
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
        </div>
        </div>
        </div>
        </div>


        </>
    )
}
export default ProductPage;