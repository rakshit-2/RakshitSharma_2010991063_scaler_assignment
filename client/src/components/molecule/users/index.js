import styles from './index.module.css';
import logo from './../../assets/images/logo2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTaxi} from '@fortawesome/free-solid-svg-icons';
import AllUserCard from './../../atom/allUserCard.js';


const Users = (props) => {


  return (
    <>
    <div className={styles.users__outer}>
        <div className={styles.users__inner}>
            <div className={styles.users__inner__left}>
                <img src={logo} style={{width:"100%",height:"100%"}}/>
            </div>
            <div className={styles.users__inner__right}>
                <div className={styles.users__inner__left__heading}>
                    All Users
                </div>
                <div className={styles.users__inner__left__display}>
                        
                    <div style={{border:"none"}} className={styles.users__inner__left__display__each}>
                        <div className={styles.users__inner__left__display__each__sno}>
                            SNo.
                        </div>
                        <div className={styles.users__inner__left__display__each__sno}>
                            User Email
                        </div>
                        <div className={styles.users__inner__left__display__each__sno}>
                            Bookings
                        </div>
                    </div>
                    {
                        props.allUserLoading?(
                            <>Loading</>
                        ):(
                            props.allUsers.map((ele)=>{
                                return(
                                    <>
                                    <AllUserCard ele={ele}/>
                                    </>
                                )
                            })
                        )
                        
                    }

                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Users;