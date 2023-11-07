import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Title } from '../../styles'

export const ChallengeTitle = styled(Title)`
  margin-top: 240px;
`

export const ChallengeButton = styled(Link)`
  color: #091A2C;
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: bold;
  text-align: center;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  margin-top: 24px;
  padding: 16px 32px;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 240px;
`
