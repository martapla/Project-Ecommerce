// CollectionSection.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import ProductCard from './ProductCard';

const CollectionSection = ({ title, description, products, onSelectProduct,onDeselectProduct }) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px red solid',
        mb: 6,
      }}
    >
      {/* Box for text */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px green solid',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'Mandali, sans-serif',
            fontSize: 40,
            fontWeight: 200,
            color: '#444444',
            textAlign: 'left',
            mb: 4,
            mt: 8,
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontFamily: 'Mandali, sans-serif',
            fontSize: 20,
            fontWeight: 300,
            color: '#444444',
            textAlign: 'left',
            mb: 6,
            width: '80%',
          }}
        >
          {description}
        </Typography>
      </Box>
      {/* Images Box */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: { xs: '100%', md: '90%' },
          margin: '0 auto',
          gap: { xs: 4, md: 2 },
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        {products.map((product, index) => (
          <ProductCard 
            key={index} 
            name={product.name} 
            price={product.price} 
            image={product.image} 
            onSelect={onSelectProduct}  
            onDeselect={onDeselectProduct}
            />
        ))}
      </Box>
    </Box>
  );
};

export default CollectionSection;
