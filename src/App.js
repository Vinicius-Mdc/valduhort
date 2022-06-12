import React from 'react'
import Home from './views/Home'
import Login from './views/Login'
import store from './store'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Products from './views/Products'
import Checkout from './views/Checkout'
import Header from './components/Header'
import ScrollToTop from './utils/scroll'
import Register from './views/Register'

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
