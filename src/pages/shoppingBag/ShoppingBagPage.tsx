import React, {useContext} from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import MeasurementsForm from './MeasurementsForm'
import { ShoppingBagContext } from "../../context/ShoppingBagContext";
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { Product } from '../checkout/CheckoutPage';


const ShoppingBagPage = () => {
  const { selectedProducts, removeProduct } = useContext(ShoppingBagContext);
  const navigate = useNavigate();

  const handleRemoveProduct = (product: Product) => {
    removeProduct(product);
  }; 

  const totalPrice = selectedProducts.reduce((sum: number, product:Product) => sum + product.price, 0);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, 
          justifyContent: 'center', 
          alignItems: 'center', 
          py: { xs: 1, sm: 1 },
          mt: { xs: '30px', md: '60px' }, 
          width: { xs: '100%', sm: '100%', md: '100%' },
          margin:' 0px auto',
        }}
      >
                    {/* Products */}
          <Box 
          sx={{
            width: { xs: '80%', sm: '60%', md: '40%' },
            boxSizing: 'border-box',
            border:2, borderRadius:1, borderColor: 'white',
            ml:{ md: '80px' }, 
            mb: '30px'
          }}
          >

            {selectedProducts.length === 0 ? (
              <Typography sx={{
                 margin: 2, 
                 textAlign:'center',
                 fontFamily: 'Gantari, serif',
                 color: '#a67e77',
                 fontSize:{ xs: '18px', sm: '18px' }, 
                
                }}>Your Wishlist is empty...</Typography>
            ) : (
              <Box sx={{ 
                  padding: { xs: '10px', sm:'20px' }
                }}>
                {selectedProducts.map((product: Product, index: number) => (

                  <Box key={index} 
                    sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        borderBottom: 2, 
                        borderColor:'white',
                        paddingTop:1,
                        paddingBottom:1 
                      }}>
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
            
            width: { xs: '85%', sm: '90%', md: '45%' },
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
              padding: { xs: '14px', sm: '16px' },          
              fontSize: { xs: '18px', sm: '20px' },     
              borderRadius: '50%',
              fontFamily: 'Mandali, sans-serif',
              fontWeight: 300,
              textTransform: 'none',
              boxShadow: '-8px 0px 0px #e57390',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                backgroundColor: 'white',
                color: '#e57390',
                borderColor: '#e57390',
                boxShadow: '8px 0px 0px #e57390',
              },
              mb: { xs: '30px', md: '40px' },
            }}
          >
            Checkout
          </Button>
      </Box>
    </>
  );
};

export default ShoppingBagPage;
