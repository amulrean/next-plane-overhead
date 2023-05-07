
import PlaneMap from '@/components/plane-map'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        Algo Tester
      </div>
      <div className={styles.content}><PlaneMap /></div>
      <div className={styles.sidebar}>Sidebar</div>
    </main>
  )
}
