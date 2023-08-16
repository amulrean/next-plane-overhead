import React from 'react'
import { NextPage } from 'next';
import Kpi from './kpi';
import { ChevronDoubleUpIcon, BoltIcon, CalendarDaysIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/solid';

interface Props {
    data?: OSFormattedStates;
}

const KpiHeader: NextPage<Props> = ({ data }) => {

    return (
        <div className='flex items-center justify-evenly'>
            <Kpi label='Planes' value={data?.numPlanes + ''} icon={MapPinIcon}></Kpi>
            <Kpi label='Fastest' value={data?.fastestVelocity + ' mph'} icon={BoltIcon}></Kpi>
            <Kpi label='Highest' value={data?.hightestAltitude + ' ft'} icon={ChevronDoubleUpIcon}></Kpi>
            <Kpi label='Date Updated' value={data?.date + ''} icon={CalendarDaysIcon}></Kpi>
            <Kpi label='Time Updated' value={data?.time + ''} icon={ClockIcon}></Kpi>
        </div>
    )

}

export default React.memo(KpiHeader)