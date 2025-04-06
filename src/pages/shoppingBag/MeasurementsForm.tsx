import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const MeasurementsForm = () => {
  
  const [measurements, setMeasurements] = useState({
    chest: '',
    waist: '',
    hips: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMeasurements({ ...measurements, [name]: value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!measurements.chest || !measurements.waist || !measurements.hips) {
      // Si falta un campo, no se envía el formulario
      return;
    }
    setSubmitted(true);
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width:'70%',
        margin: '0px auto',
        gap: 2,
        padding: 3,
        backgroundColor: '#fff3f3',
        borderRadius: 2,
        boxShadow: '6px 10px 10px rgba(255, 182, 193, 0.4)',
      }}
      onSubmit={handleSubmit}
    >
      <Typography  sx={{  
        fontFamily: 'Mandali, sans-serif', 
        textAlign: 'center', 
        fontSize: '18px', 
        color: '#a67e77',
        }}>
         Your Measurements
      </Typography>
      
      <TextField
        placeholder="Chest (cm)"
        value={measurements.chest}
        onChange={handleInputChange}
        required
        fullWidth
        sx={{
          color: '#a67e77',
          "& .MuiOutlinedInput-root": {

            "&:hover fieldset": {
              border: "1px solid #a67e77",
            },
            "&.Mui-focused fieldset": {
              border: "2px solid white",
            },
          },
        }}
      />
      
      <TextField
        placeholder="Waist (cm)"
        value={measurements.waist}
        onChange={handleInputChange}
        required
        fullWidth
        sx={{
          color: '#a67e77',
          "& .MuiOutlinedInput-root": {

            "&:hover fieldset": {
              border: "1px solid #a67e77",
            },
            "&.Mui-focused fieldset": {
              border: "2px solid white",
            },
          },
        }}
      />
      
      <TextField
        placeholder="Hips (cm)"
        value={measurements.hips}
        onChange={handleInputChange}
        required
        fullWidth
        sx={{
          color: '#a67e77',
          "& .MuiOutlinedInput-root": {

            "&:hover fieldset": {
              border: "1px solid #a67e77",
            },
            "&.Mui-focused fieldset": {
              border: "2px solid white",
            },
          },
        }}
      />
      
      <Button
        sx={{
          width:'50%',
          margin:'0 auto',
          backgroundColor: '#e57390',
          color: 'white',
          boxShadow: '4px 4px 1px rgba(245, 153, 153, 0.5)',
          padding: '6px',
          fontFamily: 'Mandali, sans-serif',
          fontSize: 18,
          textTransform: 'none',
          ':hover': {
            backgroundColor: 'white',
            color: '#e57390',
            border:'1px solid #e57390'
          },
        }}
      >
        {submitted ? 'Submitted' : 'Submit'}
      </Button>
    </Box>
  );
};

export default MeasurementsForm;
