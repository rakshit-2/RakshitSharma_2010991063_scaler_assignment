import Axios from 'axios';
import {useEffect} from 'react';
import './App.css';

const App = (props) => {

  // useEffect(()=>{
  //   Axios.get("http://localhost:5000/api/test",
  //   {
  //     params:{
  //       start:0,
  //       dest:2
  //     }
      
  //   }).then((res)=>{
  //     var ele=res.data;
  //     console.log(ele)
  //     for(var i=0;i<ele.length;i++)
  //     {
  //       console.log(ele[i])
  //     }
  //   })
  // },[])


  return (
    <div className="App">
    </div>
  );
}

export default App;
