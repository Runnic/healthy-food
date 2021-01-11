import styled from 'styled-components'

export const Container = styled.div`
  display: none;
  width: 6rem;
  height: 6rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  display: none;

  @media (max-width: 690px) {
    display: flex;
  }
`

export const Bar = styled.div`
  width: 100%;
  height: 1rem;
  background: #fff;
  border-radius: 10px;
  transform-origin: 1px;
  transition: 0.5s;

  &:nth-child(1) {
    transform: ${props => (props.isOpen ? 'rotate(45deg)' : 'rotate(0)')};
  }

  &:nth-child(2) {
    transform: ${props =>
      props.isOpen ? 'translateX(100%)' : 'translateX(0)'};
    opacity: ${props => (props.isOpen ? 0 : 1)};
  }

  &:nth-child(3) {
    transform: ${props => (props.isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`
