import styles from './Nav.module.css'
import calendar from "./assets/icons8-calendar-96.png"
import home from "./assets/icons8-home-50.png"
import AppRouter from '../AppRouter';


const Navbar = () => {
  
  return (
    <>
    <nav className={styles.navbar}>
    <div className={styles['logo-container']}>
      <AppRouter/>
      <ul>
        <li><a href='/calendar'><img className={styles['calendar']} src={calendar}  /></a></li>
        <li><a href='/'><img className={styles['calendar']} src={home}  /></a></li>
      </ul>
      </div>
      </nav>
    </>
    
  )
}

export default Navbar