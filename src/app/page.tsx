
import PlaneMap from '@/components/plane-map'
import styles from './page.module.css'
import { getPlanes } from '@/lib/planes';
import SideBar from '@/components/side-bar';


async function getData(): Promise<OpenSkyObj> {
  return getPlanes(false);
}

export default async function Home() {
  const data = await getData();
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        Algo Tester Time: {data?.time}
      </div>
      <div className={styles.content}><PlaneMap data={data} /></div>
      <div className={styles.sidebar}><SideBar data={data} /></div>
    </main>
  )
}
