import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import API from "../../utils/API";
import { Button } from 'rebass'
import './style.css'

const ProductPage = ({ user }) => {

    const [item, setItem] = useState([]);
    const productNum = window.location.pathname;
    // const productId = parseInt(productNum.replace("/products/", ""));

    const history = useHistory();
    const { ItemId } = useParams();

    const handleCart = e => {
        e.preventDefault();
        console.log(user);
        console.log(ItemId);

        if (!user) {
            history.push('/login');
        } else {
            const chosenProduct = {
                quantity: 1,
                product_id: ItemId
            }
            API.addToCart(chosenProduct)
                .then((x) => {
                    console.log(x.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

    }

    useEffect(() => {
        API.getOneItem(ItemId)
            .then(thing =>
                setItem(thing.data))
    }, [ItemId])


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
                            <Button onClick={handleCart}>Add to Cart</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductPage;