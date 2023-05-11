
import PlaneMap from '@/components/plane-map'
import styles from './page.module.css'


async function getData(): Promise<OpenSkyResponse> {
  const res = await fetch('https://opensky-network.org/api/states/all?lomin=-78&lamin=38&lomax=-76&lamax=40');

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        Algo Tester Time: {data?.time}
      </div>
      <div className={styles.content}><PlaneMap data={data} /></div>
      <div className={styles.sidebar}>Sidebar</div>
    </main>
  )
}
