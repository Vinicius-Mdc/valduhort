import React from 'react'
import { useSelector } from 'react-redux'
import { selectCarrinho} from '../../reducers/usuario'
import { AtualizaFrete, BotaoContinuarComprando, BotaoFinalizarCarrinho, Container, ContainerDetalhesCompra, LinhaDivisao, LinhaTotal, PrecoLinhaTotal, TextoLinhaTotal, Titulo } from './styles'

function DetalhesCarrinho({ frete, setFrete, setMostrarModalFinalizarCarrinho }) {
  const carrinho = useSelector(selectCarrinho)

  return (
    <Container>
      <Titulo>Resumo do Pedido</Titulo>
      <ContainerDetalhesCompra>
        <LinhaTotal>
          <TextoLinhaTotal>{`${carrinho.reduce(
            (anterior, atual) => anterior + atual.total,
            0
          )} produtos`}</TextoLinhaTotal>
          <PrecoLinhaTotal>
            {`R$ ${carrinho
              .reduce(
                (anterior, atual) => anterior + atual.total * atual.preco,
                0
              )
              .toFixed(2)
              .replace('.', ',')}`}
          </PrecoLinhaTotal>
        </LinhaTotal>
        {frete > 0 && (
          <LinhaTotal>
            <TextoLinhaTotal>Frete</TextoLinhaTotal>
            <PrecoLinhaTotal>
              {`R$ ${frete.toFixed(2).replace('.', ',')}`}
            </PrecoLinhaTotal>
          </LinhaTotal>
        )}
        <LinhaDivisao />
        <LinhaTotal>
          <TextoLinhaTotal>Total</TextoLinhaTotal>
          <PrecoLinhaTotal>
            {`R$ ${(
              carrinho.reduce(
                (anterior, atual) => anterior + atual.total * atual.preco,
                0
              ) + frete
            )
              .toFixed(2)
              .replace('.', ',')}`}
          </PrecoLinhaTotal>
        </LinhaTotal>
        <AtualizaFrete
          onClick={() => {
            setFrete(frete === 0 ? 3.5 : 0)
          }}
        >
          {frete === 0
            ? 'Gostaria de receber em casa'
            : 'Prefiro retirar no local'}
        </AtualizaFrete>
      </ContainerDetalhesCompra>
      <BotaoContinuarComprando to="/produtos">
        Continuar Comprando
      </BotaoContinuarComprando>
      <BotaoFinalizarCarrinho
        onClick={() => {
          setMostrarModalFinalizarCarrinho(true)
        }}
      >
        Finalizar Compra
      </BotaoFinalizarCarrinho>
    </Container>
  )
}

export default DetalhesCarrinho
