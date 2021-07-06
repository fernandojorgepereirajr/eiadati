import React, { useState, useEffect } from 'react'
import './styles.css'
import SideMenu from '../../Components/SideMenu'
import Header from '../../Components/Header'
import PatientCard from '../../Components/Cards/PatientCard'
import { goToAddPatients } from '../../Services/navigation'

export default function Patients(props) {
  const [patients, setPatients] = useState([
    {
      name: 'Redson Farias Barbosa Filho',
      cpf: '707.404.450-80',
      date: '23/04/1997',
      weight: 68,
      height: 176,
      uf: 'PB',
    },
    {
      name: 'Dimas Wesley Farias de Araújo',
      cpf: '706.404.451-80',
      date: '09/11/1996',
      weight: 75,
      height: 180,
      uf: 'PB',
    },
    {
      name: 'José Roberto da Silva',
      cpf: '708.404.450-80',
      date: '04/11/2000',
      weight: 60,
      height: 172,
      uf: 'PB',
    },
    {
      name: 'Redson Farias Barbosa Filho',
      cpf: '707.404.450-80',
      date: '23/04/1997',
      weight: 68,
      height: 176,
      uf: 'PB',
    },
    {
      name: 'Dimas Wesley Farias de Araújo',
      cpf: '706.404.451-80',
      date: '09/11/1996',
      weight: 75,
      height: 180,
      uf: 'PB',
    },
    {
      name: 'José Roberto da Silva',
      cpf: '708.404.450-80',
      date: '04/11/2000',
      weight: 60,
      height: 172,
      uf: 'PB',
    },
    {
      name: 'Redson Farias Barbosa Filho',
      cpf: '707.404.450-80',
      date: '23/04/1997',
      weight: 68,
      height: 176,
      uf: 'PB',
    },
    {
      name: 'Dimas Wesley Farias de Araújo',
      cpf: '706.404.451-80',
      date: '09/11/1996',
      weight: 75,
      height: 180,
      uf: 'PB',
    },
    {
      name: 'José Roberto da Silva',
      cpf: '708.404.450-80',
      date: '04/11/2000',
      weight: 60,
      height: 172,
      uf: 'PB',
    },
  ])

  return (
    <div id="content">
      <Header
        text1="Eiadati"
        text2="Pacientes"
        option="plus"
        onClickAction={goToAddPatients}
      />
      <div id="content_information">
        <SideMenu />
        <div className="cards">
          {patients.map((patient) => (
            <PatientCard
              name={patient.name}
              cpf={patient.cpf}
              date={patient.date}
              uf={patient.uf}
              weight={patient.weight}
              height={patient.height}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
