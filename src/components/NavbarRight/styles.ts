import styled from "styled-components";

export const NavbarStyled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 40px;
  top: calc(50vh - 40px)
`

interface NavbarBallsProps {
  active: boolean;
}

export const NavbarBalls = styled.a<NavbarBallsProps>`
  cursor: pointer;
  background-color: #fff;
  height: 12px;
  width: 12px;
  border-radius: 50px;
  margin-bottom: 8px;
  border: ${props => (props.active ? '2px solid #000' : 'none')};
  transition: ease all 0.05s
`
