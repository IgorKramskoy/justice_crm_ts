import React from 'react';
import Echarts from 'echarts-for-react';

import { Box } from '@mui/material';

import {useChartBar} from "./Charbar.utils";

export const ChartBar = () => {
  const {dataBears, options} =useChartBar();

  return (
    <Box>
      {dataBears.length > 0 && <Echarts option={options} style={{ height: '600px'}}/>}
    </Box>
  );
}