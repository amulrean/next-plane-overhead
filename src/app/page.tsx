
import styles from './page.module.css'
import { getPlanes } from '@/lib/planes';

async function getData(live: boolean): Promise<OpenSkyObj> {
  return getPlanes(live);
}

export default async function Home() {

  // const data = await getData(true);


  return (
    <div className={styles.main}>
      Home Page
    </div>
  )
}
