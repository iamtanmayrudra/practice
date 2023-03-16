import React, {useState} from 'react'

import TextEnhance from "./myComponents/TextEnhance";
import EnableMode from "./myComponents/EnableMode";
import Header from "./myComponents/Header";
import Alert from './myComponents/Alert';


function App() {

  const [mode, setMode] = useState(false);
  const [alert, setAlert] = useState(null);

  const showAlert = (message)=>{
    setAlert({
      message: message
    })
  }
  
  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = '#fff';
      showAlert("Dark mode enabled");
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = '#ddd';
      showAlert("Light mode enabled");
    }
  }


  return (
    <>
      <Header mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <TextEnhance />
      <EnableMode />
    </>
  );
}

export default App
