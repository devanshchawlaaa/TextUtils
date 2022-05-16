import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './TextForm';
import React, { useState } from 'react';
import Alert from './Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Routes,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const togglemode = () => {
    if (mode === 'dark') {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success')
      document.title = 'TextUtils-Light Mode'
    }
    else {
      setmode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success')
      document.title = 'TextUtils-Dark Mode'
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode} about="About Us" />
        <Alert alert={alert} />
        <div className="container">
          {/* <Routes>
            <Route exact path="/About" element={<About />}>
            </Route>
            <Route exact path="/" element={ */}
            <TextForm showAlert={showAlert} heading="Enter text to Analyze below" mode={mode} />}>
            {/* </Route>
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
