import React from 'react'
import { NextPage } from 'next';
import SideBarHeader from './side-bar-header';

interface Props {
    data?: OpenSkyObj;
}

const SideBar: NextPage<Props> = ({ data }) => {


    const listItems = data?.states.map(state => {
        return (
        <li key={state.icao24}>
        {state.icao24} {state.callSign} {state.originCountry}   
        <br/>
        Altitude {state.geoAltitude} - Velocity {state.velocity}
        </li>);
    }
        
    );

    return <>
    <SideBarHeader data={data}></SideBarHeader>
    <ul>{listItems}</ul>
    </> 
    
}

export default React.memo(SideBar)