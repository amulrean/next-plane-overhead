import useSWR from 'swr';
import { createOpenSkyObj } from './planes';
const fetcher = (url: string) => fetch(url).then((res) => res.json());


export function usePlanes () {
    const { data, error, isLoading } = useSWR(`https://opensky-network.org/api/states/all?lomin=-78&lamin=38&lomax=-76&lamax=40`, fetcher, { refreshInterval: 1000 })
    console.log(data);
    let planes = undefined;
    if (data) {
        planes = createOpenSkyObj(data);
    }
    return {
      planes: planes,
      isLoading,
      isError: error
    }
  }