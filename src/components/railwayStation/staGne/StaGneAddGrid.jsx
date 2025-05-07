import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import StaGneAddUp from './StaGneAddUp';
import StaGneAddDown from './StaGneAddDown';

const Item = styled(Paper)(() => ({
  backgroundColor: 'transparent',
}));

export default function StaGneAddGrid() {
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Item><StaGneAddUp /></Item>
        <Item><StaGneAddDown /></Item>
      </Stack>
    </div>
  );
}
