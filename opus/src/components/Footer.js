import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#f0f0f0', padding: '1rem', textAlign: 'center' }}>
      <Typography variant="body2">
        회사 주소: 123 Company St, City, Country
      </Typography>
    </Box>
  );
};

export default Footer;