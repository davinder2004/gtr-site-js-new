import React from "react";
import '../styles/CategoryNev.css'
import { Link } from "react-router-dom";


const CategoryNev = () => {

   

    return (
        <>
        <div className="main-container">


            <div className="catagory-nev-bar">
                        <nav className="nev-main">
                            <ul className="nev-container">
                                <li className="versions">
                                    <Link to={'/'}>
                                        <span>
                                            All
                                        </span>
                                    </Link>
                                    
                                      
                                </li>
                                <li className="versions">
                                    <Link to='/nismo'>
                                        <span>
                                            Nismo
                                        </span>
                                    </Link>
                                    
                                </li>
                                
                            </ul>
                        </nav>
                    </div>
           
        </div>

        </>
    );

  

}


export default CategoryNev