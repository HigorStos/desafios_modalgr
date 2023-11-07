import styled from "styled-components";

export const MainForm = styled.form`
  margin-top: 40px;
`

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`

export const CollaboratorInfosDiv = styled.div`
  display: flex;
`

export const CollaboratorLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 8px;
`

export const CollaboratorInput = styled.input`
  padding: 6px;
  width: 180px;
  border: none;
  border-radius: 4px;
`

export const NotesTypeMainDiv = styled.div`
  margin-top: 32px;

  h4 {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 20px;
    text-align: center;
  }

  div {
    display: flex;
    justify-content: space-around;
  }
`

export const NotesTypeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  input {
    cursor: pointer;
  }
`

export const NotesTypeLabel = styled.label`
  font-weight: bold;
  color: #fff;
  margin-right: 8px;
  margin-bottom: 8px;
  text-align: center;
  text-decoration: underline;
`

export const NotesResult = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  margin-bottom: 16px;
`

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CalcButton = styled.button`
  font-size: 16px;
  font-weight: bold;
  color: #091A2C;
  margin-top: 32px;
  border: none;
  padding: 8px 24px;
  border-radius: 4px;
  cursor: pointer;
`

export const RequestButton = styled.button`
  font-size: 16px;
  font-weight: bold;
  color: #091A2C;
  margin-top: 64px;
  border: none;
  padding: 8px 24px;
  border-radius: 4px;
  cursor: pointer;
`
