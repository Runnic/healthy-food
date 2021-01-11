import React, { useState } from 'react'
import Axios from 'axios'
import { useForm } from 'react-hook-form'

import Section from '../../Components/Section'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import CustomInput from '../../Components/CustomInput'
import CustomButton from '../../Components/CustomButton'
import InputMask from '../../Components/InputMask'

import Illustration from '../../Assets/Images/Illustration.svg'

import {
  Screen,
  Form,
  FormRow,
  FormTitle,
  ErrorMsg,
  ErrorContainer
} from './styles'

export default function Register() {
  const { register, handleSubmit, errors } = useForm()
  const [addressData, setAddressData] = useState({
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: ''
  })

  async function getAddress(event) {
    const value = event.target.value

    const cep = value.slice(0, 2) + value.slice(3, 6) + value.slice(7)

    if (cep.length === 8) {
      try {
        const response = await Axios.get(
          `https://viacep.com.br/ws/${cep}/json/`
        )

        setAddressData(response.data)
      } catch (err) {
        alert('Erro de conexão')
        console.log(err)
      }
    }
  }

  function handleInputAddress(event) {
    const value = event.target.value
    const name = event.target.name

    setAddressData(currentState => ({
      ...currentState,
      [name]: value
    }))
  }

  function submit(formData) {
    const data = {
      ...formData,
      ...addressData
    }

    console.log(data)

    for (const prop in data) {
      localStorage.setItem('@Heathy_Food_' + prop, data[prop])
    }
  }

  return (
    <Screen>
      <Section BackgroundImg={Illustration} BackgroundPosition="right">
        <Header />
        <Form onSubmit={handleSubmit(submit)}>
          <FormTitle>Registre-se</FormTitle>
          <FormRow>
            <CustomInput
              name="nome"
              placeholder="Nome Completo"
              Error={errors.nome}
              ref={register({ required: true })}
            />
          </FormRow>
          <FormRow>
            <InputMask
              mask="99/99/9999"
              name="dataNascimento"
              placeholder="Data de Nascimento"
              Largura="40%"
              Error={errors.dataNascimento}
              ref={register({
                required: true,
                minLength: 10
              })}
            />
            <InputMask
              name="cpf"
              mask="999.999.999-99"
              placeholder="CPF"
              Largura="40%"
              Error={errors.cpf}
              ref={register({ required: true, minLength: 14 })}
            />
          </FormRow>
          <FormRow style={{ justifyContent: 'center' }}>
            <InputMask
              name="cep"
              mask="99.999-999"
              placeholder="Cep"
              Largura="60%"
              Error={errors.cep}
              onChange={getAddress}
              ref={register({ required: true, minLength: 10 })}
            />
          </FormRow>
          <FormRow>
            <CustomInput
              placeholder="Logradouro (Rua)"
              name="logradouro"
              value={addressData.logradouro}
              onChange={handleInputAddress}
              Largura="50%"
            />
            <CustomInput
              placeholder="Bairro"
              name="bairro"
              value={addressData.bairro}
              onChange={handleInputAddress}
              Largura="40%"
            />
          </FormRow>
          <FormRow>
            <CustomInput
              placeholder="Complemento (Ex: Número da Casa)"
              name="complemento"
              Error={errors.complemento}
              ref={register({ required: true })}
            />
          </FormRow>
          <FormRow>
            <CustomInput
              placeholder="Cidade"
              name="localidade"
              value={addressData.localidade}
              onChange={handleInputAddress}
              Largura="70%"
            />
            <InputMask
              placeholder="UF"
              mask="aa"
              name="uf"
              value={addressData.uf}
              onChange={handleInputAddress}
              Largura="20%"
            />
          </FormRow>
          <FormRow>
            <CustomButton type="submit">Cadastrar</CustomButton>
          </FormRow>
        </Form>
        <ErrorContainer>
          <ErrorMsg>{errors.nome && 'Por favor insira seu nome'}</ErrorMsg>
          <ErrorMsg>
            {errors.dataNascimento?.type === 'required' &&
              'Por favor insira sua data de nascimento'}
            {errors.dataNascimento?.type === 'minLength' &&
              'Sua data de nascimento não está completa'}
          </ErrorMsg>
          <ErrorMsg>
            {errors.cpf?.type === 'required' && 'Por favor insira seu CPF'}
            {errors.cpf?.type === 'minLength' && 'Seu CPF não está completo'}
          </ErrorMsg>
          <ErrorMsg>
            {errors.cep?.type === 'required' && 'Por favor insira seu CEP'}
            {errors.cep?.type === 'minLength' && 'Seu CEP não está completo'}
          </ErrorMsg>
          <ErrorMsg>
            {errors.complemento && 'Por favor insira o complemento'}
          </ErrorMsg>
        </ErrorContainer>
      </Section>
      <Footer />
    </Screen>
  )
}
