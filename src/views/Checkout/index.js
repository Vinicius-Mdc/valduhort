import React from 'react'
import { useSelector } from 'react-redux'
import CartDetails from '../../components/CartDetails'
import CartDetailsMobile from '../../components/CartDetailsMobile'
import CartTable from '../../components/CartTable'
import CartTableMobile from '../../components/CartTableMobile'
import ScrollItemsList from '../../components/ScrollItemsList'
import { selectCart } from '../../reducers/user'
import { useWindowSize } from '../../utils/screenSizeListener'
import { items } from '../Home'
import {
  CartDetailsContainer,
  CartTableContainer,
  Container,
  MobileBottomSpacing,
  MyCart,
  MyCartContainer,
  NoDataContainer,
  NoDataText,
  ProductsLink,
  Title,
} from './styles'

function Checkout() {
  const cart = useSelector(selectCart)
  const size = useWindowSize()

  return (
    <Container>
      <MyCartContainer>
        <Title>Minha Cesta</Title>
        <MyCart>
          {cart.length === 0 ? (
            <NoDataContainer>
              <NoDataText>
                Nenhum item ainda no carrinho. Que tal{' '}
                <ProductsLink to="/products">começar a comprar?</ProductsLink>
              </NoDataText>
            </NoDataContainer>
          ) : size[0] <= 480 ? (
            <CartTableMobile data={cart} />
          ) : (
            <CartTableContainer>
              <CartTable data={cart} />
            </CartTableContainer>
          )}
          {cart.length > 0 &&
            (size[0] >= 480 ? (
              <CartDetailsContainer>
                <CartDetails />
              </CartDetailsContainer>
            ) : (
              <CartDetailsMobile />
            ))}
        </MyCart>
      </MyCartContainer>
      <ScrollItemsList title={'Não se esqueceu de nada?'} items={items} />
      {size[0] < 480 && <MobileBottomSpacing />}
    </Container>
  )
}

export default Checkout
