import styles from './index.module.css';
import banner1 from './../../assets/images/banner1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import bannerEach from './../../assets/store/bannerEach.json';



const Banner = (props) => {
  return (
    <div className={styles.banner__outer}>
        <div className={styles.banner__inner}>
            <div className={styles.banner__left}>
                <div className={styles.banner__left__top}>
                    {bannerEach.headingBig}
                </div>
                <div className={styles.banner__left__mid}>
                    {bannerEach.headingSmall}
                </div>
                <div className={styles.banner__left__bottom}>
                    <a href="#book" className={styles.banner__left__bottom__button}>
                    {bannerEach.buttonExplore} <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className='nav__icon' />
                    </a>
                    <a href="#book" className={styles.banner__left__bottom__button}>
                    {bannerEach.buttonBook} <FontAwesomeIcon icon={faArrowRight} size="lg" className='nav__icon' />
                    </a>
                </div>
            </div>
            <div className={styles.banner__right}>
                <img src={banner1} style={{width:"100%",height:"100%"}} alt="banner"/>
            </div>
        </div>
    </div>
  );
}

export default Banner;