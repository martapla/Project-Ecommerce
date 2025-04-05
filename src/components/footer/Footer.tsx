import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        // backgroundColor: '#FFE8E8', 
        textAlign: 'center',
        py:{ xs: 1, md: 2 }, 
        // mt: 'auto',
      }}
    >
      <Typography 
      variant="body1" 
      color="textSecondary" 
      sx={{
        fontFamily: 'Gantari, serif',
        color: '#a67e77',
        fontSize:{ xs: '16px', md: '18px' }, 
        fontWeight: 400, 
        }}>
        © {new Date().getFullYear()}  Minïm Studio. All rights reserved.
      </Typography>
    
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mt: 1,
          mb: 1,
          gap: 1,
          color: '#a67e77',
        }}>

        <IconButton color="inherit"
          onClick={() => alert('Happy you like it 💖')}
        >
           <FavoriteBorderIcon fontSize="small"/>
        </IconButton>
        
        <IconButton color="inherit"
          onClick={() => alert('Insta coming soon 🏖️')}
        >
           <InstagramIcon fontSize="small"/>
        </IconButton>

        <IconButton color="inherit" 
          onClick={() => alert('Hope you liked my website ✨👩‍💻✨')}
        >
           <GitHubIcon fontSize="small" />
        </IconButton>
        
      </Box>
  </Box>
);
}

export default Footer