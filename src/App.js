import React, {useState} from 'react'

import TextEnhance from "./myComponents/TextEnhance";
import EnableMode from "./myComponents/EnableMode";
import Header from "./myComponents/Header";
import Revised from "./myComponents/Revised";


function App() {

  const [mode, setMode] = useState(false); 
  
  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = '#fff'
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = '#ddd'
    }
  }

  return (
    <>
      <Header mode={mode} toggleMode={toggleMode} />
      <TextEnhance />
      <EnableMode />
      <Revised />
    </>
  );
}

export default App
