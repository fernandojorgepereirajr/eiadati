import React, { useState, useEffect } from 'react'
import './styles.css'
import SideMenu from '../../Components/SideMenu'
import Header from '../../Components/Header'
import Input from '../../Components/Input'
import Button from '../../Components/Button'

export default function AddNurses(props) {
  return (
    <div id="addNurses_body">
      <div id="addNurses_content">
        <Header text="" type2="" />
        <SideMenu />
        <div id="addNurses_content_information">
          <Input />
          <Input />
          <Button />
        </div>
      </div>
    </div>
  )
}
