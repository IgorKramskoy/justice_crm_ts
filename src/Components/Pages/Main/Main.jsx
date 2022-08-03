import React from 'react';

import { Box } from '@mui/material';
import { ChartPie } from './ChartPie';
import { ChartBar } from './CharBar';
import { Description, Title } from '../MyProduct/MyProduct.styles';

export const Main = () => {

  return (
    <Box >
      <Box textAlign='left'>
        <Title variant="h3" >My product</Title>
        <Description variant="subtitle1">Product table</Description>
      </Box>
      <Box sx={{display: 'flex', backgroundColor: 'none', gap: '20px', justifyContent: 'center', width:'100%'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px', width:'30%'}}>
          <Box sx={{backgroundColor: '#FFFFFF'}}>
            <ChartPie/>
          </Box>
          <Box sx={{backgroundColor: '#FFFFFF'}}>
            <ChartPie/>
          </Box>
        </Box>
        <Box sx={{backgroundColor: '#FFFFFF', width:'70%'}}>
          <ChartBar/>
        </Box>
      </Box>
    </Box>

  );
}