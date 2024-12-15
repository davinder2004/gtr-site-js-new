import React from "react";


const MoreDetails = (props) => {

    const {product} = props;

   

    return (

        <>
        
            <div className="specs-details">
          <div className="heading">
            <p className="h2">
              PERFORMANCE
            </p>
          </div>
  
          <div className="specs-details1">
              <div className="start">
                <span className="span1">
                  {product.power}
                </span>
                <p className="power">
                  Horsepower
                </p>
              </div>
            <div className="mid-gear">
              <div className="mid-border">
                <div className="mid-gear-content">
                  <span className="span1">
                    {product.transmission}
                  </span>
                </div>
                <p className="gear">
                 {product.transtype}
                </p> 
              </div>             
            </div>
            <div className="end-torque">
              <span className="span1">
               {product.torque}
              </span>
              <p className="torque">
                Lb-ft of Torque
              </p>
            </div>
          </div>

          </div>

           
          </>
        
    );



}


export default MoreDetails