import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  width: 100%;
  background-color: #131921;
  color: white;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 800;
`
export const ContainerHeader = styled.div`
  padding: 12px 15px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const HeaderEsq = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 767px) {
    display: ${(props) => (props.hidden ? 'none' : 'flex')};
  }
`

export const Logo = styled(Link)`
  font-family: 'Kristi';
  font-size: 40px;
  margin: 0;
  color: white;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    opacity: 0.85;
  }

  @media (max-width: 767px) {
    display: none;
  }
`

export const LogoMenor = styled(Link)`
  font-family: 'Kristi';
  font-size: 40px;
  margin: 0;
  color: white;
  display: none;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    opacity: 0.85;
  }
  @media (max-width: 767px) {
    display: block !important;
  }
`

export const Busca = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 30px;
  max-width: 700px;
  justify-content: center;
  border-radius: 12px 12px 0px 0px;
  background-color: ${(props) =>
    props.mostrarResultadoBusca ? '#fff' : 'transparent'};

  @media (max-width: 767px) {
    margin: 0;
  }
`

export const ComponenteBusca = styled.div`
  display: flex;
  flex-direction: column;
  height: 35px;
  align-items: center;
  width: 100%;
  margin: 0 30px;
  max-width: 700px;
  justify-content: center;
  position: relative;

  @media (max-width: 767px) {
    display: ${(props) => (props.mostrarBusca ? 'flex' : 'none')};
    margin: 0 20px 0 0;
  }
`
export const ComponenteBuscaResponsivo = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: ${(props) => (props.mostrarBusca ? 'flex' : 'none')};
    width: 100%;
    height: 100%;
    align-items: center;
    flex-direction: row;
    position: absolute;
  }
`

export const ResultadosBusca = styled.div`
  position: absolute;
  top: 35px;
  width: 100%;
  height: 100px;
  z-index: 12;
  background-color: white;
`

export const ComponenteBarraBusca = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const ListaResultados = styled.div`
  color: black;
  background-color: white;
  width: 100%;
`

export const ItemBusca = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;

  &:hover {
    background-color: rgba(150, 150, 150, 0.2);
    cursor: pointer;
  }
`

export const IconeItem = styled.div`
  margin-right: 12px;
`

export const TextoItem = styled.div``

export const BotaoVoltar = styled.div`
  display: none;
  align-items: center;
  fill: white;
  margin: 0 10px 0 10px;

  &:hover {
    cursor: pointer;
    opacity: 0.85;
  }

  @media (max-width: 767px) {
    display: ${(props) => (props.hidden ? 'none' : 'flex')};
  }
`

export const IconeBusca = styled.div`
  display: none;
  align-items: center;
  fill: white;
  margin: 0 10px 0 0;

  &:hover {
    cursor: pointer;
    opacity: 0.85;
  }

  @media (max-width: 767px) {
    display: flex;
  }
`

export const BarraBusca = styled.input`
  height: 100%;
  padding: 0 12px;
  width: 100%;
  font-size: 18px;
  border: none;
  border-radius: 12px 0px 0px 12px;

  &:focus {
    outline: none;
  }
`

export const BotaoBusca = styled.button`
  background: #547da4;
  height: 100%;
  margin: 0;
  width: 40px;
  font-size: 24px;
  border-radius: 0px 12px 12px 0px;
  border: none;
  padding: 3px;
  color: white;

  &:hover {
    cursor: pointer;
  }
`

export const Usuario = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  pointer-events: ${(props) => (props.enabled ? 'inherit' : 'none')};

  &:hover {
    cursor: pointer;
    opacity: 0.85;
  }

  @media (max-width: 767px) {
    display: none;
  }
`

export const FotoUsuario = styled.div`
  font-size: 40px;
  margin-right: 10px;
`

export const TextoAutenticacaoUsuario = styled.p`
  width: 120px;
`

export const HeaderDir = styled.div`
  display: flex;

  @media (max-width: 767px) {
    display: ${(props) => (props.hidden ? 'none' : 'flex')};
  }
`

export const IconeHeader = styled(Link)`
  display: flex;
  align-items: center;
  fill: white;
  margin: 0 10px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    opacity: 0.85;
  }
`

export const IconeSairHeader = styled.button`
  display: ${(props) => (props.hidden ? 'none' : 'flex')};
  align-items: center;
  fill: white;
  margin: 0 10px;
  text-decoration: none;
  border: none;
  background: transparent;
  margin-top: 3px;
  &:hover {
    cursor: pointer;
    opacity: 0.85;
  }
`

export const TotalCarrinho = styled.p`
  margin-left: 10px;
  color: white;
`

export const IconeUsuarioMobile = styled(Link)`
  display: none;
  @media (max-width: 480px) {
    display: ${(props) => (props.hidden ? 'none' : 'flex')};
    align-items: center;
    fill: white;
    margin: 0 10px;
    text-decoration: none;
    &:hover {
      cursor: pointer;
      opacity: 0.85;
    }
  }
`
