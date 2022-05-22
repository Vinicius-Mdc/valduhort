import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  DeleteItem,
  ItemTotalManagerButton,
  NoDataContainer,
  NoDataText,
  ProductsLink,
  Table,
  TableColumn,
  TableColumnImage,
  TableColumnOption,
  TableColumnText,
  TableColumnTotal,
  TableHead,
  TableRow,
  TableTitleColumn,
  TableTitleRow,
  TotalItems,
} from './styles'
import { useDispatch } from 'react-redux'
import { deleteItemCart, updateItemCart } from '../../reducers/user'
import { useWindowSize } from '../../utils/screenSizeListener'

function CartTable({ data }) {
  const titles = ['Produto', 'Preço', 'Quantidade', 'Total']
  const dispatch = useDispatch()
  const size = useWindowSize()
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
    <Table cellSpacing={0} cellPadding={0}>
      <TableHead>
        <TableTitleRow>
          {titles.map((title, id) => (
            <TableTitleColumn key={id}>{title}</TableTitleColumn>
          ))}
          <TableTitleColumn key={-1}></TableTitleColumn>
        </TableTitleRow>
      </TableHead>
      {data.map((cartItem) => (
        <tbody key={cartItem.id}>
          <TableRow key={cartItem.id}>
            <TableColumn width={50}>
              <TableColumnImage src={cartItem.imageURL} />
            </TableColumn>
            <TableColumn width={60}>
              <TableColumnText>
                {`R$ ${cartItem.price.toFixed(2).replace('.', ',')}`}
              </TableColumnText>
            </TableColumn>
            <TableColumn width={120}>
              <TableColumnTotal>
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
              </TableColumnTotal>
            </TableColumn>
            <TableColumn width={50}>
              <TotalItems>{`R$ ${(cartItem.total * cartItem.price)
                .toFixed(2)
                .replace('.', ',')}`}</TotalItems>
            </TableColumn>
            <TableColumnOption>
              <DeleteItem
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  updateItemTotal(0, cartItem)
                }}
              >
                <path
                  d="M13.1 3.6C13.1 3.04304 12.8788 2.5089 12.4849 2.11507C12.0911 1.72125 11.557 1.5 11 1.5C10.443
        1.5 9.9089 1.72125 9.51508 2.11507C9.12125 2.5089 8.9 3.04304 8.9 3.6H13.1ZM7.5 3.6C7.5 2.67174 7.86875
        1.7815 8.52513 1.12512C9.1815 0.468747 10.0717 0.0999985 11 0.0999985C11.9283 0.0999985 12.8185 0.468747 13.4749 1.12512C14.1313 1.7815 14.5 2.67174 14.5 3.6H20.8C20.9857 3.6 21.1637 3.67375 21.295 3.80502C21.4263 3.9363 21.5 4.11435 21.5 4.3C21.5 4.48565 21.4263 4.6637 21.295 4.79497C21.1637 4.92625 20.9857 5 20.8 5H20.0244L19.3468 10.8744C18.8947 10.7502 18.4322 10.6678 17.965 10.628L18.6132 5H3.3854L5.1802 20.561C5.21971 20.9023 5.38335 21.2171 5.63995 21.4456C5.89656 21.6741 6.22822 21.8002 6.5718 21.8H10.44C10.6962 22.3012 11.0056 22.7702 11.3598 23.2H6.5718C5.88489 23.2001 5.22191 22.9477 4.70898 22.4908C4.19606 22.0339 3.86899 21.4044 3.79 20.722L1.9742 5H1.2C1.03616 5.00005 0.8775 4.94264 0.751638 4.83775C0.625776 4.73287 0.54069 4.58716 0.5112 4.426L0.5 4.3C0.5 4.11435 0.57375 3.9363 0.705025 3.80502C0.836301 3.67375 1.01435 3.6 1.2 3.6H7.5ZM23.6 18.3C23.6 19.9709 22.9363 21.5733 21.7548 22.7548C20.5733 23.9362 18.9709 24.6 17.3 24.6C15.6291 24.6 14.0267 23.9362 12.8452 22.7548C11.6637 21.5733 11 19.9709 11 18.3C11 16.6291 11.6637 15.0267 12.8452 13.8452C14.0267 12.6637 15.6291 12 17.3 12C18.9709 12 20.5733 12.6637 21.7548 13.8452C22.9363 15.0267 23.6 16.6291 23.6 18.3ZM19.8956 16.6956C20.027 16.5642 20.1009 16.3859 20.1009 16.2C20.1009 16.0141 20.027 15.8358 19.8956 15.7044C19.7642 15.573 19.5859 15.4991 19.4 15.4991C19.2141 15.4991 19.0358 15.573 18.9044 15.7044L17.3 17.3102L15.6956 15.7044C15.5642 15.573 15.3859 15.4991 15.2 15.4991C15.0141 15.4991 14.8358 15.573 14.7044 15.7044C14.573 15.8358 14.4991 16.0141 14.4991 16.2C14.4991 16.3859 14.573 16.5642 14.7044 16.6956L16.3102 18.3L14.7044 19.9044C14.6393 19.9695 14.5877 20.0467 14.5525 20.1318C14.5172 20.2168 14.4991 20.308 14.4991 20.4C14.4991 20.492 14.5172 20.5832 14.5525 20.6682C14.5877 20.7533 14.6393 20.8305 14.7044 20.8956C14.7695 20.9607 14.8467 21.0123 14.9318 21.0475C15.0168 21.0828 15.108 21.1009 15.2 21.1009C15.292 21.1009 15.3832 21.0828 15.4682 21.0475C15.5533 21.0123 15.6305 20.9607 15.6956 20.8956L17.3 19.2898L18.9044 20.8956C18.9695 20.9607 19.0467 21.0123 19.1318 21.0475C19.2168 21.0828 19.308 21.1009 19.4 21.1009C19.492 21.1009 19.5832 21.0828 19.6682 21.0475C19.7533 21.0123 19.8305 20.9607 19.8956 20.8956C19.9607 20.8305 20.0123 20.7533 20.0475 20.6682C20.0828 20.5832 20.1009 20.492 20.1009 20.4C20.1009 20.308 20.0828 20.2168 20.0475 20.1318C20.0123 20.0467 19.9607 19.9695 19.8956 19.9044L18.2898 18.3L19.8956 16.6956Z"
                  fill="#D60000"
                />
              </DeleteItem>
            </TableColumnOption>
          </TableRow>
        </tbody>
      ))}
    </Table>
  )
}

export default CartTable

CartTable.propTypes = {
  data: PropTypes.array,
}
