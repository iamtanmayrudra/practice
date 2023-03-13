import React, {useState} from 'react'

function Hooks() {

  const [add, setAdd] = useState("Default Value");

  const handleUpClick = () => {
    // console.log("Clicked");
    let upText = add.toLocaleUpperCase();
    setAdd(upText);
  };

  const handleLoClick = () => {
    // console.log("Clicked");
    let upText = add.toLocaleLowerCase();
    setAdd(upText);
  };

  const handleClear = () => {
    // console.log("Clicked");
    let upText = "";
    setAdd(upText);
  };

  const [btnSelect, setbtnSelect] = useState("Select All")
  const handleSelect = () =>{
    let textSelect = document.getElementById("textBox")
    textSelect.select()
    navigator.clipboard.writeText(textSelect.value)
    setbtnSelect("All Selected")
  }
  
  const handleOnChange = (event) => {
    console.log("Clicked");
    setAdd(event.target.value);
  };

  return (
    <div className="hooksArea" style={{ padding: "15px" }}>
      <p> All the very</p>
      <textarea value={add} onChange={handleOnChange} id="textBox" style={{ width: "100%", height: "100px" }} />
      <br></br>
      <button onClick={handleUpClick}>To Uppercase</button>
      <button onClick={handleLoClick}>To Lowercase</button>
      <button onClick={handleClear}>Clear</button>
      <button onClick={handleSelect}>{btnSelect}</button>


      <p>
        {add.length} of charcter and {add}
      </p>
    </div>
  );
}

export default Hooks