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
export const Wrapper = styled.div`
  padding: 12px 15px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const HeaderLeft = styled.div`
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

export const SmallLogo = styled(Link)`
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

export const Search = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 30px;
  max-width: 700px;
  justify-content: center;
  border-radius: 12px 12px 0px 0px;
  background-color: ${(props) =>
    props.showSearchResults ? '#fff' : 'transparent'};

  @media (max-width: 767px) {
    margin: 0;
  }
`

export const SearchComponent = styled.div`
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
    display: ${(props) => (props.showSearch ? 'flex' : 'none')};
    margin: 0 20px 0 0;
  }
`
export const ResponsiveSearchComponent = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: ${(props) => (props.showSearch ? 'flex' : 'none')};
    width: 100%;
    height: 100%;
    align-items: center;
    flex-direction: row;
    position: absolute;
  }
`

export const SearchResults = styled.div`
  position: absolute;
  top: 35px;
  width: 100%;
  height: 100px;
  z-index: 12;
  background-color: white;
`

export const SearchBarComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const ResultList = styled.div`
  color: black;
  background-color: white;
  width: 100%;
`

export const SearchItem = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;

  &:hover {
    background-color: rgba(150, 150, 150, 0.2);
    cursor: pointer;
  }
`

export const ItemIcon = styled.div`
  margin-right: 12px;
`

export const ItemText = styled.div``

export const ReturnButton = styled.div`
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

export const SearchIcon = styled.div`
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

export const SearchBar = styled.input`
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

export const SearchButton = styled.button`
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

export const User = styled.a`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    opacity: 0.85;
  }

  @media (max-width: 767px) {
    display: none;
  }
`

export const UserPhoto = styled.div`
  font-size: 40px;
  margin-right: 10px;
`

export const UserAuthenticateText = styled.p`
  width: 120px;
`

export const HeaderRight = styled.div`
  display: flex;

  @media (max-width: 767px) {
    display: ${(props) => (props.hidden ? 'none' : 'flex')};
  }
`

export const HeaderIcon = styled.div`
  display: flex;
  align-items: center;
  fill: white;
  margin: 0 10px;

  &:hover {
    cursor: pointer;
    opacity: 0.85;
  }
`

export const CartTotal = styled.p`
  margin-left: 10px;
`
