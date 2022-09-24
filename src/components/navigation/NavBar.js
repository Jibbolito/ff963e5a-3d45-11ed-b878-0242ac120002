import styles from './Nav.module.css'
import calendar from "./assets/icons8-calendar-96.png"
import home from "./assets/icons8-home-50.png"
import AppRouter from '../AppRouter';
import { Link } from 'react-router-dom';


const Navbar = () => {
  
  return (
    <>
      <nav className="nav-bar">
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <Link to="/cart">
          <div className="nav-bag">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <span className='bag-quantity'>
              <span>
                3
              </span>
            </span>
          </div>
        </Link>
      </nav>
    {/*<nav className={styles.navbar}>
    <div className={styles['logo-container']}>
      <AppRouter/>
      <ul>
        <li><a href='/calendar'><img className={styles['calendar']} src={calendar}  /></a></li>
        <li><a href='/'><img className={styles['calendar']} src={home}  /></a></li>
      </ul>
      </div>
  </nav>*/}
    </>
    
  )
}

export default Navbar