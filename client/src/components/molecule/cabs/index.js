import styles from './index.module.css';
import back4 from './../../assets/images/back4.jpg';
import AllUserCard from './../../atom/allUserCard.js';
import { Ring } from '@uiball/loaders'

const Cabs = (props) => {


  return (
    <>
    <div className={styles.cabs__outer} id="Cabs">
        <div className={styles.cabs__inner}>
            <div className={styles.cabs__inner__right}>
                <div className={styles.cabs__inner__left__heading}>
                        All Cabs
                </div>
                <div style={{border:"none"}} className={styles.cabs__inner__left__display__each}>
                    <div className={styles.cabs__inner__left__display__each__sno}>
                        SNo.
                    </div>
                    <div className={styles.cabs__inner__left__display__each__sno}>
                        Cab Name
                    </div>
                    <div className={styles.cabs__inner__left__display__each__sno}>
                        Email
                    </div>
                </div>
                <div className={styles.cabs__inner__left__display}>
                    {
                        props.allCabsLoading?(
                            <Ring 
                            size={40}
                            lineWeight={5}
                            speed={2} 
                            color="black" 
                            />
                        ):(
                            props.allCabs.map((ele)=>{
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
            <div className={styles.cabs__inner__left}>
                <img src={back4} style={{width:"100%",height:"100%"}} alt="backgroundImg"/>
            </div>
        </div>
    </div>
    </>
  );
}

export default Cabs;