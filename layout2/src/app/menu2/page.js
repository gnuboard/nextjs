import React from 'react';
import Menu2Layout from './Menu2Layout';

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page content.</p>
    </div>
  );
};

AboutPage.getLayout = function getLayout(page) {
  return <Menu2Layout>{page}</Menu2Layout>;
};

export default AboutPage;
