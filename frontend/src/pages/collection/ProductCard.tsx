import React, { useState }  from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';


const ProductCard = ({ name, price, image, onSelect, onDeselect }) => {

  const [isSelected, setIsSelected] = useState(false);

  const handleSelectClick = () => {
    if (isSelected) {
      // Si ya está seleccionado, lo deselecciona
      setIsSelected(false);
      onDeselect({ name, price, image }); 
    } else {
      // Si no está seleccionado, lo selecciona
      setIsSelected(true);
      onSelect({ name, price, image }); 
    }
  };

  return (
    
    <Card 
      sx={{ 
        height: { sm: 500, md: 600 }, 
        width: { xs: '80%', sm: 400, md: 500 }, 
        boxShadow: 1, 
        margin: 1,
      }}
    >
      {/* Product Image */}
      <CardMedia
        component="img"
        height="200px"
        image={image} 
        alt="Product Image"
        sx={{ borderRadius: ' 0'}}
      />
      
      {/* Product Info */}
      <CardContent
        sx={{
          display: 'flex', 
          flexDirection: 'row',
          alignItems: 'center', 
          justifyContent: 'space-between', 
          padding: 2,
        }}
      >
        {/* Product Details */}
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" component="div" sx={{ fontFamily: 'Mandali, sans-serif', mb: 1 }}>
        {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {price} €
        </Typography>
        </Box>

        {/* Select Button */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleSelectClick}
            sx={{
              backgroundColor: isSelected ? '#e00845' : 'white',
              color: isSelected ? 'white' : '#e00845',
              border: '1px solid #e00845',
              ':hover': {
                backgroundColor: '#e00845',
                color: 'white',
              },
            }}
          >
             {isSelected ? 'Selected' : 'Select'}
          </Button>
        
      </CardContent>
    </Card>
  );
}

export default ProductCard