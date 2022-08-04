import React, { useEffect, useState } from 'react';
import Echarts from 'echarts-for-react';

import { Box } from '@mui/material';

import { useAppSelector } from '../../../../app/hooks';
import {ChartPieType} from "./ChartPie.types";

export const ChartPie = () => {
  const [dataBears, setDataBears] = useState<[] | ChartPieType[]>([]);

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
      left: '65%'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['0%', '70%'],
        left: 0,
        right: '40%',
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
    console.log(dataChart)
    setDataBears(dataChart)
  }, [beers])
  return (
    <Box>
      {dataBears.length > 0 && <Echarts option={options}/>}
    </Box>
  );
}