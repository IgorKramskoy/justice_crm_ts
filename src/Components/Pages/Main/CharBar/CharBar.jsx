import React, { useEffect, useState } from 'react';
import Echarts from 'echarts-for-react';

import { Box } from '@mui/material';

import { useAppSelector } from '../../../../app/hooks';

export const ChartBar = () => {
  const [dataValueBears, setDataValueBears] = useState([]);
  const [dataBears, setDataBears] = useState([]);

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
    const dataValueChart = newDataBeer.map((item) => {
      return item.ibu
    })
    const dataChart = newDataBeer.map((item) => {
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