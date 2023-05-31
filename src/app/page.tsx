
import PlaneMap from '@/components/plane-map'
import styles from './page.module.css'
import { getPlanes } from '@/lib/planes';
import SideBar from '@/components/side-bar';
import { format } from 'date-fns';


async function getData(live: boolean): Promise<OpenSkyObj> {
  return getPlanes(live);
}

export default async function Home() {

  // const [data, setData] = useState(await getData(true));
  const data = await getData(true);

  const formattedDate = format(new Date(data.time*1000), 'MM-dd-yyyy - hh:mm:ss aa x');


  return (
    <main className={styles.main}>
      <div className={styles.header}>
        Next Plane Time: {formattedDate}
      </div>
      <div className={styles.content}><PlaneMap data={data} /></div>
      <div className={styles.sidebar}><SideBar data={data} /></div>
    </main>
  )
}
