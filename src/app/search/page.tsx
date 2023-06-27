
import PlaneMap from '@/components/plane-map'
import SideBar from '@/components/side-bar';


export default async function Home() {

  return (
    <div className="flex flex-grow">
      <div className="flex-auto">
        <PlaneMap />
      </div>
      <div className="flex-initial w-72 h-3/6 overflow-y-auto">
        <SideBar />
      </div>
    </div>
  )
}
