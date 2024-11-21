import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const MeasurementsForm = () => {
  
  const [measurements, setMeasurements] = useState({
    chest: '',
    waist: '',
    hips: '',
  });

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMeasurements({ ...measurements, [name]: value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 400,
        margin: 'auto',
        gap: 2,
        padding: 3,
        backgroundColor: '#f9f9f9',
        borderRadius: 2,
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h6" sx={{  fontFamily: 'Mandali, sans-serif', textAlign: 'center', mb: 2 }}>
         Your Measurements
      </Typography>
      
      <TextField
        label="Chest (cm)"
        variant="outlined"
        name="chest"
        value={measurements.chest}
        onChange={handleInputChange}
        fullWidth
      />
      
      <TextField
        label="Waist (cm)"
        variant="outlined"
        name="waist"
        value={measurements.waist}
        onChange={handleInputChange}
        fullWidth
      />
      
      <TextField
        label="Hips (cm)"
        variant="outlined"
        name="hips"
        value={measurements.hips}
        onChange={handleInputChange}
        fullWidth
      />
      
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: '#e57390',
          color: 'white',
          ':hover': {
            backgroundColor: '#e6b8c8',
            color: 'white',
          },
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default MeasurementsForm;
