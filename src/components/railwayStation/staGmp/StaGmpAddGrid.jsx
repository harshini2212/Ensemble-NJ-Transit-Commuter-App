import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import StaGmpAddUp from './StaGmpAddUp';
import StaGmpAddDown from './StaGmpAddDown';

const Item = styled(Paper)(() => ({
  backgroundColor: 'transparent',
}));

export default function StaGmpAddGrid() {
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Item><StaGmpAddUp /></Item>
        <Item><StaGmpAddDown /></Item>
      </Stack>
    </div>
  );
}
