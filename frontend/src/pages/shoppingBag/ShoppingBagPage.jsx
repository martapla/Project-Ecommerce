import React, {useContext} from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import MeasurementsForm from './MeasurementsForm'
import { ShoppingBagContext } from "../../context/ShoppingBagContext";
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const ShoppingBagPage = () => {
  const { selectedProducts, removeProduct } = useContext(ShoppingBagContext);
  // const location = useLocation();  
  // const { selectedProducts } = location.state || { selectedProducts: [] };  
  const navigate = useNavigate();

  const handleRemoveProduct = (product) => {
    removeProduct(product);
  }; 

  const totalPrice = selectedProducts.reduce((sum, product) => sum + product.price, 0);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, 
          justifyContent: 'center', 
          alignItems: 'center', 
          padding: { xs: 2, md: 4 },
          margin: '20px auto',
          mt: '20px',
          mb:{ xs: '0px', md: '10px' }, 
          width: '100%',
        }}
      >
                    {/* Products */}
          <Box 
          sx={{
            width: { xs: '100%', sm: '70%', md: '50%' },
            boxSizing: 'border-box',
            border:2, borderRadius:1, borderColor: 'white'
          }}
          >

            {selectedProducts.length === 0 ? (
              <Typography sx={{
                 margin: 2, 
                 textAlign:'center',
                 fontSize:{ xs: '14px', sm: '16px' }, 
                
                }}>Your Wishlist is empty...</Typography>
            ) : (
              <Box sx={{ 
                  padding: { xs: '10px', sm:'20px' }
                }}>
                {selectedProducts.map((product, index) => (

                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', borderBottom: 2, borderColor:'white',paddingTop:1,paddingBottom:1 }}>
                    <img src={product.image} alt={product.name} style={{ width: 80, height: 80, marginRight: 10 }} />
                    <Typography sx={{ flex: 1, fontFamily: 'Kodchasan, sans-serif', fontSize:'14px', fontWeight: 500}}>
                      {product.name} - {product.price} €
                    </Typography>

                    <button 
                      onClick={() => handleRemoveProduct(product)} 
                      style={{ 
                        border: 'none', 
                        background: 'none', 
                        cursor: 'pointer', 
                        display: 'flex', 
                        alignItems: 'center' 
                      }}
                    >
                      <DeleteIcon style={{ color: 'grey', fontSize: '20px' }} />
                    </button>
                  </Box>
                ))}
                
                  <Typography sx={{ marginTop: 2, textAlign: 'right', fontFamily: 'Kodchasan, sans-serif',fontSize:'14px', fontWeight: 600 }}>
                    Total: {totalPrice} €
                  </Typography>
              </Box>
            )}
          </Box>

                  {/* Measurement Form */}
          <Box 
          sx={{
            flex: 1,
            padding: 2,
            width: { xs: '100%', sm: '90%', md: '45%' },
            boxSizing: 'border-box',
          }}
          >
            <MeasurementsForm/>
          </Box>
      </Box>
                {/* Checkout Button */}
      <Box
       sx={{
        width: '100%', 
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center', 
        boxSizing: 'border-box',
      }}
      >
          
          <Button
            variant="contained"
            onClick={() => navigate('/checkout')}
            sx={{
              backgroundColor: 'white',
              color: '#e57390',
              border: '1px solid #e57390',
              padding: { xs: '14px', sm: '20px' },          
              fontSize: { xs: '16px', sm: '20px' },     
              borderRadius: '50%',
              fontFamily: 'Mandali, sans-serif',
              fontWeight: 300,
              textTransform: 'none',
              boxShadow: '-6px 0px 0px #e57390',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                backgroundColor: 'white',
                color: '#e57390',
                borderColor: '#e57390',
                boxShadow: '10px 0px 0px #e57390',
              },
              mb: { xs: '30px', md: '40px' },
            }}
          >
            Go to Checkout
          </Button>
      </Box>
    </>
  );
};

export default ShoppingBagPage;
