import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
  id: null,
  nome: null,
  email: null,
  carrinho: [],
}

const userSlice = createSlice({
  name: 'usuario',
  initialState,
  reducers: {
    loginUsuario: (state, action) => {
      const newState = state
      newState.token = action.payload.token
      newState.id = action.payload.id
      newState.nome = action.payload.nome
      newState.email = action.payload.email
      newState.carrinho = action.payload.carrinho || state.carrinho

      return newState
    },
    logoutUsuario: (state) => {
      const newState = state
      newState.token = null
      newState.id = null
      newState.nome = null
      newState.carrinho = []
      return newState
    },
    atualizarDados: (state, action) => {
      const newState = state
      newState.id = action.payload.id
      newState.nome = action.payload.nome
      newState.carrinho = action.payload.carrinho
      return newState
    },
    setCarrinho: (state, action) => {
      const newState = state
      newState.carrinho = action.payload.carrinho
      return newState
    },
    adicionarItem: (state, action) => {
      const newState = state
      newState.carrinho.push(action.payload)
      return newState
    },
    atualizarItem: (state, action) => {
      const newState = state
      const novoCarrinho = state.carrinho
      for (let i = 0; i < novoCarrinho.length; i++) {
        if (novoCarrinho[i].id === action.payload.id) {
          novoCarrinho[i].total = action.payload.total
          break
        }
      }
      newState.carrinho = novoCarrinho
      return newState
    },
    removerItem: (state, action) => {
      const newState = state
      const novoCarrinho = state.carrinho
      for (let i = 0; i < novoCarrinho.length; i++) {
        if (novoCarrinho[i].id === action.payload.id) {
          novoCarrinho.splice(i, 1)
          break
        }
      }
      newState.carrinho = novoCarrinho
      return newState
    },
    limparCarrinho: (state, action) => {
      const newState = state
      newState.carrinho = []
      return newState
    },
  },
})

export const {
  loginUsuario,
  logoutUsuario,
  atualizarDados,
  setCarrinho,
  adicionarItem,
  atualizarItem,
  removerItem,
  limparCarrinho,
} = userSlice.actions

export const selectToken = (state) => state.usuario.token
export const selectId = (state) => state.usuario.id
export const selectNome = (state) => state.usuario.nome
export const selectEmail = (state) => state.usuario.email
export const selectCarrinho = (state) => state.usuario.carrinho

export default userSlice.reducer
