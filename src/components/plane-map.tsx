'use client';

import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { NextPage } from 'next';

const containerStyle = {
    width: '600px',
    height: '600px'
};

interface Props {
    data?: OpenSkyResponse;
}

const PlaneMap: NextPage<Props> = ({ data }) => {
    console.log(`Num of States: ${data?.states.length}`);
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string
    })

    const [map, setMap] = React.useState<google.maps.Map | null>(null)

    const onLoad = React.useCallback(function callback(map: google.maps.Map) {
        const bounds: google.maps.LatLngBoundsLiteral = {
            east: -76.67,
            west: -77.49,
            north: 39.23,
            south: 38.59,
        };
        map.fitBounds(bounds);
        console.log('map fit');
        setMap(map);
    }, [])

    const onBoundsChanged = React.useCallback(function callback() {
        console.log("onBoundsChanged");
        if (map != null) {
            console.log(map.getBounds());
            console.log(map.getBounds()?.getNorthEast());
            console.log(map.getBounds()?.getSouthWest());
        }
    }, [map])

    const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
        console.log("onUnmount");
        setMap(null);
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            // center={center}
            // zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            onBoundsChanged={onBoundsChanged}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : <></>
}

export default React.memo(PlaneMap)