import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import vpink from '../../assets/images/vpink.jpeg'

  const ProductCard = () => {

  return (
    <Card sx={{ maxWidth: 300, margin: 'auto', boxShadow: 3, borderRadius: 2 }}>
      {/* Product Image */}
      <CardMedia
        component="img"
        height="200"
        image={vpink} 
        alt="Product Image"
        sx={{ borderRadius: '8px 8px 0 0' }}
      />
      
      {/* Product Info */}
      <CardContent sx={{ textAlign: 'center', padding: 2 }}>
        <Typography variant="h6" component="div" sx={{ fontFamily: 'Mandali, sans-serif', mb: 1 }}>
          Lace Body
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          230 €
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          sx={{ backgroundColor: '#e00845', ':hover': { backgroundColor: '#c1073b' } }}
        >
          Order
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard