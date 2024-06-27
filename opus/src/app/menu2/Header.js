import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/menu2" passHref legacyBehavior>
            <Typography variant="h6" component="a" sx={{ color: 'white', textDecoration: 'none' }}>
              Menu 2
            </Typography>
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;