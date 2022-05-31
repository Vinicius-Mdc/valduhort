import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCart } from '../../reducers/user'
import { CartDetails, Container, FinishCart, Total, TotalText } from './styles'

function CartDetailsMobile({ setShowFinishCartModal }) {
  const cart = useSelector(selectCart)

  return (
    <Container>
      <CartDetails>
        <TotalText>Total:</TotalText>
        <Total>{`R$ ${cart
          .reduce((prev, current) => prev + current.price * current.total, 0)
          .toFixed(2)
          .replace('.', ',')}`}</Total>
      </CartDetails>
      <FinishCart
        onClick={() => {
          setShowFinishCartModal(true)
        }}
      >
        Finalizar Compra
      </FinishCart>
    </Container>
  )
}

export default CartDetailsMobile
