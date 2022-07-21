import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Botao, Container, ContainerRegistro, Input, Logo, TextoErro, TextoErroInput } from './styles'

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [erro, setErro] = useState('')
  const dispatch = useDispatch()
  const navegacao = useNavigate()

  const enviaEmail = () => {
    if (email === '') {
      setEmailError('Email inválido')
      return
    }
    alert(
      'Um email foi enviado, verifique sua caixa de mensagens para prosseguir com a redefinição da senha'
    )
    navegacao('/login')
  }

  return (
    <Container>
      <ContainerRegistro>
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
        <TextoErroInput>{emailError}</TextoErroInput>
        <Botao
          onClick={() => {
            enviaEmail()
          }}
        >
          Enviar
        </Botao>
        {erro !== '' && <TextoErro>{erro}</TextoErro>}
      </ContainerRegistro>
    </Container>
  )
}
export default ForgotPassword
