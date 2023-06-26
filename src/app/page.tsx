
import FastestPlanes from '@/components/home/fastest-planes';
import { getOSFormattedStates } from '@/lib/planes';
import KpiHeader from '@/components/home/kpi-header';

async function getData(live: boolean): Promise<OSFormattedStates> {
  return getOSFormattedStates(undefined, live);
}

export default async function Home() {

  const data = await getData(true);


  return (
    <div className='flex flex-col items-center justify-evenly'>
      <div className='mt-10 flex flex-col space-y-10 max-w-screen-lg'>
        <KpiHeader data={data}></KpiHeader>
        <FastestPlanes data={data} num={5}></FastestPlanes>
      </div>
    </div>

  )
}
