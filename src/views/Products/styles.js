import styled from 'styled-components'

export const Container = styled.div`
  margin-left: 15px;
  margin-right: 15px;
`
export const ProductsOptions = styled.div``
export const Line = styled.hr`
  fill: gray;
  height: 1px;
`
export const ProductsOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 10px;
  @media (max-width: 484px) {
    flex-direction: column;
  }
`
export const ProductOptionsLeft = styled.div`
  display: flex;
  @media (max-width: 484px) {
    justify-content: space-between;
    margin-bottom: 10px;
  }
`
export const ProductOptionsRight = styled.div`
  display: flex;
`
export const TotalResults = styled.div`
  padding: 5px 15px 5px 0;
  margin-right: 15px;
  border-right: 1px solid gray;
  font-size: 0.9rem;
  @media (max-width: 484px) {
    border: none;
    margin-right: 0;
  }
`
export const ResultSelect = styled.select`
  @media (max-width: 484px) {
    padding: 7px 5px;
  }
`
export const ResultSelectionOption = styled.option``
export const ResultSortSelect = styled.select`
  @media (max-width: 484px) {
    padding: 7px 5px;
  }
`
export const ResultSortOption = styled.option``
export const Bold = styled.strong``
export const Results = styled.div`
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
