import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CartDetails from '../../components/CartDetails'
import CartDetailsMobile from '../../components/CartDetailsMobile'
import CartTable from '../../components/CartTable'
import CartTableMobile from '../../components/CartTableMobile'
import Header from '../../components/Header'
import ScrollItemsList from '../../components/ScrollItemsList'
import { clearCart, selectCart } from '../../reducers/user'
import { useWindowSize } from '../../utils/screenSizeListener'
import { items } from '../Home'
import {
  CartDetailsContainer,
  CartTableContainer,
  Container,
  MobileBottomSpacing,
  ModalButton,
  ModalClose,
  ModalContainer,
  ModalForm,
  ModalHeader,
  ModalInput,
  ModalInputError,
  ModalInputText,
  ModalOption,
  ModalOptions,
  ModalOptionText,
  ModalShippingInfo,
  ModalWrapper,
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
  const [shipping, setShipping] = useState(3.5)
  const [showFinishCartModal, setShowFinishCartModal] = useState(false)
  const [address, setAddress] = useState('')
  const [addressError, setAddressError] = useState('')
  const [complement, setComplement] = useState('')
  const navigation = useNavigate()
  const dispatch = useDispatch()
  const handleFinishCart = () => {
    if (address === '') {
      setAddressError(true)
      return
    }
    dispatch(clearCart())
    alert(
      `Obrigado pela compra! ${
        shipping > 0 &&
        'Sua entrega deverá chegar entre 5:30 e 7:00 na sexta-feira.'
      }`
    )
    setShowFinishCartModal(false)
    navigation('/')
  }
  return (
    <>
      <Header />
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
                <CartDetails
                  shipping={shipping}
                  setShipping={setShipping}
                  setShowFinishCartModal={setShowFinishCartModal}
                />
              </CartDetailsContainer>
            ) : (
              <CartDetailsMobile
                shipping={shipping}
                setShipping={setShipping}
                setShowFinishCartModal={setShowFinishCartModal}
              />
            ))}
        </MyCart>
      </MyCartContainer>
      <ScrollItemsList title={'Não se esqueceu de nada?'} items={items} />
      {size[0] < 480 && <MobileBottomSpacing />}
      {showFinishCartModal && (
        <>
          <ModalContainer onClick={() => setShowFinishCartModal(false)} />
          <ModalWrapper>
            <ModalClose onClick={() => setShowFinishCartModal(false)}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 896 896"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M448 0C200.6 0 0 200.6 0 448C0 695.4 200.6 896 448 896C695.4 896 896 695.4 896 448C896 200.6 695.4 0 448 0ZM613.4 618.2L547.4 617.9L448 499.4L348.7 617.8L282.6 618.1C278.2 618.1 274.6 614.6 274.6 610.1C274.6 608.2 275.3 606.4 276.5 604.9L406.6 449.9L276.5 295C275.292 293.534 274.621 291.699 274.6 289.8C274.6 285.4 278.2 281.8 282.6 281.8L348.7 282.1L448 400.6L547.3 282.2L613.3 281.9C617.7 281.9 621.3 285.4 621.3 289.9C621.3 291.8 620.6 293.6 619.4 295.1L489.5 450L619.5 605C620.7 606.5 621.4 608.3 621.4 610.2C621.4 614.6 617.8 618.2 613.4 618.2Z"
                  fill="#D70606"
                />
              </svg>
            </ModalClose>
            <ModalHeader>Quase lá...</ModalHeader>
            <ModalInputText>
              Deseja receber na sua casa? (Custo adicional de{' '}
              <strong>R$ 3,50</strong>)
            </ModalInputText>
            <ModalOptions>
              <ModalOption
                type={'radio'}
                name={'shipping'}
                checked={shipping > 0}
                onClick={() => {
                  setShipping(3.5)
                }}
              />
              <ModalOptionText>Sim</ModalOptionText>
              <ModalOption
                type={'radio'}
                name={'shipping'}
                checked={shipping === 0}
                onClick={() => {
                  setShipping(0)
                  console.log(shipping)
                }}
              />
              <ModalOptionText>Não</ModalOptionText>
            </ModalOptions>
            {shipping !== 0 && (
              <ModalShippingInfo>
                <ModalInputText>Endereço</ModalInputText>
                <ModalInput
                  value={address}
                  onChange={(e) => {
                    setAddressError(false)
                    setAddress(e.target.value)
                  }}
                />
                {addressError && (
                  <ModalInputError>
                    Por favor digite um endereço
                  </ModalInputError>
                )}
              </ModalShippingInfo>
            )}
            <ModalInputText>
              Mais alguma coisa que precisamos saber?
            </ModalInputText>
            <br />
            <ModalInput
              value={complement}
              onChange={(e) => {
                setComplement(e.target.value)
              }}
            />
            <ModalButton
              onClick={() => {
                handleFinishCart()
              }}
            >
              Concluir
            </ModalButton>
          </ModalWrapper>
        </>
      )}
    </Container>
    </>
  )
}

export default Checkout
