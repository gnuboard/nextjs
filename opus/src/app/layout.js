// import React from 'react';
// import './globals.css';
// import BodyLayout from './BodyLayout';

// const RootLayout = ({ children }) => {
//   return (
//     <html lang="ko">
//       <BodyLayout>
//         {children}
//       </BodyLayout>
//     </html>
//   );
// };

// export default RootLayout;


// "use client";

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