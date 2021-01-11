import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  background: ${props => props.color};
  min-height: ${props => (props.Height ? `${props.Height}px` : '760px')};
  justify-content: center;

  @media (max-width: 1182px) {
    min-height: ${props => (props.Height ? `${props.Height - 70}px` : '700px')};
  }

  @media (max-width: 1032px) {
    min-height: ${props =>
      props.Height ? `${props.Height - 120}px` : '700px'};
  }

  @media (max-width: 964px) {
    min-height: ${props =>
      props.Height ? `${props.Height - 200}px` : '700px'};
  }

  @media (max-width: 770px) {
    min-height: ${props =>
      props.Height ? `${props.Height - 300}px` : '700px'};
  }

  @media (max-width: 690px) {
    min-height: ${props =>
      props.Height ? `${props.Height - 400}px` : '700px'};
  }

  @media (max-width: 490px) {
    min-height: ${props =>
      props.Height ? `${props.Height - 500}px` : '700px'};
  }
`

export const SectionLimit = styled.div`
  width: 100%;
  flex: 1;
  max-width: 1920px;
  background: transparent;
  display: flex;
  flex-direction: column;

  background: ${props => `url(${props.img})`};
  background-repeat: no-repeat;
  background-position: ${props => props.position + ' top'};

  @media (max-width: 1182px) {
    background-size: 760px auto;
  }

  @media (max-width: 1032px) {
    background-size: 700px auto;
  }

  @media (max-width: 964px) {
    background-size: 600px auto;
  }

  @media (max-width: 770px) {
    background-size: 500px auto;
  }

  @media (max-width: 690px) {
    background-size: 400px auto;
    background-position: ${props => props.position + ' center'};
  }

  @media (max-width: 490px) {
    background-size: 300px auto;
  }
`
