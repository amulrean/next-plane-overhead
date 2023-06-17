import React from 'react'
import { NextPage } from 'next';
import styles from './home.module.css'

interface Props {
    data?: OSFormattedStates;
    num: number;
}

const FastestPlanes: NextPage<Props> = ({ data }) => {


    const topFastest = data?.states.sort( (sA, sB) => {
        return sB.velocity - sA.velocity
    }).slice(0,4);



    const listItems = topFastest?.map(state => {
        return (
            <div className={styles.item1} key={state.icao24}>
                <h3 className={`${styles.t_op_nextlvl} ${styles.label_tag}`}>{state.icao24}</h3>
                <h3 className={styles.t_op_nextlvl}>{state.callSign}</h3>
                <h3 className={styles.t_op_nextlvl}>{state.originCountry}</h3>
                <h3 className={styles.t_op_nextlvl}>{state.geoAltitude}</h3>
                <h3 className={styles.t_op_nextlvl}>{state.velocity}</h3>
            </div>
        );
    }
        
    );

    return (
        <div className={styles.report_container}>
            <div className={styles.report_header}>
                <h1 className={styles.report_Articles}>Top Fastest Planes</h1>
                <button className={styles.view}>View All</button>
            </div>

            <div className={styles.report_body}>
                <div className={styles.report_topic_heading}>
                        <h3 className={styles.t_op}>ICAO24</h3>
                        <h3 className={styles.t_op}>Call Sign</h3>
                        <h3 className={styles.t_op}>Origin Country</h3>
                        <h3 className={styles.t_op}>Altitude</h3>
                        <h3 className={styles.t_op}>Velocity</h3>
                </div>
 
                <div className={styles.items}>
                    {listItems}
                </div>
            </div>
        </div>
    )
    
}

export default React.memo(FastestPlanes)