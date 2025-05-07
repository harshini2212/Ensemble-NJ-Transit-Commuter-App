import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import StaDrlAddUp from './StaDrlAddUp';
import StaDrlAddDown from './StaDrlAddDown';

const Item = styled(Paper)(() => ({
  backgroundColor: 'transparent',
}));

export default function StaDrlAddGrid() {
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Item><StaDrlAddUp /></Item>
        <Item><StaDrlAddDown /></Item>
      </Stack>
    </div>
  );
}
