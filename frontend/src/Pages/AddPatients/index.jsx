import React, { useState, useEffect } from 'react'
import './styles.css'
import SideMenu from '../../Components/SideMenu'
import Header from '../../Components/Header'
import Input from '../../Components/Input'
import Button from '../../Components/Button'

export default function AddPatients(props) {
  return (
    <div id="addPatients_body">
      <div id="addPatients_content">
        <Header text="" type2="" />
        <SideMenu />
        <div id="addPatients_content_information">
          <Input />
          <Input />
          <Button />
        </div>
      </div>
    </div>
  )
}
