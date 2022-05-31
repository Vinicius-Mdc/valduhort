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

export const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(100, 100, 100, 0.5);
`

export const ModalWrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background-color: white;
  max-height: 80vh;
  padding: 10px 25px 30px 25px;
  border-radius: 10px;
  width: 80%;
  max-width: 400px;
  margin-top: 10px;
  overflow-y: auto;
`

export const ModalForm = styled.form`
  width: 100%;
`
export const ModalHeader = styled.h1`
  font-size: 1.7rem;
  margin-bottom: 10px;
`
export const ModalInputText = styled.p`
  margin: 0;
  margin-top: 20px;
`
export const ModalOptions = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`
export const ModalOption = styled.input``
export const ModalOptionText = styled.label`
  margin-right: 20px;
`
export const ModalShippingInfo = styled.div`
  width: 100%;
`
export const ModalInput = styled.input`
  margin-top: 10px;
  width: 100%;
  padding: 5px 10px;
  font-size: 1rem;
  box-sizing: border-box;
`

export const ModalClose = styled.button`
  position: fixed;
  right: 25px;
  top: 10px;
  width: 20px;
  height: 20px;
  border: none;
  background-color: transparent;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`

export const ModalButton = styled.button`
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
  width: 100%;
  color: white;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: rgba(84, 125, 164, 0.8);
  }
`

export const ModalInputError = styled.p`
  color: #d70606;
  margin: 0;
  font-size: 0.9rem;
  margin-top: 10px;
`
