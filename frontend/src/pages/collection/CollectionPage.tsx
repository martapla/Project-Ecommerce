
import * as React from 'react';
import { Box, Typography } from '@mui/material';
import CollectionSection from './CollectionSection';
import vpink from '../../assets/images/vpink.jpeg'
import vred from '../../assets/images/vred.jpeg'

const CollectionPage = ()  => {

  const collections = [
    {
      title: 'White Lace',
      description: `In the heart of our brand, there’s a gentle promise: to craft 
                    lingerie that whispers to the soul, as unique as each body it adorns...`,
      products: [
        { name: 'Lace Body', price: '230', image: vpink },
        { name: 'Red Print', price: '120', image: vred },
      ],
    },
    {
      title: 'Black Stars',
      description: `This collection brings you the elegance and style you deserve...`,
      products: [
        { name: 'Blue Silk', price: '150', image: vpink },
        { name: 'Green Velvet', price: '180', image: vred },
      ],
    },
    {
      title: 'Red Oriental',
      description: `Explore our classic pieces that offer timeless beauty and comfort...`,
      products: [
        { name: 'Classic Lace', price: '210', image: vpink },
        { name: 'Silk Touch', price: '170', image: vred },
      ],
    },
  ];

  return (
    <>
    
    <Typography
      variant="h2"
      sx={{
        fontFamily: 'Mandali, sans-serif', 
        fontSize: 60,
        fontWeight: 200,                   
        color: '#e00845',
        textAlign: 'center',
        mt:8,
        mb:2
      }}
    >
      Collections
    </Typography>

    {collections.map((collection, index) => (
        <CollectionSection
          key={index}
          title={collection.title}
          description={collection.description}
          products={collection.products}
        />
      ))}

            {/* Content box text and image
    <Box
    sx={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems:'center',
      border: '1px red solid'
    }}
    >
               Box for text
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems:'center',
          border: '1px green solid'
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
                  mt:8
                }}
              >
                Lace Collection
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Mandali, sans-serif', 
                fontSize: 20,
                fontWeight: 300,                   
                color:'#444444',
                textAlign: 'left',
                mb: 6,
                width:'80%'
              }}
            >
                In the heart of our brand, there’s a gentle promise: to craft 
                lingerie that whispers to the soul, as unique as each body it adorns. 
                We believe in softness and strength, in the beauty of curves, edges, 
                and all that lies in between. Each piece is sewn to your shape, a quiet 
                celebration of who you are, stitched with care and kindness. Made to order, 
                made to treasure, our lingerie honors the earth, leaving little behind but elegance. 
                Here, you’re seen, cherished, embraced – wrapped in something made just for you, 
                to wear like a second, truest skin.
            </Typography>
        </Box>
                         Images Box
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            width: { xs: '100%', md: '90%' }, 
            margin: '0 auto',
            gap: { xs: '4', md: '2' },     
            flexDirection: { xs: 'column', md: 'row' }, 
          }}
          >
            <ProductCard name="Lace Body" price="230" image={vpink}/>
            <ProductCard name="Red Print" price="120" image={vred}/>
                        
        </Box>   
    </Box> */}
  </>
  );
}


 export default CollectionPage