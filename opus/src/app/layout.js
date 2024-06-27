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


import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Opus',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="ko">
    <body>
      {children}
    </body>
    </html>
  );
};

export default RootLayout;