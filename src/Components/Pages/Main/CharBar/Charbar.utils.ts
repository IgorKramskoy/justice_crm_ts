import {useEffect, useState} from "react";

import {useAppSelector} from "../../../../app/hooks";

export const useChartBar = () => {
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

    return {
        dataBears,
        options,
    }
}