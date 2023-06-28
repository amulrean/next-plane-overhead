
import PlaneMap from '@/components/plane-map'
import SideBar from '@/components/side-bar';


export default async function Home() {

  return (
    <div className="grid grid-cols-[1fr,auto] h-full">
      <PlaneMap />
      <SideBar />
    </div>
  )
}
