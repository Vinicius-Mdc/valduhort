import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import {
  CartItem,
  CartItemImage,
  CartItemLeft,
  CartItemRight,
  CartItemTop,
  Container,
  ItemManagerComponent,
  ItemTotalManagerButton,
  Name,
  Price,
  RemoveButton,
  TotalItems,
} from './styles'
import { deleteItemCart, updateItemCart } from '../../reducers/user'

function CartTableMobile({ data }) {
  const dispatch = useDispatch()
  const updateItemTotal = (total, item) => {
    if (total === 0) {
      dispatch(
        deleteItemCart({
          id: item.id,
        })
      )
    } else {
      dispatch(
        updateItemCart({
          ...item,
          total,
        })
      )
    }
  }

  return (
    <Container>
      {data.map((cartItem) => (
        <CartItem key={cartItem.id}>
          <CartItemLeft to={`/${cartItem.id}`}>
            <CartItemImage src={cartItem.imageURL} />
          </CartItemLeft>
          <CartItemRight>
            <CartItemTop>
              <Name>{cartItem.name}</Name>
              <RemoveButton
                onClick={() => {
                  updateItemTotal(0, cartItem)
                }}
              >
                X
              </RemoveButton>
            </CartItemTop>
            <Price>{`R$ ${cartItem.price.toFixed(2).replace('.', ',')}`}</Price>
            <ItemManagerComponent>
              <ItemTotalManagerButton
                onClick={() => {
                  console.log('-')
                  updateItemTotal(cartItem.total - 1, cartItem)
                }}
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.4688 16.875H11.5312C11.3766 16.875 11.25 17.0016 11.25 17.1562V18.8438C11.25 18.9984 11.3766 19.125 11.5312 19.125H24.4688C24.6234 19.125 24.75 18.9984 24.75 18.8438V17.1562C24.75 17.0016 24.6234 16.875 24.4688 16.875Z"
                    fill="#828282"
                  />
                  <path
                    d="M18 2.25C9.30234 2.25 2.25 9.30234 2.25 18C2.25 26.6977 9.30234 33.75 18 33.75C26.6977 33.75 33.75 26.6977 33.75 18C33.75 9.30234 26.6977 2.25 18 2.25ZM18 31.0781C10.7789 31.0781 4.92188 25.2211 4.92188 18C4.92188 10.7789 10.7789 4.92188 18 4.92188C25.2211 4.92188 31.0781 10.7789 31.0781 18C31.0781 25.2211 25.2211 31.0781 18 31.0781Z"
                    fill="#828282"
                  />
                </svg>
              </ItemTotalManagerButton>
              <TotalItems>{cartItem.total}</TotalItems>
              <ItemTotalManagerButton
                disabled={cartItem.total >= cartItem.available}
                onClick={() => {
                  console.log('+')
                  if (cartItem.total + 1 <= cartItem.available) {
                    updateItemTotal(cartItem.total + 1, cartItem)
                  }
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 0C7.16429 0 0 7.16429 0 16C0 24.8357 7.16429 32 16 32C24.8357 32 32 24.8357 32 16C32 7.16429 24.8357 0 16 0ZM22.8571 16.8571C22.8571 17.0143 22.7286 17.1429 22.5714 17.1429H17.1429V22.5714C17.1429 22.7286 17.0143 22.8571 16.8571 22.8571H15.1429C14.9857 22.8571 14.8571 22.7286 14.8571 22.5714V17.1429H9.42857C9.27143 17.1429 9.14286 17.0143 9.14286 16.8571V15.1429C9.14286 14.9857 9.27143 14.8571 9.42857 14.8571H14.8571V9.42857C14.8571 9.27143 14.9857 9.14286 15.1429 9.14286H16.8571C17.0143 9.14286 17.1429 9.27143 17.1429 9.42857V14.8571H22.5714C22.7286 14.8571 22.8571 14.9857 22.8571 15.1429V16.8571Z"
                    fill="#167B82"
                  />
                </svg>
              </ItemTotalManagerButton>
            </ItemManagerComponent>
          </CartItemRight>
        </CartItem>
      ))}
    </Container>
  )
}

export default CartTableMobile

CartTableMobile.propTypes = {
  data: PropTypes.array,
}
