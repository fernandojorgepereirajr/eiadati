import React from 'react'
import './styles.css'
import { FiTrash2, FiEdit } from 'react-icons/fi'

export default function NurseCard(props) {
  return (
    <div className="card">
      <div className="cardNurse_content">
        <div className="card_information left">
          <span>
            <b>Nome: </b>
            {props.name}
          </span>
        </div>
        <div className="card_information">
          <span>
            <b>CPF: </b>
            {props.cpf}
          </span>
        </div>
      </div>
      <div className="icons_div">
        <div id="copy_icon" onClick={props.editOnClickAction}>
          <FiEdit color="#f5f5f5" size="20" />
        </div>
        <div id="trash_icon">
          <FiTrash2 color="#f5f5f5" size="20" />
        </div>
      </div>
    </div>
  )
}
