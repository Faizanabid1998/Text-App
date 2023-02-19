
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alerts from './components/Alerts';
// import React from "react";
// import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Router, Route } from 'react-router-dom';


function App() {
  const [mode, setMode]=useState('light');
  const [alert, setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode=()=>{
    if (mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert('Dark mode has been enabled','success');
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('Light mode has been enabled','success');
    }
  }


  return (
  <>
  <Router>
      <Navbar navTitle="Textutils" About="About textUtils" mode={mode} toggleMode={toggleMode}/>
      <Alerts alert={alert}/>
     <div className="container">
     
     <Routes>
          <Route path="/about" element={<About />}/>
            

          <Route path="/" element={   <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
}/>
 
        </Routes>
      </div>
      </Router>
      
    </>
  );
}

export default App;
