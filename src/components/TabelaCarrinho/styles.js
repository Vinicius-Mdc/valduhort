import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Tabela = styled.table`
  width: 90%;
  margin: 0 30px;
`
export const TabelaCabeca = styled.thead`
  background-color: #e5e5e5;
  font-size: 0.9rem;
  height: 53px;
`

export const LinhaTituloTabela = styled.tr``
export const ColunaTituloTabela = styled.th``
export const ContainerSemDados = styled.div`
  display: flex;
  flex: 1;
  margin: 0 30px;
`
export const TextoSemDados = styled.p``
export const LinkProdutos = styled(Link)``
export const LinhaTabela = styled.tr`
  width: 100%;
  text-align: center;
  vertical-align: middle;
  max-height: 100px;
`

export const ColunaTabela = styled.td`
  padding: 0 10px;
  text-align: center;
  vertical-align: middle;
  height: 100px;
  width: ${(props) => (props.width ? props.width : '120px')};
`

export const OpcaoColunaTabela = styled.td`
  padding: 0 10px;
  text-align: center;
  vertical-align: middle;
  height: 100px;
  width: 20px;
`

export const RemoverItem = styled.svg`
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const ImagemColunaTabela = styled.img`
  max-width: 120px;
  max-height: 100px;
  margin-right: 20px;
`
export const TextoColunaTabela = styled.p``
export const TotalColunaTabela = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  vertical-align: middle;
`

export const BotaoAtualizaTotalItens = styled.button`
  border: none;
  background-color: transparent;
`
export const TotalItens = styled.p``

export const ComponenteGerenciarItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 36px;
`
