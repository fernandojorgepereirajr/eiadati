import React, { useState } from 'react'
import './styles.css'
import SideMenu from '../../Components/SideMenu'
import Header from '../../Components/Header'
import { goToPatients } from '../../Services/navigation'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import Api from '../../Services/api'

export default function AddPatient(props) {
  const [name, setName] = useState('')
  const [cpf, setCPF] = useState('')
  const [date, setDate] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [uf, setUF] = useState('')



  const addPatient = async () => {
    const body = {
      name: name,
      date: date,
      weight: weight,
      height: height,
      uf: uf,
      cpf: cpf,
    }
      try {
        await Api.post('patient/', body)
        goToPatients()
      } catch (error) {
      }
    }
  



  const changeName = (ev) => {
    setName(ev.target.value)
  }
  const changeCPF = (ev) => {
    setCPF(ev.target.value)
  }
  const changeDate = (ev) => {
    setDate(ev.target.value)
  }
  const changeWeight = (ev) => {
    setWeight(ev.target.value)
  }
  const changeHeight = (ev) => {
    setHeight(ev.target.value)
  }
  const changeUF = (ev) => {
    setUF(ev.target.value)
  }

  return (
    <div id="content">
      <Header text1="Eiadati" text2="Adicionar Paciente" />
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
            type="date"
            placeholder={'Digite a data'}
            onChangeAction={changeDate}
            value={date}
          />
          <Input
            type="weight"
            placeholder={'Digite o peso'}
            onChangeAction={changeWeight}
            value={weight}
          />
          <Input
            type="height"
            placeholder={'Digite a altura'}
            onChangeAction={changeHeight}
            value={height}
          />
          <Input
            type="uf"
            placeholder={'Digite o estado'}
            onChangeAction={changeUF}
            value={uf}
          />
          <Button title="Adicionar" onClickAction={addPatient} />
        </div>
      </div>
    </div>
  )
}
