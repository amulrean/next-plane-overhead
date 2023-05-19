import { Marker } from '@react-google-maps/api';
import React from 'react';

type Props = {
    states: OpenSkyState[]
}

const PlaneLayer = (props: Props) => {
    
    const planeMarkers = props.states.map(state => {
        const position = {
            lat: state.latitude,
            lng: state.longitude
        }
        const icon = {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 7,
        }
        return <Marker position={position} icon={icon}></Marker>
   });

    return <>{planeMarkers}</>;
};

export default React.memo(PlaneLayer);