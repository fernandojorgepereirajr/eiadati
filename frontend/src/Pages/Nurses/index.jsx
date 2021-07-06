import React, { useState, useEffect } from 'react'
import './styles.css'
import SideMenu from '../../Components/SideMenu'
import Header from '../../Components/Header'
import NurseCard from '../../Components/Cards/NurseCard'
import { goToAddNurses } from '../../Services/navigation'

export default function Nurses(props) {
  const [nurses, setNurses] = useState([
    {
      name: 'Redson Farias Barbosa Filho',
      cpf: '707.404.450-80',
    },
    {
      name: 'Dimas Wesley Farias de Araújo',
      cpf: '706.404.451-80',
    },
    {
      name: 'José Roberto da Silva',
      cpf: '708.404.450-80',
    },
    {
      name: 'Redson Farias Barbosa Filho',
      cpf: '707.404.450-80',
    },
    {
      name: 'Dimas Wesley Farias de Araújo',
      cpf: '706.404.451-80',
    },
    {
      name: 'José Roberto da Silva',
      cpf: '708.404.450-80',
    },
    {
      name: 'Redson Farias Barbosa Filho',
      cpf: '707.404.450-80',
    },
    {
      name: 'Dimas Wesley Farias de Araújo',
      cpf: '706.404.451-80',
    },
    {
      name: 'José Roberto da Silva',
      cpf: '708.404.450-80',
    },
  ])

  return (
    <div id="content">
      <Header
        text1="Eiadati"
        text2="Enfermeiros"
        option="plus"
        onClickAction={goToAddNurses}
      />
      <div id="content_information">
        <SideMenu />
        <div className="cards">
          {nurses.map((nurse) => (
            <NurseCard name={nurse.name} cpf={nurse.cpf} />
          ))}
        </div>
      </div>
    </div>
  )
}
