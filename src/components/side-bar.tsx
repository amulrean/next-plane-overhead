'use client';
import React from 'react'
import { NextPage } from 'next';
import SideBarHeader from './side-bar-header';
import { usePlanes } from '@/lib/use-planes';

interface Props {
    data?: OSFormattedStates;
}

const SideBar: NextPage<Props> = ({ data }) => {

    const { planes, isLoading, isError } = usePlanes();


    const listItems = planes?.states.map((state: OpenSkyState) => {
        return (
            <li key={state.icao24}>
                {state.icao24} {state.callSign} {state.originCountry}
                <br />
                Altitude {state.geoAltitude} - Velocity {state.velocity}
            </li>);
    }

    );

    return <div className='w-96 h-96 overflow-y-auto'>
        <SideBarHeader data={planes}></SideBarHeader>
        <ul>{listItems}</ul>
    </div>

}

export default React.memo(SideBar)