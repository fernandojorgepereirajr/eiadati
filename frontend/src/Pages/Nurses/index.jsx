import React, { useState, useEffect } from 'react'
import './styles.css'
import SideMenu from '../../Components/SideMenu'
import Header from '../../Components/Header'
import PopUp from '../../Components/PopUP'
import NurseCard from '../../Components/Cards/NurseCard'
import { goToAddNurse } from '../../Services/navigation'
import Api from '../../Services/api'

export default function Nurses(props) {
  const [popUpState, setPopUpState] = useState(false)
  const [id, setId] = useState('')
  const [nurses, setNurses] = useState([])


  useEffect(() => {
    const fetchNurses = async () => {
      try {
        const response = await Api.get('user/')
        setNurses(response.data)
      } catch (error) {}
    }
    fetchNurses()
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
  const goToEditNurse = (name, cpf) => {
    props.history.push({ pathname: '/edit-nurse', state: { name, cpf } })
  }

  return (
    <>
      <PopUp changePopUpState={changePopUpState} option="nurses" id={id} />

      <div id="content">
        <Header
          text1="Eiadati"
          text2="Enfermeiros"
          option="plus"
          onClickAction={goToAddNurse}
        />
        <div id="content_information">
          <SideMenu />
          <div className="cards">
            {
              nurses.map((nurse) => (
                <NurseCard
                  name={nurse.name}
                  cpf={nurse.cpf}
                  editOnClickAction={() => goToEditNurse(nurse.name, nurse.cpf)}
                  deleteOnClickAction={()=> changePopUpState(nurse.id)}
                />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
