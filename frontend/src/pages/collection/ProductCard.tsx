import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import vpink from '../../assets/images/vpink.jpeg'

  const ProductCard = () => {

  return (
    <Card sx={{ height:600,maxWidth: 500, boxShadow: 1, margin:1 }}>
      {/* Product Image */}
      <CardMedia
        component="img"
        height="200px"
        image={vpink} 
        alt="Product Image"
        sx={{ borderRadius: ' 0'}}
      />
      
      {/* Product Info */}
      <CardContent
        sx={{
          display: 'flex', // Use flex to align button to the right
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 2,
          border:'1px red solid'
        }}
      >
        <Typography variant="h6" component="div" sx={{ fontFamily: 'Mandali, sans-serif', mb: 1 }}>
          Lace Body
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          230 €
        </Typography>

        {/* Order Button */}
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: '#e00845',
              ':hover': { backgroundColor: '#c1073b' },
            }}
          >
            Order
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProductCard