    import React, { createContext, useState } from "react";
    import all_products from './assets/products.js'

    export const GtrContext = createContext(null);

    const getDefaultCart = () => {

        let cart = {};

        for (let index = 0; index < all_products.length+1; index++) {
            cart [index]= 0;

        }

        return cart;
    }


    const GtrContextProvider = (props) => {
        
        const [cartItems, setCartItems] = useState(getDefaultCart);
        
        const addToCart = (itemId) => {
        
            
            setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        
        }

        const removeFromCart = (itemId) => {
        
            
            setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
        }

        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        const getTotalCartAmount = () => {

            let totalAmount = 0;
            for (const key in cartItems)

                {
                    if (cartItems[key]>0) {
                            let itemInfo = all_products.find((product)=>product.id===key)
                            
                            totalAmount += itemInfo.price*cartItems[key];
                    }
                   
                }
                return totalAmount;
        }
        
        const totalGtrCart = () =>{
            let totalgtr = 0;
            for(const key in cartItems)
            {
                if(cartItems[key] > 0)
                {
                    totalgtr += cartItems[key];
                }
            }
            return totalgtr;
        }
        
        
        
        
        const contextValue = {getTotalCartAmount, totalGtrCart, all_products, cartItems, addToCart, removeFromCart, formatter};
    
        return (
            <GtrContext.Provider value={contextValue}>
                {props.children}
            </GtrContext.Provider>

        );
    }

    export default GtrContextProvider