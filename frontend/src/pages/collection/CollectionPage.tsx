
import  React,{ useState } from 'react';
import { Typography, Button } from '@mui/material';
import CollectionSection from './CollectionSection';
import { useNavigate } from 'react-router-dom';
import vpink from '../../assets/images/vpink.jpeg'
import vred from '../../assets/images/vred.jpeg'
import redbra from '../../assets/images/redbra.jpeg'
import blackcat from '../../assets/images/blackcat.jpeg'
import blacklook from '../../assets/images/blacklook.jpeg'

const CollectionPage = ()  => {

  const [selectedProducts, setSelectedProducts] = useState([]);
  const navigate = useNavigate();
  
    // Add products
    const handleSelectProduct = (product) => {
      setSelectedProducts((prevSelectedProducts) => [...prevSelectedProducts, product]);
    };

    // Remove products
  const handleDeselectProduct = (product) => {
    setSelectedProducts((prevSelectedProducts) => 
      prevSelectedProducts.filter((p) => p.name !== product.name)
    );
  };

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
        { name: 'Silk Bra', price: '230', image: vpink },
        { name: 'Silk V', price: '120', image: vred },
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
        { name: 'Black Corset', price: '150', image: blackcat },
        { name: 'Black Set', price: '180', image: blacklook },
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
        { name: 'Oriental Bra', price: '210', image: redbra },
        { name: 'Oriental V', price: '170', image: vred },
      ],
    },
  ];

  const goToShoppingBag = () => {
     console.log("Selected Products: ", selectedProducts);
     navigate('/shopping', { state: { selectedProducts } });
  };

  return (
    <>
    
    <Typography
      variant="h2"
      sx={{
        fontFamily: 'Mandali, sans-serif', 
        fontSize: 60,
        fontWeight: 200,                   
        // color: '#e00845',
        color: 'white',
        textShadow: '2px 2px 8px rgba(224, 8, 69, 0.4)',
        textAlign: 'center',
        mt:1,
        mb:2,
        pb:1,
        borderBottom: '9px white solid',
        borderTop: '4px white solid',
        backgroundColor:'#f9d7e4; '
      }}
    >
      Collections
    </Typography>

    {collections.map((collection, index) => (
        <CollectionSection
          key={index}
          title={collection.title}
          description={collection.description}
          products={collection.products}
          onSelectProduct={handleSelectProduct}
          onDeselectProduct={handleDeselectProduct}
        />
      ))}

    <Button
        variant="contained"
        color="primary"
        sx={{ mt: 4, display: 'block', margin: '0 auto' }}
        onClick={goToShoppingBag}
      >
        View Shopping Bag
    </Button>

      {/* <ShoppingBag selectedProducts={selectedProducts} /> */}

            {/* Content box text and image
    <Box
    sx={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems:'center',
      border: '1px red solid'
    }}
    >
               Box for text
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems:'center',
          border: '1px green solid'
        }}
        >
            <Typography
                variant="h2"
                sx={{
                  fontFamily: 'Mandali, sans-serif', 
                  fontSize: 40,
                  fontWeight: 200,                   
                  color: '#444444',
                  textAlign: 'left',
                  mb: 4,
                  mt:8
                }}
              >
                Lace Collection
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Mandali, sans-serif', 
                fontSize: 20,
                fontWeight: 300,                   
                color:'#444444',
                textAlign: 'left',
                mb: 6,
                width:'80%'
              }}
            >
                In the heart of our brand, there’s a gentle promise: to craft 
                lingerie that whispers to the soul, as unique as each body it adorns. 
                We believe in softness and strength, in the beauty of curves, edges, 
                and all that lies in between. Each piece is sewn to your shape, a quiet 
                celebration of who you are, stitched with care and kindness. Made to order, 
                made to treasure, our lingerie honors the earth, leaving little behind but elegance. 
                Here, you’re seen, cherished, embraced – wrapped in something made just for you, 
                to wear like a second, truest skin.
            </Typography>
        </Box>
                         Images Box
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            width: { xs: '100%', md: '90%' }, 
            margin: '0 auto',
            gap: { xs: '4', md: '2' },     
            flexDirection: { xs: 'column', md: 'row' }, 
          }}
          >
            <ProductCard name="Lace Body" price="230" image={vpink}/>
            <ProductCard name="Red Print" price="120" image={vred}/>
                        
        </Box>   
    </Box> */}
  </>
  );
}


 export default CollectionPage