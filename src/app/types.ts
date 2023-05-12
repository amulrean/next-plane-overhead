interface OpenSkyResponse {
    time: string;
    states: any[][];
}

interface OpenSkyState {
    icao24: string;
    callSign: string;
    originCountry: string;
}

interface OpenSkyObj {
    time: string;
    states: OpenSkyState[];
}
