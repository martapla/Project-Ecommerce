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
      backgroundColor: '#f8e9ef', 
      padding: 4, 
      textAlign: 'center',
      mt: 8, 
    }}
  >
    <Typography variant="body1" color="textSecondary" 
                sx={{ fontFamily: 'Mandali, sans-serif' ,fontSize:'20px' , 
                fontWeight: 400, }}>
      © {new Date().getFullYear()}  Minïm Studio. All rights reserved.
    </Typography>
    
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
      <IconButton href="https://facebook.com" target="_blank" color="inherit">
        <FacebookIcon />
      </IconButton>
      <IconButton href="https://twitter.com" target="_blank" color="inherit">
        <TwitterIcon />
      </IconButton>
      <IconButton href="https://instagram.com" target="_blank" color="inherit">
        <InstagramIcon />
      </IconButton>
    </Box>
  </Box>
);
}

export default Footer