import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Cart from './Components/Cart';
import CartPage from './Components/Cart'; 
import ShoppingPage from './Components/Shopping'; 
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Components/fooder';
import Signin from './Components/registeration';
import Register from './Components/Signin';


function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Shopping-page" element={<ShoppingPage />} />
          <Route path="/cart-page" element={<CartPage />} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Signin" element={<Signin />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
