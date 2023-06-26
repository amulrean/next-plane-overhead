import { NextPage } from 'next';
import Link from 'next/link';


const NavBar: NextPage = () => {

  const linkConfig = [{
    label: 'Home',
    href: '/'
  }, {
    label: 'Search',
    href: '/search'
  }]

  const links = linkConfig.map(config => {
    return (
      <Link className="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href={config.href}>
        {config.label}
      </Link>
    )
  })

  return <nav className="bg-white dark:bg-gray-800 shadow">
    <div className="px-8 mx-auto max-w-7xl">
      <div className="flex items-center justify-between h-16">
        <div className=" flex items-center">
          <a className="flex-shrink-0" href="/">
            <img className="w-8 h-8" src="/plane_nose_up.svg" alt="Workflow" />
          </a>
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-4">
              {links}
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>;

}

export default NavBar;