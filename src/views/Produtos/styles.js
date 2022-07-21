import styled from 'styled-components'

export const Container = styled.div`
  margin-left: 15px;
  margin-right: 15px;
`
export const OpcoesProdutos = styled.div``
export const Linha = styled.hr`
  fill: gray;
  height: 1px;
`
export const ContainerOpcoesProdutos = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 10px;
  @media (max-width: 484px) {
    flex-direction: column;
  }
`
export const OpcoesProdutosEsq = styled.div`
  display: flex;
  @media (max-width: 484px) {
    justify-content: space-between;
    margin-bottom: 10px;
  }
`
export const OpcoesProdutosDir = styled.div`
  display: flex;
`
export const TotalResultados = styled.div`
  padding: 5px 15px 5px 0;
  margin-right: 15px;
  border-right: 1px solid gray;
  font-size: 0.9rem;
  @media (max-width: 484px) {
    border: none;
    margin-right: 0;
  }
`
export const SelectResultados = styled.select`
  @media (max-width: 484px) {
    padding: 7px 5px;
  }
`
export const OpcaoSelectResultados = styled.option``
export const SelectOrdenacao = styled.select`
  @media (max-width: 484px) {
    padding: 7px 5px;
  }
`
export const OpcaoSelectOrdenacao = styled.option``
export const Negrito = styled.strong``
export const Resultados = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  justify-content: space-between;
  grid-row-gap: 7px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
