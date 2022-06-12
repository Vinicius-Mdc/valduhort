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
import { selectToken, userLogin } from './reducers/user'

function App() {
  const [cookiesLoaded, setCookiesLoaded] = useState(false)
  const [cookies, setCookie] = useCookies(['user'])
  const token = useSelector(selectToken)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!cookiesLoaded && !token && cookies.token) {
      dispatch(
        userLogin({
          name: cookies.name || '',
          email: cookies.email || '',
          token: cookies.token,
          id: cookies.id,
        })
      )
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
