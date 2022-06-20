import React from 'react'
import ItemCard from '../ItemCard'
import PropTypes from 'prop-types'
import { CarouselContainer, Container, Title } from './styles'
import Carousel from 'react-multi-carousel'
import { useSelector } from 'react-redux'
import 'react-multi-carousel/lib/styles.css'
import { selectCart } from '../../reducers/user'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 701 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  bigMobile: {
    breakpoint: { max: 700, min: 465 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: window.innerWidth - 230,
    slidesToSlide: 1, // optional, default to 1.
  },
}

function ScrollItemsList({ title, items }) {
  const cart = useSelector(selectCart)
  return (
    <Container>
      <Title>{title}</Title>
      <CarouselContainer>
        <Carousel
          responsive={responsive}
          autoPlay={false}
          partialVisible
          shouldResetAutoplay={false}
          swipeable
          removeArrowOnDeviceType={'mobile'}
        >
          {items.map((el) => {
            //busca por item no carrinho e verifica se irá manter o botâo ou o total
            const result = cart.filter((cartItem) => cartItem.id === el.id)
            return result.length > 0 ? (
              <ItemCard key={el.id} item={el} total={result.pop().total} />
            ) : (
              <ItemCard key={el.id} item={el} />
            )
          })}
        </Carousel>
      </CarouselContainer>
    </Container>
  )
}

ScrollItemsList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
}

export default ScrollItemsList
