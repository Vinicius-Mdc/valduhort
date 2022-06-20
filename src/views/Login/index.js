import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userLogin } from '../../reducers/user'
import {
  Button,
  Container,
  ErrorText,
  ForgotPasswordLink,
  Input,
  LoginWrapper,
  Logo,
  SignUpLink,
  Text,
} from './styles'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [cookies, setCookie] = useCookies(['user'])
  const dispatch = useDispatch()
  const navigation = useNavigate()

  const handleLogin = () => {
    if (email === '' || password === '') {
      setError('Dados inválidos')
      return
    }
    dispatch(
      userLogin({
        name: 'Vinicius',
        email,
        token: '123',
        id: '1234567890',
      })
    )
    setCookie('name', 'Vinicius', { path: '/' })
    setCookie('email', email, { path: '/' })
    setCookie('token', '123', { path: '/' })
    setCookie('id', '1234567890', { path: '/' })
    navigation('/')
  }

  useEffect(() => {
    if (cookies.id) {
      navigation('/')
    }
  }, [])

  return (
    <Container>
      <LoginWrapper>
        <Logo>ValduHort</Logo>
        <Input
          value={email}
          onChange={(e) => {
            setError('')
            setEmail(e.target.value)
          }}
          type={'text'}
          placeholder="Email"
        />
        <Input
          value={password}
          onChange={(e) => {
            setError('')
            setPassword(e.target.value)
          }}
          type={'password'}
          placeholder="Senha"
        />
        <ForgotPasswordLink to="/forgotPassword">
          Esqueceu a senha?
        </ForgotPasswordLink>
        <Button
          onClick={() => {
            handleLogin()
          }}
        >
          Entrar
        </Button>
        <ErrorText>{error}</ErrorText>
        <Text>
          Não possui cadastro?{' '}
          <SignUpLink to="/register">Cadastre-se</SignUpLink>
        </Text>
      </LoginWrapper>
    </Container>
  )
}
export default Login
