import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        bgcolor: '#eeeeee',
        p: 2,
        mt: 3, 
        bottom: 0,
        left: 0,
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} All rights reserved. Sajad Falsafi Zadeh
      </Typography>
    </Box>
  );
};

export default Footer;
