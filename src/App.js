import React from 'react'

import TextEnhance from "./myComponents/TextEnhance";
import EnableMode from "./myComponents/EnableMode";



function App() {
  return (
    <>
      <header mode={mode} toggleMode={toggleMode}>
        <label htmlFor="">
          <input type="checkbox" /> Enable Dark Mode
        </label>
      </header>
      <TextEnhance />
      <EnableMode />
    </>
  );
}

export default App
