import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#f8e9ef', boxShadow: 'none' }}>
        <Toolbar variant="dense">
        <Box sx={{flexGrow: 1, mt: 8}} />
          <Typography variant="h6" color="black" component="div" sx={{ marginRight: 4, fontFamily: 'Mandali, sans-serif' }}>
              <Link to="/">
                Home
              </Link>
          </Typography>
          <Typography variant="h6" color="black" component="div" sx={{ marginRight: 4, fontFamily: 'Mandali, sans-serif' }}>
              <Link to="/collection">
                Collection
              </Link>
          </Typography>
          <Typography variant="h6" color="black" component="div" sx={{ marginRight: 2, fontFamily: 'Mandali, sans-serif' }}>
              <Link to="/shopping">
                Shopping
              </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}