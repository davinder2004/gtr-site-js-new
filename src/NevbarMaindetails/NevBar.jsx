import { useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { GtrContext } from "../context";




function NevBar() {


  const [activeIndex, setActiveIndex] = useState(null);


    const [isActive, setIsActive] = useState(false);



 const handleToggle = () => {
  setIsActive((prev) => !prev);
};




  const {totalGtrCart} = useContext(GtrContext);

  useEffect(() => {
    // Get the last clicked button index from localStorage
    const savedIndex = localStorage.getItem("activateButtonIndex");
    if (savedIndex !== null) {
      setActiveIndex(Number(savedIndex)); // Parse the saved index to a number
    }
  }, []);

  const handleClick = (index) => {
    // Save the clicked button index to localStorage
    localStorage.setItem("activateButtonIndex", index);
    setActiveIndex(index); // Update the state with the clicked index
  };

  return (
    <>

    <button className="open-sidebar"  onClick={handleToggle}>
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#c9c9c9"><path d="M165.13-254.62q-10.68 0-17.9-7.26-7.23-7.26-7.23-18t7.23-17.86q7.22-7.13 17.9-7.13h629.74q10.68 0 17.9 7.26 7.23 7.26 7.23 18t-7.23 17.87q-7.22 7.12-17.9 7.12H165.13Zm0-200.25q-10.68 0-17.9-7.27-7.23-7.26-7.23-17.99 0-10.74 7.23-17.87 7.22-7.13 17.9-7.13h629.74q10.68 0 17.9 7.27 7.23 7.26 7.23 17.99 0 10.74-7.23 17.87-7.22 7.13-17.9 7.13H165.13Zm0-200.26q-10.68 0-17.9-7.26-7.23-7.26-7.23-18t7.23-17.87q7.22-7.12 17.9-7.12h629.74q10.68 0 17.9 7.26 7.23 7.26 7.23 18t-7.23 17.86q-7.22 7.13-17.9 7.13H165.13Z"/></svg>
         
    </button>

      <div className={isActive ? "show" : "topbar"}>

        <nav className="header">

          <ul className="middle">
            <li><button className="close-sidebar" onClick={handleToggle}>

            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#c9c9c9"><path d="m480-444.62-209.69 209.7q-7.23 7.23-17.5 7.42-10.27.19-17.89-7.42-7.61-7.62-7.61-17.7 0-10.07 7.61-17.69L444.62-480l-209.7-209.69q-7.23-7.23-7.42-17.5-.19-10.27 7.42-17.89 7.62-7.61 17.7-7.61 10.07 0 17.69 7.61L480-515.38l209.69-209.7q7.23-7.23 17.5-7.42 10.27-.19 17.89 7.42 7.61 7.62 7.61 17.7 0 10.07-7.61 17.69L515.38-480l209.7 209.69q7.23 7.23 7.42 17.5.19 10.27-7.42 17.89-7.62 7.61-17.7 7.61-10.07 0-17.69-7.61L480-444.62Z"/></svg>
          
              </button></li>
            <li className="gtr-logo">
              <a href="" className="gtr2024">
                2024 GT-R
              </a>
            </li>

            <li className={`js-headerButton ${activeIndex === 1 ? "toggled" : ""}`}
                onClick={() => handleClick(1)}>
              <Link to='/'>
                Overview
              </Link>
            </li>

            <li className={`js-headerButton ${activeIndex === 2 ? "toggled" : ""}`}
                onClick={() => handleClick(2)}>
             <Link to='/spec'>
              Specs
              </Link>
            </li>

            <li className={`js-headerButton ${activeIndex === 3 ? "toggled" : ""}`}
                onClick={() => handleClick(3)}>
              <Link to='/'>
                  Gallery
                  </Link>
            </li>

            <li className={`js-headerButton ${activeIndex === 4 ? "toggled" : ""}`}
                onClick={() => handleClick(4)}>
              <Link to='/'>  
                Features
                </Link>
            </li>

            <li className="cart">
              
                <div className="cart-container">
                  <Link to='/checkout'>
                      <button>Cart 
                        <span>
                        {totalGtrCart()}
                        </span>
                      </button>
                    </Link>
                
                </div> 
                
              
            </li>
          </ul>


          
        </nav>
      </div>


    </>
  );
}

export default NevBar
