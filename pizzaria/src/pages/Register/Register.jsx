import React, { useState } from 'react'
import './Register.js'
import { RegisterContainer } from './Register.js'
import Input from '../../components/Inputs/Input.jsx'
import Button from '../../components/button/Button.jsx'

const Register = () => {

    const [name, setName] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")

  return (
    <RegisterContainer>
        <h1>Cadastrar usuário</h1>
        <form action="">
            <Input type='text' placeholder='Nome' onChange={(e) => setName(e.target.value)} htmlFor='name' id='name'/>

            <Input type='text' placeholder='Sobrenome' onChange={(e) => setSobrenome(e.target.value)} htmlFor='Sobrenome' id='Sobrenome'/>

            <Input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} htmlFor='email' id='email'/>

            <Input type='password' placeholder='Sua senha' onChange={(e) => setpassword(e.target.value)} htmlFor='password' id='password'/>

            <Input type='password' placeholder='Confirmar senha' onChange={(e) => setConfirmpassword(e.target.value)} htmlFor='Confirmpassword' id='Confirmpassword'/>
        </form>
        <Button childreen='Cadastrar'/>
    </RegisterContainer>
  )
}

export default Register