import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, ErrorText, ForgotPasswordLink, Input, LoginWrapper, Logo, SignUpLink, Text } from './styles'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigation = useNavigate()

  return (
    <Container>
      <LoginWrapper>
        <Logo>ValduHort</Logo>
        <Input value={email} onChange={(e) => {
          setError('')
          setEmail(e.target.value)
        }} type={'email'} placeholder='Email' />
        <Input value={password} onChange={(e) => {
          setError('')
          setPassword(e.target.value)
        }} type={'password'} placeholder='Senha' />
        <ForgotPasswordLink to='/forgotPassword'>Esqueceu a senha?</ForgotPasswordLink>
        <Button onClick={() => {
          navigation('/')
        }}>Entrar</Button>
        <ErrorText>{error}</ErrorText>
        <Text>
          Não possui cadastro? <SignUpLink to='/signUp'>Cadastre-se</SignUpLink>
        </Text>
      </LoginWrapper>
    </Container>
  )
}
export default Login
