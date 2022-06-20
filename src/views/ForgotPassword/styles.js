import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    height: auto;
    display: block;
    /* margin-top: 10px; */
  }

  @media (max-height: 400px) {
    align-items: flex-start;
    justify-content: center;
  }
`
export const RegisterWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 400px;
  padding: 30px 35px;
  margin: 0 20px;

  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  @media (max-width: 480px) {
    padding: 50px 25px;
    border: none;
  }
`
export const Logo = styled.h1`
  font-family: 'Kristi';
  text-align: center;
  font-size: 2.7rem;
  margin: 0;
  margin-bottom: 40px;
`
export const Input = styled.input`
  height: 30px;
  margin: 10px 0;
  border: 1px solid #828282;
  border-radius: 10px;
  padding: 8px 15px;
`

export const SignInLink = styled(RouterLink)``

export const Button = styled.button`
  margin-top: 20px;
  background: #547da4;
  border: 1px solid #547da4;
  border-radius: 7px;
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
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
  @media (max-width: 480px) {
    margin-top: 40px;
  }
`
export const Text = styled.p`
  font-size: 0.9rem;
  margin-top: 0;
  margin-bottom: 0;
`
export const ErrorText = styled.p`
  color: #d60000;
  font-size: 0.9rem;
`

export const InputErrorText = styled.p`
  color: #d60000;
  font-size: 0.8rem;
  margin: 0;
  margin-left: 5px;
  margin-bottom: 5px;
`
