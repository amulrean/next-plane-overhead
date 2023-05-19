
interface OpenSkyResponse {
    time: number;
    states: (number | boolean | string | null)[][];
}

enum POSITION_SOURCE {
    ADSB = 0,
    ASTERIX = 1,
    MLAT = 2,
    FLARM = 3
}

interface OpenSkyState {
    icao24: string;
    callSign: string;
    originCountry: string;
    timePosition: number;
    lastContact: number;
    longitude: number;
    latitude: number;
    baroAltitude: number;
    onGround: boolean;
    velocity: number;
    trueTrack: number;
    verticalRate: number;
    sensors: number[];
    geoAltitude: number;
    squawk: string;
    spi: boolean;
    positionSource: POSITION_SOURCE;
    category: number;
}

interface OpenSkyObj {
    time: number;
    states: OpenSkyState[];
}
