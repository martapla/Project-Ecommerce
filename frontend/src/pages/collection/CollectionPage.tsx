
import * as React from 'react';
import { Box, Typography } from '@mui/material';
import ProductCard from './ProductCard';
import vpink from '../../assets/images/vpink.jpeg'
import vred from '../../assets/images/vred.jpeg'

const CollectionPage = ()  => {
  return (
    <>
    
    <Typography
      variant="h2"
      sx={{
        fontFamily: 'Mandali, sans-serif', 
        fontSize: 60,
        fontWeight: 200,                   
        color: '#e00845',
        textAlign: 'center',
        mt:8,
        mb:2
      }}
    >
      Collections
    </Typography>
            {/* Content box text and image */}
    <Box
    sx={{
      flex: 1,
      // textAlign:'left',
      display: 'flex',
      flexDirection: 'column',
      alignItems:'center',
      border: '1px red solid'
    }}
    >
      {/* Box for text */}
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
                         {/* Images Box */}
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
    </Box>
  </>
  );
}


 export default CollectionPage