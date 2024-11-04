
import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { red } from '@mui/material/colors';


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
    
   <Box
      display="flex"
      
      justifyContent="space-between"
      alignItems="center"
      sx={{
        width: '90%',
        height: '400px', 
        margin:'0 auto',
        gap: 2,          
        p: 2,  
        border: '1px solid red' ,
        flexDirection: { xs: 'column', md: 'row' }, 
          
      }}
      
    >
      {images.map((image, index) => (
        <Box
          key={index}
          component="img"
          src={image.img}
          alt={image.title}
          sx={{
            width:{ xs: '100%', md: '30%' },      
            height: '300px',       
            flex: 1,              
            borderRadius: 2,      
            margin: '0 5px',     
            boxShadow: 3          
          }}
        />
      ))}
    </Box>
   
  </>
  );
}

const images = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  
];

 export default CollectionPage