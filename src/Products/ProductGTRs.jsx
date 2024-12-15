
import React from 'react';
import all_products from '../assets/products.js'
import Item from './Item.jsx'


  function ProductGTRs () {


    return (
        <>
  
            <div className='js-product-grid'>

                {all_products.map((item, index)=>{
                    return <Item    key={index} 
                                    id={item.id}
                                    
                                    name={item.name} 
                                    image={item.image} 
                                    price={item.price} 
                                    details={item.details}/>
                })}

            </div>
        
        </>
    );



    


    
    
        
    
    
    
    


   


  }
export default ProductGTRs