import React from 'react'

function Header(props) {
    
  return (
    <div className={`bg-${props.mode}`}>
      <label htmlFor='enableModer'>
        <input onClick={props.toggleMode} type='checkbox' name='' id='enableModer' /> Enable Dark Mode
      </label>
    </div>
  );
}

export default Header