import { Marker } from '@react-google-maps/api';
import React from 'react';

type Props = {
    states: OpenSkyState[]
}
const PLANE_SVG_PATH = "m 1397,1324 q 0,-87 -149,-236 l -240,-240 143,-746 1,-6 q 0,-14 -9,-23 L 1079,9 q -9,-9 -23,-9 -21,0 -29,18 L 753,593 508,348 Q 576,110 576,96 576,82 567,73 L 503,9 Q 494,0 480,0 462,0 452,16 L 297,296 17,451 q -17,9 -17,28 0,14 9,23 l 64,65 q 9,9 23,9 14,0 252,-68 L 593,753 18,1027 q -18,8 -18,29 0,14 9,23 l 64,64 q 9,9 23,9 4,0 6,-1 l 746,-143 240,240 q 149,149 236,149 32,0 52.5,-20.5 20.5,-20.5 20.5,-52.5 z";
const PLANE_SVG_ROTATION_OFFSET = -134;
const PLANE_SVG_ALTITUDE_MULTIPLIER = .003;

const PlaneLayer = (props: Props) => {
    
    const planeMarkers = props.states.map(state => {
        const position = {
            lat: state.latitude,
            lng: state.longitude
        }
        const planeMarker: google.maps.Symbol = {
            path:PLANE_SVG_PATH,
            fillColor: "blue",
            fillOpacity: 0.8,
            strokeWeight: 0,
            rotation: PLANE_SVG_ROTATION_OFFSET + state.trueTrack,
            scale: PLANE_SVG_ALTITUDE_MULTIPLIER * Math.log(state.geoAltitude),
            anchor: new google.maps.Point(0, 0),
          };
        return <Marker key={state.icao24} position={position} icon={planeMarker}></Marker>;
   });

    return <>{planeMarkers}</>;
};

export default React.memo(PlaneLayer);