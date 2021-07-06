import React from 'react'
import './styles.css'
import { FiTrash2, FiEdit } from 'react-icons/fi'

export default function PatientCard(props) {
  return (
    <div className="patientCard">
      <div className="patientCard_content">
        <div className="patientCard_information left">
          <span>
            <b>Nome: </b>
            {props.name}
          </span>
        </div>
        <div className="patientCard_information">
          <div className="patientCard_buttons">
            <div className="icons_div">
              <div id="copy_icon" onClick={props.editOnClickAction}>
                <FiEdit color="#f5f5f5" size="20" />
              </div>
              <div id="trash_icon">
                <FiTrash2 color="#f5f5f5" size="20" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="patientCard_content">
        <div className="patientCard_information left">
          <span>
            <b>CPF: </b>
            {props.cpf}
          </span>
        </div>
        <div className="patientCard_information">
          <span>
            <b>UF: </b>
            {props.uf}
          </span>
        </div>
        <div className="patientCard_information left">
          <span>
            <b>Data: </b>
            {props.date}
          </span>
        </div>
      </div>

      <div className="patientCard_content">
        <div className="patientCard_information left">
          <span>
            <b>Peso: </b>
            {props.weight}kg
          </span>
        </div>
        <div className="patientCard_information">
          <span>
            <b>Altura: </b>
            {props.height}cm
          </span>
        </div>
      </div>
    </div>
  )
}
