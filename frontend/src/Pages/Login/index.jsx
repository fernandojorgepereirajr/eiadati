import React, { useState, useEffect } from 'react'
import './styles.css'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import { goToHome } from '../../Services/navigation'

export default function Login(props) {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const changeName = (ev) => {
    setName(ev.target.value)
  }

  const changePassword = (ev) => {
    setPassword(ev.target.value)
  }

  return (
    <div id="login">
      <div id="login_content">
        <div id="login_content_text">
          <h1>Eiadati</h1>
        </div>
        <Input
          type="name"
          placeholder={'Digite o nome'}
          onChangeAction={changeName}
          value={name}
        />
        <Input
          type="password"
          placeholder={'Digite a senha'}
          onChangeAction={changePassword}
          value={password}
        />
        <Button title="Entrar" onChangeAction={goToHome} />
      </div>
    </div>
  )
}
