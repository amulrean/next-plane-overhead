import { NextPage } from 'next';
import styles from './nav-bar.module.css'
import Link from 'next/link';


const NavBar: NextPage = () => {

  return <div className={styles.header}>
    <Link className={styles.link} href="/">Next Plane</Link>
    <Link className={styles.link} href="/search">Search</Link>
  </div>;

}

export default NavBar;