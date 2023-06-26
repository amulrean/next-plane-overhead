import React from 'react'
import { NextPage } from 'next';
import Kpi from './kpi';
import { ChevronDoubleUpIcon, BoltIcon, CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/solid';

interface Props {
    data?: OSFormattedStates;
}

const KpiHeader: NextPage<Props> = ({ data }) => {

    const numPlanes = data?.states.length;

    const fastestVelocity = data?.states.sort((sA, sB) => {
        return sB.velocity - sA.velocity
    }).slice(0)[0].velocity;

    const hightestAltitude = data?.states.sort((sA, sB) => {
        return sB.geoAltitude - sA.geoAltitude
    }).slice(0)[0].geoAltitude;

    const updatedDate = data?.time;


    return (
        <div className='flex items-center justify-evenly'>
            <Kpi label='Planes' value={numPlanes + ''} Icon={MapPinIcon}></Kpi>
            <Kpi label='Fastest' value={fastestVelocity + ''} Icon={BoltIcon}></Kpi>
            <Kpi label='Highest' value={hightestAltitude + ''} Icon={ChevronDoubleUpIcon}></Kpi>
            <Kpi label='Last Updated' value={updatedDate + ''} Icon={CalendarDaysIcon}></Kpi>
        </div>
    )

}

export default React.memo(KpiHeader)