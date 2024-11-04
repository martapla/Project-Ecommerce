import React from 'react'
import imageHero from '../../../assets/images/imageHero.jpg'
import vpink from '../../../assets/images/vpink.jpeg'
import inside from '../../../assets/images/inside.jpeg'
import { Box, Typography, Button,TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const Landing = () => {

  const navigate = useNavigate();

  return (
    <>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"      
      minHeight="100vh"        
      justifyContent="center"  
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
                            {/* Main Image */}
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
                             {/* Section - Brand Philosophy */}
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
      onClick={() => navigate('/collection')}
      sx={{
        backgroundColor: 'white',       
        color: '#e57390',               
        border: '1px solid #e57390',    
        padding: '20px',          
        fontSize: '20px',               
        borderRadius: '50%',             
        fontFamily: 'Mandali, sans-serif', 
        fontWeight: 300,
        textTransform: 'none',          
        boxShadow: '-10px 0px 0px #e57390', 
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          backgroundColor: 'white', 
          color:  '#e57390',               
          borderColor:  '#e57390',          
          boxShadow: '10px 0px 0px #e57390',   
        },
        mb: 14,                          
      }}
    >
      Collection
  </Button>
                    {/* Section - Our Studio  */}
  <Box
    sx={{
      flex: 1,
      textAlign:'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems:'center',
      px: 3,
    }}
  >
      <Typography
        variant="h2"
        sx={{
          fontFamily: 'Mandali, sans-serif',
          fontSize: 60,
          fontWeight: 200,
          color: '#444444',
          mb: 3
        }}
      >
        Our Studio
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontFamily: 'Mandali, sans-serif',
          fontSize: 20,
          fontWeight: 300,
          color: '#444444',
          mb: 4,
          width: '80%'
        }}
      >
        We specialize in crafting made-to-measure lingerie that embodies elegance and individuality. Each piece is thoughtfully designed 
        to celebrate the unique beauty of every body. With a focus on quality craftsmanship, we take the time to understand your personal 
        style and preferences.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontFamily: 'Mandali, sans-serif',
          fontSize: 20,
          fontWeight: 300,
          color: '#444444',
          mb: 8,
          width: '80%'
        }}
      >
        Our dedicated team of artisans meticulously handcrafts each item, combining modern techniques with timeless artistry. 
        By prioritizing sustainability, we create pieces that are not only stunning but also mindful of our impact on the world.
      </Typography>

      <Box
        component="img"
        src={inside}
        alt="Descripción de la imagen"
        sx={{
          flex: 1,
          width: '60%',
          height: 'auto',
          margin: { xs: '20px auto', md: '0 auto' },
          borderRadius: 2,
          border: '10px solid white',
          boxShadow: 3,
          maxWidth: '100%',
        }}
      />
    </Box>
                             {/* Section - Get in Touch  */}
    <Box
      sx={{
        width: '90%',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, 
        justifyContent: 'center',
        gap: 4,
        padding: 4,
        mt: 20,
      }}
    >
     
       {/* Left Side - Input for Email */}
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', flexDirection:'column'}}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'Mandali, sans-serif', 
            fontSize: 60,
            fontWeight: 200,                   
            color: '#444444',
            textAlign: 'left',
            mb:3
          }}
        >
          Get in touch
        </Typography>

        <TextField
          label="Your Email"
          variant="outlined"
          placeholder="example@example.com"
          fullWidth
          sx={{
            width: '100%',
            fontFamily: 'Mandali, sans-serif',
            fontSize: 18,
          }}
        />
         <TextField
          label="Message"
          variant="outlined"
          placeholder="Write your message here..."
          multiline
          rows={4}  
          fullWidth
          sx={{
            width: '100%',
            mt: 2,
            fontFamily: 'Mandali, sans-serif',
            fontSize: 18,
          }}
        />
        
        <Button
          variant="contained"
          onClick={() => alert('Submited !!!')}
          sx={{
            mt: 4,
            width: '80%',
            mr: 'auto',
            ml: 'auto',
            backgroundColor: '#e57390', 
            color: 'white',
            padding: '12px',
            fontFamily: 'Mandali, sans-serif',
            fontSize: 18,
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#d26080', 
            },
          }}
        >
          Submit
        </Button>
      </Box>

      {/* Right Side - Image */}
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <Box
          component="img"
          src={imageHero}
          alt="redimage"
          sx={{
            width: '100%', 
            borderRadius: 2, 
            border: '10px solid white',  
            boxShadow: 3,
            objectFit: 'cover',
          }}
        />
      </Box>
    </Box>
  </Box>
    
  </>
      
  )
}

export default Landing