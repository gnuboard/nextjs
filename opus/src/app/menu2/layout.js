// src/app/menu2/layout.js
import React from 'react';

export const metadata = {
  title: 'Menu 2',
};

export default function Menu2Layout({ children }) {
  return (
    <html>
      <body>
        <div>
          <h2>Menu 2 Layout</h2>
          {children}
        </div>
      </body>
    </html>
  );
}