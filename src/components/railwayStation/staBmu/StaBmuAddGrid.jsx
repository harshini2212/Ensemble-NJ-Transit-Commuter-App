import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import StaBmuAddUp from './StaBmuAddUp';
import StaBmuAddDown from './StaBmuAddDown';

const Item = styled(Paper)(() => ({
  backgroundColor: 'transparent',
}));

export default function StaBmuAddGrid() {
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Item><StaBmuAddUp /></Item>
        <Item><StaBmuAddDown /></Item>
      </Stack>
    </div>
  );
}
