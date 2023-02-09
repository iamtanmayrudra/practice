import React, {useState} from 'react';

function Form(props) {

  const [text, setText] = useState("");

  const changeColor = ()=>{
    console.log("color changes")
  }

  const colorOncehange = (event)=>{
    // console.log("color changes")
    setText(event.target.value)
  }

  return (
    <div>
      <h2>{props.heading}</h2>
      <textarea name="" id="" cols="30" rows="10" value={text} onchange={colorOncehange}></textarea>
      <button onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default Form
