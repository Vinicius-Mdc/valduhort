import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {ClipLoader} from 'react-spinners'
import { loginUsuario } from '../../reducers/usuario'
import { registro } from '../../services/authentication.service'
import { Botao, Container, ContainerRegistro, Input, Logo, SpinnerContainer, TextoErro, TextoErroInput } from './styles'

function Register() {
  const [nome, setNome] = useState('')
  const [nomeError, setNomeError] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [senha, setSenha] = useState('')
  const [senhaError, setSenhaError] = useState('')
  const [confirmaSenha, setConfirmaSenha] = useState('')
  const [confirmaSenhaError, setConfirmaSenhaError] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [cookies, setCookie] = useCookies(['usuario'])
  const dispatch = useDispatch()
  const navigation = useNavigate()

  const registrar = async() => {
    if (nome === '') {
      setNomeError('Por favor digite seu nome')
      return
    }
    if (email === '') {
      setEmailError('Email inválido')
      return
    }
    if (senha.length < 6) {
      setSenhaError('Senha deve conter no mínimo 6 caracteres')
      return
    }
    if (confirmaSenha !== senha) {
      setConfirmaSenhaError('Senhas não conferem')
      return
    }

    const dadosRegistro = await registro(nome, email, senha)

    dispatch(
      loginUsuario({
        nome,
        email,
        id: dadosRegistro.id,
        token: dadosRegistro.token,
      })
    )
    setCookie('nome', nome, { path: '/' })
    setCookie('email', email, { path: '/' })
    setCookie('token', dadosRegistro.token, { path: '/' })
    setCookie('id', dadosRegistro.id, { path: '/' })
    navigation('/')
  }

  return (
    <Container>
      <ContainerRegistro>
        <Logo>ValduHort</Logo>
        <Input
          value={nome}
          onChange={(e) => {
            setNomeError('')
            setNome(e.target.value)
          }}
          type={'text'}
          placeholder="Nome"
        />
        <TextoErroInput>{nomeError}</TextoErroInput>
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
        <Input
          value={senha}
          onChange={(e) => {
            setSenhaError('')
            setSenha(e.target.value)
          }}
          type={'password'}
          placeholder="Senha"
        />
        <TextoErroInput>{senhaError}</TextoErroInput>
        <Input
          value={confirmaSenha}
          onChange={(e) => {
            setConfirmaSenhaError('')
            setConfirmaSenha(e.target.value)
          }}
          type={'password'}
          placeholder="Confirme a senha"
        />
        <TextoErroInput>{confirmaSenhaError}</TextoErroInput>
        <Botao
          onClick={() => {
            registrar()
          }}
        >
          {loading ? (
            <SpinnerContainer>
              <ClipLoader color={'white'} loading={loading}/>
          </SpinnerContainer>
          ) : 'Cadastre-se'}
        </Botao>
        {error !== '' && <TextoErro>{error}</TextoErro>}
      </ContainerRegistro>
    </Container>
  )
}
export default Register
