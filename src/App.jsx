import React from 'react';
import NevBar from './NevbarMaindetails/NevBar.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Checkout from './Checkout.jsx'
import Product from './Products/Product.jsx'
import GtrCategory from './GtrCategory.jsx'
import SpecsSlide from './specs/SpecsSlide.jsx'



import Home from './Home.jsx'


function App() {
  

  return (
    <>
       <BrowserRouter basename="/gtr-site-js-new">

          <NevBar />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='/product' element={<Product/>}/>
                <Route path='/nismo' element={<GtrCategory category= "nismo"/>}/>
                <Route path="/product/:productid" element={<Product />} />
                <Route path='/spec' element={<SpecsSlide/>}/>

            </Routes>
          </BrowserRouter>
  </>
  )
}

export default App
