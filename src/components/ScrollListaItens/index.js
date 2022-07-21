import React from 'react'
import ItemCard from '../ItemCard'
import PropTypes from 'prop-types'
import { Container, ContainerCarousel, Titulo } from './styles'
import Carousel from 'react-multi-carousel'
import { useSelector } from 'react-redux'
import 'react-multi-carousel/lib/styles.css'
import { selectCarrinho } from '../../reducers/usuario'

const responsivo = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5, 
  },
  tablet: {
    breakpoint: { max: 1024, min: 701 },
    items: 3,
    slidesToSlide: 3,
  },
  bigMobile: {
    breakpoint: { max: 700, min: 465 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: window.innerWidth - 230,
    slidesToSlide: 1,
  },
}

function ScrollListaItens({ titulo, itens }) {
  const carrinho = useSelector(selectCarrinho)
  return (
    <Container>
      <Titulo>{titulo}</Titulo>
      <ContainerCarousel>
        <Carousel
          responsive={responsivo}
          autoPlay={false}
          partialVisible
          shouldResetAutoplay={false}
          swipeable
          removeArrowOnDeviceType={'mobile'}
        >
          {itens.map((el) => {      
            const resultado = carrinho?.filter((item) => item.id === el.id)
            return resultado?.length > 0 ? (
              <ItemCard key={el.id} item={el} total={resultado.pop().total} />
            ) : (
              <ItemCard key={el.id} item={el} />
            )
          })}
        </Carousel>
      </ContainerCarousel>
    </Container>
  )
}

ScrollListaItens.propTypes = {
  titulo: PropTypes.string,
  itens: PropTypes.array,
}

export default ScrollListaItens
