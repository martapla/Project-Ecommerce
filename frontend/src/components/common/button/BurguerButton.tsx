import React from 'react'
import { styled } from '@mui/system';


const CustomMenuIcon = styled('div')(({ theme }) => ({
  width: 30, // Longitud de las líneas
  height: 3, // Grosor de las líneas
  backgroundColor: 'white', // Color de las líneas
  borderRadius: 8, // Puntas redondeadas
  position: 'relative',
  '&::before, &::after': {
    content: '""',
    width: 30,
    height: 3,
    backgroundColor: 'white',
    borderRadius: 10,
    position: 'absolute',
    left: 0,
  },
  '&::before': {
    top: -8, // Separación hacia arriba
  },
  '&::after': {
    top: 8, // Separación hacia abajo
  },
}));

const BurguerButton = () => {
  return <CustomMenuIcon />;
};

export default BurguerButton