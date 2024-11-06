import React from "react";
import { Routes, Route } from 'react-router-dom';
import Button from '@mui/material/Button';
import Navbar from './components/navbar/Navbar'
import LandingPage from './pages/home/LandingPage/Landing';
import Collection from './pages/collection/CollectionPage';
import ShoppingBag from './pages/shoppingBag/ShoppingBagPage';
import StyledButton from "./components/common/button/Button.style";
import ButtonMui from "./components/common/button/Button"
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/collection" element={<Collection />} />

        <Route path="/shopping" element={<ShoppingBag />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;



