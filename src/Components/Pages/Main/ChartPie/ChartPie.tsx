import React from 'react';

import Echarts from 'echarts-for-react';
import { Box } from '@mui/material';

import {useChartPie} from "./ChartPie.utils";

export const ChartPie = () => {
  const { dataBears, options } = useChartPie();

  return (
    <Box>
      {dataBears.length > 0 && <Echarts option={options}/>}
    </Box>
  );
}