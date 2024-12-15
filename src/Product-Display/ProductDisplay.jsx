import React, { useContext } from "react"
import './ProductDisplay.css'
import { GtrContext } from "../context";

const ProductDisplay = (props) => {

    const { product } = props;
    const {addToCart, formatter} = useContext(GtrContext)

    



    return (
       <>
            <div className="main-display">
                <div className="left-display-section">
                    <img src={product.image}></img> 
                    <p>
                    {product.name}
                    </p>
                </div>
                <div className="right-section">
                    <p className="top">
                    Starting At
                    </p>
                    <p className="mid">
                    {formatter.format(product.price)}
                    </p>
                    <p className="spec-text">
                    Specs & Performance details
                    </p>
                    <p className="end-details">
                    {product.enginedetails}
                    </p>

                    <div className="cart-button">

                    <button  onClick={() => {addToCart(product.id)}}
                            className="add-button"
                       >ADD to cart</button>

                    </div>
                </div>
            </div>
       
       </>
    );
}

export default ProductDisplay