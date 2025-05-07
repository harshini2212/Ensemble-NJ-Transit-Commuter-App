import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import StaBlgAddUp from './StaBlgAddUp';
import StaBlgAddDown from './StaBlgAddDown';

const Item = styled(Paper)(() => ({
  backgroundColor: 'transparent',
}));

export default function StaBlgAddGrid() {
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Item><StaBlgAddUp /></Item>
        <Item><StaBlgAddDown /></Item>
      </Stack>
    </div>
  );
}
