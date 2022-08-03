import React, { useEffect, useState } from 'react';
import Echarts from 'echarts-for-react';

import { Box } from '@mui/material';

import { useAppSelector } from '../../../../app/hooks';

export const ChartPie = () => {
  const [dataBears, setDataBears] = useState([]);

  const {beers} = useAppSelector(state => state.beer);

  const options = {
    title: {
      text: 'Index IBU',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '25%',
      orient: 'vertical',
      left: 'right'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['0%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '20',
          }
        },
        labelLine: {
          show: false
        },
        data: dataBears
      }
    ]
  };
  useEffect(() => {
    const newDataBeer = beers.slice(10, 16);
    const dataChart = newDataBeer.map((item) => {
      return {value: item.ibu, name: item.name}
    })
    console.log(dataChart);
    setDataBears(dataChart)
  }, [beers])
  return (
    <Box>
      {dataBears.length > 0 && <Echarts option={options} style={{width: '450px',}}/>}
    </Box>
  );
}