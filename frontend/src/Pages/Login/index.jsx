import React, { useState, useEffect } from 'react'
import './styles.css'
import Input from '../../Components/Input'
import Button from '../../Components/Button'

export default function Login(props) {
  return (
    <div id="login_body">
      <div id="login_content">
        <div id="login_content_left">
          <h1>Eiadati</h1>
          <img src="../../Images/medical-5459633.svg" alt="login" />
        </div>
        <div id="login_content_rigth">
          <Input />
          <Input />
          <Button />
        </div>
      </div>
    </div>
  )
}
