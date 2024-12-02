import React, {useContext} from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import MeasurementsForm from './MeasurementsForm'
import { ShoppingBagContext } from "../../context/ShoppingBagContext";
import DeleteIcon from '@mui/icons-material/Delete';

const ShoppingBagPage = () => {
  const { selectedProducts, removeProduct } = useContext(ShoppingBagContext);
  // const location = useLocation();  
  // const { selectedProducts } = location.state || { selectedProducts: [] };  

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
          margin: '40px auto',
          width: '100%',
        }}
      >

        {/* Products */}
        <Box 
        sx={{
          width: { xs: '100%', sm: '70%', md: '45%' },
          boxSizing: 'border-box',
          border:3, borderRadius:1, borderColor: 'white'
        }}
        >

          {selectedProducts.length === 0 ? (
            <Typography sx={{ margin: 2, textAlign:'center'}}>Your shopping bag is empty.</Typography>
          ) : (
            <Box sx={{ padding:2 }}>
              {selectedProducts.map((product, index) => (

                <Box key={index} sx={{ display: 'flex', alignItems: 'center', borderBottom: 2, borderColor:'white',paddingTop:1,paddingBottom:1 }}>
                  <img src={product.image} alt={product.name} style={{ width: 80, height: 80, marginRight: 10 }} />
                  <Typography sx={{ flex: 1, fontFamily: 'Kodchasan, sans-serif',  fontWeight: 500}}>
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
               
               <Typography sx={{ marginTop: 2, textAlign: 'right', fontFamily: 'Kodchasan, sans-serif',  fontWeight: 600 }}>
                Total: {totalPrice} €
              </Typography>

            </Box>
          )}
        </Box>

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
    </>
  );
};

export default ShoppingBagPage;
