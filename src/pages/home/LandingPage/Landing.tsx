import React from 'react'
import vpieces from '../../../assets/images/v-pieces.png'
import brapink from '../../../assets/images/bra-pink.png'
import pattern from '../../../assets/images/pattern.png'
import brapattern from '../../../assets/images/brapattern.png'
import { Box, Typography, Button,TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import heroMob from '../../../assets/images/hero-mob.png'
import headDesk from '../../../assets/images/header-desk.png'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import '../../../index.css';

const Landing = () => {

  const navigate = useNavigate();
  const theme = useTheme();
  const heroImg = useMediaQuery(theme.breakpoints.up('sm'));

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
          fontSize: { xs: '60px', sm: '90px' }, 
          color: '#ef233c',
          WebkitTextStroke: '0.5px white',
          mt: { xs: '-30px', md: '-10px' }, 
          textShadow: '2px 2px 1px rgba(245, 153, 153, 0.5)', 
        }}
      >
        MINÏM
      </Typography>


      <Typography
          width ="90%"
          sx={{
            fontFamily: "Gantari, serif",
            fontWeight: 300, 
            fontSize: { xs: '22px', sm: '30px' }, 
            color: '#a67e77',
            textAlign: 'center',
            mb: { xs: '10px', sm: '20px', md:'10px' }, 
          }}
        >
          Made to Measure Lingerie
      </Typography> 
                            {/* Hero Image */}
      <Box
        component="img"
        src={heroImg ? headDesk : heroMob}
        alt="Descripción de la imagen"
        sx={{
          width: '96%',
          height: 'auto',
          margin: '0 auto',    
          borderRadius: 1, 
          border: { xs: '2px solid white', sm: '3px solid white' },  
        }} />
                             {/* Section - Brand Philosophy */}
      <Typography
        
        sx={{
          fontFamily: "Gantari, serif",
          fontSize: { xs: '40px', sm: '56px' }, 
          fontWeight: 200,                   
          color: '#a67e77',
          textAlign: 'center',
          mt: { xs: '10px', md:'8px' }, 
          padding:{ xs: 2 }, 
        }}
      >
        Brand Philosophy
      </Typography>

      <Typography
        sx={{
          fontFamily: "Gantari, serif",
          fontSize: { xs: '18px', sm: '20px' },
          fontWeight: 300,                   
          color:'#a67e77',
          lineHeight: 1.8,
          mb: { xs: '40px', sm: '80px' }, 
          width:'90%'
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
                    
                              {/* Pink Bra Image */}
      <Box
        component="img"
        src={brapink}
        alt="Descripción de la imagen"
        sx={{
          flex: 1,
          width: { xs: '90%', md: '90%' },
          height: '800px',
          borderRadius: 1,
          border: { xs: '2px solid white', sm: '3px solid white' }, 
          boxShadow: '10px 10px 10px rgba(255, 182, 193, 0.4)',
        }}
      />

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
          fontFamily: "Gantari, serif",
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
          mt: { xs: '60px', md: '80px' },                  
        }}
      >
        See Collections
      </Button>

                    {/* Section - Our Studio  */}
      <Box
        sx={{
          flex: 1,
          textAlign:'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems:'center',
          pb: {xs: '50px', sm: '0px'},
          mt: {xs: '40px', sm: '60px'},
          backgroundColor:'#fcf3f3',
        }}
      >
        <Typography
          sx={{
            fontFamily: "Gantari, serif",
            fontSize: { xs: '40px', sm: '56px' }, 
            fontWeight: 200,                   
            color: '#a67e77',
            mb: 3,
            mt: { xs: '30px', sm: '50px' }, 
          }}
        >
          Our Studio
        </Typography>

        <Typography
          
          sx={{
            textAlign: 'left',
            fontFamily: "Gantari, serif",
            fontSize: { xs: '18px', sm: '20px' },
            fontWeight: 300,                   
            color:'#a67e77',
            lineHeight: 1.8,
            mb: 4,
            width: '90%'
          }}
        >
          We specialize in crafting made-to-measure lingerie that embodies elegance and individuality. Each piece is thoughtfully designed 
          to celebrate the unique beauty of every body. With a focus on quality craftsmanship, we take the time to understand your personal 
          style and preferences.
        </Typography>

        <Typography
          sx={{
            textAlign: 'left',
            fontFamily: "Gantari, serif",
            fontSize: { xs: '18px', sm: '20px' },
            fontWeight: 300,                   
            color:'#a67e77',
            lineHeight: 1.8,
            mb: 4,
            width: '90%'
          }}
        >
          Our dedicated team of artisans meticulously handcrafts each item, combining modern techniques with timeless artistry. 
          We create pieces that are not only stunning but also mindful of our impact on the world.
        </Typography>

                                    {/* 2 Images Box */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' }, 
            margin: { xs: '0 auto', sm: '80px auto' },
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: 4, 
            width: { xs: '90%', md: '95%'}, 
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
                    src={pattern}
                    alt="Descripción de la imagen"
                    sx={{
                      width: '100%',
                       maxWidth: '800px',
                       height: { sm:  '306px', md: '500px'},
                       //height: { md: '500px'},
                      borderRadius: 1,
                      border: { xs: '2px solid white', sm: '3px solid white' }, 
                      boxShadow: '6px 10px 10px rgba(255, 182, 193, 0.4)',
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
                    src={brapattern}
                    alt="Descripción de la imagen"
                    sx={{
                      width: '100%',
                      height: { sm:  '306px', md:  '500px'},
                      borderRadius: 1,
                      border: { xs: '2px solid white', sm: '3px solid white' }, 
                      boxShadow: '6px 10px 10px rgba(255, 182, 193, 0.4)',
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
        <Box sx={{ 
          flex: 1, 
          display: 'flex', 
          justifyContent: 'center', 
          flexDirection:'column'}}
        >
            <Typography
              sx={{
                fontFamily: "Gantari, serif",
                fontSize: {xs: '40px', sm: '56px'},
                fontWeight: 200,                   
                color:'#a67e77',
                textAlign: 'left',
                mb: { xs: '20px', sm: '40px' }, 
              }}
            >
              Get in touch
            </Typography>

            <TextField
              placeholder="Email"
              fullWidth
              sx={{
                width: '100%',
                fontFamily: 'Gantari, serif',
                fontSize: '16px',
                color:'#a67e77',
                  "& .MuiOutlinedInput-root": {
     
                  "&:hover fieldset": {
                    border: "1px solid #a67e77",
                  },
                  "&.Mui-focused fieldset": {
                    border: "2px solid white",
                  },
                },
                
              }}
            />
            <TextField
              placeholder="Message"
              multiline
              rows={4}  
              fullWidth
              sx={{
                width: '100%',
                mt: 2,
                fontFamily: 'Gantari, serif',
                fontSize: 14,
                color:'#a67e77',
                  "& .MuiOutlinedInput-root": {
     
                  "&:hover fieldset": {
                    border: "1px solid #a67e77",
                  },
                  "&.Mui-focused fieldset": {
                    border: "2px solid white",
                  },
                },
              }}
            />
          
            <Button
              onClick={() => alert('Submited !!!')}
              sx={{
                margin: { xs: '40px auto', md: '40px auto'},
                width: '80%',
                backgroundColor: '#e57390', 
                color: 'white',
                boxShadow: '4px 4px 1px rgba(245, 153, 153, 0.5)', 
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
            src={vpieces}
            alt="redimage"
            sx={{
              width: '100%', 
              borderRadius: 1, 
              border: { xs: '2px solid white', sm: '3px solid white' }, 
              boxShadow: '10px 10px 10px rgba(255, 182, 193, 0.4)',
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