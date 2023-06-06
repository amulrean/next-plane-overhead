import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function usePlanes () {
    const config = { 
        // refreshInterval: 10000 
    };
    
    const { data, error, isLoading } = useSWR('/api/planes', fetcher);
    console.log(data);
    return {
      planes: data,
      isLoading,
      isError: error
    }
  }