import './Statistic.scss'
import {IconButton} from "../IconButton/IconButton";
import { CircleStatistic } from "../CircleStatistic/CircleStatistic";
import {useEffect, useState} from "react";

export const Statistic = () => {

    const [percentLeft, setPercentLeft] = useState(0);
    const [percentRight, setPercentRight] = useState(0);

    useEffect(() => {
        const getPercent = (currentPercent) => (currentPercent >= 100 ? 0 : currentPercent + 10);

        const leftInterval = setInterval(() => {
            setPercentLeft((prev) => getPercent(prev));
        }, 500);

        const rightInterval = setInterval(() => {
            setPercentRight((prev) => getPercent(prev));
        }, 200);

        return () => {
            clearInterval(leftInterval);
            clearInterval(rightInterval);
        };
    }, []);

    const onShare = () => {
        alert('On Share!');
    }

    return (
        <div className='Statistic'>
            <div className='Statistic-label'>Your Money</div>
            <div className='Statistic-2col'>
                <div className='Statistic-balance'>$3094</div>
                <IconButton icon='share' onClick={onShare} />
            </div>

            <div className='Statistic-label'>Money Spent</div>

            <div className='Statistic-2col'>
                <CircleStatistic
                    label='last month'
                    percent={percentLeft}
                >
                    $555
                </CircleStatistic>
                <CircleStatistic
                    label='this month'
                    percent={percentRight}
                >
                    $865
                </CircleStatistic>
            </div>
        </div>
    )
}