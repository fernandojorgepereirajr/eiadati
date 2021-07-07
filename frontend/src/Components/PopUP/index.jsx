import React from 'react'
import './styles.css'
import { FiX } from 'react-icons/fi'
import Button from '../Button'
import { goToNurses, goToPatients } from '../../Services/navigation'
import Api from '../../Services/api'

export default function DeletePopUp(props) {
  const deleteNurse = async () => {
    try {
      await Api.delete(`/user/${props.id}`)
    } catch (error) {
      console.log(error)
    }
    goToNurses()
  }
  const deletePatient = async () => {
    try {
      await Api.delete(`/patient/${props.id}`)
    } catch (error) {
      console.log(error)
    }
    goToPatients()
  }


  return (
    <>
      <div id="popUp">
        <div id="popUp_header">
          <h2>Você tem certeza que deseja excluir?</h2>
        </div>
        <div id="popUp_close" onClick={() => props.changePopUpState()}>
          <FiX color="white" size="24" />
        </div>
        <Button
          title="Confirmar"
          onClickAction={props.option === 'nurses' ? deleteNurse : deletePatient}
        />
      </div>
    </>
  )
}
