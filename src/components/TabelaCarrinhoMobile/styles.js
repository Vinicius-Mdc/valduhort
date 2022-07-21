import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 5px 25px;
`
export const ItemCarrinho = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  margin: 10px;
  width: 100%;
  border-top: 1px solid #ccc;
`
export const ItemCarrinhoEsq = styled.div``
export const ImagemItemCarrinho = styled.img`
  max-width: 100px;
  max-height: 100px;
`
export const ItemCarrinhoDir = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
`
export const ItemCarrinhoCima = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Nome = styled.p`
  font-size: 1.2rem;
  height: 36px;
`
export const BotaoRemover = styled.button`
  border: none;
  background-color: transparent;
  color: red;
  font-weight: bold;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  height: fit-content;
  padding: 8px;
  margin-top: 8px;
  margin-right: 5px;
  &:active {
    background-color: red;
    color: white;
  }
`
export const Preco = styled.p`
  font-size: 1.1rem;
  margin: 0;
  margin-bottom: 15px;
  font-weight: bold;
`

export const BotaoAtualizaTotalItens = styled.button`
  border: none;
  background-color: transparent;
`
export const TotalItens = styled.p``

export const ComponenteGerenciarItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 36px;
`
