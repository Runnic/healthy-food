import styled, { keyframes } from 'styled-components'

const shakeAnimation = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`

export const Input = styled.input`
  border: ${props => (props.Error ? '2px' : '1px')} solid
    ${props => (props.Error ? '#ff0033' : '#2d3561')};
  border-radius: 6px;
  background-color: #fff;
  width: 100%;
  max-width: ${props => (props.Largura ? props.Largura : 'none')};
  height: 50px;
  padding: 0 14px;
  margin-right: 20px;
  transition: 0.5s;
  font-size: 1.6rem;

  animation: ${props => (props.Error ? shakeAnimation : '')} 0.5s;

  @media (max-width: 770px) {
    height: 40px;
  }

  @media (max-width: 690px) {
    margin: 0;
  }
`
