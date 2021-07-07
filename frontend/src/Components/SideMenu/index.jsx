import React, { useState } from 'react'
import './styles.css'
import { VscCompareChanges } from 'react-icons/vsc'
import { FiX, FiUser, FiUsers, FiLogOut } from 'react-icons/fi'
import {
  goToPatients,
  goToNurses,
  goToLogin,
  goToProfile,
} from '../../Services/navigation'

export default function SideMenu(props) {
  const logout = (ev) => {
    localStorage.removeItem('isauth')
    localStorage.removeItem('auth_token')

    goToLogin()
  }
  return (
    <div id="sideMenu_body">
      <div className="sideMenu_content">
        <div className="sideMenu_option" onClick={goToProfile}>
          <FiUser color="#00CEC8" size="30" />
          <span>Perfil</span>
        </div>
        <div className="sideMenu_option" onClick={goToPatients}>
          <FiUsers color="#00CEC8" size="30" />
          <span>Pacientes</span>
        </div>
        <div className="sideMenu_option" onClick={goToNurses}>
          <FiUsers color="#00CEC8" size="30" />
          <span>Enfermeiros</span>
        </div>
      </div>

      <div className="sideMenu_content" onClick={logout}>
        <div className="sideMenu_option">
          <FiLogOut color="#00CEC8" size="30" />
          <span>Sair</span>
        </div>
      </div>
    </div>
  )
}
