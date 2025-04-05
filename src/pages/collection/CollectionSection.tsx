import React from 'react';
import { Box, Typography } from '@mui/material';
import ProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface CollectionSectionProps {
  title: string;
  description: string;
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onDeselectProduct: (product: Product) => void;
}

const CollectionSection: React.FC<CollectionSectionProps> = ({ 
  title, 
  description, 
  products, 
  onSelectProduct,
  onDeselectProduct,
}) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
          
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'Gantari, serif',
            fontSize: { xs: '40px', sm: '56px' }, 
            fontWeight: 300,
            color: '#a67e77',
            textAlign: 'left',
            mb: 3,
            mt: { xs: '40px', sm: '60px' }, 
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Gantari, serif',
            fontSize: { xs: '18px', sm: '20px' },
            fontWeight: 300,
            color:'#a67e77',
            textAlign: 'left',
            lineHeight: 1.8,
            mb: {xs: '20px', md: '40px'},
            width: { xs: '90%', md: '86%' }, 
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
          width: { xs: '94%', md: '90%' },
          margin: '0 auto',
          gap: { xs: 1, md: 2 },
          flexDirection: { xs: 'row', md: 'row' },
        }}
      >
        {products.map((product, index) => (
          <ProductCard 
            key={index} 
            id={product.id}
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
