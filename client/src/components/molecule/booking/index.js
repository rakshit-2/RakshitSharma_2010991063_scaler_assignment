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
import BookingCard from '../../atom/bookingCard.js';



const Booking = (props) => {

    


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
                        <input type={BookingForm.email.type} placeholder={BookingForm.email.placeholder} 
                        className={styles.booking__inputfield} onChange={(e)=>{props.changeEmail(e.target.value)}}/>
                    </div>
                </div>
                <div className={styles.booking__each}>
                    <div className={styles.booking__each__heading}>
                        {BookingForm.source.label}
                    </div>
                    <div className={styles.booking__each__field}>
                        <Autocomplete
                            disablePortal
                            defaultValue={null}
                            sx={{borderRadius:"5px",border:"2px solid black",outline:"none"}}
                            id="combo-box-demo"
                            placeholder={BookingForm.source.placeholder}
                            options={Places}
                            value={props.sourceLocation}
                            onChange={(event: any, newVal:string | null)=>{
                                if(newVal!=null)
                                {
                                    props.changeSource(newVal.label)
                                }
                                else
                                {
                                    props.changeSource("")
                                }
                            }}
                            renderInput={(params) => <TextField {...params} label="" />}
                        />
                    </div>
                </div>
                <div className={styles.booking__each}>
                    <div className={styles.booking__each__heading}>
                        {BookingForm.dest.label}
                    </div>
                    <div className={styles.booking__each__field}>
                        <Autocomplete
                            disablePortal
                            defaultValue={null}
                            sx={{borderRadius:"5px",border:"2px solid black",outline:"none"}}
                            id="combo-box-demo"
                            placeholder={BookingForm.dest.placeholder}
                            options={Places}
                            value={props.destLocation}
                            onChange={(event: any, newVal:string | null)=>{
                                if(newVal!=null)
                                {
                                    props.changeDest(newVal.label)
                                }
                                else
                                {
                                    props.changeDest("")
                                }
                            }}
                            renderInput={(params) => <TextField {...params} label="" />}
                        />
                        {/* <input type='email' className={styles.booking__inputfield}/> */}
                    </div>
                </div>
                <div className={styles.booking__left__button}>
                    <div className={styles.booking__left__button__each} onClick={()=>{props.checkFairClicked()}}>
                        Check Fair {'\u00A0'} <FontAwesomeIcon icon={faArrowRight} size="lg" className='nav__icon' />
                    </div>
                </div>
            </div>
            <div className={styles.booking__inner__right}>
                <div className={styles.booking__inner__right__heading}>
                    <span style={{textDecoration:"underline"}}>Pick Up:</span> {'\u00A0'} {props.sourceLocation?(props.sourceLocation):("Select Pick-Up")} {'\u00A0'} 
                    {'\u00A0'}<FontAwesomeIcon icon={faArrowRight} size="lg" className='nav__icon' /> 
                    {'\u00A0'}{'\u00A0'} <span style={{textDecoration:"underline"}}>Drop:</span> {'\u00A0'} {props.destLocation?(props.destLocation):("Select Drop")} {'\u00A0'} 
                </div>
                <div className={styles.booking__inner__right__time}>
                    <span style={{textDecoration:"underline"}}>Minimum Time:</span> {'\u00A0'} {props.totalTime?(<>{props.totalTime} min</>):("Check Fair!")} {'\u00A0'}
                    
                </div>
                <div className={styles.booking__inner__right__display}>
                    {
                        props.cabDisplayLoading?(
                        <>
                        loading
                        </>
                        ):(
                        props.cabData.map((ele)=>{
                            return(
                                <BookingCard ele={ele} totalTime={props.totalTime}/>
                            )
                        })
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  );
}

export default Booking;