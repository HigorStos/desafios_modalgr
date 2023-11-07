import Typewriter from 'typewriter-effect'

import Header from '../../components/Header'
import ViewChallenge from '../../components/ViewChallenge'
import Footer from '../../components/Footer'
import { Container, Title } from '../../styles'
import NavbarRight from '../../components/NavbarRight'

const TitleTyping = () => {
  return (
    <Typewriter
      options={{
        strings: ['Seja bem-vindo(a) aos desafios da ModalGR!'],
        autoStart: true,
        loop: true
      }}
    />
  )
}

const HomePage = () => {
  return (
    <>
      <Header showHomeButton={false} />
      <NavbarRight />
      <Container id="TitleDiv">
        <Title>
          Olá!
          <TitleTyping />
        </Title>
      </Container>
      <Container id="ChallengeOneDiv">
        <ViewChallenge title='Desafio 1 - Criptografia de Senhas' page='/cryptography' />
      </Container>  
      <Container id="ChallengeTwoDiv">
        <ViewChallenge title='Desafio 2 - Mensagem de Aniversário' page='/birthday' />
      </Container>
      <Container id="ChallengeThreeDiv">
        <ViewChallenge title='Desafio 3 - Programa de Empréstimo' page='/loan' />
      </Container>
      <Footer />
    </>
  )
}

export default HomePage
