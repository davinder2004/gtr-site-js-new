import React from 'react';
import NevBar from './NevbarMaindetails/NevBar.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Checkout from './Checkout.jsx'
import Product from './Products/Product.jsx'
import ProductGTRs from './Products/ProductGTRs.jsx'
import GtrCategory from './GtrCategory.jsx'

import Home from './Home.jsx'


function App() {
  

  return (
    <>
        <BrowserRouter>
          <NevBar />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='/product' element={<Product/>}/>
                <Route path='/nismo' element={<GtrCategory category= "nismo"/>}/>
                <Route path="/product/:productid" element={<Product />} />

            </Routes>
          </BrowserRouter>
  </>
  )
}

export default App
