import React from 'react'
import './styles.css'

export default function Button(props) {
  return (
    <>
      <button
        className="custom_button"
        onClick={props.onClickAction}
        id={props.id}
      >
        {props.text}
      </button>
    </>
  )
}
