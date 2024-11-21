import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#f8e9ef', boxShadow: 'none' }}>
        <Toolbar variant="dense">
        <Box sx={{flexGrow: 1, mt: 8}} />
          <Typography variant="h6" color="black" component={NavLink} to="/"
                      sx={{ marginRight: 4, fontFamily: 'Mandali, sans-serif',
                        color: 'black', 
                        textDecoration: 'none',
                        '&:hover, &.active': { color: '#e00845' },
                      }}>
                          Home
          </Typography>
          <Typography variant="h6" color="black" component={NavLink} to="/collection"
                      sx={{ marginRight: 4, fontFamily: 'Mandali, sans-serif',
                        color: 'black', 
                        textDecoration: 'none',
                        '&:hover, &.active': { color: '#e00845' },
                      }}>
                          Collection
          </Typography>
          <Typography variant="h6" color="black" component={NavLink} to="/shopping"
                      sx={{ marginRight: 2, fontFamily: 'Mandali, sans-serif',
                        color: 'black', 
                        textDecoration: 'none',
                        '&:hover, &.active': { color: '#e00845' },
                      }}>
                          Shop
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}