"use client";

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import Link from 'next/link';

const Header = ({ backgroundColor = '#1976d2' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { text: 'About', href: '/about' },
    { text: 'Products', href: '/products' },
    { text: 'Shop', href: '/shop' },
    { text: 'FAQ', href: '/faq' },
    { text: 'Contact', href: '/contact' },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" passHref legacyBehavior>
            <Typography variant="h6" component="a" sx={{ color: 'white', textDecoration: 'none' }}>
              Logo
            </Typography>
          </Link>
        </Typography>
        <List sx={{ display: { xs: 'none', sm: 'flex' } }}>
          {menuItems.map((item) => (
            <ListItem key={item.text} button component={Link} href={item.href}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        {isLoggedIn ? (
          <Tooltip title="프로필">
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="로그인">
            <IconButton color="inherit" component={Link} href="/login">
              <LoginIcon />
            </IconButton>
          </Tooltip>
        )}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
          sx={{ display: { xs: 'block', sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer}>
        <List sx={{ width: 250 }} onClick={toggleDrawer}>
          {menuItems.map((item) => (
            <ListItem key={item.text} button component={Link} href={item.href}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
          {!isLoggedIn && (
            <ListItem button component={Link} href="/login">
              <ListItemText primary="Login" />
            </ListItem>
          )}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;