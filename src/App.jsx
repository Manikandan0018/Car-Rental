import './App.css'
import { Home } from './Container/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Signup } from './signup/Signup';
import { useState } from 'react';
import { Cart } from './Container/Cart/Cart';


export const App = () => {
  const [cart,setCart]=useState([]);
  return (
    <div className=''>
    <Router>
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart}/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
      </Routes>
    </Router>
    
    
    
    
    
    </div>
  )
}
