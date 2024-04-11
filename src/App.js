
import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import { useState } from 'react';
import About from './components/About';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


//import Alert from './components/Alert';


function App() {
   const [mode,setmode]=useState(`light`);
    // const [alert,setAlert]=useState(null);

    // const showAlert = (message,type)=>{
    //    setAlert({
    //      msg: message,
    //      type: type
    //    })
    // }
   
   const toggleMode=()=>{
  
     if (mode==='light') {
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      // showAlert('Dark mode enable','info');
      document.title='Instaily-Dark-mode';
     }
     else{
      setmode('light');
      document.body.style.backgroundColor='white';
      // showAlert('Light mode enable','info')
      document.title='Instaily-Light-mode';
     }
   }

  return (
  <>

  <Navbar title="Instaily Acedemy" about="About Instaily" link="New Registration" mode={mode} toggleMode={toggleMode} />
  {/* <Alert alert={alert}/> */}
  <div className="container my-3"> 
  {/* change my */}
  <TextForm heading="Write your Text " mode={mode}/>
  <About/>


  </div>
  
  
  </>
  );
}

export default App;
