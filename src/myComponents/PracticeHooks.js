import React, {useState} from 'react';

export default function Hooks() {
  const [color, setcolor] = useState();
  setcolor("Default Color");

  const colorHandler = ()=> {
    console.log("Clicked");
  }

  return (
    <>
      <input value={color} /><br/>
      <button onClick={colorHandler}>Go</button>
      <p>qsdvf,gmkbjj</p>
    </>
  )
}
