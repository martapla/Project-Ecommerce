import React, { useContext, useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { ShoppingBagContext } from "../../context/ShoppingBagContext";
import { useNavigate } from 'react-router-dom';
import birds from '../../assets/images/birds.png'

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
        width:  {xs: '80%', md: '70%'},
        height:'auto',
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center',
        gap: {xs: '30px', md: '60px'},
        mx:'auto',
        mt: {xs: '40px' , md: '80px'},
        mb: {xs: '30px' , md: '60px'},
        padding: {xs: '10px', md: '40px'},
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
          padding: { xs: '20px', sm: '30px'},
          border:2, borderRadius:1, borderColor: 'white'
        }}
      >
      <Typography  
        sx={{ 
          marginBottom: 3, 
          fontFamily: "Gantari, serif",
          fontSize: { xs: '30px', sm: '36px' },
          fontWeight: 300,
          color: '#a67e77',
          }}>Checkout
      </Typography>
      
      {/* Total Price */}
      <Box sx={{ width: '96%', marginBottom: 3}}>
        <Typography 
         fontFamily = 'Mandali, sans-serif'
         color= '#a67e77'
         >Total Payment: {totalPrice} €</Typography>
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
          src={birds}
          alt="birds"
          sx={{
            width: '100%', 
            borderRadius: 1, 
            border: { xs: '2px solid white', sm: '3px solid white' },
            boxShadow: '10px 10px 10px rgba(255, 182, 193, 0.4)',
            objectFit: 'cover',
          }}
        />
        </Box>
    </Box>
  );
};

export default CheckoutPage;
