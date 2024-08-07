<<<<<<< HEAD

import Navbar from './components/Navbar/Navbar'
import {Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'

const App = () => {

  const [showLogin,setShowLogin] =useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
        <Route path='/verify' element={<Verify/>} />
        <Route path='/myorders' element={<MyOrders/>} />

      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
=======
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route, Router } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
const App = () => {
  return (
    <Router>

    
    <div className='app'>
<Navbar/>
<Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/order' element={<PlaceOrder/>} />

     
</Routes>
    </div>
    </Router>
  )
}

export default App
>>>>>>> 89eb54fea312c348b5e26080165db9e67e099ad9
