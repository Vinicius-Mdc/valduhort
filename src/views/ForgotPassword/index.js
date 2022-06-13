import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userLogin } from '../../reducers/user'
import {
  Button,
  Container,
  ErrorText,
  Input,
  RegisterWrapper,
  Logo,
  SignInLink,
  Text,
  InputErrorText,
} from './styles'

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const navigation = useNavigate()

  const handleSendEmail = () => {
    if (email === '') {
      setEmailError('Email inválido')
      return
    }
    alert(
      'Um email foi enviado, verifique sua caixa de mensagens para prosseguir com a redefinição da senha'
    )
    navigation('/login')
  }

  return (
    <Container>
      <RegisterWrapper>
        <Logo>ValduHort</Logo>

        <Input
          value={email}
          onChange={(e) => {
            setEmailError('')
            setEmail(e.target.value)
          }}
          type={'email'}
          placeholder="Email"
        />
        <InputErrorText>{emailError}</InputErrorText>
        <Button
          onClick={() => {
            handleSendEmail()
          }}
        >
          Enviar
        </Button>
        {error !== '' && <ErrorText>{error}</ErrorText>}
      </RegisterWrapper>
    </Container>
  )
}
export default ForgotPassword
