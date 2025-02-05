
import  React,{ useState, useContext } from 'react';
import { Typography, Button } from '@mui/material';
import CollectionSection from './CollectionSection';
import { useNavigate } from 'react-router-dom';
import pinktop from '../../assets/images/pinktop.jpg'
import pinkv from '../../assets/images/pinkv.jpg'
import vred from '../../assets/images/vred.jpeg'
import redbra from '../../assets/images/redbra.jpeg'
import blackcat from '../../assets/images/blackcat.jpeg'
import blacklook from '../../assets/images/blacklook.jpeg'
import { ShoppingBagContext} from "../../context/ShoppingBagContext";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface Collection {
  title: string;
  description: string;
  products: Product[];
}

const CollectionPage: React.FC = ()  => {

  const navigate = useNavigate();
  const { addProduct, removeProduct } = useContext(ShoppingBagContext);
  
  const collections: Collection[] = [
    {
      title: 'Red Garden',
      description: `Here comes the beauty of orient gardens, with timeless smells. 
      Each piece is crafted from a soft, elastic fabric adorned with delicate floral motifs 
      that evoke the grace of traditional oriental nature. Designed with a vintage flair, 
      the rich red hues and intricate patterns embrace the body with comfort and charm. 
      Like a blossom in full bloom, Red Oriental brings warmth, grace, and a touch of romance 
      to your every moment.`,
      products: [
        {id:'4', name: 'Oriental Bra', price: 170, image: redbra },
        {id:'5', name: 'Oriental V', price: 130, image: vred },
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
        {id:'2', name: 'Black Corset', price: 210, image: blackcat },
        {id:'3', name: 'Black Set', price: 380, image: blacklook },
      ],
    },
    {
      title: 'Hidden Silk',
      description: `Soft whispers of a bygone era. Each piece is handcrafted, 
      draping your skin in timeless luxury. 
      Inspired by the romance of vintage glamour,evoke the grace and allure of delicate 
      silhouettes. Dance in harmony, crafted to embrace your form like a cherished secret. 
      Slip into a world where comfort becomes allure,and every detail is a quiet ode to femininity. 
      Wrap yourself in the magic of silk, made uniquely for you.`,
      products: [
        {id:'0', name: 'Silk Bra', price: 180, image: pinktop },
        {id:'1',name: 'Silk V', price: 120, image: pinkv },
      ],
    }
  ];

  const goToShoppingBag = () => {
    navigate("/shopping");
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
        />
      ))}

    <Button
      variant="contained"
      onClick={goToShoppingBag}
      sx={{
        backgroundColor: 'white',       
        // color: '#e57390',    
        color:'#f57e75',           
        border: '1px solid #f57e75',    
        padding: { xs: '14px', sm: '20px' },          
        fontSize: { xs: '16px', sm: '20px' },               
        borderRadius: '50%',             
        fontFamily: 'Gantari, serif', 
        fontWeight: 300,
        textTransform: 'none',          
        boxShadow: { xs: '-6px 0px 0px #f57e75', md: '-10px 0px 0px #f57e75' },     
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