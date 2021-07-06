import React from 'react'
import './styles.css'

export default function Button(props) {
  return (
    <button className="button" onClick={props.onClickAction}>
      <span>{props.title}</span>
    </button>
  )
}
