import React from 'react'

export default function Box(props) {
  const c = props.color;
  return (
    <div className="box" onClick={props.onClick} style={{backgroundColor: c}}>
      
    </div>
  )
}
