import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
export const MyCartContainer = styled.div``
export const Title = styled.p`
  font-size: 1.5rem;
  margin-left: 30px;
`
export const MyCart = styled.div`
  display: flex;
  width: 100%;
`

export const CartTableContainer = styled.div`
  width: 70%;
`

export const CartDetailsContainer = styled.div`
  width: 30%;
  margin-right: 30px;
`

export const MobileBottomSpacing = styled.div`
  height: 80px;
`

export const NoDataContainer = styled.div`
  display: flex;
  flex: 1;
  margin: 0 30px;
`
export const NoDataText = styled.p``
export const ProductsLink = styled(Link)``
