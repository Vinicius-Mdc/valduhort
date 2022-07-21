import React, { useEffect, useState } from 'react'
import { BarraBusca, BotaoBusca, BotaoVoltar, Busca, ComponenteBarraBusca, ComponenteBusca, ComponenteBuscaResponsivo, Container, ContainerHeader, FotoUsuario, HeaderDir, HeaderEsq, IconeBusca, IconeHeader, IconeItem, IconeSairHeader, IconeUsuarioMobile, ItemBusca, ListaResultados, Logo, LogoMenor, ResultadosBusca, TextoAutenticacaoUsuario, TextoItem, TotalCarrinho, Usuario } from './styles'
import {
  AiOutlineArrowLeft,
  AiOutlineHistory,
  AiOutlineSearch,
} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import {
  logoutUsuario,
  selectCarrinho,
  selectNome,
  selectToken,
} from '../../reducers/usuario'
import { useCookies } from 'react-cookie'

function Header() {
  const [mostrarBusca, setMostrarBusca] = useState(false)
  const [mostrarResultadoBusca, setMostrarResultadoBusca] = useState(false)
  const [textoBusca, setTextoBusca] = useState('')
  const [cookies, setCookie, deleteCookie] = useCookies(['user'])
  const nome = useSelector(selectNome)
  const carrinho = useSelector(selectCarrinho)
  const token = useSelector(selectToken)
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(logoutUsuario())
    deleteCookie('nome')
    deleteCookie('id')
    deleteCookie('token')
    deleteCookie('email')
  }

  return (
    <Container>
      {!mostrarBusca ? (
        <ContainerHeader>
          <HeaderEsq>
            <Logo to="/">ValduHort</Logo>
            <LogoMenor to="/">VH</LogoMenor>
            <ComponenteBusca>
              <Busca mostrarResultadoBusca={mostrarResultadoBusca}>
                <ComponenteBarraBusca>
                  <BarraBusca
                    mostrarBusca={mostrarBusca}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') {
                        setMostrarResultadoBusca(false)
                      }
                    }}
                    onClick={() => {
                      setMostrarResultadoBusca(true)
                    }}
                    onBlur={() => {
                      setTimeout(() => {
                        setMostrarResultadoBusca(false)
                      }, 200)
                    }}
                    onChange={(e) => {
                      setTextoBusca(e.target.value)
                    }}
                    value={textoBusca}
                  />
                  {mostrarResultadoBusca && (
                    <ResultadosBusca>
                      <ListaResultados>
                        <ItemBusca onClick={() => setTextoBusca('Manjericão')}>
                          <IconeItem>
                            <AiOutlineHistory />
                          </IconeItem>
                          <TextoItem>Manjericão</TextoItem>
                        </ItemBusca>
                        <ItemBusca onClick={() => setTextoBusca('Couve')}>
                          <IconeItem>
                            <AiOutlineHistory />
                          </IconeItem>
                          <TextoItem>Couve</TextoItem>
                        </ItemBusca>
                      </ListaResultados>
                    </ResultadosBusca>
                  )}
                </ComponenteBarraBusca>
                <BotaoBusca>
                  <AiOutlineSearch />
                </BotaoBusca>
              </Busca>
            </ComponenteBusca>
            <Usuario enabled={nome === null} to="/login">
              <FotoUsuario>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 0C6.8685 0 0 6.8685 0 15C0 23.1315 6.8685 30 15 30C23.1315 30 30 23.1315 30 15C30 6.8685 23.1315 0 15 0ZM15 7.5C17.5905 7.5 19.5 9.408 19.5 12C19.5 14.592 17.5905 16.5 15 16.5C12.411 16.5 10.5 14.592 10.5 12C10.5 9.408 12.411 7.5 15 7.5ZM7.341 22.158C8.6865 20.178 10.9305 18.858 13.5 18.858H16.5C19.071 18.858 21.3135 20.178 22.659 22.158C20.742 24.21 18.0225 25.5 15 25.5C11.9775 25.5 9.258 24.21 7.341 22.158Z"
                    fill="white"
                  />
                </svg>
              </FotoUsuario>
              <TextoAutenticacaoUsuario>
                {nome
                  ? `Bem vindo ${nome.split(' ')[0]}!`
                  : 'Faça Login ou Cadastre-se'}
              </TextoAutenticacaoUsuario>
            </Usuario>
          </HeaderEsq>
          <HeaderDir>
            <IconeBusca
              onClick={() => {
                setMostrarBusca(true)
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 16 16"
                fill="white"
                role="img"
                className="icon icon-18 fill-current"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
                ></path>
              </svg>
            </IconeBusca>
            <IconeUsuarioMobile hidden={!!nome} to="/login">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 0C6.8685 0 0 6.8685 0 15C0 23.1315 6.8685 30 15 30C23.1315 30 30 23.1315 30 15C30 6.8685 23.1315 0 15 0ZM15 7.5C17.5905 7.5 19.5 9.408 19.5 12C19.5 14.592 17.5905 16.5 15 16.5C12.411 16.5 10.5 14.592 10.5 12C10.5 9.408 12.411 7.5 15 7.5ZM7.341 22.158C8.6865 20.178 10.9305 18.858 13.5 18.858H16.5C19.071 18.858 21.3135 20.178 22.659 22.158C20.742 24.21 18.0225 25.5 15 25.5C11.9775 25.5 9.258 24.21 7.341 22.158Z"
                  fill="white"
                />
              </svg>
            </IconeUsuarioMobile>
            <IconeHeader hidden={mostrarBusca} to="/carrinho">
              <svg
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.7606 1.92L20.9606 7.96224H22.7203C22.9749 7.96224 23.2191 8.06338 23.3991 8.24342C23.5792 8.42345 23.6803 8.66763 23.6803 8.92224C23.6803 9.17685 23.5792 9.42103 23.3991 9.60106C23.2191 9.7811 22.9749 9.88224 22.7203 9.88224H22.6022L21.1699 20.7898C21.0355 21.8054 20.209 22.6819 18.9782 22.6819H4.70496C3.4752 22.6819 2.64672 21.8054 2.51328 20.7898L1.07808 9.88224H0.96C0.705392 9.88224 0.461212 9.7811 0.281177 9.60106C0.101143 9.42103 0 9.17685 0 8.92224C0 8.66763 0.101143 8.42345 0.281177 8.24342C0.461212 8.06338 0.705392 7.96224 0.96 7.96224H2.71968L9.91968 1.92C9.91968 1.41078 10.122 0.922425 10.482 0.562355C10.8421 0.202285 11.3305 0 11.8397 0C12.3489 0 12.8373 0.202285 13.1973 0.562355C13.5574 0.922425 13.7597 1.41078 13.7597 1.92H13.7606ZM11.8406 3.84C12.1795 3.84 12.4973 3.75264 12.7738 3.59808L17.9741 7.96224H5.70624L10.9075 3.59808C11.183 3.75168 11.5018 3.84 11.8406 3.84ZM3.0144 9.88224H20.665L19.2672 20.5392C19.2499 20.6669 19.1597 20.7619 18.9792 20.7619H4.70496C4.52448 20.7619 4.43328 20.6659 4.41696 20.5392L3.01536 9.8832L3.0144 9.88224ZM17.28
    11.8022C17.0254 11.8022 16.7812 11.9034 16.6012 12.0834C16.4211 12.2635 16.32 12.5076 16.32 12.7622V18.5222C16.32 18.7768 16.4211 19.021 16.6012 19.2011C16.7812 19.3811 17.0254 19.4822 17.28 19.4822C17.5346 19.4822 17.7788 19.3811 17.9588 19.2011C18.1389 19.021 18.24 18.7768 18.24 18.5222V12.7622C18.24 12.5076 18.1389 12.2635 17.9588 12.0834C17.7788 11.9034 17.5346 11.8022 17.28 11.8022ZM12.6931 12.7622C12.6931 12.5076 12.7943 12.2635 12.9743 12.0834C13.1543 11.9034 13.3985 11.8022 13.6531 11.8022C13.9077 11.8022 14.1519 11.9034 14.3319 12.0834C14.512 12.2635 14.6131 12.5076 14.6131 12.7622V18.5222C14.6131 18.7768 14.512 19.021 14.3319 19.2011C14.1519 19.3811 13.9077 19.4822 13.6531 19.4822C13.3985 19.4822 13.1543 19.3811 12.9743 19.2011C12.7943 19.021 12.6931 18.7768 12.6931 18.5222V12.7622ZM10.0262 11.8022C9.77163 11.8022 9.52745 11.9034 9.34742 12.0834C9.16738 12.2635 9.06624 12.5076 9.06624 12.7622V18.5222C9.06624 18.7768 9.16738 19.021 9.34742 19.2011C9.52745 19.3811 9.77163 19.4822 10.0262 19.4822C10.2808 19.4822 10.525 19.3811 10.7051 19.2011C10.8851 19.021 10.9862 18.7768 10.9862 18.5222V12.7622C10.9862 12.5076 10.8851 12.2635 10.7051 12.0834C10.525 11.9034 10.2808 11.8022 10.0262 11.8022ZM5.43936 12.7622C5.43936 12.5076 5.5405 12.2635 5.72054 12.0834C5.90057 11.9034 6.14475 11.8022 6.39936 11.8022C6.65397 11.8022 6.89815 11.9034 7.07818 12.0834C7.25822 12.2635 7.35936 12.5076 7.35936 12.7622V18.5222C7.35936 18.7768 7.25822 19.021 7.07818 19.2011C6.89815 19.3811 6.65397 19.4822 6.39936 19.4822C6.14475 19.4822 5.90057 19.3811 5.72054 19.2011C5.5405 19.021 5.43936 18.7768 5.43936 18.5222V12.7622Z"
                  fill="white"
                />
              </svg>
              <TotalCarrinho>
                {carrinho?.reduce((anterior, atual) => anterior + atual.total, 0)}
              </TotalCarrinho>
            </IconeHeader>
            <IconeSairHeader
              onClick={() => {
                logout()
              }}
              hidden={!nome}
            >
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.4 15V12H10.7333V9H18.4V6L23 10.5L18.4 15ZM16.8667 13.5V19.5H9.2V24L0 19.5V0H16.8667V7.5H15.3333V1.5H3.06667L9.2 4.5V18H15.3333V13.5H16.8667Z"
                  fill="white"
                />
              </svg>
            </IconeSairHeader>
          </HeaderDir>
        </ContainerHeader>
      ) : (
        <ComponenteBuscaResponsivo mostrarBusca={mostrarBusca}>
          <BotaoVoltar
            onClick={() => {
              setMostrarBusca(false)
            }}
          >
            <AiOutlineArrowLeft />
          </BotaoVoltar>
          <ComponenteBusca mostrarBusca={mostrarBusca}>
            <Busca mostrarResultadoBusca={mostrarResultadoBusca}>
              <ComponenteBarraBusca>
                <BarraBusca
                  mostrarBusca={mostrarBusca}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                      setMostrarResultadoBusca(false)
                    }
                  }}
                  onClick={() => {
                    setMostrarResultadoBusca(true)
                  }}
                  onBlur={() => {
                    setTimeout(() => {
                      setMostrarResultadoBusca(false)
                    }, 200)
                  }}
                  onChange={(e) => {
                    setTextoBusca(e.target.value)
                  }}
                  value={textoBusca}
                />
                {mostrarResultadoBusca && (
                  <ResultadosBusca>
                    <ListaResultados>
                      <ItemBusca onClick={() => setTextoBusca('Manjericão')}>
                        <IconeItem>
                          <AiOutlineHistory />
                        </IconeItem>
                        <TextoItem>Manjericão</TextoItem>
                      </ItemBusca>
                    </ListaResultados>
                  </ResultadosBusca>
                )}
              </ComponenteBarraBusca>
              <BotaoBusca>
                <AiOutlineSearch />
              </BotaoBusca>
            </Busca>
          </ComponenteBusca>
        </ComponenteBuscaResponsivo>
      )}
    </Container>
  )
}

export default Header
