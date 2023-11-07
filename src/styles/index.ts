import { styled, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
    list-style: none;
    scroll-behavior: smooth;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  background-color: #091A2C;
`

export const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: #fff;
`
