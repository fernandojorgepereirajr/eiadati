import React, { useState, useEffect } from 'react'
import './styles.css'
import SideMenu from '../../Components/SideMenu'
import Header from '../../Components/Header'
import PatientCard from '../../Components/Cards/PatientCard'
import PopUp from '../../Components/PopUP'
import { goToAddPatient, goToEditPatient } from '../../Services/navigation'

export default function Patients(props) {
  const [popUpState, setPopUpState] = useState(false)
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
  useEffect(() => {
    const handlePopUp = () => {
      const popUp = document.getElementById('popUp')
      const content = document.getElementById('content')

      if (!popUpState) {
        popUp.style.visibility = 'hidden'
        popUp.style.opacity = 0
        content.style.filter = 'none'
      } else {
        popUp.style.visibility = 'visible'
        popUp.style.opacity = 1
        content.style.filter = 'blur(10px)'
      }
    }

    handlePopUp()
  }, [popUpState])

  const changePopUpState = () => {
    setPopUpState(false)
  }

  return (
    <>
      <PopUp changePopUpState={changePopUpState} />

      <div id="content">
        <Header
          text1="Eiadati"
          text2="Pacientes"
          option="plus"
          onClickAction={goToAddPatient}
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
                editOnClickAction={goToEditPatient}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
