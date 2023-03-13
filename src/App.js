import React, {useState} from 'react'

import TextEnhance from "./myComponents/TextEnhance";
import EnableMode from "./myComponents/EnableMode";
import Header from "./myComponents/Header";

function App() {

  const [mode, setMode] = useState(false); 
  
  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light')
    }
    else{
      setMode('dark')
    }
  }

  return (
    <>
      <Header mode={mode} toggleMode={toggleMode} />
      <TextEnhance />
      <EnableMode />
    </>
  );
}

export default App
