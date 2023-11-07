import { useState } from "react"
import { HmacMD5, HmacSHA256, HmacSHA384 } from 'crypto-js';

import { Container, Title } from "../../styles"
import { PasswordForm, PasswordTitle, PasswordCrypted } from "./styles"
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ChallengeOne = () => {
  const [passwordOne, setPasswordOne] = useState('')
  const [passwordTwo, setPasswordTwo] = useState('')
  const [passwordThree, setPasswordThree] = useState('')

  const secretKey = "#modalGR#GPTW#top#maiorEmpresaTecnologia#baixadaSantista"

  const passwordOneCrypted = (HmacMD5(passwordOne, secretKey)).toString();
  const passwordTwoCrypted = (HmacSHA256(passwordTwo, secretKey)).toString();
  const passwordThreeCrypted = (HmacSHA384(passwordThree, secretKey)).toString();

  return (
    <>
      <Header showHomeButton={true} />
      <Container>
        <Title>Desafio 1 - Criptografia de Senhas</Title>
        <PasswordForm>
          <input value={passwordOne} type="text" placeholder="Digite a primeira senha" onChange={(e) => setPasswordOne(e.target.value)} />
          <input value={passwordTwo} type="text" placeholder="Digite a segunda senha" onChange={(e) => setPasswordTwo(e.target.value)}  />
          <input value={passwordThree} type="text" placeholder="Digite a terceira senha" onChange={(e) => setPasswordThree(e.target.value)}  />
        </PasswordForm>
        {passwordOne.length > 0 ? 
          <>
            <PasswordTitle>Senha 1 (MD5):</PasswordTitle>
            <PasswordCrypted>{passwordOneCrypted}</PasswordCrypted>
          </>
          : ''
        }
        {passwordTwo.length > 0 ? 
          <>
            <PasswordTitle>Senha 2 (SHA256):</PasswordTitle>
            <PasswordCrypted>{passwordTwoCrypted}</PasswordCrypted>
          </>
          : ''
        }
        {passwordThree.length > 0 ? 
          <>
            <PasswordTitle>Senha 3 (SHA384):</PasswordTitle>
            <PasswordCrypted>{passwordThreeCrypted}</PasswordCrypted>
          </>
          : ''
        }
      </Container>
      <Footer />
    </>
  )
}

export default ChallengeOne
