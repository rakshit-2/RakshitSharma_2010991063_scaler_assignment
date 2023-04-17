import styles from './index.module.css';
import logo from './../../assets/images/logo2.jpg';

const Navbar = (props) => {
  return (
    <div className={styles.navbar__outer}>
        <div className={styles.navbar__inner}>
            <div className={styles.navbar__center}>
                <div className={styles.navbar__center__each}>
                    Users
                </div>
                <div className={styles.navbar__logo}>
                    <img src={logo} style={{width:"100%",height:"100%"}}/>
                </div>
                <div className={styles.navbar__center__each}>
                    Cabs Booked
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar;