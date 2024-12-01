import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom'; 
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import BurguerButton from '../common/button/BurguerButton'

export default function NavBar() {

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const location = useLocation();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const navLinks = [
    { text: 'Home', to: '/' },
    { text: 'Collections', to: '/collection' },
    { text: 'Check List', to: '/shopping' },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: '#f8e9ef', boxShadow: 'none' }}
      >
        <Toolbar variant="dense">
        {location.pathname !== '/' && ( 
            <Typography
              variant="h4"
              component={NavLink}
              to="/"
              sx={{
                flexGrow: 1,
                fontFamily: 'Kodchasan, sans-serif', 
                fontWeight: 600,
                fontSize: { xs: '24px', sm: '36px' }, 
                color: '#e00845',
                mt:{ xs: '2px', sm: '20px' }, 
                ml:{ xs: '2px', sm: '3px' }, 
              }}
            >
              MINÏM
            </Typography>
          )}
          <Box sx={{ flexGrow: 1, mt: 8 }} />
          {/* Burguer button mobile */}
          <IconButton
            edge="start"
            aria-label="menu"
            sx={{ 
              display: { xs: 'block', md: 'none' },
              backgroundColor: 'transparent', 
              '&:hover': {
                backgroundColor: 'transparent', 
              },
            
            }}
            onClick={toggleDrawer(true)}
            
          >
         
            <BurguerButton />

          </IconButton>
          {/* Not visible for mobile  Navbar*/}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navLinks.map((link) => (
              <Typography
                key={link.text}
                variant="h6"
                component={NavLink}
                to={link.to}
                sx={{
                  marginRight: 4,
                  fontFamily: 'Mandali, sans-serif',
                  color: 'black',
                  textDecoration: 'none',
                  '&:hover, &.active': { color: '#e00845' },
                }}
              >
                {link.text}
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      {/* Menu display (Drawer) */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        BackdropProps={{
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.2)', 
          },
        }}
        sx={{
          '.MuiDrawer-paper': {
            backgroundColor: 'white', 
            boxShadow: 'none', 
            height: '22%',
            
          },
        }}
      >
        <Box
          sx={{ 
            width: { xs: '150px', md: '200px' },
           
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navLinks.map((link) => (
              <ListItem
                // button
                key={link.text}
                component={NavLink}
                to={link.to}
                sx={{
                  textDecoration: 'none',
                  '&.active': { backgroundColor: '#f8e9ef' },
                }}
              >
                <ListItemText
                  primary={link.text}
                  sx={{ color: 'black', '&:hover': { color: '#e00845' } }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

