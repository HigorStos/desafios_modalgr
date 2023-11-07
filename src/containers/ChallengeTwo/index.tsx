import { ChangeEvent, useEffect, useState } from "react"

import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { Container, Title } from "../../styles"
import { MonthTitle, ResultArea, SubmitButton, SubmitForm, SubmitIcon, SubmitInput } from "./styles"

const ChallengeTwo = () => {
  const [currentMonth, setCurrentMonth] = useState(0)
  const [currentMonthName, setCurrentMonthName] = useState('')
  const [textFile, setTextFile] = useState<string | ArrayBuffer | null>(null)
  const [finalResult, setFinalResult] = useState('')

  useEffect(() => {
    setCurrentMonth((new Date().getMonth()) + 1)

    switch (currentMonth){
      case 1:
        setCurrentMonthName('Janeiro')
        break
      case 2:
        setCurrentMonthName('Fevereiro')
        break
      case 3:
        setCurrentMonthName('Março')
        break
      case 4:
        setCurrentMonthName('Abril')
        break
      case 5:
        setCurrentMonthName('Maio')
        break
      case 6:
        setCurrentMonthName('Junho')
        break
      case 7:
        setCurrentMonthName('Julho')
        break
      case 8:
        setCurrentMonthName('Agosto')
        break
      case 9:
        setCurrentMonthName('Setembro')
        break
      case 10:
        setCurrentMonthName('Outubro')
        break
      case 11:
        setCurrentMonthName('Novembro')
        break
      case 12:
        setCurrentMonthName('Dezembro')
        break
    }
  }, [currentMonth])

  const fileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;

    if (selectedFile?.type === 'text/plain') {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target) {
          setTextFile(e.target.result);
        }
      };

      if (selectedFile){
        reader.readAsText(selectedFile);
      }
    }
    else {
      alert('É permitido enviar somente arquivos de texto!');
    }
  }

  useEffect(() => {
    if (textFile !== null){
      const textString = textFile.toString()
      const textArray = textString.split('|')

      const month = '/' + currentMonth
      
      const arrayFiltered = textArray.filter((p) => p.includes(month))

      const arrayMapped = arrayFiltered.map((p) => (p + "\n"))

      const result = arrayMapped.join('')

      setFinalResult(result)
    } 
  }, [currentMonth, textFile])

  return (
    <>
      <Header showHomeButton={true} />
      <Container>
        <Title >Desafio 2 - Mensagem de Aniversário</Title>
        <MonthTitle>Mês Atual: {currentMonthName} ({currentMonth})</MonthTitle>
        <SubmitForm>
          <SubmitButton htmlFor="submitFile"><SubmitIcon />Enviar Arquivo (.txt)</SubmitButton>
          <SubmitInput type="file" accept=".txt" name="submitFile" id="submitFile"
           onChange={fileChange} required
          />
        </SubmitForm>
        <ResultArea name="resultArea" id="resultArea"
          value={finalResult} disabled>
        </ResultArea>
      </Container>
      <Footer />
    </>
  )
}

export default ChallengeTwo
