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
import Products from './views/Products'
import Checkout from './views/Checkout'
import Header from './components/Header'
import ScrollToTop from './utils/scroll'
import Register from './views/Register'
import { selectCart, selectToken, setCart, userLogin } from './reducers/user'

function App() {
  const [cookies, setCookie] = useCookies(['user'])
  const [hasUpdatedCart, setHasUpdatedCart] = useState(false)
  const cart = useSelector(selectCart)
  const token = useSelector(selectToken)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!token && hasUpdatedCart) {
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart])

  useEffect(() => {
    if (!token && cookies.token) {
      dispatch(
        userLogin({
          name: cookies.name || '',
          email: cookies.email || '',
          token: cookies.token,
          id: cookies.id,
        })
      )
    }
    if (!hasUpdatedCart && !cookies.token) {
      setHasUpdatedCart(true)
      const cartString = localStorage.getItem('cart')
      if (cartString) {
        const cart = JSON.parse(cartString)
        dispatch(setCart({ cart }))
      }
    }
  }, [])

  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </ScrollToTop>
    </Router>
  )
}

export default App
