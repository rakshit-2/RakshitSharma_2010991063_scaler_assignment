import styles from './index.module.css';
import Navbar from './../../molecule/navbar';
import Banner from './../../molecule/banner';
import BookingSection from './../../molecule/booking'
import { useEffect,useState } from 'react';
import Axios from 'axios';

const Landing = (props) => {

  const [email,setEmail]=useState("")
  const [sourceLocation,setSourceLocation]=useState("")
  const [destLocation,setDestLocation]=useState("")
  const [totalTime,setTotalTime]=useState(12)
  const [cabDisplayLoading,setCabDisplayLoading]=useState(true);
  const [cabData,setCabData]=useState([]);

  useEffect(() => {
    setCabDisplayLoading(true)
    Axios.get('http://localhost:5000/cab/fetch-cab',
    {}
    ).then((res)=>{
      // console.log
      if(res.data!==null)
      {
        setCabData(res.data)
      }
      setCabDisplayLoading(false);
    });
  }, []);

  function changeSource(value)
  {
    setSourceLocation(value);
  }
  function changeEmail(value)
  {
    setEmail(value);
  }
  function changeDest(value)
  {
    setDestLocation(value);
  }


  function checkFairClicked()
  {
    var emailCheck=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(emailCheck.test(email)===false)
    {
      alert("Email is incorrect");
      return;
    }
    if(sourceLocation===destLocation)
    {
      alert("Both Locations are same");
      return;
    }
    if(sourceLocation==="" || destLocation==="" || email==="")
    {
      alert("Field is empty");
      return;
    }
  }

  return (
    <div className={styles.landing__outer}>
        <Navbar/>
        <div className={styles.langing__gap}></div>

        <Banner/>

        <BookingSection 

          changeDest={changeDest} sourceLocation={sourceLocation} 
          totalTime={totalTime} changeEmail={changeEmail}
          changeSource={changeSource} destLocation={destLocation}
          checkFairClicked={checkFairClicked} cabData={cabData}
          cabDisplayLoading={cabDisplayLoading}
        />
        
    </div>
  );
}

export default Landing;
