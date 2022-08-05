import {useEffect, useState} from "react";

import {useAppSelector} from "../../../../app/hooks";

export const CharlineUtils = () => {
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

    return {
        dataBears,
        options
    }
}