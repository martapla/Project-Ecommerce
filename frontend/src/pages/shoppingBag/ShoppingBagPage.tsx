import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import MeasurementsForm from '../shoppingBag/MeasurementsForm'

const ShoppingBagPage = () => {
  const location = useLocation();  // Usamos useLocation para acceder al state

  console.log("Location State:", location.state); 
  const { selectedProducts } = location.state || { selectedProducts: [] };  // Obtenemos los productos seleccionados

  return (
    <>
      <Typography
        variant="h2"
        sx={{
          fontFamily: 'Mandali, sans-serif', 
          fontSize: 60,
          fontWeight: 200,                   
          color: 'white',
          textShadow: '2px 2px 8px rgba(224, 8, 69, 0.4)',
          textAlign: 'center',
          mt:1,
          mb:2,
          pb:1,
          borderBottom: '9px white solid',
          borderTop: '4px white solid',
          backgroundColor:'#f9d7e4'
        }}
      >
        Shopping Bag
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, 
          padding: 3,
        }}
      >
        {/* Products */}
        <Box sx={{ flex: 1 }}>

          {selectedProducts.length === 0 ? (
            <Typography sx={{ marginTop: 2 }}>Your shopping bag is empty.</Typography>
          ) : (
            <Box sx={{ marginTop: 2 }}>
              {selectedProducts.map((product, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                  <img src={product.image} alt={product.name} style={{ width: 50, height: 50, marginRight: 10 }} />
                  <Typography sx={{ flex: 1 }}>
                    {product.name} - {product.price} €
                  </Typography>
                </Box>
              ))}
            </Box>
          )}
        </Box>

        <Box sx={{ flex: 1 }}>
           <MeasurementsForm/>
        </Box>

      </Box>
    </>
  );
};

export default ShoppingBagPage;
