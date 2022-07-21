import React, { useEffect, useState } from 'react'
import Home from './views/Home'
import Login from './views/Login'
import store from './store'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { CookiesProvider, useCookies } from 'react-cookie'
import Produtos from './views/Produtos'
import Carrinho from './views/Carrinho'
import ScrollToTop from './utils/scroll'
import Registro from './views/Registro'
import { selectCarrinho, selectToken, setCarrinho, loginUsuario } from './reducers/usuario'
import EsqueceuSenha from './views/EsqueceuSenha'

function App() {
  const [cookies, setCookie] = useCookies(['usuario'])
  const [carrinhoAtualizado, setCarrinhoAtualizado] = useState(false)
  const carrinho = useSelector(selectCarrinho)
  const token = useSelector(selectToken)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!token && carrinhoAtualizado) {
      localStorage.setItem('carrinho', JSON.stringify(carrinho))
    }
  }, [carrinho, carrinhoAtualizado, token])

  useEffect(() => {
    if (!token && cookies.token) {
      dispatch(
        loginUsuario({
          nome: cookies.nome,
          email: cookies.email,
          token: cookies.token,
          id: cookies.id,
        })
      )
    }
    if (!carrinhoAtualizado && !cookies.token) {
      const carrinhoAnterior = localStorage.getItem('carrinho')
      if (carrinhoAnterior) {
        const carrinhoSalvo = JSON.parse(carrinhoAnterior)
        dispatch(setCarrinho({ carrinho: carrinhoSalvo }))
      }
      setCarrinhoAtualizado(true)
    }
  }, [cookies.email, cookies.id, cookies.nome, cookies.token, dispatch, carrinhoAtualizado, token])

  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/esqueceuSenha" element={<EsqueceuSenha />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </ScrollToTop>
    </Router>
  )
}

export default App
