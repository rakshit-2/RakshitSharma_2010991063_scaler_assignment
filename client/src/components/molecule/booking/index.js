import styles from './index.module.css';
import * as React from 'react';
import logo from './../../assets/images/logo2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTaxi,faArrowRight} from '@fortawesome/free-solid-svg-icons';
import BookingForm from './../../assets/store/bookingForm.json'
import Places from './../../assets/store/places.json';
import {useState} from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';




const Booking = (props) => {

    const [sourceLocation,setSourceLocation]=useState("Agra")
    const [destLocation,setDestLocation]=useState("Delhi")


  return (
    <div className={styles.booking__outer}>
        <div className={styles.booking__inner}>
            <div className={styles.booking__inner__left}>
                <div className={styles.booking__inner__left__heading}>
                    {BookingForm.heading}
                </div>
                <div className={styles.booking__each}>
                    <div className={styles.booking__each__heading}>
                        {BookingForm.email.label}
                    </div>
                    <div className={styles.booking__each__field}>
                        <input type={BookingForm.email.type} placeholder={BookingForm.email.placeholder} className={styles.booking__inputfield}/>
                    </div>
                </div>
                <div className={styles.booking__each}>
                    <div className={styles.booking__each__heading}>
                        {BookingForm.source.label}
                    </div>
                    <div className={styles.booking__each__field}>
                        <input type='email' className={styles.booking__inputfield}/>
                    </div>
                </div>
                <div className={styles.booking__each}>
                    <div className={styles.booking__each__heading}>
                        {BookingForm.dest.label}
                    </div>
                    <div className={styles.booking__each__field}>
                        {/* <Autocomplete
                            disablePortal
                            defaultValue={null}
                            className="name-field"
                            style={{height:"fit-content",borderRadius:"5px",paddingLeft:"0px",fontFamily:"Oswald, sans-serif",fontSize:"12px"}}
                            id="combo-box-demo"
                            placeholder={"Flat / Apartment / FarmHouse"}
                            options={Places}
                            value={sourceLocation}
                            onChange={(event: any, newVal:string | null)=>setSourceLocation(newVal.label)}
                            renderInput={(params) => <TextField {...params} label="" />}
                        /> */}
                        <input type='email' className={styles.booking__inputfield}/>
                    </div>
                </div>
                <div className={styles.booking__left__button}>
                    <div className={styles.booking__left__button__each}>
                        Check Fair {'\u00A0'} <FontAwesomeIcon icon={faArrowRight} size="lg" className='nav__icon' />
                    </div>
                </div>
            </div>
            <div className={styles.booking__inner__right}>
                
            </div>
        </div>
    </div>
  );
}

export default Booking;