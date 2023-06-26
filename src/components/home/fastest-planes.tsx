import React from 'react'
import { NextPage } from 'next';

interface Props {
    data?: OSFormattedStates;
    num: number;
}

const FastestPlanes: NextPage<Props> = ({ data }) => {

    const tableColumnConfig = [{
        label: 'ICAO24',
        value: 'icao24'
    },
    {
        label: 'Call Sign',
        value: 'callSign'
    },
    {
        label: 'Origin Country',
        value: 'originCountry'
    },
    {
        label: 'Altitude',
        value: 'geoAltitude'
    },
    {
        label: 'Velocity',
        value: 'velocity'
    }];

    const headerItems = tableColumnConfig?.map(columnConfig => {
        return (
            <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                {columnConfig.label}
            </th>
        );
    }

    );


    const topFastest = data?.states.sort((sA, sB) => {
        return sB.velocity - sA.velocity
    }).slice(0, 4);




    const listItems = topFastest?.map(state => {
        return (
            <tr>
                {
                    tableColumnConfig.map(config => {
                        return (
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    {state[config.value]}
                                </p>
                            </td>
                        )
                    })
                }
            </tr>
        );
    }

    );

    return (
        <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
            <table className="min-w-full leading-normal">
                <thead>
                    <tr>
                        {headerItems}
                    </tr>
                </thead>
                <tbody>
                    {listItems}
                </tbody>
            </table>
        </div>


    )

}

export default React.memo(FastestPlanes)