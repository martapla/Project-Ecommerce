// BodyMeasurementsForm.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const MeasurementsForm = () => {
  // Estado para almacenar las medidas del formulario
  const [measurements, setMeasurements] = useState({
    chest: '',
    waist: '',
    hips: '',
  });

  // Maneja cambios en los campos de entrada
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMeasurements({ ...measurements, [name]: value });
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Measurements:", measurements);
    // Aquí puedes añadir la lógica para enviar los datos a un servidor o realizar otra acción
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
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>
        Measurements
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
          backgroundColor: '#f9d7e4',
          color: 'white',
          ':hover': {
            backgroundColor: '#e6b8c8',
            color: 'white',
          },
        }}
      >
        Register
      </Button>
    </Box>
  );
};

export default MeasurementsForm;
