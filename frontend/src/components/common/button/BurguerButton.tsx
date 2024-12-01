import React from 'react'
import { styled } from '@mui/system';


const CustomMenuIcon = styled('div')(({ theme }) => ({
  width: 30, 
  height: 3, 
  backgroundColor: 'white', 
  borderRadius: 8, 
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
    top: -8, 
  },
  '&::after': {
    top: 8, 
  },
}));

const BurguerButton = () => {
  return <CustomMenuIcon />;
};

export default BurguerButton