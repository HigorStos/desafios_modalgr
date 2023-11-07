import styled from "styled-components";
import { AiFillUpCircle } from "react-icons/ai";

import { Title } from "../../styles";

export const MonthTitle = styled(Title)`
  margin-top: 20px;
  font-size: 24px;
`

export const SubmitForm = styled.form`
  margin-top: 20px;
`

export const SubmitButton = styled.label`
  background-color: #0084B7;
  color: #fff;
  padding: 12px 36px;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  border-radius: 32px;
`

export const SubmitIcon = styled(AiFillUpCircle)`
  margin-right: 8px;
`

export const SubmitInput = styled.input`
  display: none;
`

export const ResultArea = styled.textarea`
  resize: none;
  font-size: 18px;
  width: 800px;
  height: 400px;
  padding: 20px;
  color: #000;
  background-color: #fff;
  border-radius: 8px;
  cursor: text;
`
