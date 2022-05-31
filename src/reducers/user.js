import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
  id: null,
  name: null,
  cart: [],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogin: (state, action) => {
      const newState = state
      newState.token = action.payload.token
      newState.id = action.payload.id
      newState.name = action.payload.nome
      newState.cart = action.payload.cart
      return newState
    },
    userLogout: (state) => {
      const newState = state
      newState.token = null
      newState.id = null
      newState.nome = null
      newState.cart = []
      return newState
    },
    setUserInfo: (state, action) => {
      const newState = state
      newState.id = action.payload.id
      newState.name = action.payload.nome
      newState.cart = action.payload.cart
      return newState
    },
    setCart: (state, action) => {
      const newState = state
      newState.cart = action.payload.cart
      return newState
    },
    addItemCart: (state, action) => {
      const newState = state
      newState.cart.push(action.payload)
      return newState
    },
    updateItemCart: (state, action) => {
      const newState = state
      const newCart = state.cart
      for (let i = 0; i < newCart.length; i++) {
        if (newCart[i].id === action.payload.id) {
          newCart[i].total = action.payload.total
          break
        }
      }
      newState.cart = newCart
      return newState
    },
    deleteItemCart: (state, action) => {
      const newState = state
      const newCart = state.cart
      for (let i = 0; i < newCart.length; i++) {
        if (newCart[i].id === action.payload.id) {
          newCart.splice(i, 1)
          break
        }
      }
      newState.cart = newCart
      return newState
    },
    clearCart: (state, action) => {
      const newState = state
      newState.cart = []
      return newState
    },
  },
})

export const {
  userLogin,
  userLogout,
  setUserInfo,
  setCart,
  addItemCart,
  updateItemCart,
  deleteItemCart,
  clearCart,
} = userSlice.actions

export const selectToken = (state) => state.user.token
export const selectId = (state) => state.user.id
export const selectName = (state) => state.user.nome
export const selectCart = (state) => state.user.cart

export default userSlice.reducer
