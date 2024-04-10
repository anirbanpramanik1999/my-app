
import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
   const [mode,setmode]=useState(`light`)
   const toggleMode=()=>{
  
     if (mode==='light') {
      setmode('dark')
      document.body.style.backgroundColor='#082d64'
     }
     else{
      setmode('light')
      document.body.style.backgroundColor='white'
     }
   }

  return (
  <>

  <Navbar title="Instaily Acedemy" about="About Instaily" link="New Registration" mode={mode} toggleMode={toggleMode} />
  <Alert/>
  <div className="container">
  <TextForm heading="Write your Text " mode={mode}/>
  </div>
  
  
  </>
  );
}

export default App;
