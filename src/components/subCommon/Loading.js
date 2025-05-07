import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
  return (
    <Box sx={{ display: 'flex', p: 3 }}>
      <CircularProgress />
    </Box>
  );
}
