import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import StaCmbAddMain from './StaCmbAddMain';
import StaCmbAddCoastal from './StaCmbAddCoastal';
import StaCmbAddKV from './StaCmbAddKV';
import StaCmbAddPuttalam from './StaCmbAddPuttalam';

const Item = styled(Paper)(() => ({
  backgroundColor: 'transparent',
}));

export default function StaCmbAddGrid() {
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Item><StaCmbAddMain /></Item>
        <Item><StaCmbAddCoastal /></Item>
        <Item><StaCmbAddKV /></Item>
        <Item><StaCmbAddPuttalam /></Item>
      </Stack>
    </div>
  );
}
