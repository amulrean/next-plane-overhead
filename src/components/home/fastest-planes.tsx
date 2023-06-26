import React from 'react'
import { NextPage } from 'next';

interface Props {
    data?: OSFormattedStates;
    num: number;
}

const FastestPlanes: NextPage<Props> = ({ data }) => {


    const topFastest = data?.states.sort((sA, sB) => {
        return sB.velocity - sA.velocity
    }).slice(0, 4);



    const listItems = topFastest?.map(state => {
        return (
            <div className="" key={state.icao24}>
                <h3 className="">{state.icao24}</h3>
                <h3 className="">{state.callSign}</h3>
                <h3 className="">{state.originCountry}</h3>
                <h3 className="">{state.geoAltitude}</h3>
                <h3 className="">{state.velocity}</h3>
            </div>
        );
    }

    );

    return (
        <div className="">
            <div className="">
                <h1 className="">Top Fastest Planes</h1>
                <button className="">View All</button>
            </div>

            <div className="">
                <div className="">
                    <h3 className="">ICAO24</h3>
                    <h3 className="">Call Sign</h3>
                    <h3 className="">Origin Country</h3>
                    <h3 className="">Altitude</h3>
                    <h3 className="">Velocity</h3>
                </div>

                <div className="">
                    {listItems}
                </div>
            </div>
        </div>
    )

}

export default React.memo(FastestPlanes)