
import * as React from 'react';
import { Box, Typography } from '@mui/material';
import ProductCard from './ProductCard';

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
        mb:3
      }}
    >
      Collections
    </Typography>

    <Typography
        variant="h2"
        sx={{
          fontFamily: 'Mandali, sans-serif', 
          fontSize: 40,
          fontWeight: 200,                   
          color: '#444444',
          textAlign: 'left',
          mb: 6,
          ml: 10,
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
        mb: 10,
        ml: 10,
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

    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: '100%',
        margin: '0 auto',
        gap: { xs: '4', md: '2' },     
        flexDirection: { xs: 'column', md: 'row' }, 
      }}
      >
        <ProductCard />
        <ProductCard />
        
    </Box>   
  </>
  );
}


 export default CollectionPage