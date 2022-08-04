import React from 'react';

import { Box } from '@mui/material';
import { ChartPie } from './ChartPie';
import { ChartBar } from './CharBar';
import { CharLine } from './CharLine';
import { Description, Title } from '../MyProduct/MyProduct.styles';
import {
  Chart,
  Charts,
  ChartsLeft,
  ChartsRight
} from './Main.styles';

export const Main = () => {
  return (
    <Box>
      <Box textAlign="left">
        <Title variant="h3">My product</Title>
        <Description variant="subtitle1">Product table</Description>
      </Box>
      <Charts>
        <ChartsLeft>
          <Chart>
            <ChartPie/>
          </Chart>
          <Chart>
            <CharLine/>
          </Chart>
        </ChartsLeft>
        <ChartsRight>
          <ChartBar/>
        </ChartsRight>
      </Charts>
    </Box>
  );
}