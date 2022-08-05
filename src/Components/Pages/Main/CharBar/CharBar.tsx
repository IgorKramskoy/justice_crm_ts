import React, { useEffect, useState } from 'react';
import Echarts from 'echarts-for-react';

import { Box } from '@mui/material';

import { useAppSelector } from '../../../../app/hooks';

export const ChartBar = () => {
  const [dataValueBears, setDataValueBears] = useState<number[]>([]);
  const [dataBears, setDataBears] = useState<string[]>([]);

  const {beers} = useAppSelector(state => state.beer);

  const options = {
      xAxis: {
        type: 'category',
        data: dataBears
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: dataValueBears,
          type: 'bar'
        }
      ]
  };
  useEffect(() => {
    const newDataBeer = beers.slice(10, 16);
    const dataValueChart: number[] = newDataBeer.map((item) => {
      return item.ibu
    })
    const dataChart: string[]= newDataBeer.map((item) => {
      return item.name
    })
    setDataBears(dataChart)
    setDataValueBears(dataValueChart)
  }, [beers])
  return (
    <Box>
      {dataBears.length > 0 && <Echarts option={options} style={{ height: '600px'}}/>}
    </Box>
  );
}