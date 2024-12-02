import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'
import LandingPage from './pages/home/LandingPage/Landing';
import Collection from './pages/collection/CollectionPage';
import ShoppingBag from './pages/shoppingBag/ShoppingBagPage';
import Footer from "./components/footer/Footer";
import { ShoppingBagProvider } from "./context/ShoppingBagContext";
import ScrollToTop from './components/common/button/ScrollToTop';

function App() {
  return (
  
    <ShoppingBagProvider>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/collection" element={<Collection />} />

        <Route path="/shopping" element={<ShoppingBag />} />
      </Routes>
      <Footer />
    </ShoppingBagProvider>
    
  )
}

export default App;



