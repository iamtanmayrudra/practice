import React from 'react'

function Alert(props) {
  return (
    props.alert && <div className="alertBox">
      {props.alert.message}
    </div>
  )
}

export default Alert
