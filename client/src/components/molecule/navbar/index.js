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
                    <img src={logo} style={{width:"100%",height:"100%"}}/>
                </div>
            </div>
            <div className={styles.navbar__inner__right}>
                <div className={styles.navbar__center__each}>
                    Users  <FontAwesomeIcon icon={faUser} size="lg" className='nav__icon' />
                </div>
                <div className={styles.navbar__center__each}>
                    Cabs Booked <FontAwesomeIcon icon={faTaxi} size="lg" className='nav__icon' />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar;