import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 5px 25px;
`
export const CartItem = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  margin: 10px;
  width: 100%;
  border-top: 1px solid #ccc;
`
export const CartItemLeft = styled(Link)``
export const CartItemImage = styled.img`
  max-width: 100px;
  max-height: 100px;
`
export const CartItemRight = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
`
export const CartItemTop = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Name = styled.p`
  font-size: 1.2rem;
  height: 36px;
`
export const RemoveButton = styled.button`
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
export const Price = styled.p`
  font-size: 1.1rem;
  margin: 0;
  margin-bottom: 15px;
  font-weight: bold;
`

export const ItemTotalManagerButton = styled.button`
  border: none;
  background-color: transparent;
`
export const TotalItems = styled.p``

export const ItemManagerComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 36px;
`
