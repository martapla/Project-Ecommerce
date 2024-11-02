import React from 'react'
//import imageHero from '../../../assets/images/imageHero.jpg'
import vpink from '../../../assets/images/vpink.jpeg'
import inside from '../../../assets/images/inside.jpeg'
import { Box, Typography, Button } from '@mui/material'

const Landing = () => {
  return (
    <>
     <Box
      display="flex"
      flexDirection="column"
      alignItems="center"      // Centra todos los elementos dentro del Box
      minHeight="100vh"        // Ocupa toda la altura de la pantalla
      justifyContent="center"  // Centra verticalmente
    >
    <Typography
      variant="h1"
      sx={{
        fontFamily: 'Kodchasan, sans-serif', 
        fontSize:140,
        fontWeight: 700,
        color: '#e00845',
        mb: 2,
        mt: 3
      }}
    >
      MINÏM
    </Typography>

    <Typography
        variant="h2"
        sx={{
          fontFamily: 'Mandali, sans-serif', 
          fontSize: 45,
          fontWeight: 400,                   
          color: '#444444',
          textAlign: 'center',
          mb: 6
        }}
      >
        Made to Measure Lingerie
      </Typography>

       <Box
      component="img"
      src={vpink}
      alt="Descripción de la imagen"
      sx={{
        width: '90%',
        height: '700px',
        margin: '0 auto',    
        borderRadius: 2, 
        border: '10px solid white',  
        boxShadow: 3,
        objectFit: 'cover',
        opacity: 0.9
      }} />

      <Typography
        variant="h2"
        sx={{
          fontFamily: 'Mandali, sans-serif', 
          fontSize: 60,
          fontWeight: 200,                   
          color: '#444444',
          textAlign: 'center',
          mt:8,
          mb:3
        }}
      >
        Brand Philosophy
      </Typography>

      <Typography
        variant="h2"
        sx={{
          fontFamily: 'Mandali, sans-serif', 
          fontSize: 20,
          fontWeight: 300,                   
          color:'#444444',
          textAlign: 'center',
          mb: 10,
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

      <Button
      variant="contained"
      onClick={() => alert('see-collection')}
      sx={{
        backgroundColor: 'white',       
        color: '#e00845',               
        border: '1px solid #e00845',    
        padding: '20px',          
        fontSize: '20px',               
        borderRadius: '50%',             
        fontFamily: 'Mandali, sans-serif', 
        fontWeight: 300,
        textTransform: 'none',          
        boxShadow: '0px 6px 0px #e00845', 
        '&:hover': {
          color:  '#e57390',                // Color de texto rosa más oscuro al pasar el mouse
          borderColor:  '#e57390',          // Cambia el borde a un tono rosa más oscuro
          boxShadow: '0px 8px 0px #e57390',   // Cambia la sombra a un tono rosa más oscuro
        },
        mb: 14,                          
      }}
    >
      See Collection
    </Button>

    <Box
      component="img"
      src={inside}
      alt="Descripción de la imagen"
      sx={{
        width: '60%',
        height: 'auto',
        margin: '0 auto',    
        borderRadius: 2, 
        border: '10px solid white',  
        boxShadow: 3,
        //objectFit: 'contain',
        
      }} />


    <Typography
        variant="h2"
        sx={{
          fontFamily: 'Mandali, sans-serif', 
          fontSize: 60,
          fontWeight: 200,                   
          color: '#444444',
          textAlign: 'center',
          mt:8,
          mb:3
        }}
      >
        Our Studio
      </Typography>

      <Typography
        variant="h2"
        sx={{
          fontFamily: 'Mandali, sans-serif', 
          fontSize: 20,
          fontWeight: 300,                   
          color: '#444444',
          mb: 4,
          width:'80%'
        }}
      >
        We specialize in crafting made-to-measure lingerie that embodies elegance 
        and individuality. Each piece is thoughtfully designed to celebrate the unique 
        beauty of every body. With a focus on quality craftsmanship, we take the time to 
        understand your personal style and preferences, ensuring that every detail 
        resonates with you.
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontFamily: 'Mandali, sans-serif', 
          fontSize: 20,
          fontWeight: 300,                   
          color: '#444444',
          mb: 10,
          width:'80%'
        }}
      >
        Our dedicated team of artisans meticulously handcrafts each item, 
        combining modern techniques with timeless artistry. By prioritizing sustainability, 
        we create pieces that are not only stunning but also mindful of our impact on the world. 
      </Typography>


      </Box>
      </>
      
  )
}

export default Landing