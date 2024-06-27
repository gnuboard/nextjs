"use client";

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" passHref legacyBehavior>
            <Typography variant="h6" component="a" sx={{ color: 'white', textDecoration: 'none' }}>
              Logo
            </Typography>
          </Link>
        </Typography>
        <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer} sx={{ display: { xs: 'block', sm: 'none' } }}>
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={isOpen} onClose={toggleDrawer} sx={{ display: { xs: 'block', sm: 'none' } }}>
          <List>
            <ListItem button component={Link} href="/menu1">
              <ListItemText primary="Menu 1" />
            </ListItem>
            <ListItem button component={Link} href="/menu2">
              <ListItemText primary="Menu 2" />
            </ListItem>
            <ListItem button component={Link} href="/menu3">
              <ListItemText primary="Menu 3" />
            </ListItem>
            <ListItem button component={Link} href="/menu4">
              <ListItemText primary="Menu 4" />
            </ListItem>
            <ListItem button component={Link} href="/menu5">
              <ListItemText primary="Menu 5" />
            </ListItem>
          </List>
        </Drawer>
        <List sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <ListItem button component={Link} href="/menu1">
            <ListItemText primary="Menu 1" />
          </ListItem>
          <ListItem button component={Link} href="/menu2">
            <ListItemText primary="Menu 2" />
          </ListItem>
          <ListItem button component={Link} href="/menu3">
            <ListItemText primary="Menu 3" />
          </ListItem>
          <ListItem button component={Link} href="/menu4">
            <ListItemText primary="Menu 4" />
          </ListItem>
          <ListItem button component={Link} href="/menu5">
            <ListItemText primary="Menu 5" />
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default Header;