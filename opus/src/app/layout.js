// import React from 'react';
// import './globals.css';
// import BodyLayout from './BodyLayout';

// const RootLayout = ({ children }) => {
//   return (
//     <html lang="ko">
//       <BodyLayout>
//         {children}
//       </BodyLayout>
//     </html>
//   );
// };

// export default RootLayout;


import React from 'react';
import './globals.css';
import { Container, Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Opus',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="ko">
    <body>
    <Header />
    <Container maxWidth="lg">
      <Box my={4}>
        <main>{children}</main>
      </Box>
    </Container>
    <Footer />
    </body>
    </html>
  );
};

export default RootLayout;