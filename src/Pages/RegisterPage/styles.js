import styled from 'styled-components'

export const Screen = styled.div`
  background-image: linear-gradient(70deg, #53a547 50%, #fff 50%);
  width: 100vw;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1270px) {
    background: #53a547;
  }
`

export const Form = styled.form`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1770px) {
    max-width: 60%;
  }

  @media (max-width: 1472px) {
    max-width: 70%;
  }

  @media (max-width: 1270px) {
    max-width: 80%;
  }

  @media (max-width: 1110px) {
    max-width: 90%;
  }

  @media (max-width: 1010px) {
    max-width: 100%;
  }

  @media (max-width: 690px) {
    margin-top: 100px;
  }
`

export const FormRow = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;

  & > button {
    width: 100%;
    margin-right: 20px;

    @media (max-width: 690px) {
      margin-right: 0;
    }
  }

  @media (max-width: 690px) {
    width: 90%;
  }
`

export const FormTitle = styled.h1`
  font-size: 32px;
  width: 100%;
  padding-right: 20px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-family: Montserrat;
`

export const ErrorMsg = styled.p`
  color: #e40700;
  font-weight: bold;
`
export const ErrorContainer = styled.div`
  display: flex;
  width: 50%;
  overflow-y: hidden;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1770px) {
    width: 60%;
  }

  @media (max-width: 1472px) {
    width: 70%;
  }

  @media (max-width: 1270px) {
    width: 80%;
  }

  @media (max-width: 1110px) {
    width: 90%;
  }

  @media (max-width: 1010px) {
    width: 100%;
  }
`
