import React from 'react';
import Echarts from 'echarts-for-react';

import {Box} from '@mui/material';

import {useCharlineUtils} from "./Charline.utils";

export const CharLine = () => {
    const {dataBears, options} = useCharlineUtils();
    return (
        <Box>
            {dataBears.length > 0 && <Echarts option={options}/>}
        </Box>
    );
}