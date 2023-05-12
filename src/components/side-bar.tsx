'use client';

import React from 'react'
import { NextPage } from 'next';

interface Props {
    data?: OpenSkyObj;
}

const SideBar: NextPage<Props> = ({ data }) => {

    const listItems = data?.states.map(state =>
        <li key={state.icao24}>
            {state.callSign} {state.originCountry}
        </li>
    );

    return <ul>{listItems}</ul>
}

export default React.memo(SideBar)