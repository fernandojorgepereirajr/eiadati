import React, { useState } from 'react'
import './styles.css'
import SideMenu from '../../Components/SideMenu'
import Header from '../../Components/Header'

export default function Profile(props) {
  const [name, setNome] = useState('')
  const [cpf, setCPF] = useState('')

  return (
    <div id="content">
      <Header text1="Eiadati" text2="Perfil" />
      <div id="content_information">
        <SideMenu />
        <div id="home_content_information_text">
          <div className="card">
            <div className="cardNurse_content">
              <div className="card_information left">
                <span>
                  <b>Nome: </b>
                  {name}
                </span>
              </div>
              <div className="card_information">
                <span>
                  <b>CPF: </b>
                  {cpf}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
