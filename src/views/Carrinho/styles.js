import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
export const ContainerCarrinho = styled.div``
export const Titulo = styled.p`
  font-size: 1.5rem;
  margin-left: 30px;
`
export const MeuCarrinho = styled.div`
  display: flex;
  width: 100%;
`

export const ContainerTabelaCarrinho = styled.div`
  width: 70%;
`

export const ContainerDetalhesCarrinho = styled.div`
  width: 30%;
  margin-right: 30px;
`

export const EspacoFinalMobile = styled.div`
  height: 80px;
`

export const ContainerSemDados = styled.div`
  display: flex;
  flex: 1;
  margin: 0 30px;
`
export const TextoSemDados = styled.p``
export const LinkProdutos = styled(Link)``

export const ContainerModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(100, 100, 100, 0.5);
`

export const Modal = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background-color: white;
  max-height: 80vh;
  padding: 10px 25px 30px 25px;
  border-radius: 10px;
  width: 80%;
  max-width: 400px;
  margin-top: 10px;
  overflow-y: auto;
`

export const FormModal = styled.form`
  width: 100%;
`
export const HeaderModal = styled.h1`
  font-size: 1.7rem;
  margin-bottom: 10px;
`
export const TextoInputModal = styled.p`
  margin: 0;
  margin-top: 20px;
`
export const OpcoesModal = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`
export const OpcaoModal = styled.input``
export const TextoOpcaoModal = styled.label`
  margin-right: 20px;
`
export const InformacaoEncomendaModal = styled.div`
  width: 100%;
`
export const InputModal = styled.input`
  margin-top: 10px;
  width: 100%;
  padding: 5px 10px;
  font-size: 1rem;
  box-sizing: border-box;
`

export const FecharModal = styled.button`
  position: fixed;
  right: 25px;
  top: 10px;
  width: 20px;
  height: 20px;
  border: none;
  background-color: transparent;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`

export const BotaoModal = styled.button`
  margin-top: 20px;
  background: #547da4;
  border: 1px solid #547da4;
  border-radius: 7px;
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 33px;
  text-align: center;
  padding: 7px 0;
  width: 100%;
  color: white;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: rgba(84, 125, 164, 0.8);
  }
`

export const ErroInputModal = styled.p`
  color: #d70606;
  margin: 0;
  font-size: 0.9rem;
  margin-top: 10px;
`
