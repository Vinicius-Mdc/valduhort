import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../../components/Header'
import ItemCard from '../../components/ItemCard'
import { selectCarrinho } from '../../reducers/usuario'
import { itens } from '../Home'
import { Container, ContainerOpcoesProdutos, Linha, Negrito, OpcaoSelectOrdenacao, OpcaoSelectResultados, OpcoesProdutos, OpcoesProdutosDir, OpcoesProdutosEsq, Resultados, SelectOrdenacao, SelectResultados, TotalResultados } from './styles'

function Produtos() {
  const carrinho = useSelector(selectCarrinho)
  return (
    <>
    <Header />
    <Container>
      <OpcoesProdutos>
        <Linha />
        <ContainerOpcoesProdutos>
          <OpcoesProdutosEsq>
            <TotalResultados>
              Total de resultados: <Negrito>{23}</Negrito>
            </TotalResultados>
            <SelectResultados>
              <OpcaoSelectResultados>Todos</OpcaoSelectResultados>
            </SelectResultados>
          </OpcoesProdutosEsq>
          <OpcoesProdutosDir>
            <SelectOrdenacao>
              <OpcaoSelectOrdenacao hidden>Ordenar por: </OpcaoSelectOrdenacao>
            </SelectOrdenacao>
          </OpcoesProdutosDir>
        </ContainerOpcoesProdutos>
        <Linha />
      </OpcoesProdutos>
      <Resultados>
        {itens.map((el) => {
          const resultado = carrinho.filter((item) => item.id === el.id)
          return resultado.length > 0 ? (
            <ItemCard key={el.id} item={el} total={resultado.pop().total} />
          ) : (
            <ItemCard key={el.id} item={el} />
          )
        })}
      </Resultados>
    </Container>
    </>
  )
}

export default Produtos
