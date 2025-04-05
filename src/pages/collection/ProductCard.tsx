import React, { useState }  from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Product } from '../checkout/CheckoutPage';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  onSelect: (product: Product) => void;
  onDeselect: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image,id, onSelect, onDeselect }) => {

  const [isSelected, setIsSelected] = useState(false);

  const handleSelectClick = () => {
    if (isSelected) {
      // Si ya está seleccionado, lo deselecciona
      setIsSelected(false);
      onDeselect({ name, price, image, id }); 
    } else {
      // Si no está seleccionado, lo selecciona
      setIsSelected(true);
      onSelect({ name, price, image, id }); 
    }
  };

  return (
    
    <Card 
      sx={{ 
        width: { xs: '80%', md: '60%'}, 
        border: { xs: '2px solid white', sm: '6px solid white' }, 
        boxShadow: '10px 10px 10px rgba(255, 182, 193, 0.4)',
      }}
    >
      {/* Product Image */}
      <CardMedia
        component="img"
        image={image} 
        alt="Product Image"
        sx={{ 
          objectFit: 'cover', 
          width: '100%' , 
          pb:'10px'
         }}
      />
      
      {/* Product Info */}
      <CardContent
        sx={{
          display: 'flex', 
          flexDirection: 'row',
          alignItems: 'center', 
          justifyContent: 'space-between', 
          padding: { xs: '6px ', sm: '10px ' },
        
          
        }}
      >
          {/* Product Details */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column' ,
            }}>

              <Typography  
                sx={{ 
                  fontFamily: 'Gantari, serif', 
                  color:'#a67e77',
                  fontSize: { xs: '14px', sm: '18px' },
                   }}>
                {name}
              </Typography>

              <Typography 
                sx={{ 
                  color:'#a67e77',
                  fontSize: { xs: '14px', sm: '18px' },
                   }}> 
                {price} €
              </Typography>

          </Box>

          {/* Select Button */}
            <Button
              onClick={handleSelectClick}
              sx={{
                px:{ xs: '4px', sm: '10px' },
                fontSize: { xs: '12px', sm: '14px' },
                backgroundColor: isSelected ? '#f57e75' : 'white',
                color: isSelected ? 'white' : '#f57e75',
                border: '1px solid #f57e75',
                ':hover': {
                  backgroundColor: '#f57e75',
                  color: 'white',
                },
                boxShadow: '3px 3px 1px rgba(255, 182, 193, 0.8)',
              }}
            >
              {isSelected ? 'Selected' : 'Order'}
            </Button>
        
      </CardContent>
    </Card>
  );
}

export default ProductCard