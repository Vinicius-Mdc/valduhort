import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import {
  AddButton,
  Image,
  ImageContainer,
  Item,
  ItemDetails,
  ItemLink,
  ItemManagerComponent,
  ItemTotalManagerButton,
  Price,
  ProductName,
  Status,
  TotalItems,
} from './styles'
import {
  addItemCart,
  deleteItemCart,
  updateItemCart,
} from '../../reducers/user'

function ItemCard({ item, total }) {
  const [totalItems, setTotalItems] = useState(total || 0)
  const dispatch = useDispatch()

  const updateItemTotal = (total) => {
    if (total === 0) {
      dispatch(
        deleteItemCart({
          id: item.id,
        })
      )
    } else {
      dispatch(
        updateItemCart({
          id: item.id,
          total,
        })
      )
    }
    setTotalItems(total)
  }
  return (
    <Item>
      <ItemLink href={`/produto/${item.id}`}>
        <ImageContainer>
          <Image src={item.imageURL} />
        </ImageContainer>
        <ProductName>{item.name}</ProductName>
        <Status available={item.available}>
          {item.available === 0
            ? 'Não disponível'
            : item.available <= 3
            ? 'Últimas Unidades'
            : 'Disponível'}
        </Status>
      </ItemLink>
      <ItemDetails>
        <Price>{`R$ ${item.price.toFixed(2).replace('.', ',')}`}</Price>
        {item.available === 0 ? null : totalItems !== 0 ? (
          <ItemManagerComponent>
            <ItemTotalManagerButton
              onClick={() => {
                updateItemTotal(totalItems - 1)
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
            <TotalItems>{totalItems}</TotalItems>
            <ItemTotalManagerButton
              disabled={totalItems >= item.available}
              onClick={() => {
                if (totalItems + 1 <= item.available) {
                  updateItemTotal(totalItems + 1)
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
                  fill={totalItems >= item.available ? '#eee' : '#167B82'}
                />
              </svg>
            </ItemTotalManagerButton>
          </ItemManagerComponent>
        ) : (
          <AddButton
            onClick={() => {
              dispatch(
                addItemCart({
                  id: item.id,
                  name: item.name,
                  total: 1,
                })
              )
              setTotalItems(1)
            }}
          >
            Adicionar
          </AddButton>
        )}
      </ItemDetails>
    </Item>
  )
}

ItemCard.propTypes = {
  item: PropTypes.object,
  total: PropTypes.number,
}

export default ItemCard
