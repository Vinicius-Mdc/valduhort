import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Table = styled.table`
  width: 90%;
  margin: 0 30px;
`
export const TableHead = styled.thead`
  background-color: #e5e5e5;
  font-size: 0.9rem;
  height: 53px;
`

export const TableTitleRow = styled.tr``
export const TableTitleColumn = styled.th``
export const NoDataContainer = styled.div`
  display: flex;
  flex: 1;
  margin: 0 30px;
`
export const NoDataText = styled.p``
export const ProductsLink = styled(Link)``
export const TableRow = styled.tr`
  width: 100%;
  text-align: center;
  vertical-align: middle;
  max-height: 100px;
`

export const TableColumn = styled.td`
  padding: 0 10px;
  text-align: center;
  vertical-align: middle;
  height: 100px;
  width: ${(props) => (props.width ? props.width : '120px')};
`

export const TableColumnOption = styled.td`
  padding: 0 10px;
  text-align: center;
  vertical-align: middle;
  height: 100px;
  width: 20px;
`

export const DeleteItem = styled.svg`
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const TableColumnImage = styled.img`
  max-width: 120px;
  max-height: 100px;
  margin-right: 20px;
`
export const TableColumnText = styled.p``
export const TableColumnTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  vertical-align: middle;
`

export const ItemTotalManagerButton = styled.button`
  border: none;
  background-color: transparent;
`
export const TotalItems = styled.p``

export const ItemManagerComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 36px;
`
