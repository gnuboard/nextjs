// src/components/Header.js
"use client";

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Tooltip, Switch } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from 'next/link';
import { useAuth } from '@/components/AuthorContext'; 
import { useTheme } from '@/components/ThemeContext'; // ThemeContext에서 테마 관련 훅 import

const Header = ({ backgroundColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { accessToken, username, logout } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme(); // 테마 상태와 토글 함수 가져오기

  const toggleSideMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    // TODO: 로그아웃 후 추가 작업 (예: 홈페이지로 리다이렉트)
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

        {accessToken ? (
          <>
            <Tooltip title="로그아웃">
              <IconButton color="inherit" onClick={handleLogout}>
                <LogoutIcon />
              </IconButton>
            </Tooltip>
          </>
        ) : (
          <Tooltip title="로그인">
            <IconButton color="inherit" component={Link} href="/login">
              <PersonIcon />
            </IconButton>
          </Tooltip>
        )}

        <Switch checked={isDarkMode} onChange={toggleTheme} />

        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleSideMenu}
          sx={{ display: { xs: 'block', sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer anchor="right" open={isOpen} onClose={toggleSideMenu}>
        <List sx={{ width: 250 }} onClick={toggleSideMenu}>
          {menuItems.map((item) => (
            <ListItem key={item.text} button component={Link} href={item.href}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
          {!accessToken && (
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
