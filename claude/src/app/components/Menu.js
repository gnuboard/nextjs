"use client";

import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  appBar: {
    borderRadius: '0 !important',
  },
  toolbar: {
    minHeight: '64px',
    height: '64px',
    backgroundColor: '#2f9d27',
    borderRadius: '0 !important',
  },
});

const menuItems = [
  { text: 'About', href: '/about' },
  { text: 'Services', href: '/services' },
  { text: 'Products', href: '/products' },
  { text: 'Blog', href: '/blog' },
  { text: 'Contact', href: '/contact' },
];

export default function Menu() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useMediaQuery('(max-width:640px)');
  const classes = useStyles();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const menuList = (
    <List>
      {menuItems.map((item) => (
        <ListItem button key={item.text} component={Link} href={item.href} onClick={() => setIsDrawerOpen(false)}>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Box component={Link} href="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
          <Image 
            src="/logo.svg" 
            alt="My Website Logo" 
            height={40} 
            width={0}
            style={{
              width: 'auto',
              height: '40px'
            }}
          />
        </Box>
        {isMounted && (
          <>
            {isMobile ? (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setIsDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box>
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    color="inherit"
                    component={Link}
                    href={item.href}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>
            )}
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
            >
              {menuList}
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}