import React, { useState, useEffect } from 'react'
import './styles.css'
import SideMenu from '../../Components/SideMenu'
import Header from '../../Components/Header'
import { goToNurses } from '../../Services/navigation'
import Input from '../../Components/Input'
import Button from '../../Components/Button'

export default function EditNurses(props) {
  const [name, setName] = useState('')
  const [cpf, setCPF] = useState('')
  const [password, setPassword] = useState('')

  const changeName = (ev) => {
    setName(ev.target.value)
  }
  const changeCPF = (ev) => {
    setCPF(ev.target.value)
  }
  const changePassword = (ev) => {
    setPassword(ev.target.value)
  }
  useEffect(() => {
    const newName = props.location?.state?.name
    const newCPF = props.location?.state?.cpf
    setName(newName)
    setCPF(newCPF)
  }, [])

  return (
    <div id="content">
      <Header text1="Eiadati" text2="Editar Enfermeiro" />
      <div id="content_information">
        <SideMenu />
        <div className="form">
          <Input
            type="name"
            placeholder={'Digite o nome'}
            onChangeAction={changeName}
            value={name}
          />
          <Input
            type="cpf"
            placeholder={'Digite o CPF'}
            onChangeAction={changeCPF}
            value={cpf}
          />
          <Input
            type="password"
            placeholder={'Digite a senha'}
            onChangeAction={changePassword}
            value={password}
          />
          <Button title="Adicionar" onChangeAction={goToNurses} />
        </div>
      </div>
    </div>
  )
}
