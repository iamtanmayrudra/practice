import React, {useState} from 'react';

export default function Hooks() {
  const[ clicks, setClickes]= useState(" Make it akso")
  const clicker = () =>{
    console.log("clicked");
  } 

  return (
    <>
      <p>make in {clicker}</p>
      <button onClick={u}>Click</button>
    </>

  )
}
