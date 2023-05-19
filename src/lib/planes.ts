import sampleRes from './sample-api-states.json';

export async function getPlanes(live: boolean): Promise<OpenSkyObj> {
    if (live) {

        const res = await fetch('https://opensky-network.org/api/states/all?lomin=-78&lamin=38&lomax=-76&lamax=40');

        // Recommendation: handle errors
        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data');
        }
        return res.json();
    } else {
        return await Promise.resolve(createOpenSkyObj(sampleRes as OpenSkyResponse));
    }
}

function createOpenSkyObj(response: OpenSkyResponse): OpenSkyObj {
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

