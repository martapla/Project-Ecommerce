import React, { useContext, useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { ShoppingBagContext } from "../../context/ShoppingBagContext";
import { useNavigate } from 'react-router-dom';
import whitelook from '../../assets/images/whitelook.jpeg'

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}
interface ShoppingBagContextType {
  selectedProducts: Product[];
 
}

const CheckoutPage = () => {
  // const { selectedProducts } = useContext(ShoppingBagContext);
  const { selectedProducts } = useContext<ShoppingBagContextType>(ShoppingBagContext);

  const navigate = useNavigate();

  // Form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const totalPrice = selectedProducts.reduce((sum, product) => sum + product.price, 0);

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
     <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, 
        justifyContent: 'center',
        gap: 8, 
        padding: {xs: '10px' , sm: '20px'},
        mt: {xs: '40px', sm: '60px'},
        mb: 4,
        border: '1px solid red'
      }}
    >

    {/* Form  */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 4,
          border: '1px solid green'
        }}
      >
      
      {/* Total Price */}
      <Box sx={{ width: '100%', marginBottom: 2 }}>
        <Typography variant="h6" fontFamily = 'Mandali, sans-serif' >Total Payment: {totalPrice} €</Typography>
      </Box>

      {/* Measurements */}
      <Box sx={{ width: '100%', marginBottom: 2 }}>
        <Typography variant="h6" fontFamily = 'Mandali, sans-serif'>Measurements:</Typography>
        <Typography></Typography> 
      </Box>

      <Typography variant="h4" sx={{ marginBottom: 2, fontFamily: 'Mandali, sans-serif',  }}>Checkout</Typography>

      <Box sx={{ 
         flex: 1, display: 'flex', 
         justifyContent: 'center', flexDirection:'column', 
         width: '100%',
         border: '1px solid pink'
        }}>
      {/* Form */}
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Box sx={{ 
           width: { xs: '100%', sm: '70%', md: '90%' },
           display: 'flex', 
           flexDirection: 'column', 
           marginBottom: 2 }}>
          <TextField 
            label="Full Name" 
            variant="outlined" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            sx={{ marginBottom: 2 }}
          />
          <TextField 
            label="Email" 
            variant="outlined" 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            sx={{ marginBottom: 2 }}
          />
          <TextField 
            label="Home Address" 
            variant="outlined" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            required 
            sx={{ marginBottom: 2 }}
          />
          <TextField 
            label="Telephone Number" 
            variant="outlined" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            required 
            sx={{ marginBottom: 2 }}
          />
        </Box>

        
        <Button
          type="submit"
          variant="contained"
          onClick={() => alert('Check your email to confirm.')}
          sx={{

            backgroundColor: '#e57390',
            color: 'white',
            ':hover': {
              backgroundColor: '#e6b8c8',
              color: 'white',
            },
          }}
        >
          Make Payment
        </Button>
      </form>
      </Box>
      </Box>
          {/* Image */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        
          <Box
          component="img"
          src={whitelook}
          alt="redimage"
          sx={{
            width: '100%', 
            borderRadius: 2, 
            border: '6px solid white',  
            boxShadow: 3,
            objectFit: 'cover',
          }}
        />
        </Box>
    </Box>
  );
};

export default CheckoutPage;
