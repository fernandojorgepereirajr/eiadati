import React, { useState } from 'react'
import './styles.css'
import { FiX } from 'react-icons/fi'
import Button from '../Button'
import { goToHome } from '../../Services/navigation'

export default function DeletePopUp(props) {
  return (
    <>
      <div id="popUp">
        <div id="popUp_header">
          <h2>Você tem certeza que deseja excluir?</h2>
        </div>
        <div id="popUp_close" onClick={() => props.changePopUpState()}>
          <FiX color="white" size="24" />
        </div>
        <Button title="Confirmar" onChangeAction={goToHome} />
      </div>
    </>
  )
}
