import styles from './index.module.css';
import logo from './../../assets/images/logo2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTaxi,faArrowRight} from '@fortawesome/free-solid-svg-icons';



const BookingCard = (props) => {
  return (
    <div className={styles.booking__cab__card}>
        <div className={styles.booking__cab__card__img}>
            <img src={require('./../../assets/images/'+props.ele.cab_image)} style={{width:"100%",height:"100%"}}/>
        </div>
        <div className={styles.booking__cab__card__content}>
            <div className={styles.booking__cab__card__content__top}>
                <div className={styles.booking__cab__card__content__left}>
                    <div className={styles.booking__cab__card__content__left__heading}>
                        {props.ele.cab_name}
                    </div>
                    <div className={styles.booking__cab__card__content__left__heading__small}>
                        {
                            props.totalTime?(
                                <>
                                {props.totalTime} min
                                </>
                                
                            ):(
                                <>
                                -
                                </>
                            )
                        }
                        
                    </div>
                </div>
                <div className={styles.booking__cab__card__content__right}>
                    <div className={styles.booking__cab__card__content__left__heading}>
                        {props.totalTime*props.ele.cab_price}/-
                    </div>
                    <div className={styles.booking__cab__card__content__left__heading__small}>
                        {props.ele.cab_price}/min
                    </div>
                </div>
            </div>
            <div className={styles.booking__cab__card__content__bottom}>
                Book{'\u00A0'} <FontAwesomeIcon icon={faArrowRight} size="md" className='nav__icon' />
            </div>
        </div>
    </div>
  );
}

export default BookingCard;