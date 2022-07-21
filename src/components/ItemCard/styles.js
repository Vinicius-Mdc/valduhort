import styled from 'styled-components'

export const Item = styled.div`
  list-style: none;
  max-width: 230px;
  height: 340px;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  margin: ${(props) => (props.withoutMargin ? '4px' : '5px 10px')};
  @media (max-width: 464px) {
    height: 320px;
  }
`

export const LinkItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3px 15px;
  text-decoration: none;
  color: black;
`

export const NomeProduto = styled.p`
  font-weight: 400;
  font-size: 1rem;
  margin-bottom: 6px;
  height: 32px;
`

export const ContainerImagem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  object-fit: cover;
`

export const Imagem = styled.img`
  max-width: 90%;
  height: 170px;
  align-self: center;
  @media (max-width: 464px) {
    height: 150px;
  }
`

export const Preco = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1px;
`

export const Status = styled.p`
  margin-top: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  margin-bottom: 6px;
  color: ${(props) =>
    props.disponivel === 0
      ? '#D70606'
      : props.disponivel <= 3
      ? '#F39200'
      : '#008b06'};
`

export const BotaoAdicionar = styled.button`
  width: 100%;
  background: #547da4;
  border-radius: 7px;
  border: none;
  padding: 10px 0;
  color: white;

  :hover {
    cursor: pointer;
  }
`

export const ComponenteGerenciarItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 36px;
`

export const TotalItens = styled.p``

export const DetalhesItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3px 15px;
  text-decoration: none;
  color: black;
`

export const BotaoAtualizaTotalItens = styled.button`
  border: none;
  background-color: transparent;
`
