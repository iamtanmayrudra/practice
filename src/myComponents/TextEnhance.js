import React, {useState} from 'react'

function Hooks() {

  const [add, setAdd] = useState("Default Value");

  const handleUpClick = () => {
    console.log("Clicked");
    let upText = add.toLocaleUpperCase();
    setAdd(upText);
  };

  const handleLoClick = () => {
    console.log("Clicked");
    let upText = add.toLocaleLowerCase();
    setAdd(upText);
  };

  const handleCear = () => {
    console.log("Clicked");
    let upText = "";
    setAdd(upText);
  };
  
  const handleOnChange = (event) => {
    console.log("Clicked");
    setAdd(event.target.value);
  };

  
  const selectTextCopy = () => {
    console.log("Copied");
    // let a = 5o
  };

  return (
    <div className="hooksArea" style={{ padding: "15px" }}>
      <p> All the very {add}</p>
      <textarea
        value={add}
        onChange={handleOnChange}
        style={{ width: "100%", height: "100px" }}
      />
      <br></br>
      <button onClick={handleUpClick}>To Uppercase</button>
      <button onClick={handleLoClick}>To Lowercase</button>
      <button onClick={handleCear}>Clear</button>
      <button onClick={selectTextCopy}>Copy Text</button>

      <p>
        {add.length} of charcter and {add}
      </p>
    </div>
  );
}

export default Hooks