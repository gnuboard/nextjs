import { Suspense } from 'react';
import Menu from './components/Menu';
import Loading from './components/Loading';
import { Box } from '@mui/material';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Menu />
          <Box component="main" sx={{ flexGrow: 1, marginTop: '64px' }}>
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </Box>
        </Box>
      </body>
    </html>
  );
}