import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  display: flex;
  padding: 30px 60px;
  background: #fff;
  justify-content: space-between;

  @media (max-width: 690px) {
    padding: 30px;
  }

  @media (max-width: 608px) {
    padding: 20px;
  }
`

export const CopyrightText = styled.p`
  color: #1d164d;

  @media screen and (max-width: 475px) {
    font-size: 1.4rem;
  }
`

export const ConditionsContainer = styled.div`
  display: flex;
`

export const ConditionsText = styled.a`
  color: #9e9baf;
  text-decoration: none;
  margin: 0 30px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media screen and (max-width: 475px) {
    margin: 0;
  }
`
