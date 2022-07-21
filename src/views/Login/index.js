import React, { useEffect, useState } from 'react'
import {ClipLoader} from 'react-spinners'
import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUsuario } from '../../reducers/usuario'
import { login } from '../../services/authentication.service'
import { Botao, Container, ContainerLogin, Input, LinkEsqueceuSenha, LinkRegistro, Logo, SpinnerContainer, Texto, TextoError } from './styles'

function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [loading, setLoading] = useState(false)
  const [cookies, setCookie] = useCookies(['usuario'])
  const dispatch = useDispatch()
  const navegacao = useNavigate()

  const verificaLogin = async () => {
    if (email === '' || senha === '') {
      setErro('Dados inválidos')
      return
    }
    try{
      setLoading(true)
      const auth = await login(email, senha)
      
      dispatch(
        loginUsuario({
          nome: 'Vinicius',
          email,
          token: '123',
          id: '1234567890',
        })
      )
      setCookie('nome', auth.nome, { path: '/' })
      setCookie('email', email, { path: '/' })
      setCookie('token', auth.token, { path: '/' })
      setCookie('id', auth.id, { path: '/' })
      setLoading(false)
      navegacao('/')
    } catch(e){
      setErro('Email ou senha inválida!')
      setLoading(false)
    }
  }

  useEffect(() => {
    if (cookies.id) {
      navegacao('/')
    }
  }, [])

  return (
    <Container>
      <ContainerLogin>
        <Logo>ValduHort</Logo>
        <Input
          value={email}
          onChange={(e) => {
            setErro('')
            setEmail(e.target.value)
          }}
          type={'text'}
          placeholder="Email"
        />
        <Input
          value={senha}
          onChange={(e) => {
            setErro('')
            setSenha(e.target.value)
          }}
          type={'password'}
          placeholder="Senha"
        />
        <LinkEsqueceuSenha to="/esqueceuSenha">
          Esqueceu a senha?
        </LinkEsqueceuSenha>
        <Botao
          onClick={() => {
            verificaLogin()
          }}
        >
          {loading ? (
            <SpinnerContainer>
              <ClipLoader color={'white'} loading={loading}/>
            </SpinnerContainer>
          ) : 'Entrar'} 
        </Botao>
        <TextoError>{erro}</TextoError>
        <Texto>
          Não possui cadastro?{' '}
          <LinkRegistro to="/registro">Cadastre-se</LinkRegistro>
        </Texto>
      </ContainerLogin>
    </Container>
  )
}
export default Login
