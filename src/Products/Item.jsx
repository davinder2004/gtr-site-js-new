import React, { useContext }from "react";
import '../styles/ProductGTRs.css'
import { Link } from "react-router-dom";
import { GtrContext } from '../context'


const Item = (props) => {

    const {formatter} = useContext(GtrContext);


    return (
        
        <>
        
              <div className="gtr-container">
                    
                 

                      <div>

                          <div className="gtr-r32">

                              <div className="image-r32">
                                  <Link to={`/product/${props.id}`}><img src={props.image} alt={props.name} 
                                  className="gtr-image"/>
                                  </Link>
                                  
                                  
                              </div>

                              <div className="left-detail">
                                  <p className="car-name">{props.name}</p>
                                  <p>{formatter.format(props.price)}</p>
                              </div>

                             

                              <div className="engine-detail">
                                  <span>{props.details}</span>
                              </div>
                              

                          </div>
                      </div>
                  
              </div>
              </>
                )}


export default Item
