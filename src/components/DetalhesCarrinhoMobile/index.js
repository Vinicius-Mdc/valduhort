import React from 'react'
import { useSelector } from 'react-redux'
import { selectCarrinho } from '../../reducers/usuario'
import { Container, DetalhesCarrinho, FinalizarCarrinho, TextoTotal, Total } from './styles'

function DetalhesCarrinhoMobile({ setMostrarModalFinalizarCarrinho }) {
  const carrinho = useSelector(selectCarrinho)

  return (
    <Container>
      <DetalhesCarrinho>
        <TextoTotal>Total:</TextoTotal>
        <Total>{`R$ ${carrinho
          .reduce((anterior, atual) => anterior + atual.preco * atual.total, 0)
          .toFixed(2)
          .replace('.', ',')}`}</Total>
      </DetalhesCarrinho>
      <FinalizarCarrinho
        onClick={() => {
          setMostrarModalFinalizarCarrinho(true)
        }}
      >
        Finalizar Compra
      </FinalizarCarrinho>
    </Container>
  )
}

export default DetalhesCarrinhoMobile
