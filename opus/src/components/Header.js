"use client";

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from 'next/link';
import { useAuth } from '@/components/AuthorContext'; // AuthContext에서 인증 관련 훅 import


// Header 컴포넌트 정의, backgroundColor prop으로 배경색 설정 가능
const Header = ({ backgroundColor = '#1976d2' }) => {
  // 사이드 메뉴 열림/닫힘 상태 관리
  const [isOpen, setIsOpen] = useState(false);
  
  // useAuth 훅을 사용하여 인증 상태, 사용자 이름, 로그아웃 함수 가져오기
  const { accessToken, username, logout } = useAuth();

  // 사이드 메뉴 토글 함수
  const toggleSideMenu = () => {
    setIsOpen(!isOpen);
  };

  // 로그아웃 처리 함수
  const handleLogout = () => {
    logout();
    // TODO: 로그아웃 후 추가 작업 (예: 홈페이지로 리다이렉트)
  };

  // 네비게이션 메뉴 아이템 정의
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
        {/* 로고 */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" passHref legacyBehavior>
            <Typography variant="h6" component="a" sx={{ color: 'white', textDecoration: 'none' }}>
              Logo
            </Typography>
          </Link>
        </Typography>

        {/* 데스크톱 뷰의 네비게이션 메뉴 */}
        <List sx={{ display: { xs: 'none', sm: 'flex' } }}>
          {menuItems.map((item) => (
            <ListItem key={item.text} button component={Link} href={item.href}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>

        {/* 로그인 상태에 따른 아이콘 표시 */}
        {accessToken ? (
          // 로그인 상태: 사용자 이름과 로그아웃 아이콘
          <>
            <Typography variant="subtitle1" sx={{ mr: 1 }}>
              {username}
            </Typography>
            <Tooltip title="로그아웃">
              <IconButton color="inherit" onClick={handleLogout}>
                <LogoutIcon />
              </IconButton>
            </Tooltip>
          </>
        ) : (
          // 로그아웃 상태: 로그인 아이콘
          <Tooltip title="로그인">
            <IconButton color="inherit" component={Link} href="/login">
              <PersonIcon />
            </IconButton>
          </Tooltip>
        )}

        {/* 모바일 뷰의 메뉴 아이콘 */}
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

      {/* 모바일 뷰의 사이드 메뉴 */}
      <Drawer anchor="right" open={isOpen} onClose={toggleSideMenu}>
        <List sx={{ width: 250 }} onClick={toggleSideMenu}>
          {/* 네비게이션 메뉴 아이템 */}
          {menuItems.map((item) => (
            <ListItem key={item.text} button component={Link} href={item.href}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
          {/* 로그아웃 상태일 때만 로그인 메뉴 표시 */}
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