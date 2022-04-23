import React from 'react'
import { useSelector } from 'react-redux'
import ItemCard from '../../components/ItemCard'
import { selectCart } from '../../reducers/user'
import { items } from '../Home'
import {
  Bold,
  Container,
  Line,
  ProductOptionsLeft,
  ProductOptionsRight,
  ProductsOptions,
  ProductsOptionsContainer,
  Results,
  ResultSelect,
  ResultSelectionOption,
  ResultSortOption,
  ResultSortSelect,
  TotalResults,
} from './styles'

function Products() {
  const cart = useSelector(selectCart)
  return (
    <Container>
      <ProductsOptions>
        <Line />
        <ProductsOptionsContainer>
          <ProductOptionsLeft>
            <TotalResults>
              Total de resultados: <Bold>{23}</Bold>
            </TotalResults>
            <ResultSelect>
              <ResultSelectionOption>Todos</ResultSelectionOption>
            </ResultSelect>
          </ProductOptionsLeft>
          <ProductOptionsRight>
            <ResultSortSelect>
              <ResultSortOption hidden>Ordenar por: </ResultSortOption>
            </ResultSortSelect>
          </ProductOptionsRight>
        </ProductsOptionsContainer>
        <Line />
      </ProductsOptions>
      <Results>
        {items.map((el) => {
          //busca por item no carrinho e verifica se irá manter o botâo ou o total
          const result = cart.filter((cartItem) => cartItem.id === el.id)
          return result.length > 0 ? (
            <ItemCard key={el.id} item={el} total={result.pop().total} />
          ) : (
            <ItemCard key={el.id} item={el} />
          )
        })}
      </Results>
    </Container>
  )
}

export default Products
