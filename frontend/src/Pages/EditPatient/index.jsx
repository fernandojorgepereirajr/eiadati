import React, { useState, useEffect } from 'react'
import './styles.css'
import SideMenu from '../../Components/SideMenu'
import Header from '../../Components/Header'
import { goToPatients } from '../../Services/navigation'
import Input from '../../Components/Input'
import Button from '../../Components/Button'

export default function EditPatient(props) {
  const [name, setName] = useState('')
  const [cpf, setCPF] = useState('')
  const [date, setDate] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [uf, setUF] = useState('')

  useEffect(() => {
    const newName = props.location?.state?.name
    const newCPF = props.location?.state?.cpf
    const newDate = props.location?.state?.date
    const newUF = props.location?.state?.uf
    const newWeight = props.location?.state?.weight
    const newHeight = props.location?.state?.height

    setName(newName)
    setCPF(newCPF)
    setDate(newDate)
    setUF(newUF)
    setWeight(newWeight)
    setHeight(newHeight)
  }, [])

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
      <Header text1="Eiadati" text2="Editar Paciente" />
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
          <Button title="Adicionar" onChangeAction={goToPatients} />
        </div>
      </div>
    </div>
  )
}
