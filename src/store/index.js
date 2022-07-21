import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../reducers/usuario'

const store = configureStore({
  reducer: {
    usuario: userReducer,
  },
})

export default store
