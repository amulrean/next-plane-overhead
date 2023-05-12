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
        return await Promise.resolve(createOpenSkyObj(sampleRes));
    }
}

function createOpenSkyObj(response: any): OpenSkyObj {
    return {
        time: response.time,
        states: response.states.map(stateArray => mapStateArrayToObj(stateArray))
    }
}

function mapStateArrayToObj(stateArray: any[]): OpenSkyState {
    return {
        icao24: stateArray[0],
        callSign: stateArray[1],
        originCountry: stateArray[2],
    }
}

