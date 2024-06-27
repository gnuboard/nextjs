import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#f0f0f0', padding: '1rem', textAlign: 'center' }}>
      <Typography variant="body2">
        Footer specific to Menu 2 page.
      </Typography>
    </Box>
  );
};

export default Footer;