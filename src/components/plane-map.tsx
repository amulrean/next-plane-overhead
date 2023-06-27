'use client';

import React from 'react';
import { NextPage } from 'next';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import PlaneLayer from './plane-layer';


const PlaneMap: NextPage = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string
    })

    const [map, setMap] = React.useState<google.maps.Map | null>(null);


    const onLoad = React.useCallback(function callback(map: google.maps.Map) {
        const bounds: google.maps.LatLngBoundsLiteral = {
            east: -76.67,
            west: -77.49,
            north: 39.23,
            south: 38.59,
        };
        map.fitBounds(bounds);
        setMap(map);
    }, [])

    const onBoundsChanged = React.useCallback(function callback() {
        // console.log("onBoundsChanged");
        // if (map != null) {
        //     console.log(map.getBounds());
        //     console.log(map.getBounds()?.getNorthEast());
        //     console.log(map.getBounds()?.getSouthWest());
        // }
    }, [map])

    const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
        console.log("onUnmount");
        setMap(null);
    }, [])

    const containerStyle = {
        width: '100%',
        height: '100%'
    };

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            // center={center}
            // zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            onBoundsChanged={onBoundsChanged}
        >
            <PlaneLayer></PlaneLayer>
        </GoogleMap>
    ) : <></>
}

export default React.memo(PlaneMap)