import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;

  @media (max-width: 770px) {
    padding: 30px;
  }

  @media (max-width: 690px) {
    background-color: var(--lemon);
    padding: 25px;
    position: fixed;
    z-index: 10;
  }
`

export const AppTitle = styled.h1`
  font-family: Montserrat;
  font-size: 3.2rem;
  color: var(--lemon);

  @media (max-width: 690px) {
    font-size: 2.4rem;
    color: #fff;
  }
`

export const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 690px) {
    width: 100%;
    text-align: center;
    font-size: 2.6rem;
  }
`

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 40%;

  @media (max-width: 1182px) {
    width: 55%;
  }

  @media (max-width: 690px) {
    /* display: ${props => (props.isOpen ? 'flex' : 'none')}; */
    flex-flow: column nowrap;
    background-color: var(--lemon);
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding: 0;
    transition: 0.8s;
    transform: ${props =>
      props.isOpen ? 'translateY(0)' : 'translateY(-100%)'};
  }
`

export const RegisterBtn = styled.button`
  background: #fff;

  border: none;
  color: var(--lemon);
  background-color: #fff;
  border-radius: 6px;
  transition: 0.5s;

  padding: 15px;

  & > strong {
    font-size: 1.6rem;
  }

  &:hover {
    cursor: pointer;
    background: var(--duck);
    color: #fff;
  }

  &:active {
    background-color: var(--blueberry);
  }

  @media (max-width: 990px) {
    padding: 12px;
  }

  @media (max-width: 770px) {
    padding: 10px;
  }

  @media (max-width: 690px) {
    width: 90vw;
    height: 60px;

    & > strong {
      font-size: 2.6rem;
    }
  }
`
