import React, { useState, useEffect } from 'react'
import './styles.css'
import SideMenu from '../../Components/SideMenu'
import Header from '../../Components/Header'

export default function Home(props) {
  return (
    <div id="content">
      <Header text1="Eiadati" />
      <div id="content_information">
        <SideMenu />
        <div id="home_content_information_text">
          <h2>Sejam bem vindos ao Eaidati</h2>
        </div>
      </div>
    </div>
  )
}
