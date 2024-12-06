
import  React,{ useState, useContext } from 'react';
import { Typography, Button } from '@mui/material';
import CollectionSection from './CollectionSection';
import { useNavigate } from 'react-router-dom';
import vpink from '../../assets/images/vpink.jpeg'
import vred from '../../assets/images/vred.jpeg'
import redbra from '../../assets/images/redbra.jpeg'
import blackcat from '../../assets/images/blackcat.jpeg'
import blacklook from '../../assets/images/blacklook.jpeg'
import { ShoppingBagContext } from "../../context/ShoppingBagContext";

const CollectionPage = ()  => {

  // const [selectedProducts, setSelectedProducts] = useState([]);
  const navigate = useNavigate();
  const { addProduct, removeProduct } = useContext(ShoppingBagContext);
  
    // Add products
    // const handleSelectProduct = (product) => {
    //   setSelectedProducts((prevSelectedProducts) => [...prevSelectedProducts, product]);
    // };

    // Remove products
  // const handleDeselectProduct = (product) => {
  //   setSelectedProducts((prevSelectedProducts) => 
  //     prevSelectedProducts.filter((p) => p.name !== product.name)
  //   );
  // };

  const collections = [
    {
      title: 'Hidden Silk',
      description: `Soft whispers of a bygone era. Each piece is handcrafted, 
      draping your skin in timeless luxury. 
      Inspired by the romance of vintage glamour,evoke the grace and allure of delicate 
      silhouettes. Dance in harmony, crafted to embrace your form like a cherished secret. 
      Slip into a world where comfort becomes allure,and every detail is a quiet ode to femininity. 
      Wrap yourself in the magic of silk, made uniquely for you.`,
      products: [
        { name: 'Silk Bra', price: 180, image: vpink },
        { name: 'Silk V', price: 120, image: vpink },
      ],
    },
    {
      title: 'Black Stars',
      description: `A collection crafted from the finest black and delicate net, 
      woven to evoke the mystery of a starlit night. Each piece shimmers with a hint of allure, 
      like constellations against velvet skies, designed to embrace the body with elegance and 
      a touch of boldness. Intricate lacework meets soft, sheer panels, creating a play of light 
      and shadow that captures the eye and sparks the imagination. 
      Slip into Black Stars and let each piece envelop you in the magic of midnight.`,
      products: [
        { name: 'Black Corset', price: 210, image: blackcat },
        { name: 'Black Set', price: 380, image: blacklook },
      ],
    },
    {
      title: 'Red Oriental',
      description: `Here comes the beauty of orient gardens, with timeless smells. 
      Each piece is crafted from a soft, elastic fabric adorned with delicate floral motifs 
      that evoke the grace of traditional oriental nature. Designed with a vintage flair, 
      the rich red hues and intricate patterns embrace the body with comfort and charm. 
      Like a blossom in full bloom, Red Oriental brings warmth, grace, and a touch of romance 
      to your every moment.`,
      products: [
        { name: 'Oriental Bra', price: 170, image: redbra },
        { name: 'Oriental V', price: 130, image: vred },
      ],
    },
  ];

  const goToShoppingBag = () => {
    navigate("/shopping");
    //  navigate('/shopping', { state: { selectedProducts } });
  };

  return (
    <>

    {collections.map((collection, index) => (
        <CollectionSection
          key={index}
          title={collection.title}
          description={collection.description}
          products={collection.products}
          onSelectProduct={addProduct}
          onDeselectProduct={removeProduct}
          // onSelectProduct={handleSelectProduct}
          // onDeselectProduct={handleDeselectProduct}
        />
      ))}

    <Button
      variant="contained"
      onClick={goToShoppingBag}
      sx={{
        backgroundColor: 'white',       
        color: '#e57390',               
        border: '1px solid #e57390',    
        padding: { xs: '14px', sm: '20px' },          
        fontSize: { xs: '16px', sm: '20px' },               
        borderRadius: '50%',             
        fontFamily: 'Mandali, sans-serif', 
        fontWeight: 300,
        textTransform: 'none',          
        boxShadow: '-10px 0px 0px #e57390', 
        boxShadow: { xs: '-6px 0px 0px #e57390', md: '-10px 0px 0px #e57390' },     
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          backgroundColor: 'white', 
          color:  '#e57390',               
          borderColor:  '#e57390',          
          boxShadow: '10px 0px 0px #e57390',   
        },
        mb: { xs: '60px', md: '60px' }, 
        mt: { xs: '0px', md: '40px' }, 
        display: 'block', margin: '0 auto'                    
      }}
    >
      See Wishlist
    </Button>


  </>
  );
}


 export default CollectionPage