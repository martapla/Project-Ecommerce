import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
    component="footer"
    sx={{
      backgroundColor: '#FFE8E8', 
      padding:{ xs: 1, md: 2 }, 
      textAlign: 'center',
      mt: 'auto',
      width: '100%',       
    }}
  >
    <Typography variant="body1" color="textSecondary" 
                sx={{ fontFamily: 'Mandali, sans-serif',
                      fontSize:{ xs: '16px', md: '18px' }, 
                      fontWeight: 400, }}>
      © {new Date().getFullYear()}  Minïm Studio. All rights reserved.
    </Typography>
    
    <Box sx={{ display: 'flex', 
               justifyContent: 'center', 
               mt: 1,
               gap: 1,
       }}>
      <IconButton href="https://facebook.com" target="_blank" color="inherit">
        <FacebookIcon fontSize="small"/>
      </IconButton>
      <IconButton href="https://twitter.com" target="_blank" color="inherit">
        <TwitterIcon fontSize="small"/>
      </IconButton>
      <IconButton href="https://instagram.com" target="_blank" color="inherit">
        <InstagramIcon fontSize="small"/>
      </IconButton>
    </Box>
  </Box>
);
}

export default Footer