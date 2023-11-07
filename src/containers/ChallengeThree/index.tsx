import { useEffect, useState } from "react"

import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { Container, Title } from "../../styles"
import {
  MainForm,
  InputDiv,
  CollaboratorInfosDiv,
  CollaboratorLabel,
  CollaboratorInput,
  NotesTypeMainDiv,
  NotesTypeDiv,
  NotesTypeLabel,
  NotesResult,
  ButtonDiv,
  CalcButton,
  RequestButton
 } from "./styles"

const ChallengeThree = () => {
  const [name, setName] = useState('')
  const [admissionDate, setAdmissionDate] = useState(new Date())
  const [currentDate, setCurrentDate] = useState(new Date())
  const [salary, setSalary] = useState(0)
  const [loanAmount, setLoanAmount] = useState(0)
  const [notesHigher, setNotesHigher] = useState([{qtd: 0, valor: ''}])
  const [notesLower, setNotesLower] = useState([{qtd: 0, valor: ''}])
  const [notesHalf, setNotesHalf] = useState([{qtd: 0, valor: ''}])
  const [loanApproved, setLoanApproved] = useState(false)

  useEffect(() => {
    setCurrentDate(new Date())
  }, [])

  const notesCalc = () => {
    const minAmount = salary * 2
    const validAmount: boolean = (loanAmount >= minAmount) && (loanAmount % 2 === 0) && (salary > 1)
    let validCollaborator: boolean = false

    const diffInMs = currentDate.getTime() - admissionDate.getTime();
    const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);

    if (diffInYears >= 5){
      validCollaborator = true;
    }

    if (validAmount && validCollaborator && name.length > 0){
      calcHigherNotes(loanAmount)
      calcLowerNotes(loanAmount)
      calcHalfNotes(loanAmount)
      setLoanApproved(true)
    } else if (name.length === 0){
      alert("Por favor, insira o seu nome!")
    } else if (validCollaborator === false){
      alert("Agradecemos seu interesse, mas você não atende os requisitos mínimos do programa.")
    } else if (validAmount === false){
      alert("Insira um valor válido!")
    }
  }

  return (
    <>
      <Header showHomeButton={true} />
      <Container>
        <Title>Desafio 3 - Programa de Empréstimo</Title>
        <MainForm action="submit">
          <CollaboratorInfosDiv>
            <InputDiv>
              <CollaboratorLabel htmlFor="collaboratorName">Nome do Colaborador: </CollaboratorLabel>
              <CollaboratorInput type="text" name="collaboratorName" id="collaboratorName" placeholder="Nome Completo"
                onChange={(e) => setName(e.target.value)} value={name} required
              />
            </InputDiv>
            <InputDiv>
              <CollaboratorLabel htmlFor="admissionDateInput">Data de Admissão: </CollaboratorLabel>
              <CollaboratorInput type="date" name="admissionDateInput" id="admissionDateInput"
                onChange={(e) => setAdmissionDate(new Date(e.target.value))} required
              />
            </InputDiv>
            <InputDiv>
              <CollaboratorLabel htmlFor="currentSalary">Salário Atual: </CollaboratorLabel>
              <CollaboratorInput
                type="number" name="currentSalary" id="currentSalary" placeholder="Salário (R$)"
                onChange={(e) => setSalary(parseFloat(e.target.value))} value={salary} required
              />
            </InputDiv>
            <InputDiv>
              <CollaboratorLabel htmlFor="loanValue">Valor do Empréstimo: </CollaboratorLabel>
              <CollaboratorInput
                type="number" name="loanValue" id="loanValue" placeholder="Valor (R$)"
                onChange={(e) => setLoanAmount(parseFloat(e.target.value))} value={loanAmount} required
              />  
            </InputDiv>
          </CollaboratorInfosDiv>
          <ButtonDiv>
            <CalcButton type="button" onClick={notesCalc}>Simular Empréstimo</CalcButton>
          </ButtonDiv>
          <NotesTypeMainDiv>
            {loanApproved ?
              <>
                <h4>Escolha a opção de saque: </h4>
                <div>
                  <NotesTypeDiv>
                    <NotesTypeLabel htmlFor="higherNotes">Notas de Maior Valor</NotesTypeLabel>
                    <NotesResult>
                      <ul>
                        {notesHigher.filter((note) => note.qtd > 0).map((note) => (
                          <li key={note.qtd + note.valor}>
                              ➢ﾠ{note.qtd} x {note.valor}
                          </li>
                        ))}
                      </ul>
                    </NotesResult>
                    <input type="radio" name="notesType" id="higherNotes" value="higherNotes" defaultChecked />
                  </NotesTypeDiv>
                  <NotesTypeDiv>
                    <NotesTypeLabel htmlFor="lowerNotes">Notas de Menor Valor</NotesTypeLabel>
                    <NotesResult>
                      <ul>
                        {notesLower.filter((note) => note.qtd > 0).map((note) => (
                          <li key={note.qtd + note.valor}>
                              ➢ﾠ{note.qtd} x {note.valor}
                          </li>
                        ))}
                      </ul>
                    </NotesResult>
                    <input type="radio" name="notesType" id="lowerNotes" value="lowerNotes" />
                  </NotesTypeDiv>
                  <NotesTypeDiv>
                    <NotesTypeLabel htmlFor="halfNotes">Notas Meio a Meio</NotesTypeLabel>
                    <NotesResult>
                      <ul>
                        {notesHalf.filter((note) => note.qtd > 0).map((note) => (
                          <li key={note.qtd + note.valor}>
                              ➢ﾠ{note.qtd} x {note.valor}
                          </li>
                        ))}
                      </ul>
                    </NotesResult>
                    <input type="radio" name="notesType" id="halfNotes" value="halfNotes" />
                  </NotesTypeDiv>
                </div>
              </> : ''
            }
          </NotesTypeMainDiv>
          <ButtonDiv>
            {loanApproved ?
              <RequestButton onClick={() => (alert("Empréstimo aprovado! 😁\nPor favor, aguarde o contato da nossa equipe."))} type="button">Solicitar Empréstimo</RequestButton>
              : ''
            }
          </ButtonDiv>
        </MainForm>
      </Container>
      <Footer />
    </>
  )

  function calcHigherNotes(amountToCalc: number){
    const hundredNotes: number = Math.floor(amountToCalc / 100)
    const afterHundredNotes: number = amountToCalc % 100
    
    const fiftyNotes: number = Math.floor(afterHundredNotes / 50)
    const afterFiftyNotes: number = afterHundredNotes % 50
    
    const twentyNotes: number = Math.floor(afterFiftyNotes / 20)
    const afterTwentyNotes: number = afterFiftyNotes % 20
    
    const tenNotes: number = Math.floor(afterTwentyNotes / 10)
    const afterTenNotes: number = afterTwentyNotes % 10
    
    const fiveNotes: number = Math.floor(afterTenNotes / 5)
    const afterFiveNotes: number = afterTenNotes % 5
    
    const twoNotes: number = Math.floor(afterFiveNotes / 2)    

    const updatedNotes = [];

    if (hundredNotes >= 1) {
      updatedNotes.push({
        ...notesHigher,
        qtd: hundredNotes,
        valor: "100 reais"
      })
    }
    if (fiftyNotes >= 1) {
      updatedNotes.push({
        ...notesHigher,
        qtd: fiftyNotes,
        valor: "50 reais"
      })
    }
    if (twentyNotes >= 1) {
      updatedNotes.push({
        ...notesHigher,
        qtd: twentyNotes,
        valor: "20 reais"
      })
    }
    if (tenNotes >= 1) {
      updatedNotes.push({
        ...notesHigher,
        qtd: tenNotes,
        valor: "10 reais"
      })
    }
    if (fiveNotes >= 1) {
      updatedNotes.push({
        ...notesHigher,
        qtd: fiveNotes,
        valor: "5 reais"
      })
    }
    if (twoNotes >= 1) {
      updatedNotes.push({
        ...notesHigher,
        qtd: twoNotes,
        valor: "2 reais"
      })
    }

    setNotesHigher([])
    setNotesHigher(updatedNotes)
  }

  function calcLowerNotes(amountToCalc: number){
    const twentyNotes: number = Math.floor(amountToCalc / 20)
    const afterTwentyNotes: number = amountToCalc % 20
    
    const tenNotes: number = Math.floor(afterTwentyNotes / 10)
    const afterTenNotes: number = afterTwentyNotes % 10
    
    const fiveNotes: number = Math.floor(afterTenNotes / 5)
    const afterFiveNotes: number = afterTenNotes % 5
    
    const twoNotes: number =  Math.floor(afterFiveNotes / 2)    

    const updatedNotes = [];

    if (twentyNotes >= 1) {
      updatedNotes.push({
        ...notesLower,
        qtd: twentyNotes,
        valor: "20 reais"
      })
    }
    if (tenNotes >= 1) {
      updatedNotes.push({
        ...notesLower,
        qtd: tenNotes,
        valor: "10 reais"
      })
    }
    if (fiveNotes >= 1) {
      updatedNotes.push({
        ...notesLower,
        qtd: fiveNotes,
        valor: "5 reais"
      })
    }
    if (twoNotes >= 1) {
      updatedNotes.push({
        ...notesLower,
        qtd: twoNotes,
        valor: "2 reais"
      })
    }

    setNotesLower(updatedNotes)
  }

  function calcHalfNotes(amountToCalc: number){
    const halfAmount: number = amountToCalc / 2

    const hundredNotesHigher: number = Math.floor(halfAmount / 100)
    const afterHundredNotesHigher: number = halfAmount % 100
    
    const fiftyNotesHigher: number = Math.floor(afterHundredNotesHigher / 50)
    const afterFiftyNotesHigher: number = afterHundredNotesHigher % 50
    
    const twentyNotesHigher: number = Math.floor(afterFiftyNotesHigher / 20)
    const afterTwentyNotesHigher: number = afterFiftyNotesHigher % 20
    
    const tenNotesHigher: number = Math.floor(afterTwentyNotesHigher / 10)
    const afterTenNotesHigher: number = afterTwentyNotesHigher % 10
    
    const fiveNotesHigher: number = Math.floor(afterTenNotesHigher / 5)
    const afterFiveNotesHigher: number = afterTenNotesHigher % 5
    
    const twoNotesHigher: number = Math.floor(afterFiveNotesHigher / 2)    

    const updatedNotesHigher = [];

    if (hundredNotesHigher >= 1) {
      updatedNotesHigher.push({
        ...notesHalf,
        qtd: hundredNotesHigher,
        valor: "100 reais"
      })
    }
    if (fiftyNotesHigher >= 1) {
      updatedNotesHigher.push({
        ...notesHalf,
        qtd: fiftyNotesHigher,
        valor: "50 reais"
      })
    }
    if (twentyNotesHigher >= 1) {
      updatedNotesHigher.push({
        ...notesHalf,
        qtd: twentyNotesHigher,
        valor: "20 reais"
      })
    }
    if (tenNotesHigher >= 1) {
      updatedNotesHigher.push({
        ...notesHalf,
        qtd: tenNotesHigher,
        valor: "10 reais"
      })
    }
    if (fiveNotesHigher >= 1) {
      updatedNotesHigher.push({
        ...notesHalf,
        qtd: fiveNotesHigher,
        valor: "5 reais"
      })
    }
    if (twoNotesHigher >= 1) {
      updatedNotesHigher.push({
        ...notesHalf,
        qtd: twoNotesHigher,
        valor: "2 reais"
      })
    }

    ///////////////////////////////////////////////////////////////////////////

    const twentyNotesLower: number = Math.floor(halfAmount / 20)
    const afterTwentyNotesLower: number = halfAmount % 20
    
    const tenNotesLower: number = Math.floor(afterTwentyNotesLower / 10)
    const afterTenNotesLower: number = afterTwentyNotesLower % 10
    
    const fiveNotesLower: number = Math.floor(afterTenNotesLower / 5)
    const afterFiveNotesLower: number = afterTenNotesLower % 5
    
    const twoNotesLower: number =  Math.floor(afterFiveNotesLower / 2)    

    const updatedNotesLower = [];

    if (twentyNotesLower >= 1) {
      updatedNotesLower.push({
        ...notesHalf,
        qtd: twentyNotesLower,
        valor: "20 reais"
      })
    }
    if (tenNotesLower >= 1) {
      updatedNotesLower.push({
        ...notesHalf,
        qtd: tenNotesLower,
        valor: "10 reais"
      })
    }
    if (fiveNotesLower >= 1) {
      updatedNotesLower.push({
        ...notesHalf,
        qtd: fiveNotesLower,
        valor: "5 reais"
      })
    }
    if (twoNotesLower >= 1) {
      updatedNotesLower.push({
        ...notesHalf,
        qtd: twoNotesLower,
        valor: "2 reais"
      })
    }

    setNotesHalf(updatedNotesHigher.concat(updatedNotesLower))
  }
}

export default ChallengeThree
