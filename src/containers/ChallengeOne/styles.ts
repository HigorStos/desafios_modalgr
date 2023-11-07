import styled from 'styled-components';

export const PasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 16px;

  input {
    font-size: 16px;
    padding: 8px;
    width: 360px;
  }
`

export const PasswordTitle = styled.h2`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  margin-top: 40px;
  text-align: center;
`

export const PasswordCrypted = styled.h2`
  color: #fff;
  font-size: 24px;
  font-weight: normal;
  margin-top: 12px;
  text-align: center;
  text-decoration: underline;
`

export const CryptedDiv = styled.div`
  color: #fff;
`
