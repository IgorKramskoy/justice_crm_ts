import {useEffect, useState} from "react";
import {ChartPieType} from "./ChartPie.types";
import {useAppSelector} from "../../../../app/hooks";

export const useChartPie = () => {
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
        setDataBears(dataChart)
    }, [beers])

    return {
        dataBears,
        options,
    }
}