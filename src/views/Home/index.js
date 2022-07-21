import React from 'react'
import { Container, ContainerHome, ContainerSwiper, ContainerVerProdutos, DetalhesLoja, Icone, IconesLoja, ImagemSwiper, InformacoesLoja, LinkSwiper, TextoIcone, VerProdutos } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import 'swiper/css/autoplay'
import Header from '../../components/Header'
import ScrollListaItens from '../../components/ScrollListaItens'

export const itens = [
  {
    id: 1,
    foto:
      'https://scfoods.fbitsstatic.net/img/p/alface-crespa-hidroponica-unidade-70659/257161.jpg?w=800&h=800&v=no-change&qs=ignore',
    nome: 'Alface',
    preco: 1.5,
    disponivel: 20,
  },
  {
    id: 2,
    foto:
      'http://images.tcdn.com.br/img/img_prod/547847/semente_pimentao_hibrido_magali_r_sakata_1_000_sementes_459_1_20190726140638.jpg',
    nome: 'Pimentão (4 Unidades)',
    preco: 2.0,
    disponivel: 15,
  },
  {
    id: 3,
    foto:
      'https://s.cornershopapp.com/product-images/2479770.jpg?versionId=AKgJzRkIz6_49ikvQiz3pLJ3htMNDasz',
    nome: 'Maxixe',
    preco: 2.0,
    disponivel: 0,
  },
  {
    id: 4,
    foto:
      'https://superprix.vteximg.com.br/arquivos/ids/175184-292-292/Pepino--1-unidade-aprox.-300g-.png?v=636294182738230000',
    nome: 'Pepino',
    preco: 2.0,
    disponivel: 3,
  },
  {
    id: 5,
    foto:
      'http://www.padariavianney.com.br/web/image/product.template/4028/image_1024?unique=49a641d',
    nome: 'Couve (3 Molhos)',
    preco: 1.5,
    disponivel: 20,
  },
  {
    id: 6,
    foto:
      'https://tudosobrealimentosebebidas.com.br/img/batata-doce-branca-kg-500g.jpg',
    nome: 'Batata Doce (1Kg)',
    preco: 2.0,
    disponivel: 15,
  },
]

function Home() {
  return (
    <>
      <Header />
      <Container>
      <ContainerHome>
        <ContainerSwiper>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            loop={true}
          >
            <SwiperSlide>
              <LinkSwiper href="#">
                <ImagemSwiper src="https://cdn.awsli.com.br/1140x1140/305/305913/banner/e700e9b5b5.jpg" />
              </LinkSwiper>
            </SwiperSlide>
            <SwiperSlide>
              <LinkSwiper href="#">
                <ImagemSwiper src="https://cdn.awsli.com.br/1140x1140/305/305913/banner/1125b8ae4f.jpg" />
              </LinkSwiper>
            </SwiperSlide>
            <SwiperSlide>
              <LinkSwiper href="#">
                <ImagemSwiper src="https://cdn.awsli.com.br/1140x1140/305/305913/banner/2735761ee3.jpg" />
              </LinkSwiper>
            </SwiperSlide>
          </Swiper>
        </ContainerSwiper>
        <InformacoesLoja>
          <IconesLoja>
            <DetalhesLoja>
              <Icone
                viewBox="0 0 135 125"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M67.5 0C30.2243 0 0 27.9649 0 62.454C0 96.9431 30.2243 124.908 67.5 124.908C104.776 124.908 135 96.9431 135 62.454C135 27.9649 104.776 0 67.5 0ZM70.8599 92.7331L70.8901 97.1523C70.8901 97.7656 70.3477 98.2814 69.6847 98.2814H65.4057C64.7428 98.2814 64.2003 97.7796 64.2003 97.1662V92.7888C50.8209 91.8688 44.5229 84.8148 43.8449 77.1475C43.7846 76.4922 44.3421 75.9346 45.0502 75.9346H52.0112C52.5988 75.9346 53.1111 76.325 53.2015 76.8547C53.9699 81.2739 57.6914 84.5778 64.3661 85.4003V65.507L60.6445 64.6288C52.7645 62.8862 45.2612 58.3415 45.2612 48.9177C45.2612 38.755 53.6083 33.2902 64.2757 32.3283V27.7279C64.2757 27.1145 64.8181 26.6127 65.481 26.6127H69.7149C70.3778 26.6127 70.9202 27.1145 70.9202 27.7279V32.2865C81.2411 33.2484 88.9855 38.8247 89.8895 47.5097C89.9648 48.1649 89.4074 48.7364 88.6842 48.7364H81.9191C81.3164 48.7364 80.8041 48.3182 80.7288 47.7745C80.1261 43.7039 76.6004 40.386 70.8599 39.6611V58.3834L74.687 59.2059C84.4503 61.4364 91.0949 65.7579 91.0949 75.4327C91.0949 85.93 82.6574 91.7851 70.8599 92.7331ZM54.6328 48.2764C54.6328 51.8173 56.9983 54.5636 62.091 56.2644C62.7991 56.5293 63.5073 56.7384 64.351 56.9614V39.675C58.7913 40.3302 54.6328 43.216 54.6328 48.2764ZM72.1858 67.1241C71.7639 67.0405 71.3421 66.9429 70.8599 66.8174V85.4561C77.2785 84.9263 81.7081 81.6642 81.7081 76.1995C81.7081 71.9197 79.3125 69.1316 72.1858 67.1241Z"
                  fill="#6785AC"
                />
              </Icone>
              <TextoIcone>Preços que cabem no seu bolso</TextoIcone>
            </DetalhesLoja>
            <DetalhesLoja>
              <Icone
                viewBox="0 0 135 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.875 78.75H28.125V118.125C28.125 119.617 28.7176 121.048 29.7725 122.102C30.8274 123.157 32.2582 123.75 33.75 123.75H101.25C102.742 123.75 104.173 123.157 105.227 122.102C106.282 121.048 106.875 119.617 106.875 118.125V78.75H118.125C119.212 78.7509 120.276 78.4362 121.188 77.8441C122.099 77.252 122.819 76.4079 123.261 75.4144C123.705 74.4213 123.851 73.3207 123.681 72.2461C123.511 71.1716 123.033 70.1696 122.304 69.3619L71.6794 13.1119C69.5475 10.7381 65.4525 10.7381 63.3206 13.1119L12.6956 69.3619C11.9683 70.17 11.4907 71.1716 11.3207 72.2454C11.1507 73.3193 11.2955 74.4194 11.7377 75.4127C12.1799 76.4059 12.9004 77.2498 13.8122 77.842C14.7239 78.4343 15.7878 78.7497 16.875 78.75ZM48.6731 65.4806C51.0144 63.1691 54.1721 61.873 57.4622 61.873C60.7523 61.873 63.9099 63.1691 66.2512 65.4806L67.5112 66.7181L68.7656 65.4806C71.1079 63.1688 74.2665 61.8725 77.5575 61.8725C80.8485 61.8725 84.0071 63.1688 86.3494 65.4806C87.5114 66.5985 88.4358 67.9394 89.0672 69.4231C89.6987 70.9067 90.0241 72.5026 90.0241 74.115C90.0241 75.7274 89.6987 77.3233 89.0672 78.8069C88.4358 80.2906 87.5114 81.6315 86.3494 82.7494L67.5112 101.25L48.6731 82.7494C47.5111 81.6315 46.5867 80.2906 45.9553 78.8069C45.3238 77.3233 44.9984 75.7274 44.9984 74.115C44.9984 72.5026 45.3238 70.9067 45.9553 69.4231C46.5867 67.9394 47.5111 66.5985 48.6731 65.4806Z"
                  fill="#6785AC"
                />
              </Icone>
              <TextoIcone>Pronta entrega às Sextas Feiras</TextoIcone>
            </DetalhesLoja>
            <DetalhesLoja>
              <Icone
                viewBox="0 0 135 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.4698 44.2969L21.443 61.1719L67.651 101.514L113.859 61.1719L94.8322 44.2969H40.4698ZM67.349 0L0 33.75V101.25L67.349 135L135 101.25V33.75L67.349 0ZM122.013 94.9219L67.349 122.344L12.9866 94.9219V40.0781L67.349 12.6562L122.013 40.0781V94.9219Z"
                  fill="#547DA4"
                />
              </Icone>
              <TextoIcone>Produtos de alta qualidade</TextoIcone>
            </DetalhesLoja>
          </IconesLoja>
          <ContainerVerProdutos>
            <VerProdutos to="/produtos">Ver Produtos</VerProdutos>
          </ContainerVerProdutos>
        </InformacoesLoja>
        <ScrollListaItens titulo="Destaques" itens={itens} />
      </ContainerHome>
    </Container>
    </>
  )
}

export default Home
