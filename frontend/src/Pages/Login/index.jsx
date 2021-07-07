import React, { useState } from 'react'
import './styles.css'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import { goToHome } from '../../Services/navigation'
import Api from '../../Services/api'

export default function Login(props) {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const changeName = (ev) => {
    setName(ev.target.value)
  }

  const changePassword = (ev) => {
    setPassword(ev.target.value)
  }
  const handleLogin = async () => {
    try {
      const body = {
        name: name,
        password: password,
      }
      let response = await Api.post('auth/', body)
      const token = response.data[0]
      localStorage.setItem('auth_token', token)
      localStorage.setItem('role', response.data[1])
      localStorage.setItem('isauth', true)

      goToHome()
    } catch (error) {}
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
        <Button title="Entrar" onClickAction={handleLogin} />
      </div>
    </div>
  )
}
