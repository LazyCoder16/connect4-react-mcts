import React from 'react'

export default function Box({onClick, color}) {
  return (
    <div className="box" onClick={onClick}>
      { color !== null &&
        <div className="coin" style={{backgroundColor: color}}></div>
      }
    </div>
  )
}
