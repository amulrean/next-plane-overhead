
import styles from './page.module.css'
import { getOSFormattedStates } from '@/lib/planes';

async function getData(live: boolean): Promise<OSFormattedStates> {
  return getOSFormattedStates(undefined, live);
}

export default async function Home() {

  const data = await getData(true);


  return (
    <div className={styles.main}>
      Home Page
    </div>
  )
}
