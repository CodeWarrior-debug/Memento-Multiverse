import { useEffect } from "react";
import { useParams } from "react-router";
import API from "../../utils/API";

const ProductPage = () => {
    
    const {id} = useParams()
    useEffect(()=>{
        console.log(id)
        API.getOneItem(id)
        .then(product=>console.log(product))
    },[id])
    return (
        <>
        


        </>
    )
}
export default ProductPage;