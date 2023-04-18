import styles from './index.module.css';
import logo from './../../assets/images/logo2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTaxi,faArrowRight} from '@fortawesome/free-solid-svg-icons';



const AllCardUser = (props) => {
    
    return (
        props.flag===1?(
            <>
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
            </>
        ):(
            <>
            <div className={styles.users__inner__left__display__each}>           
                <div className={styles.users__inner__left__display__each__sno}>
                    {props.ele._id.slice(0,5)}
                </div>
                <div className={styles.users__inner__left__display__each__sno}>
                    {props.ele.cab_name}
                </div>
                <div className={styles.users__inner__left__display__each__sno}>
                    {props.ele.user_email}
                </div>
            </div>
            </>
        )
    
    );
}

export default AllCardUser;