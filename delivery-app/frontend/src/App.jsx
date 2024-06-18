import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Card from './pages/Card/Card'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
    <main className="app">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Card/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
    </main>
    <Footer/>
    </>
  )
}

export default App