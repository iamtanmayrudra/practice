import React, {useState} from 'react'

function Revised() {

const [select, setSelect] = useState("Type here");
const handleClicker = ()=>{
  let wording = document.getElementById("textBox")
  setSelect.select();
}

const textChangehandler = (event)=>{
  setSelect(event.target.value)
}

  return (
    <div>
      <textarea value={select} onChange={textChangehandler} cols="30" rows="10" id='textBox'></textarea>
      <button onClick={handleClicker}>Convert</button>
    </div>
  )
}

export default Revised
