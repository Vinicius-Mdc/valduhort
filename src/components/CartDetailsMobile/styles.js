import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 75px;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #131921;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`
export const CartDetails = styled.div`
  margin-left: 20px;
  color: white;
`

export const TotalText = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0;
`

export const Total = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0;
  margin-top: 8px;
`
export const FinishCart = styled.button`
  height: 40px;
  width: 150px;
  margin-right: 20px;
  background-color: #167b82;
  border: none;
  color: white;
  border-radius: 6px;
`
