import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';


// all users whohav booked a cab are fetched here for display
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
                    {props.ele._id.slice(3,8)}
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