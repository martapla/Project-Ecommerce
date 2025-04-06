
import  React,{ useState, useContext } from 'react';
import { Typography, Button } from '@mui/material';
import CollectionSection from './CollectionSection';
import { useNavigate } from 'react-router-dom';
import silkbr from '../../assets/images/silkbr.png'
import silktop from '../../assets/images/silktop.png'
import vred from '../../assets/images/vred.jpeg'
import redbra from '../../assets/images/redbra.jpeg'
import blackcat from '../../assets/images/blackcat.jpeg'
import blacklook from '../../assets/images/blacklook.jpeg'
import beachtop from '../../assets/images/beachtop.jpeg'
import beachv from '../../assets/images/beachv.png'
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
      that evoke the grace of traditional oriental nature. `,
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
      a touch of boldness.`,
      products: [
        {id:'2', name: 'Black Corset', price: 210, image: blackcat },
        {id:'3', name: 'Black Set', price: 380, image: blacklook },
      ],
    },
    {
      title: 'Hidden Silk',
      description: `Soft whispers of a bygone era. Each piece is handcrafted, 
      draping your skin in timeless luxury. 
      Inspired by the romance of vintage glamour, evoke the grace and allure of delicate 
      silhouettes. Dance in harmony, crafted to embrace your form like a cherished secret. `,
      products: [
        {id:'0', name: 'Silk Bra', price: 180, image: silktop },
        {id:'1',name: 'Silk V', price: 120, image: silkbr },
      ],
    },
    {
      title: 'Retro Beach',
      description: `Each piece brings back the spirit of vintage summers—effortless, bright, and full of charm.
      With a subtle retro touch, these suits are designed to celebrate your shape and catch 
      the light just right. `,
      products: [
        {id:'0', name: 'Beach Top', price: 90, image: beachtop },
        {id:'1',name: 'Beach V', price: 120, image: beachv },
      ],
    },
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
        color:'#f57e75',           
        border: '1px solid #e57390',    
        padding: { xs: '14px', sm: '20px' },          
        fontSize: { xs: '18px', sm: '20px' },               
        borderRadius: '50%',             
        fontFamily: 'Gantari, serif', 
        fontWeight: 300,
        textTransform: 'none',          
        boxShadow: '-8px 0px 0px #e57390',     
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          backgroundColor: 'white', 
          color:  '#e57390',               
          borderColor:  '#e57390',          
          boxShadow: '8px 0px 0px #e57390',   
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