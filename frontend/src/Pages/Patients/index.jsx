import React, { useState, useEffect } from 'react'
import './styles.css'
import SideMenu from '../../Components/SideMenu'
import Header from '../../Components/Header'
import PatientCard from '../../Components/Cards/PatientCard'
import PopUp from '../../Components/PopUP'
import { goToAddPatient } from '../../Services/navigation'
import Api from '../../Services/api'

export default function Patients(props) {
  const [popUpState, setPopUpState] = useState(false)
  const [id, setId] = useState('')
  const [patients, setPatients] = useState([])

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await Api.get('patient/')
        setPatients(response.data)
      } catch (error) {}
    }
    fetchPatients()
  }, [])

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

  const changePopUpState = (id) => {
    setId(id)
    setPopUpState(!popUpState)
  }

  const goToEditPatient = (name, cpf, date, uf, weight, height) => {
    props.history.push({
      pathname: '/edit-patient',
      state: { name, cpf, date, uf, weight, height },
    })
  }

  return (
    <>
      <PopUp changePopUpState={changePopUpState} id={id} />

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
                editOnClickAction={() =>
                  goToEditPatient(
                    patient.name,
                    patient.cpf,
                    patient.date,
                    patient.uf,
                    patient.weight,
                    patient.height,
                  )
                }
                deleteOnClickAction={()=> changePopUpState(patient.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
