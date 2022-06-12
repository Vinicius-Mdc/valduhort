import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userLogin } from '../../reducers/user'
import { Button, Container, ErrorText, Input, RegisterWrapper, Logo, SignInLink, Text, InputErrorText } from './styles'

function Register() {
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const navigation = useNavigate()

  const handleRegister = () => {
    if(name === ''){
      setNameError('Por favor digite seu nome')
      return
    }
    if(email === ''){
      setEmailError('Email inválido')
      return
    }
    if(password.length < 6){
      setPasswordError('Senha deve conter no mínimo 6 caracteres')
      return
    }
    if(confirmPassword !== password){
      setConfirmPasswordError('Senhas não conferem')
      return
    }
    dispatch(userLogin({
      name,email, id: '123', token: '1234567890'
    }))
    navigation('/')

  }

  return (
    <Container>
      <RegisterWrapper>
        <Logo>ValduHort</Logo>
        <Input value={name} onChange={(e) => {
          setNameError('')
          setName(e.target.value)
        }} type={'text'} placeholder='Nome' />
        <InputErrorText>{nameError}</InputErrorText>
        <Input value={email} onChange={(e) => {
          setEmailError('')
          setEmail(e.target.value)
        }} type={'email'} placeholder='Email' />
        <InputErrorText>{emailError}</InputErrorText>
        <Input value={password} onChange={(e) => {
          setPasswordError('')
          setPassword(e.target.value)
        }} type={'password'} placeholder='Senha' />
        <InputErrorText>{passwordError}</InputErrorText>
        <Input value={confirmPassword} onChange={(e) => {
          setConfirmPasswordError('')
          setConfirmPassword(e.target.value)
        }} type={'password'} placeholder='Confirme a senha' />
        <InputErrorText>{confirmPasswordError}</InputErrorText>
        <Button onClick={() => {
          handleRegister()
        }}>Cadastre-se</Button>
        {error !== '' && (
          <ErrorText>{error}</ErrorText>
        )}
      </RegisterWrapper>
    </Container>
  )
}
export default Register
