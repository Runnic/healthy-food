import styled from 'styled-components'

export const CustomBtn = styled.button`
  height: 50px;
  width: max-content;
  background: var(--lemon);
  border-radius: 6px;
  padding: 0 18px;
  border: none;
  color: #fff;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    background-color: var(--duck);
  }

  &:active {
    background: var(--blueberry);
  }

  @media (max-width: 768px) {
    height: 40px;
  }

  @media (max-width: 690px) {
    margin: 0;
  }
`
