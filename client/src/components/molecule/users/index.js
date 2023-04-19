import styles from './index.module.css';
import back2 from './../../assets/images/back2.jpg';
import AllUserCard from './../../atom/allUserCard.js';
import { Ring } from '@uiball/loaders'

const Users = (props) => {


  return (
    <>
    <div className={styles.users__outer} id="User">
        <div className={styles.users__inner}>
            <div className={styles.users__inner__left}>
                <img src={back2} style={{width:"100%",height:"100%"}} alt="backgroundImg"/>
            </div>
            <div className={styles.users__inner__right} >
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
                            // true?(
                            <Ring 
                            size={40}
                            lineWeight={5}
                            speed={2} 
                            color="black" 
                            />
                        ):(
                            props.allUsers.map((ele)=>{
                                return(
                                    <>
                                    <AllUserCard flag={props.flag} ele={ele}/>
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