import styles from './index.module.css';
import logo from './../../assets/images/logo2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTaxi} from '@fortawesome/free-solid-svg-icons';



const Navbar = (props) => {
  return (
    <div className={styles.navbar__outer}>
        <div className={styles.navbar__inner}>
            <div className={styles.navbar__inner__left}>
                <div className={styles.navbar__logo}>
                    <img src={logo} style={{width:"100%",height:"100%"}} alt="logo"/>
                </div>
            </div>
            <div className={styles.navbar__inner__right}>
                <a href="#User" className={styles.navbar__center__each}>
                    Users  <FontAwesomeIcon icon={faUser} size="lg" className='nav__icon' />
                </a>
                <a href="#Cabs" className={styles.navbar__center__each}>
                    Cabs Booked <FontAwesomeIcon icon={faTaxi} size="lg" className='nav__icon' />
                </a>
            </div>
            <div className={styles.navbar__inner__right__mobile}>
                <div className={styles.navbar__center__each}>
                    <FontAwesomeIcon icon={faUser} size="lg" className='nav__icon' />
                </div>
                <div className={styles.navbar__center__each}>
                    <FontAwesomeIcon icon={faTaxi} size="lg" className='nav__icon' />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar;