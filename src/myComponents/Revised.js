import React, {useState} from 'react'

function Revised(props) {

const [selector, setSelector] = useState("Type here");
const handleClicker = ()=>{
  setSelector();
}

const textChangehandler = (event)=>{
  setSelector(event.target.value);
}

  return (
    <div>
      <textarea value={selector} onChange={textChangehandler} cols="30" rows="10" id='textReviseBox'></textarea>
      <button onClick={handleClicker}>Convert</button>
    </div>
  )
}

export default Revised
