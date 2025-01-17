import React from 'react'
import vred from '../../../assets/images/vred.jpeg'
import a from '../../../assets/images/a.png'
import inside from '../../../assets/images/inside.jpeg'
import pinklace from '../../../assets/images/pinklace.jpeg'
import draw from '../../../assets/images/draw.jpeg'
import marble from '../../../assets/images/marble.jpeg'
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
        fontWeight: 700,
        fontSize: { xs: '80px', sm: '120px' }, 
        color: '#ef233c',
        mb: 1,
        mt: { xs: '0px', sm: '10px' }, 
      }}
    >
      MINÏM
    </Typography>


     <Typography
        width ="90%"
        sx={{
          fontFamily: 'Mandali, sans-serif', 
          fontSize: { xs: '20px', sm: '40px' }, 
          color: '#444444',
          textAlign: 'center',
          mb: { xs: '14px', sm: '30px' }, 
          
        }}
      >
        Made to Measure Lingerie
    </Typography> 
                            {/* Main Image */}
    <Box
      component="img"
      src={a}
      alt="Descripción de la imagen"
      sx={{
        width: '96%',
        height: 'auto',
        margin: '0 auto',    
        borderRadius: 2, 
        border: { xs: '3px solid white', sm: '6px solid white' },  
        boxShadow: 3,
        opacity: 0.9
      }} />
                             {/* Section - Brand Philosophy */}
    <Typography
      variant="h2"
      sx={{
        fontFamily: 'Mandali, sans-serif', 
        fontSize: { xs: '40px', sm: '56px' }, 
        fontWeight: 200,                   
        color: '#444444',
        textAlign: 'center',
        mt: { xs: '10px', sm: '60px' }, 
        padding:{ xs: 3 }, 
      }}
    >
      Brand Philosophy
    </Typography>

    <Typography
      variant="h2"
      sx={{
        fontFamily: 'Mandali, sans-serif', 
        fontSize: { xs: '16px', sm: '20px' },
        fontWeight: 300,                   
        color:'#444444',
        textAlign: 'center',
        mb: { xs: '40px', sm: '80px' }, 
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
                               {/* Button Collection */}
    <Button
      variant="contained"
      onClick={() => navigate('/collection')}
      sx={{
        backgroundColor: 'white',       
        color: '#e57390',               
        border: '1px solid #e57390',    
        padding: { xs: '16px', sm: '20px' },          
        fontSize: { xs: '16px', sm: '20px' },              
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
        mb: { xs: '60px', md: '100px' },
        mt: { xs: '0px', md: '30px' },                  
      }}
    >
      See Collections
  </Button>

  <Box
        component="img"
        src={pinklace}
        alt="Descripción de la imagen"
        sx={{
          flex: 1,
          width: { xs: '90%', md: '90%' },
          height: '800px',
          borderRadius: 2,
          border: { xs: '3px solid white', sm: '6px solid white' }, 
          boxShadow: 3,
        }}
        
      />

                    {/* Section - Our Studio  */}
  <Box
    sx={{
      flex: 1,
      textAlign:'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems:'center',
      px: 3,
      pb: {xs: '50px', sm: '0px'},
      mt: {xs: '40px', sm: '60px'},
      backgroundImage:`linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.3)), url(${marble})`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', 
      borderTop:'10px solid lavenderblush',
      borderBottom:'10px solid pink'
    }}
  >
      <Typography
        variant="h2"
        sx={{
          fontFamily: 'Mandali, sans-serif',
          fontSize: {xs: '40px', sm: '56px'},
          fontWeight: 200,
          color: '#444444',
          mb: 3,
          mt: { xs: '30px', sm: '40px' }, 
          
        }}
      >
        Our Studio
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontFamily: 'Mandali, sans-serif',
          fontSize: { xs: '16px', sm: '20px' },
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
          fontSize: { xs: '16px', sm: '20px' },
          fontWeight: 300,
          color: '#444444',
          mb: 4,
          width: '80%'
        }}
      >
        Our dedicated team of artisans meticulously handcrafts each item, combining modern techniques with timeless artistry. 
        By prioritizing sustainability, we create pieces that are not only stunning but also mindful of our impact on the world.
      </Typography>

                                    {/* 2 Images Box */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, 
          margin: { xs: '0 auto', md: '80px auto' },
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: 4, 
          width: { xs: '100%', md: '95%'}, 
        }}
      >

          <Box
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
                <Box
                  component="img"
                  src={draw}
                  alt="Descripción de la imagen"
                  sx={{
                    width: '100%',
                    maxWidth: '800px',
                    height: { md:  '500px'},
                    borderRadius: 2,
                    border: { xs: '3px solid white', sm: '6px solid white' }, 
                    boxShadow: 3,
                    objectFit: 'cover', 
                  }}
                />
          </Box>
          <Box
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
                <Box
                  component="img"
                  src={inside}
                  alt="Descripción de la imagen"
                  sx={{
                    width: '100%',
                    height: { md:  '500px'},
                    borderRadius: 2,
                    border: { xs: '3px solid white', sm: '6px solid white' }, 
                    boxShadow: 3,
                    objectFit: 'cover',
                  }}
                />
          </Box>
      </Box>
    </Box>
                             {/* Section - Get in Touch  */}
    <Box
      sx={{
        width: '90%',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, 
        justifyContent: 'center',
        gap: 8, 
        padding: {xs: '10px' , sm: '20px'},
        mt: {xs: '40px', sm: '60px'},
        mb: 4
      }}
    >
     
       {/* Left Side - Input for Email */}
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', flexDirection:'column'}}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'Mandali, sans-serif', 
            fontSize: {xs: '40px', sm: '56px'},
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
          placeholder="your email"
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
            margin: { xs: '40px auto', md: '40px auto'},
            width: '80%',
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
          src={vred}
          alt="redimage"
          sx={{
            width: '100%', 
            borderRadius: 2, 
            border: { xs: '3px solid white', sm: '6px solid white' }, 
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