import React from 'react';
import './globals.css';
import { AuthProvider } from '@/components/AuthorContext';

export const metadata = {
  title: 'Opus',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="ko">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;