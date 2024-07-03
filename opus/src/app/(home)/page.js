// src/app/(home)/page.js
import React from 'react';
import { Typography } from '@mui/material';
import Latest from '@/components/Latest';
import Board from '@/components/Board';

const Home = () => {
  return (
    <div>
      {/* <Typography variant="h4" component="h1" gutterBottom>
        src/app/(home)/page.js
      </Typography> */}
      <h5>
        src/app/(home)/page.js
      </h5>
      <Latest bo_table="free" view_type="write" rows={5} />
    </div>
  );
};

export default Home;
