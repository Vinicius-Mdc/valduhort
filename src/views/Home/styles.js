import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  font-family: Helvetica, Arial, sans-serif !important;
`

export const ContainerHome = styled.div``
export const ContainerSwiper = styled.div``
export const LinkSwiper = styled.a`
  width: 100vh;
`
export const ImagemSwiper = styled.img`
  width: 100%;
  max-height: 70vh;
  object-fit: fill;
`

export const InformacoesLoja = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 50px 0;

  @media (max-width: 767px) {
    margin-top: 20px;
    margin-bottom: 50px;
  }
`

export const IconesLoja = styled.div`
  display: flex;
  padding: 0 20px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

export const DetalhesLoja = styled.div`
  text-align: center;
  width: 100%;
  margin: 0 12px;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
  }
`

export const Icone = styled.svg`
  width: auto;
  max-width: 135px;
  max-height: 135px;
  @media (max-width: 767px) {
    max-width: 100px;
    max-height: 100px;
    margin: 10px 0;
  }
`

export const TextoIcone = styled.p`
  font-size: 1.1rem;

  @media (max-width: 767px) {
    margin-left: 20px;
  }
`

export const ContainerVerProdutos = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const VerProdutos = styled(Link)`
  margin: 0 20px;
  background-color: #167b82;
  padding: 20px 0;
  border: none;
  border-radius: 10px;
  width: 100%;
  text-decoration: none;
  max-width: 500px;
  font-size: 1.4rem;
  font-weight: normal;
  color: white;
  margin-top: 60px;
  text-align: center;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 767px) {
    margin-top: 20px;
  }
`
