import styles from './index.module.css';
import logo from './../../assets/images/logo2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTaxi,faArrowRight} from '@fortawesome/free-solid-svg-icons';



const Navbar = (props) => {
    return (
    <div className={styles.users__inner__left__display__each}>           
        <div className={styles.users__inner__left__display__each__sno}>
            <FontAwesomeIcon icon={faArrowRight} size="lg" />
        </div>
        <div className={styles.users__inner__left__display__each__sno}>
            {props.ele.user_email}
        </div>
        <div className={styles.users__inner__left__display__each__sno}>
            {props.ele.user_cabs.length}
        </div>
    </div>
    );
}

export default Navbar;