import styles from './index.module.css';
import Navbar from './../../molecule/navbar';
import Banner from './../../molecule/banner';
import BookingSection from './../../molecule/booking'


const Landing = (props) => {
  return (
    <div className={styles.landing__outer}>
        <Navbar/>
        <div className={styles.langing__gap}></div>

        <Banner/>

        <BookingSection/>
        
    </div>
  );
}

export default Landing;
