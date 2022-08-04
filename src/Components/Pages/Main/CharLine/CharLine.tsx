import React, { useEffect, useState } from 'react';
import Echarts from 'echarts-for-react';

import { Box } from '@mui/material';

import { useAppSelector } from '../../../../app/hooks';

export const CharLine = () => {
  const [dataBears, setDataBears] = useState<number[]>([]);

  const {beers} = useAppSelector(state => state.beer);

  const options = {
    title: {
      text: 'Index IBU',
      left: 'center',
      top: '20px'
    },
    xAxis: {
      show: false,
      type: 'category',
      data: dataBears,
    },
    yAxis: {
      type: 'value',
      show: false
    },
    axisPointer: {
      show: false,
      type: 'none',
    },
    series: [
      {
        data: dataBears,
        type: 'line',
        color: '#1CAF7F'
      }
    ]
  };
  useEffect(() => {
    const newDataBeer = beers.slice(10, 16);
    const dataChart = newDataBeer.map((item) => {
      return item.ibu
    })
    setDataBears(dataChart)
  }, [beers])
  return (
    <Box>
      {dataBears.length > 0 && <Echarts option={options}/>}
    </Box>
  );
}