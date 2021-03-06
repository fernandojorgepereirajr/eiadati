import React, { useState } from 'react'
import './styles.css'
import { VscCompareChanges } from 'react-icons/vsc'
import { FiPlus } from 'react-icons/fi'
import { goToHome } from '../../Services/navigation'

export default function Header(props) {
  return (
    <>
      <div id="header_body">
        <div id="header_body_text">
          <h2 id="logo" onClick={goToHome}>
            {props.text1}
          </h2>
        </div>

        <div id="header_body_text">
          <h2>{props.text2}</h2>
        </div>

        {props.option === 'plus' ? (
          <FiPlus
            size="30"
            color="#fff"
            className="header_icon"
            onClick={props.onClickAction}
            title="Adicionar"
          />
        ) : (
          <div id="div_vazia"></div>
        )}
      </div>
    </>
  )
}
