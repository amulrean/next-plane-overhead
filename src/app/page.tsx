
import PlaneMap from '@/components/plane-map'
import styles from './page.module.css'
import { getPlanes } from '@/lib/planes';
import SideBar from '@/components/side-bar';


async function getData(live: boolean): Promise<OpenSkyObj> {
  return getPlanes(live);
}

export default async function Home() {

  // const data = await getData(true);


  return (
    <main className={styles.main}>
      <div className={styles.header}>
        Next Plane
      </div>
      <div className={styles.content}><PlaneMap /></div>
      <div className={styles.sidebar}><SideBar/></div>
    </main>
  )
}
