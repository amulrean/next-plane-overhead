import sampleRes from './sample-api-states.json';

export interface OSStatesBoundingBox {
    lomin: number;
    lamin: number;
    lomax: number;
    lamax: number;
}

export async function getOSStatesAll(): Promise<OpenSkyResponse> {
    return getOSStates(undefined);
}

export async function getOSStates(bounds: OSStatesBoundingBox | undefined):  Promise<OpenSkyResponse> {

    const params = bounds !== undefined ? `?lomin=${bounds.lomin}&lamin=${bounds.lamin}&lomax=${bounds.lomax}&lamax=${bounds.lamax}` : '';

    const url = 'https://opensky-network.org/api/states/all' + params;

    const res = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(`${process.env.OPEN_SKY_NETWORK_USERNAME}:${process.env.OPEN_SKY_NETWORK_PASSWORD}`)
        },
    });
    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }
    return await res.json() as OpenSkyResponse;
}


export async function getOSFormattedStates(bounds: OSStatesBoundingBox | undefined, live: boolean = true): Promise<OSFormattedStates> {

    const osStatesResponse = live ? await getOSStates(bounds) : sampleRes as OpenSkyResponse;

    return formatOSResponse(osStatesResponse);
}


export function formatOSResponse(response: OpenSkyResponse): OSFormattedStates {
    return {
        time: response.time,
        states: response.states
            .map(stateResponseArray => mapStateArrayToObj(stateResponseArray))
            .filter(stateArray => filterStates(stateArray))
    }
}

function mapStateArrayToObj(stateArray: any[]): OpenSkyState {
    return {
        icao24: stateArray[0],
        callSign: stateArray[1],
        originCountry: stateArray[2],
        timePosition: stateArray[3],
        lastContact: stateArray[4],
        longitude: stateArray[5],
        latitude: stateArray[6],
        baroAltitude: stateArray[7],
        onGround: stateArray[8],
        velocity: stateArray[9],
        trueTrack: stateArray[10],
        verticalRate: stateArray[11],
        sensors: stateArray[12],
        geoAltitude: stateArray[13],
        squawk: stateArray[14],
        spi: stateArray[15],
        positionSource: stateArray[16],
        category: stateArray[17],
    }
}

function filterStates(state: OpenSkyState) {
    return state.geoAltitude &&  state.geoAltitude > 10 &&
    state.velocity && state.velocity > 10;
}

