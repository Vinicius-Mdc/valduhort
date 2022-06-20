import styled from 'styled-components'

export const Container = styled.div``

export const CarouselContainer = styled.div`
  margin: 0 20px;
  @media (max-width: 464px) {
    margin: 0;
    margin-left: 20px;
  }
`

export const Title = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 35px;
  display: flex;
  align-items: center;
  margin-left: 30px;

  color: #000000;
`
export const ItemList = styled.ul`
  font-size: large;
`
