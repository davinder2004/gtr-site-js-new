
import '../styles/details.css'

function MainDetails() {




    return (

        <>
            <div className="detail">
            <div className="left-section">
                <img src="./pics/nismo.webp"></img> 
                <p>
                The best GT-R ever
                </p>
            </div>
            <div className="right-section">
                <p className="top">
                Starting At
                </p>
                <p className="mid">
                $121,090
                </p>
                <p className="end">
                An unmatched blend of power and soul: the Nissan GT-R. Experience the singular supercar that sculpts the wind, with enhanced aerodynamics to improve ride and handling for 2024.
                </p>
            </div>
            </div>



            <div className="specs-details">
          <div className="heading">
            <p className="h2">
              PERFORMANCE
            </p>
          </div>
  
          <div className="specs-details1">
              <div className="start">
                <span className="span1">
                  565
                </span>
                <p className="power">
                  Horsepower
                </p>
              </div>
            <div className="mid-gear">
              <div className="mid-border">
                <div className="mid-gear-content">
                  <span className="span1">
                    6
                  </span>
                </div>
                <p className="gear">
                  Speed dual-clutch transmission
                </p> 
              </div>             
            </div>
            <div className="end-torque">
              <span className="span1">
                467
              </span>
              <p className="torque">
                Lb-ft of Torque
              </p>
            </div>
          </div>
          <div className="end-btn">
            <div className="btn-layout">
              <div className="btn">
                <a href="" className="button" target="_blank">
                  View All Specs
                </a>
                <div className="tooltip">  
                    View Engine Specifications
                </div>
              </div>
              
            </div>
          </div>
        </div>

        </>
    );

}

export default MainDetails