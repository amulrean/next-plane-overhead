
import PlaneMap from '@/components/plane-map'
import styles from './search.module.css'
import SideBar from '@/components/side-bar';


export default async function Home() {

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <PlaneMap />
      </div>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
    </div>
  )
}
