import React, {useState, useContext} from 'react'


import "./slider.css"


const specdata = [

    {
        image: `${import.meta.env.BASE_URL}/pics/gtr-r32.jpg`,
        text:'r32',
    },
    {
        image: `${import.meta.env.BASE_URL}/pics/gtr-r33.jpg`,
        text:'r33',
    },
    {
        image: `${import.meta.env.BASE_URL}/pics/gtr-r35.jpg`,
        text:'r35',
    }

]




const SpecsSlide = () => {


    


    const [currentImage, setCurrentImage] = useState(0)
    


const setImage = (index) => {
    setCurrentImage(index)
}





  return (

    <>
        <div className='Slider-container '>

            <img src={specdata[currentImage].image} alt="" />

            <div>{specdata[currentImage].text}</div>

            <button onClick={() => {setImage(0)}}> image1 </button>
            <button onClick={() => {setImage(1)}}> image2</button>
            <button onClick={() => {setImage(2)}}>image3 </button>
            
            
        </div>

    </>
  )
}

export default SpecsSlide
