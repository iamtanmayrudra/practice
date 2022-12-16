import { useState } from "react"

function BackgroundChange() {

  const[aboutStyle, setAboutStyle] = useState({
    padding: '15px',
    background: "#ddd"
  })

  const [textOp, settextOp] = ("Change Background")
  const [textOpLight, LightsettextOp] = ("Change Background")

  const changeStyle = ()=>{
    if(aboutStyle.color === 'white'){
      setAboutStyle({
        background: "black",
        color: "white",
        padding: '15px',
      })
      settextOp("Change Background")
    }
    else{
      setAboutStyle({
        background: "#f00",
        color: "#ddd",
        padding: '15px',
      })
      settextOp("Change Background Dark")
    }
  }

  const changeStyleLight = ()=>{
    if(aboutStyle.color === 'white'){
      setAboutStyle({
        background: "black",
        color: "white",
        padding: '15px',
      })
      LightsettextOp("Change Background")
    }
    else{
      setAboutStyle({
        background: "yellow",
        color: "red",
        padding: '15px',
      })
      LightsettextOp("Change Background Dark")
    }
  }
  

  return (
    <div style={aboutStyle}>
        <textarea style={{background: 'white', border: '1px solid #ddd', width: '100%'}} cols="30" rows="5"></textarea><br/>
        <button onClick={changeStyle}>{textOp}</button>
        <button onClick={changeStyleLight}>{textOpLight}</button>
    </div>
  )
}

export default BackgroundChange