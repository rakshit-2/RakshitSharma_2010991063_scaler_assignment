import styles from './index.module.css';
import Navbar from './../../molecule/navbar';
import Banner from './../../molecule/banner';
import Users from './../../molecule/users';
import Cabs from './../../molecule/cabs';
import BookingSection from './../../molecule/booking'
import { useEffect,useState } from 'react';
import Axios from 'axios';
import NumPlace from './../../assets/store/numPlace.json'
import { faTriangleExclamation,faCircleCheck,faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import ErrorCard from './../../atom/errorCard';


const Landing = (props) => {

  const [email,setEmail]=useState("")
  const [sourceLocation,setSourceLocation]=useState("")
  const [destLocation,setDestLocation]=useState("")
  const [totalTime,setTotalTime]=useState(null)
  const [cabDisplayLoading,setCabDisplayLoading]=useState(true);
  const [cabData,setCabData]=useState([]);
  const [allUsers,setAllUsers]=useState([])
  const [allUserLoading,setAllUserLoading]=useState(true)
  const [allCabs,setAllCabs]=useState([])
  const [allCabsLoading,setAllCabsLoading]=useState(true)
  
  const[errorDisplay,setErrorDisplay]=useState("none")
  const[errorIcon,setErrorIcon]=useState()
  const[errorText,setErrorText]=useState("Error")
  const[errorColor,setErrorColor]=useState("red")

  function fetchAllUsers()
  {
    setAllUserLoading(true)
    Axios.get('http://localhost:5000/user/user/get-data',
    {}
    ).then((res)=>{
      setAllUsers(res.data.data.reverse())
      setAllUserLoading(false)
    });
  }

  function fetchCabs()
  {
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
  }


  function fetchAllCabDetail()
  {
    setAllCabsLoading(true)
    Axios.get('http://localhost:5000/allcab/get-all-cab',
    {}
    ).then((res)=>{
      console.log(res.data)
      if(res.data!==null)
      {
        setAllCabs(res.data.reverse())
      }
      setAllCabsLoading(false);
    });
  }

  useEffect(() => {
    fetchCabs();
    fetchAllUsers();
    fetchAllCabDetail()
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



  function myStopFunction() 
  {
    setErrorDisplay("none");
  }

  function showError(message,type)
  {
    setErrorText(message)
    if(type==="success")
    {
      setErrorIcon(faCircleCheck);
      setErrorDisplay("flex");
      setErrorColor("green")
    }
    else if(type==="info")
    {
      setErrorIcon(faCircleInfo);
      setErrorDisplay("flex")
      setErrorColor("#FD9229")
    }
    else
    {
      setErrorIcon(faTriangleExclamation);
      setErrorDisplay("flex")
      setErrorColor("red")
    }
    setTimeout(myStopFunction, 4000);
  }


  function checkFairClicked()
  {
    var emailCheck=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(emailCheck.test(email)===false)
    {

      showError("Email is incorrect","error");
      return;
    }
    if(sourceLocation===destLocation)
    {
      showError("Both Locations are same","error");
      return;
    }
    if(sourceLocation==="" || destLocation==="" || email==="")
    {
      showError("Field is empty","error");
      return;
    }


    // calling the python file
    setCabDisplayLoading(true)
    Axios.post("http://localhost:5000/path/fetch-shortest-path",
    {
      start:NumPlace[sourceLocation],
      dest:NumPlace[destLocation]
    }).then((res)=>{
      // console.log(res.data)
      setTotalTime(res.data)
      setCabDisplayLoading(false);
    });

  }



  function cabBookClicked(ele,price,time)
  {
    if(time===null || email==="" || sourceLocation==="" || destLocation==="")
    {
      showError(" Check Fair First!!","error")
      return
    }
    Axios.post("http://localhost:5000/user/update-user-booking",
    {

      source:sourceLocation,
      dest:destLocation,
      obj:ele,
      total_time:time,
      total_price:price,
      email:email

    }).then((res)=>{
      if(res.data.data===false)
      {
        showError(res.data.message,"error")
        return
      }
      showError("Cab Booked Successfully!!","error")
      console.log(res.data)
      fetchAllUsers();
      fetchAllCabDetail()
    });
  }


  return (
    <>
    
    
    <div className={styles.landing__outer}>
      <ErrorCard 
        errorDisplay={errorDisplay}
        errorIcon={errorIcon}
        errorText={errorText}
        errorColor={errorColor}

        />
        <Navbar
        />
        <div className={styles.langing__gap}></div>

        <Banner
        />

        <BookingSection
          errorDisplay={errorDisplay}
          errorIcon={errorIcon}
          errorText={errorText}
          errorColor={errorColor} 
          changeDest={changeDest} sourceLocation={sourceLocation} 
          totalTime={totalTime} changeEmail={changeEmail}
          changeSource={changeSource} destLocation={destLocation}
          checkFairClicked={checkFairClicked} cabData={cabData}
          cabDisplayLoading={cabDisplayLoading} cabBookClicked={cabBookClicked}
        />

        <Users  
        flag={1}
        allUsers={allUsers} allUserLoading={allUserLoading}
        />

        <Cabs
        flag={0}
        allCabs={allCabs} allCabsLoading={allCabsLoading}
        />
        
    </div>
    </>
  );
}

export default Landing;
