import React, { useState } from "react"

function DarkMode() {

  const [myStyle, setMyStyle] = useState({
    background: "black",
    border: "1px solid #222",
    color: "white"
  })

  const [darkText, setDarkText] = useState("Dark Mode")
  const [lightText, setLightText] = useState("Dark Mode")

  const darkStyle = ()=>{
    if(myStyle.color === 'white'){
      setMyStyle({
        background: "black",
        border: "1px solid #222",
        color: "#fff"
      })
      setDarkText("Dark Mode");
    }
    else{
      setMyStyle({
        background: "orange",
        border: "1px solid yellow",
        color: "#000"
      })
      setDarkText("Light Mode");
    }
  }
  const lightStyle = ()=>{
    if(myStyle.color === 'white'){
      setMyStyle({
        background: "orange",
        border: "1px solid yellow",
        color: "#000"
      })
      setLightText("Light Mode");
    }
    else{
      setMyStyle({
        background: "black",
        border: "1px solid #222",
        color: "#fff"
      })
      setLightText("Dark Mode");
    }
  }
  

  return (
    <div style={myStyle}>
        <textarea style={myStyle} cols="30" rows="5"></textarea><br/>
        <button onClick={darkStyle}>{darkText}</button>
        <button onClick={lightStyle}>{lightText}</button>
    </div>
  )
}

export default DarkMode
