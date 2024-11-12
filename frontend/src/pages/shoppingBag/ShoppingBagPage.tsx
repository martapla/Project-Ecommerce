import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const ShoppingBagPage = () => {
  const location = useLocation();  // Usamos useLocation para acceder al state

  console.log("Location State:", location.state); 
  const { selectedProducts } = location.state || { selectedProducts: [] };  // Obtenemos los productos seleccionados

  return (
    <Box sx={{ padding: 3 }}>
      <Typography
        variant="h4"
        sx={{ fontFamily: 'Mandali, sans-serif', fontSize: 40, fontWeight: 300, color: '#444444' }}
      >
        Shopping Bag
      </Typography>

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
  );
};

export default ShoppingBagPage;
