import React from 'react'
import { useSelector } from 'react-redux'
import { selectCart } from '../../reducers/user'
import {
  Container,
  DivisionLine,
  FinishCartButton,
  KeepShoppingButton,
  Title,
  TotalDetailsContainer,
  TotalRow,
  TotalRowPrice,
  TotalRowText,
  UpdateShipping,
} from './styles'

function CartDetails({ shipping, setShipping, setShowFinishCartModal }) {
  const cart = useSelector(selectCart)

  return (
    <Container>
      <Title>Resumo do Pedido</Title>
      <TotalDetailsContainer>
        <TotalRow>
          <TotalRowText>{`${cart.reduce(
            (prev, current) => prev + current.total,
            0
          )} produtos`}</TotalRowText>
          <TotalRowPrice>
            {`R$ ${cart
              .reduce(
                (prev, current) => prev + current.total * current.price,
                0
              )
              .toFixed(2)
              .replace('.', ',')}`}
          </TotalRowPrice>
        </TotalRow>
        {shipping > 0 && (
          <TotalRow>
            <TotalRowText>Frete</TotalRowText>
            <TotalRowPrice>
              {`R$ ${shipping.toFixed(2).replace('.', ',')}`}
            </TotalRowPrice>
          </TotalRow>
        )}
        <DivisionLine />
        <TotalRow>
          <TotalRowText>Total</TotalRowText>
          <TotalRowPrice>
            {`R$ ${(
              cart.reduce(
                (prev, current) => prev + current.total * current.price,
                0
              ) + shipping
            )
              .toFixed(2)
              .replace('.', ',')}`}
          </TotalRowPrice>
        </TotalRow>
        <UpdateShipping
          onClick={() => {
            setShipping(shipping === 0 ? 3.5 : 0)
          }}
        >
          {shipping === 0
            ? 'Gostaria de receber em casa'
            : 'Prefiro retirar no local'}
        </UpdateShipping>
      </TotalDetailsContainer>
      <KeepShoppingButton to="/products">
        Continuar Comprando
      </KeepShoppingButton>
      <FinishCartButton
        onClick={() => {
          setShowFinishCartModal(true)
        }}
      >
        Finalizar Compra
      </FinishCartButton>
    </Container>
  )
}

export default CartDetails
