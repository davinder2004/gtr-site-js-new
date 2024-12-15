import React, { useContext } from "react";
import Item from "./Products/Item";

import { GtrContext } from "./context";
import CategoryNev from "./Products/categoryNev";
import MainDetails from "./NevbarMaindetails/MainDetails";

const GtrCategory = (props) => {

    const {all_products} = useContext(GtrContext);

    




    return (

        <>
            
            <MainDetails/>
            < CategoryNev/>

           <div className="js-product-grid">
            {all_products.map((item, index) => {

           

                if (props.category===item.category) {

                    return <Item  key={index} 
                    id={item.id}
                    category={item.category}
                    name={item.name} 
                    image={item.image} 
                    price={item.price} 
                    details={item.details}/>
                    
                }
                else{
                    return null;
                }
            })}
           </div>
        </>
    );

}

export default GtrCategory