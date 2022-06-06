import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  const togglemode=()=>{
    if(mode==='light')
    {setMode('dark');
    document.body.style.backgroundColor='black'
    document.body.style.color='white';
    showAlert("Dark Mode enabled","success");
  
  }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light mode enables","success");
    }
  }

  
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,  
      type: type
    })
  
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  
  const [mode, setMode]= useState('light');// whether the mode is light or dark
  const [alert,setAlert]= useState(null);

  return (
    <>
  <Router>
    <Navbar title="TextUtils"  mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
    <div className="container">
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
 <TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} />           
          </Route>
    </Switch>
 </div>
 </Router>
  </>
  );

}

export default App;
