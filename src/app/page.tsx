
import FastestPlanes from '@/components/home/fastest-planes';
import styles from './page.module.css'
import { getOSFormattedStates } from '@/lib/planes';
import KpiHeader from '@/components/home/kpi-header';

async function getData(live: boolean): Promise<OSFormattedStates> {
  return getOSFormattedStates(undefined, live);
}

export default async function Home() {

  const data = await getData(true);


  return (
    <div className={styles.main}>
      <KpiHeader data={data}></KpiHeader>
      <FastestPlanes data={data} num={5}></FastestPlanes>
    </div>
  )
}
