import React from 'react';
// import './globals.css';
import { Container, Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';


const BodyLayout = ({ children }) => {
  return (
    <body>
      <Header />
      <Container maxWidth="lg">
        <Box my={4}>
          <main>{children}</main>
        </Box>
      </Container>
      <Footer />
    </body>
  );
};

export default BodyLayout;