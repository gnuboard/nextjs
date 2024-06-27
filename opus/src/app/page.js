import React from 'react';
import { Typography } from '@mui/material';
// import RootLayout from './layout';

const Home = () => {
  return (
      <div>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to My Website
        </Typography>
        <Typography variant="body1">
          This is the content area.
        </Typography>
      </div>
    
  );
};

export default Home;
