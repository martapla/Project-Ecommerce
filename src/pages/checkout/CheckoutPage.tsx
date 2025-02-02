import React, { useContext, useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { ShoppingBagContext } from "../../context/ShoppingBagContext";
import { useNavigate } from 'react-router-dom';
import whitelook from '../../assets/images/whitelook.jpeg'

export interface Product {
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


  const handleSubmit = (event: any) => {
    event.preventDefault();
    
  };

  return (
     <Box
      sx={{
        width: '100%',
        height:'auto',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, 
        justifyContent: 'center',
        gap: {xs: '30px' , sm: '64px'},
        mb: {xs: '30px' , md: '0px'},
        mt: {xs: '20px' , md: '0px'},
        padding: {xs: '10px' , sm: '40px'},
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
          padding: { xs: '10px', sm: '30px'},
          border:3, borderRadius:1, borderColor: 'white'
        }}
      >
      <Typography  
        sx={{ 
          marginBottom: 3, 
          fontFamily: 'Mandali, sans-serif', 
          fontSize:{ xs: '24px', sm: '30px'},
          }}>Checkout
      </Typography>
      
      {/* Total Price */}
      <Box sx={{ width: '96%', marginBottom: 3}}>
        <Typography fontFamily = 'Mandali, sans-serif' >Total Payment: {totalPrice} €</Typography>
      </Box>

      <Box sx={{ 
         flex: 1, display: 'flex', alignItems: 'center',
         justifyContent: 'center', flexDirection:'column', 
         width: '100%',
        }}>

      {/* Form */}
        <Box sx={{ 
          component:"form",
          width: '100%',
           display: 'flex', 
           flexDirection: 'column', 
           marginBottom: 2 }}
           onSubmit={handleSubmit}
        >

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
            border: '3px solid white',  
            boxShadow: 3,
            objectFit: 'cover',
          }}
        />
        </Box>
    </Box>
  );
};

export default CheckoutPage;
