import styles from './index.module.css';
import logo from './../../assets/images/logo2.jpg';
import banner1 from './../../assets/images/banner1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation,faCircleCheck,faCircleInfo,faArrowRight,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Banner = (props) => {
  return (
    <div className={styles.banner__outer}>
        <div className={styles.banner__inner}>
            <div className={styles.banner__left}>
                <div className={styles.banner__left__top}>
                    The Best way to get
                    Wherever you're going
                </div>
                <div className={styles.banner__left__mid}>
                    We constantly experiment to come up with industry-first features for our riders that eventually become a norm
                </div>
                <div className={styles.banner__left__bottom}>
                    <div className={styles.banner__left__bottom__button}>
                        Explore <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className='nav__icon' />
                    </div>
                    <div className={styles.banner__left__bottom__button}>
                        Book Now  <FontAwesomeIcon icon={faArrowRight} size="lg" className='nav__icon' />
                    </div>
                </div>
            </div>
            <div className={styles.banner__right}>
                <img src={banner1} style={{width:"100%",height:"100%"}}/>
            </div>
        </div>
    </div>
  );
}

export default Banner;