import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  padding: 40px 20px;
  background-color: rgba(229, 229, 229, 0.32);
  display: flex;
  flex-direction: column;
`
export const Title = styled.p`
  font-weight: 600;
  font-size: 1.5rem;
  align-items: center;
  margin-top: 0;
  color: #000000;
`
export const TotalDetailsContainer = styled.div``
export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
`
export const TotalRowText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  color: #000000;
  margin-top: 0;
`
export const TotalRowPrice = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  margin-top: 0;

  color: #000000;
`
export const DivisionLine = styled.hr`
  color: rgba(0, 0, 0, 0.25);
`
export const UpdateShipping = styled.button`
  border: none;
  color: #172d90;
  background-color: transparent;
  padding-left: 0;
  margin-bottom: 40px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
export const KeepShoppingButton = styled(Link)`
  background: #ffffff;
  border: 1px solid #547da4;
  border-radius: 7px;
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 33px;
  text-align: center;
  padding: 7px 0;
  color: #6785ac;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: rgba(84, 125, 164, 0.6);
  }
`
export const FinishCartButton = styled.button`
  margin-top: 20px;
  background: #547da4;
  border: 1px solid #547da4;
  border-radius: 7px;
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 33px;
  text-align: center;
  padding: 7px 0;
  color: white;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: rgba(84, 125, 164, 0.8);
  }
`
