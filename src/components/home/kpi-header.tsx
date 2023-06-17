import React from 'react'
import { NextPage } from 'next';
import styles from './home.module.css'
import Kpi from './kpi';

interface Props {
    data?: OSFormattedStates;
}

const KpiHeader: NextPage<Props> = ({ data }) => {

    const numPlanes = data?.states.length;

    const fastestVelocity = data?.states.sort( (sA, sB) => {
        return sB.velocity - sA.velocity
    }).slice(0)[0].velocity;

    const hightestAltitude = data?.states.sort( (sA, sB) => {
        return sB.geoAltitude - sA.geoAltitude
    }).slice(0)[0].geoAltitude;

    const updatedDate = data?.time;


    return (
        <div className={styles.box_container}>
            <Kpi label='Planes' value={numPlanes + ''}></Kpi>
            <Kpi label='Fastest' value={fastestVelocity + ''}></Kpi>
            <Kpi label='Highest' value={hightestAltitude + ''}></Kpi>
            <Kpi label='Last Updated' value={updatedDate + ''}></Kpi>
        </div>
    )
    
}

export default React.memo(KpiHeader)