import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import { limparCarrinho, selectCarrinho } from '../../reducers/usuario'
import { useWindowSize } from '../../utils/screenSizeListener'
import { itens } from '../Home'
import { BotaoModal, Container, ContainerCarrinho, ContainerDetalhesCarrinho, ContainerModal, ContainerSemDados, ContainerTabelaCarrinho, ErroInputModal, EspacoFinalMobile, FecharModal, HeaderModal, InformacaoEncomendaModal, InputModal, LinkProdutos, MeuCarrinho, Modal, OpcaoModal, OpcoesModal, TextoInputModal, TextoOpcaoModal, TextoSemDados, Titulo } from './styles'
import TabelaCarrinhoMobile from '../../components/TabelaCarrinhoMobile'
import TabelaCarrinho from '../../components/TabelaCarrinho'
import DetalhesCarrinho from '../../components/DetalhesCarrinho'
import DetalhesCarrinhoMobile from '../../components/DetalhesCarrinhoMobile'
import ScrollListaItens from '../../components/ScrollListaItens'

function Checkout() {
  const carrinho = useSelector(selectCarrinho)
  const tamanhoTela = useWindowSize()
  const [frete, setFrete] = useState(3.5)
  const [mostrarModalFinalizarCarrinho, setMostrarModalFinalizarCarrinho] = useState(false)
  const [endereco, setEndereco] = useState('')
  const [enderecoError, setEnderecoError] = useState('')
  const [complemento, setComplemento] = useState('')
  const navegacao = useNavigate()
  const dispatch = useDispatch()
  const finalizarCarrinho = () => {
    if (endereco === '') {
      setEnderecoError(true)
      return
    }
    dispatch(limparCarrinho())
    alert(
      `Obrigado pela compra! ${
        frete > 0 &&
        'Sua entrega deverá chegar entre 5:30 e 7:00 na sexta-feira.'
      }`
    )
    setMostrarModalFinalizarCarrinho(false)
    navegacao('/')
  }
  return (
    <>
      <Header />
      <Container>
      <ContainerCarrinho>
        <Titulo>Minha Cesta</Titulo>
        <MeuCarrinho>
          {carrinho.length === 0 ? (
            <ContainerSemDados>
              <TextoSemDados>
                Nenhum item ainda no carrinho. Que tal{' '}
                <LinkProdutos to="/produtos">começar a comprar?</LinkProdutos>
              </TextoSemDados>
            </ContainerSemDados>
          ) : tamanhoTela[0] <= 480 ? (
            <TabelaCarrinhoMobile dados={carrinho} />
          ) : (
            <ContainerTabelaCarrinho>
              <TabelaCarrinho dados={carrinho} />
            </ContainerTabelaCarrinho>
          )}
          {carrinho.length > 0 &&
            (tamanhoTela[0] >= 480 ? (
              <ContainerDetalhesCarrinho>
                <DetalhesCarrinho
                  frete={frete}
                  setFrete={setFrete}
                  setMostrarModalFinalizarCarrinho={setMostrarModalFinalizarCarrinho}
                />
              </ContainerDetalhesCarrinho>
            ) : (
              <DetalhesCarrinhoMobile
                frete={frete}
                setFrete={setFrete}
                setMostrarModalFinalizarCarrinho={setMostrarModalFinalizarCarrinho}
              />
            ))}
        </MeuCarrinho>
      </ContainerCarrinho>
      <ScrollListaItens titulo={'Não se esqueceu de nada?'} itens={itens} />
      {tamanhoTela[0] < 480 && <EspacoFinalMobile />}
      {mostrarModalFinalizarCarrinho && (
        <>
          <ContainerModal onClick={() => setMostrarModalFinalizarCarrinho(false)} />
          <Modal>
            <FecharModal onClick={() => setMostrarModalFinalizarCarrinho(false)}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 896 896"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M448 0C200.6 0 0 200.6 0 448C0 695.4 200.6 896 448 896C695.4 896 896 695.4 896 448C896 200.6 695.4 0 448 0ZM613.4 618.2L547.4 617.9L448 499.4L348.7 617.8L282.6 618.1C278.2 618.1 274.6 614.6 274.6 610.1C274.6 608.2 275.3 606.4 276.5 604.9L406.6 449.9L276.5 295C275.292 293.534 274.621 291.699 274.6 289.8C274.6 285.4 278.2 281.8 282.6 281.8L348.7 282.1L448 400.6L547.3 282.2L613.3 281.9C617.7 281.9 621.3 285.4 621.3 289.9C621.3 291.8 620.6 293.6 619.4 295.1L489.5 450L619.5 605C620.7 606.5 621.4 608.3 621.4 610.2C621.4 614.6 617.8 618.2 613.4 618.2Z"
                  fill="#D70606"
                />
              </svg>
            </FecharModal>
            <HeaderModal>Quase lá...</HeaderModal>
            <TextoInputModal>
              Deseja receber na sua casa? (Custo adicional de{' '}
              <strong>R$ 3,50</strong>)
            </TextoInputModal>
            <OpcoesModal>
              <OpcaoModal
                type={'radio'}
                name={'frete'}
                checked={frete > 0}
                onClick={() => {
                  setFrete(3.5)
                }}
              />
              <TextoOpcaoModal>Sim</TextoOpcaoModal>
              <OpcaoModal
                type={'radio'}
                name={'frete'}
                checked={frete === 0}
                onClick={() => {
                  setFrete(0)
                }}
              />
              <TextoOpcaoModal>Não</TextoOpcaoModal>
            </OpcoesModal>
            {frete !== 0 && (
              <InformacaoEncomendaModal>
                <TextoInputModal>Endereço</TextoInputModal>
                <InputModal
                  value={endereco}
                  onChange={(e) => {
                    setEnderecoError(false)
                    setEndereco(e.target.value)
                  }}
                />
                {enderecoError && (
                  <ErroInputModal>
                    Por favor digite um endereço
                  </ErroInputModal>
                )}
              </InformacaoEncomendaModal>
            )}
            <TextoInputModal>
              Mais alguma coisa que precisamos saber?
            </TextoInputModal>
            <br />
            <InputModal
              value={complemento}
              onChange={(e) => {
                setComplemento(e.target.value)
              }}
            />
            <BotaoModal
              onClick={() => {
                finalizarCarrinho()
              }}
            >
              Concluir
            </BotaoModal>
          </Modal>
        </>
      )}
    </Container>
    </>
  )
}

export default Checkout
