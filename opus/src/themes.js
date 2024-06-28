// src/themes.js
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#ffffff', // light 모드의 기본 배경색
      paper: '#f0f0f0', // light 모드의 paper 배경색
    },
    text: {
      primary: '#000000', // 기본 텍스트 색상
      secondary: '#555555', // 보조 텍스트 색상
    },
  },
  typography: {
    h4: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#1976d2', // light 모드의 h4 색상
    },
    body1: {
      fontSize: '1rem',
      color: '#000000', // light 모드의 body1 색상
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#121212', // dark 모드의 기본 배경색
      paper: '#424242', // dark 모드의 paper 배경색
    },
    text: {
      primary: '#ffffff', // 기본 텍스트 색상
      secondary: '#aaaaaa', // 보조 텍스트 색상
    },
  },
  typography: {
    h4: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#90caf9', // dark 모드의 h4 색상
    },
    body1: {
      fontSize: '1rem',
      color: '#ffffff', // dark 모드의 body1 색상
    },
  },
});
