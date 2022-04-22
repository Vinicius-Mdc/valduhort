import React from 'react'
import Home from './views/Home'
import Login from './views/Login'
import store from './store'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Products from './views/Products'
import Header from './components/Header'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
