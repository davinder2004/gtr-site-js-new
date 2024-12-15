import React, { useContext, useState } from 'react'
import { GtrContext } from '../context'
import './CartItem.css'

export const CartItem = () => {


    const { getTotalCartAmount, all_products, cartItems, removeFromCart, formatter} = useContext(GtrContext);



   



  return (
    <>

    

    {all_products.map((e) => {

      
      

        if (cartItems[e.id]>0) {


            return   <div className="main-item-container" key={e.id}>


            <div className="left-section-cart">
            <img src={e.image} alt="" className='item-image'/>
                
                <p>{e.name}</p>
                
            </div>
            <div className="right-section-cart">
               
                
                  
      
               

                <p>{formatter.format(e.price)}</p>

                <p className='cart-item-quantity'>{cartItems[e.id]}</p>

                <p>{formatter.format(e.price * cartItems[e.id])}</p>
                
                
                <button onClick={()=>{removeFromCart(e.id)}}>Remove</button>
                
            </div>
            </div>
                  
            
            
        
        }
    })}
    <div className="cart-items-down">
      <div className="cartitems-total">
        <h1>
          Cart Total
        </h1>

        <div>
          <div className="cartitems-totalitems">
            <p>
              Subtotal
            </p>
            <p>
              {formatter.format( getTotalCartAmount())}
            </p>
          </div>
          <hr />
          <div className="cartitems-totalitems">
            <p>
              Shipping fee
            </p>
            <p>
            ${0}
            </p>
            </div>
            <hr />
            <div className="cartitems-totalitems">
              <h3>Total</h3>
              <h3>{formatter.format( getTotalCartAmount())}</h3>

            </div>
          </div>

          <button>Proceed to checkout</button>

        </div>

     

        </div>

  
    </>
  )
}
