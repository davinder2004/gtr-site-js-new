import React, {useContext} from "react";
import {GtrContext} from "../context.jsx";
import { useParams } from "react-router-dom";
import ProductDisplay from "../Product-Display/ProductDisplay.jsx"
import MoreDetails from "./MoreDetails.jsx"

const Product = () => {

    const { all_products } = useContext(GtrContext);

   

    const {productid} = useParams();
    
    const product = all_products.find((e) => String(e.id) === String(productid));
    
    
    /* IN ABOVE LINE 

    i am looking for the object in all_products where the id matches productid.

    The entire object (not just the id) is saved in the product variable.

    by that i can access the entire object and teh values of that object */



    if (!product) {

        return <p>Product not found.</p>; // Graceful fallback for undefined product

    }
    




    return (

        <div>
            <ProductDisplay product = {product}/>
            <MoreDetails product = {product}/>
            
        
        </div>
    );

}


export default Product