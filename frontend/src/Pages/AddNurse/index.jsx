import React, { useState } from 'react'
import './styles.css'
import SideMenu from '../../Components/SideMenu'
import Header from '../../Components/Header'
import { goToNurses } from '../../Services/navigation'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import Api from '../../Services/api'

export default function AddNurse(props) {
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
  const addNurse = async () => {
      const body = {
        name: name,
        password: password,
        cpf: cpf,
      }
        try {
          await Api.post('user/', body)
          goToNurses()
        } catch (error) {
        }
      
    }

  return (
    <div id="content">
      <Header text1="Eiadati" text2="Adicionar Enfermeiro" />
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
          <Button title="Adicionar" onClickAction={addNurse} />
        </div>
      </div>
    </div>
  )
}
