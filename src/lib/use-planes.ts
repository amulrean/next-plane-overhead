import useSWR from 'swr';
import { createOpenSkyObj } from './planes';


const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function usePlanes () {
    const config = { 
        // refreshInterval: 10000 
    };
    
    const { data, error, isLoading } = useSWR('/api/planes', fetcher);
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