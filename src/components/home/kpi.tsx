import React from 'react'
import { NextPage } from 'next';
import styles from './home.module.css'

interface Props {
    value: string;
    label: string;
    image?: string;
}

const Kpi: NextPage<Props> = ({ value, label, image }) => {
    return (
        <div className={styles.box}>
            <div className={styles.text}>
                <h2 className={styles.topic_heading}>{value}</h2>
                <h2 className={styles.topic}>{label}</h2>
            </div>
            {image && <img src={image}
                alt={label}/>}
        </div>      
    )
}

export default React.memo(Kpi)