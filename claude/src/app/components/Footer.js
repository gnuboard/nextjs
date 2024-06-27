import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} My Website. All rights reserved.
      </Typography>
    </Box>
  );
}