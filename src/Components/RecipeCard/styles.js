import styled from 'styled-components'

export const Container = styled.div`
  max-width: 550px;
  width: 100%;
  background: #fff;
  border-radius: 6px;
  display: flex;
  box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.3);
  transition: 0.5s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 30px 40px 0 rgba(0, 0, 0, 0.3);
  }
`

export const CardImg = styled.img`
  width: 50%;
  height: auto;
`

export const CardTitle = styled.p`
  font-size: 2.4rem;
  font-weight: bold;
  color: var(--blueberry);
  width: 80%;
  margin-bottom: 15px;

  @media (max-width: 690px) {
    margin-bottom: 5px;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  width: 55%;
  padding: 30px;
  flex-direction: column;

  justify-content: center;
  align-items: left;

  @media (max-width: 1014px) {
    padding: 15px;
  }

  @media (max-width: 836px) {
    padding: 8px;
  }

  @media (max-width: 690px) {
    padding: 15px 0 0px 10px;
  }
`
